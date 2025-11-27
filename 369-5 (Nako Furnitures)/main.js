/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 32
*/



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




// file: new_chair.js

IDRegistry.genBlockID("white_chair");
Block.createBlock("white_chair", [
	{name: "White Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "White Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "White Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "White Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("white_chair");
Item.createItem("white_chair", "White Chair", {name: "white_chair", meta: 0}, {stack: 64});

var white_chairModel = ModelAPI.newArray();
white_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35);
white_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
white_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
white_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
white_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
white_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
white_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
white_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
white_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
white_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
white_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
white_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
white_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
white_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
white_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35);
white_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
white_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
white_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
white_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
white_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
white_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
white_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
white_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
white_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
white_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35);
Furniture.addReplacementItem({id:"white_chair"},{id:"white_chair"}, Furniture.placeRotatableBlock(BlockID.white_chair, white_chairModel));

IDRegistry.genBlockID("silver_chair");
Block.createBlock("silver_chair", [
	{name: "Light gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light gray Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("silver_chair");
Item.createItem("silver_chair", "Light Gray Chair", {name: "silver_chair", meta: 0}, {stack: 64});

var silver_chairModel = ModelAPI.newArray();
silver_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 8);
silver_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
silver_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
silver_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
silver_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
silver_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
silver_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
silver_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
silver_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
silver_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
silver_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
silver_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
silver_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
silver_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
silver_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 8);
silver_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
silver_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
silver_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
silver_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
silver_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
silver_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
silver_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
silver_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
silver_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
silver_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 8);
Furniture.addReplacementItem({id:"silver_chair"},{id:"silver_chair"}, Furniture.placeRotatableBlock(BlockID.silver_chair, silver_chairModel));

IDRegistry.genBlockID("gray_chair");
Block.createBlock("gray_chair", [
	{name: "gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "gray Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("gray_chair");
Item.createItem("gray_chair", "Gray Chair", {name: "gray_chair", meta: 0}, {stack: 64});

var gray_chairModel = ModelAPI.newArray();
gray_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 7);
gray_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
gray_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
gray_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
gray_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
gray_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
gray_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
gray_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
gray_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
gray_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
gray_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
gray_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
gray_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
gray_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
gray_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 7);
gray_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
gray_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
gray_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
gray_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
gray_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
gray_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
gray_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
gray_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
gray_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
gray_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 7);
Furniture.addReplacementItem({id:"gray_chair"},{id:"gray_chair"}, Furniture.placeRotatableBlock(BlockID.gray_chair, gray_chairModel));

IDRegistry.genBlockID("black_chair");
Block.createBlock("black_chair", [
	{name: "Black Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Black Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Black Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Black Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("black_chair");
Item.createItem("black_chair", "Black Chair", {name: "black_chair", meta: 0}, {stack: 64});

var black_chairModel = ModelAPI.newArray();
black_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 15);
black_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
black_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
black_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
black_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
black_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
black_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
black_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
black_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
black_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
black_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
black_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
black_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
black_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
black_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 15);
black_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
black_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
black_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
black_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
black_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
black_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
black_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
black_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
black_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
black_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 15);
Furniture.addReplacementItem({id:"black_chair"},{id:"black_chair"}, Furniture.placeRotatableBlock(BlockID.black_chair, black_chairModel));

IDRegistry.genBlockID("brown_chair");
Block.createBlock("brown_chair", [
	{name: "Brown Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Brown Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Brown Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Brown Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brown_chair");
Item.createItem("brown_chair", "Brown Chair", {name: "brown_chair", meta: 0}, {stack: 64});

var brown_chairModel = ModelAPI.newArray();
brown_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 12);
brown_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
brown_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
brown_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
brown_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
brown_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
brown_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
brown_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
brown_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
brown_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
brown_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
brown_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
brown_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
brown_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
brown_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 12);
brown_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
brown_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
brown_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
brown_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
brown_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
brown_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
brown_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
brown_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
brown_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
brown_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 12);
Furniture.addReplacementItem({id:"brown_chair"},{id:"brown_chair"}, Furniture.placeRotatableBlock(BlockID.brown_chair, brown_chairModel));

IDRegistry.genBlockID("red_chair");
Block.createBlock("red_chair", [
	{name: "Red Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Red Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Red Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Red Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("red_chair");
Item.createItem("red_chair", "Red Chair", {name: "red_chair", meta: 0}, {stack: 64});

var red_chairModel = ModelAPI.newArray();
red_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 14);
red_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
red_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
red_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
red_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
red_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
red_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
red_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
red_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
red_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
red_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
red_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
red_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
red_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
red_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 14);
red_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
red_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
red_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
red_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
red_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
red_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
red_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
red_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
red_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
red_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 14);
Furniture.addReplacementItem({id:"red_chair"},{id:"red_chair"}, Furniture.placeRotatableBlock(BlockID.red_chair, red_chairModel));

IDRegistry.genBlockID("orange_chair");
Block.createBlock("orange_chair", [
	{name: "Orange Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Orange Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Orange Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Orange Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orange_chair");
Item.createItem("orange_chair", "Orange Chair", {name: "orange_chair", meta: 0}, {stack: 64});

var orange_chairModel = ModelAPI.newArray();
orange_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 1);
orange_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
orange_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
orange_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
orange_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
orange_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
orange_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
orange_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
orange_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
orange_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
orange_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
orange_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
orange_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
orange_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
orange_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 1);
orange_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
orange_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
orange_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
orange_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
orange_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
orange_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
orange_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
orange_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
orange_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
orange_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 1);
Furniture.addReplacementItem({id:"orange_chair"},{id:"orange_chair"}, Furniture.placeRotatableBlock(BlockID.orange_chair, orange_chairModel));

IDRegistry.genBlockID("yellow_chair");
Block.createBlock("yellow_chair", [
	{name: "Yellow Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Yellow Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Yellow Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Yellow Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellow_chair");
Item.createItem("yellow_chair", "Yellow Chair", {name: "yellow_chair", meta: 0}, {stack: 64});

var yellow_chairModel = ModelAPI.newArray();
yellow_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 4);
yellow_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
yellow_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
yellow_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
yellow_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
yellow_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
yellow_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
yellow_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
yellow_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
yellow_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
yellow_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
yellow_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
yellow_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
yellow_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
yellow_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 4);
yellow_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
yellow_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
yellow_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
yellow_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
yellow_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
yellow_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
yellow_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
yellow_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
yellow_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
yellow_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 4);
Furniture.addReplacementItem({id:"yellow_chair"},{id:"yellow_chair"}, Furniture.placeRotatableBlock(BlockID.yellow_chair, yellow_chairModel));

IDRegistry.genBlockID("lime_chair");
Block.createBlock("lime_chair", [
	{name: "Lime Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Lime Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Lime Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Lime Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lime_chair");
Item.createItem("lime_chair", "Lime Chair", {name: "lime_chair", meta: 0}, {stack: 64});

var lime_chairModel = ModelAPI.newArray();
lime_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 5);
lime_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
lime_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
lime_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
lime_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
lime_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
lime_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
lime_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
lime_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
lime_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
lime_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
lime_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
lime_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
lime_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
lime_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 5);
lime_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
lime_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
lime_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
lime_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
lime_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
lime_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
lime_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
lime_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
lime_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
lime_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 5);
Furniture.addReplacementItem({id:"lime_chair"},{id:"lime_chair"}, Furniture.placeRotatableBlock(BlockID.lime_chair, lime_chairModel));

IDRegistry.genBlockID("green_chair");
Block.createBlock("green_chair", [
	{name: "Green Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Green Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Green Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Green Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("green_chair");
Item.createItem("green_chair", "Green Chair", {name: "green_chair", meta: 0}, {stack: 64});

var green_chairModel = ModelAPI.newArray();
green_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 13);
green_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
green_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
green_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
green_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
green_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
green_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
green_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
green_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
green_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
green_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
green_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
green_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
green_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
green_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 13);
green_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
green_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
green_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
green_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
green_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
green_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
green_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
green_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
green_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
green_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 13);
Furniture.addReplacementItem({id:"green_chair"},{id:"green_chair"}, Furniture.placeRotatableBlock(BlockID.green_chair, green_chairModel));

IDRegistry.genBlockID("cyan_chair");
Block.createBlock("cyan_chair", [
	{name: "Cyan Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Cyan Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Cyan Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Cyan Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyan_chair");
Item.createItem("cyan_chair", "Cyan Chair", {name: "cyan_chair", meta: 0}, {stack: 64});

var cyan_chairModel = ModelAPI.newArray();
cyan_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 9);
cyan_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
cyan_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
cyan_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
cyan_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
cyan_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
cyan_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
cyan_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
cyan_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
cyan_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
cyan_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
cyan_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
cyan_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
cyan_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
cyan_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 9);
cyan_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
cyan_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
cyan_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
cyan_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
cyan_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
cyan_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
cyan_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
cyan_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
cyan_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
cyan_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 9);
Furniture.addReplacementItem({id:"cyan_chair"},{id:"cyan_chair"}, Furniture.placeRotatableBlock(BlockID.cyan_chair, cyan_chairModel));

IDRegistry.genBlockID("light_blue_chair");
Block.createBlock("light_blue_chair", [
	{name: "Light Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light Blue Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("light_blue_chair");
Item.createItem("light_blue_chair", "Light Blue Chair", {name: "light_blue_chair", meta: 0}, {stack: 64});

var light_blue_chairModel = ModelAPI.newArray();
light_blue_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 3);
light_blue_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
light_blue_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
light_blue_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
light_blue_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
light_blue_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
light_blue_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
light_blue_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
light_blue_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
light_blue_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
light_blue_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
light_blue_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
light_blue_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
light_blue_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
light_blue_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 3);
light_blue_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
light_blue_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
light_blue_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
light_blue_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
light_blue_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
light_blue_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
light_blue_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
light_blue_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
light_blue_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
light_blue_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 3);
Furniture.addReplacementItem({id:"light_blue_chair"},{id:"light_blue_chair"}, Furniture.placeRotatableBlock(BlockID.light_blue_chair, light_blue_chairModel));

IDRegistry.genBlockID("blue_chair");
Block.createBlock("blue_chair", [
	{name: "Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Blue Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blue_chair");
Item.createItem("blue_chair", "Blue Chair", {name: "blue_chair", meta: 0}, {stack: 64});

var blue_chairModel = ModelAPI.newArray();
blue_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 11);
blue_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
blue_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
blue_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
blue_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
blue_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
blue_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
blue_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
blue_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
blue_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
blue_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
blue_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
blue_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
blue_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
blue_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 11);
blue_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
blue_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
blue_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
blue_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
blue_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
blue_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
blue_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
blue_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
blue_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
blue_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 11);
Furniture.addReplacementItem({id:"blue_chair"},{id:"blue_chair"}, Furniture.placeRotatableBlock(BlockID.blue_chair, blue_chairModel));

IDRegistry.genBlockID("purple_chair");
Block.createBlock("purple_chair", [
	{name: "Purple Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Purple Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Purple Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Purple Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purple_chair");
Item.createItem("purple_chair", "Purple Chair", {name: "purple_chair", meta: 0}, {stack: 64});

var purple_chairModel = ModelAPI.newArray();
purple_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 10);
purple_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
purple_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
purple_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
purple_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
purple_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
purple_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
purple_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
purple_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
purple_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
purple_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
purple_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
purple_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
purple_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
purple_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 10);
purple_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
purple_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
purple_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
purple_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
purple_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
purple_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
purple_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
purple_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
purple_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
purple_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 10);
Furniture.addReplacementItem({id:"purple_chair"},{id:"purple_chair"}, Furniture.placeRotatableBlock(BlockID.purple_chair, purple_chairModel));

IDRegistry.genBlockID("magenta_chair");
Block.createBlock("magenta_chair", [
	{name: "Magenta Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Magenta Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Magenta Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Magenta Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magenta_chair");
Item.createItem("magenta_chair", "Magenta Chair", {name: "magenta_chair", meta: 0}, {stack: 64});

var magenta_chairModel = ModelAPI.newArray();
magenta_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 2);
magenta_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
magenta_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
magenta_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
magenta_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
magenta_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
magenta_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
magenta_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
magenta_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
magenta_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
magenta_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
magenta_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
magenta_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
magenta_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
magenta_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 2);
magenta_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
magenta_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
magenta_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
magenta_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
magenta_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
magenta_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
magenta_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
magenta_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
magenta_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
magenta_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 2);
Furniture.addReplacementItem({id:"magenta_chair"},{id:"magenta_chair"}, Furniture.placeRotatableBlock(BlockID.magenta_chair, magenta_chairModel));

IDRegistry.genBlockID("pink_chair");
Block.createBlock("pink_chair", [
	{name: "Pink Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Pink Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Pink Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Pink Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pink_chair");
Item.createItem("pink_chair", "Pink Chair", {name: "pink_chair", meta: 0}, {stack: 64});

var pink_chairModel = ModelAPI.newArray();
pink_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 6);
pink_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
pink_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
pink_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
pink_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
pink_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
pink_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
pink_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
pink_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
pink_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
pink_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
pink_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
pink_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
pink_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
pink_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 6);
pink_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
pink_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
pink_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
pink_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
pink_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
pink_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
pink_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
pink_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
pink_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
pink_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 6);
Furniture.addReplacementItem({id:"pink_chair"},{id:"pink_chair"}, Furniture.placeRotatableBlock(BlockID.pink_chair, pink_chairModel));

Block.setShape(BlockID.white_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.silver_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.gray_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.black_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.brown_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.red_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.orange_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.yellow_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.lime_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.green_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.cyan_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.light_blue_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.blue_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.purple_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.magenta_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.pink_chair,0,0,0,1,1/2,1);

Translation.addTranslation("White Chair", {ru: "Белая Стуля"});
Translation.addTranslation("Light Gray Chair", {ru: "Светло-серая Стуля"});
Translation.addTranslation("Gray Chair", {ru: "Серая Стуля"});
Translation.addTranslation("Black Chair", {ru: "Черная Стуля"});
Translation.addTranslation("Brown Chair", {ru: "Коричневая Стуля"});
Translation.addTranslation("Red Chair", {ru: "Красная Стуля"});
Translation.addTranslation("Orange Chair", {ru: "Оранжевая Стуля"});
Translation.addTranslation("Yellow Chair", {ru: "Желтая Стуля"});
Translation.addTranslation("Lime Chair", {ru: "Лаймовая Стуля"});
Translation.addTranslation("Green Chair", {ru: "Зеленая Стуля"});
Translation.addTranslation("Cyan Chair", {ru: "Бирюзовая Стуля"});
Translation.addTranslation("Light Blue Chair", {ru: "Голубая Стуля"});
Translation.addTranslation("Blue Chair", {ru: "Синяя Стуля"});
Translation.addTranslation("Purple Chair", {ru: "Фиолетвая Стуля"});
Translation.addTranslation("Magenta Chair", {ru: "Пурпурная Стуля"});
Translation.addTranslation("Pink Chair", {ru: "Розовая Стуля"});

Recipes.addShaped({id: ItemID.white_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,0]);
Recipes.addShaped({id: ItemID.silver_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,8]);
Recipes.addShaped({id: ItemID.gray_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,7]);
Recipes.addShaped({id: ItemID.black_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,15]);
Recipes.addShaped({id: ItemID.brown_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,12]);
Recipes.addShaped({id: ItemID.red_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,14]);
Recipes.addShaped({id: ItemID.orange_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,1]);
Recipes.addShaped({id: ItemID.yellow_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,4]);
Recipes.addShaped({id: ItemID.lime_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,5]);
Recipes.addShaped({id: ItemID.green_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,13]);
Recipes.addShaped({id: ItemID.cyan_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,9]);
Recipes.addShaped({id: ItemID.light_blue_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,3]);
Recipes.addShaped({id: ItemID.blue_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,11]);
Recipes.addShaped({id: ItemID.purple_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,10]);
Recipes.addShaped({id: ItemID.magenta_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,2]);
Recipes.addShaped({id: ItemID.pink_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,6]);




// file: new_big_bed.js

IDRegistry.genBlockID("white_big_bed");
Block.createBlock("white_big_bed", [
	{name: "White Big Bed", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Big Bed", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Big Bed", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Big Bed", texture: [["wool_colored_white", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("white_big_bed");
Item.createItem("white_big_bed", "White Big Bed", {name: "white_big_bed", meta: 0}, {stack: 64});

var white_big_bedModel = ModelAPI.newArray();
white_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
white_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
white_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
white_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
white_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
white_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
white_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
white_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
white_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35);
white_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
white_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
white_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
white_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
white_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35);
white_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35);
white_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
white_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
white_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35);
white_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35);
white_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35);
white_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35);
white_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35);
white_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
white_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
white_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35);
white_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35);
white_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
white_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
white_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35);
white_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
white_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
white_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
white_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
white_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35);
white_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35);
white_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
white_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
white_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35);
white_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35);
white_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35);
white_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35);
white_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
white_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35);
white_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
white_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
white_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"white_big_bed"},{id:"white_big_bed"}, Furniture.placeRotatableBlock(BlockID.white_big_bed, white_big_bedModel));

IDRegistry.genBlockID("silver_big_bed");
Block.createBlock("silver_big_bed", [
	{name: "Light Gray Big Bed", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Big Bed", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Big Bed", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Big Bed", texture: [["wool_colored_silver", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("silver_big_bed");
Item.createItem("silver_big_bed", "Light Gray Big Bed", {name: "silver_big_bed", meta: 0}, {stack: 64});

var silver_big_bedModel = ModelAPI.newArray();
silver_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
silver_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
silver_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
silver_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
silver_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
silver_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
silver_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
silver_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
silver_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 8);
silver_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
silver_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
silver_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
silver_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
silver_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 8);
silver_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 8);
silver_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
silver_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
silver_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 8);
silver_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 8);
silver_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 8);
silver_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 8);
silver_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 8);
silver_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
silver_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
silver_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 8);
silver_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 8);
silver_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
silver_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
silver_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 8);
silver_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
silver_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
silver_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
silver_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
silver_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 8);
silver_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 8);
silver_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
silver_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
silver_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 8);
silver_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 8);
silver_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 8);
silver_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 8);
silver_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
silver_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 8);
silver_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
silver_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
silver_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"silver_big_bed"},{id:"silver_big_bed"}, Furniture.placeRotatableBlock(BlockID.silver_big_bed, silver_big_bedModel));

IDRegistry.genBlockID("gray_big_bed");
Block.createBlock("gray_big_bed", [
	{name: "Gray Big Bed", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Big Bed", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Big Bed", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Big Bed", texture: [["wool_colored_gray", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("gray_big_bed");
Item.createItem("gray_big_bed", "Gray Big Bed", {name: "gray_big_bed", meta: 0}, {stack: 64});

var gray_big_bedModel = ModelAPI.newArray();
gray_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
gray_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
gray_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
gray_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
gray_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
gray_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
gray_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
gray_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
gray_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 7);
gray_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
gray_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
gray_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
gray_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
gray_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 7);
gray_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 7);
gray_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
gray_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
gray_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 7);
gray_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 7);
gray_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 7);
gray_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 7);
gray_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 7);
gray_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
gray_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
gray_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 7);
gray_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 7);
gray_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
gray_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
gray_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 7);
gray_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
gray_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
gray_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
gray_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
gray_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 7);
gray_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 7);
gray_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
gray_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
gray_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 7);
gray_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 7);
gray_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 7);
gray_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 7);
gray_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
gray_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 7);
gray_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
gray_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
gray_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"gray_big_bed"},{id:"gray_big_bed"}, Furniture.placeRotatableBlock(BlockID.gray_big_bed, gray_big_bedModel));

IDRegistry.genBlockID("black_big_bed");
Block.createBlock("black_big_bed", [
	{name: "Black Big Bed", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Big Bed", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Big Bed", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Big Bed", texture: [["wool_colored_black", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("black_big_bed");
Item.createItem("black_big_bed", "Black Big Bed", {name: "black_big_bed", meta: 0}, {stack: 64});

var black_big_bedModel = ModelAPI.newArray();
black_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
black_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
black_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
black_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
black_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
black_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
black_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
black_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
black_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 15);
black_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
black_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
black_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
black_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
black_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 15);
black_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 15);
black_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
black_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
black_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 15);
black_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 15);
black_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 15);
black_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 15);
black_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 15);
black_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
black_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
black_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 15);
black_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 15);
black_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
black_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
black_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 15);
black_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
black_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
black_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
black_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
black_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 15);
black_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 15);
black_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
black_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
black_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 15);
black_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 15);
black_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 15);
black_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 15);
black_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
black_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 15);
black_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
black_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
black_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"black_big_bed"},{id:"black_big_bed"}, Furniture.placeRotatableBlock(BlockID.black_big_bed, black_big_bedModel));

IDRegistry.genBlockID("brown_big_bed");
Block.createBlock("brown_big_bed", [
	{name: "Brown Big Bed", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Big Bed", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Big Bed", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Big Bed", texture: [["wool_colored_brown", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brown_big_bed");
Item.createItem("brown_big_bed", "Brown Big Bed", {name: "brown_big_bed", meta: 0}, {stack: 64});

var brown_big_bedModel = ModelAPI.newArray();
brown_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
brown_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
brown_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
brown_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
brown_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
brown_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
brown_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
brown_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
brown_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 12);
brown_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
brown_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
brown_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
brown_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
brown_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 12);
brown_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 12);
brown_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
brown_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
brown_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 12);
brown_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 12);
brown_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 12);
brown_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 12);
brown_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 12);
brown_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
brown_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
brown_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 12);
brown_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 12);
brown_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
brown_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
brown_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 12);
brown_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
brown_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
brown_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
brown_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
brown_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 12);
brown_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 12);
brown_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
brown_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
brown_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 12);
brown_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 12);
brown_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 12);
brown_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 12);
brown_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
brown_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 12);
brown_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
brown_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
brown_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"brown_big_bed"},{id:"brown_big_bed"}, Furniture.placeRotatableBlock(BlockID.brown_big_bed, brown_big_bedModel));

IDRegistry.genBlockID("red_big_bed");
Block.createBlock("red_big_bed", [
	{name: "Red Big Bed", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Big Bed", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Big Bed", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Big Bed", texture: [["wool_colored_red", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("red_big_bed");
Item.createItem("red_big_bed", "Red Big Bed", {name: "red_big_bed", meta: 0}, {stack: 64});

var red_big_bedModel = ModelAPI.newArray();
red_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
red_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
red_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
red_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
red_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
red_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
red_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
red_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
red_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 14);
red_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
red_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
red_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
red_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
red_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 14);
red_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 14);
red_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
red_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
red_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 14);
red_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 14);
red_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 14);
red_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 14);
red_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 14);
red_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
red_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
red_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 14);
red_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 14);
red_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
red_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
red_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 14);
red_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
red_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
red_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
red_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
red_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 14);
red_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 14);
red_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
red_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
red_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 14);
red_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 14);
red_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 14);
red_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 14);
red_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
red_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 14);
red_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
red_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
red_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"red_big_bed"},{id:"red_big_bed"}, Furniture.placeRotatableBlock(BlockID.red_big_bed, red_big_bedModel));

IDRegistry.genBlockID("orange_big_bed");
Block.createBlock("orange_big_bed", [
	{name: "Orange Big Bed", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Big Bed", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Big Bed", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Big Bed", texture: [["wool_colored_orange", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orange_big_bed");
Item.createItem("orange_big_bed", "Orange Big Bed", {name: "orange_big_bed", meta: 0}, {stack: 64});

var orange_big_bedModel = ModelAPI.newArray();
orange_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
orange_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
orange_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
orange_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
orange_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
orange_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
orange_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
orange_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
orange_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 1);
orange_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
orange_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
orange_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
orange_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
orange_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 1);
orange_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 1);
orange_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
orange_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
orange_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 1);
orange_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 1);
orange_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 1);
orange_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 1);
orange_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 1);
orange_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
orange_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
orange_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 1);
orange_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 1);
orange_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
orange_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
orange_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 1);
orange_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
orange_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
orange_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
orange_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
orange_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 1);
orange_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 1);
orange_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
orange_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
orange_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 1);
orange_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 1);
orange_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 1);
orange_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 1);
orange_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
orange_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 1);
orange_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
orange_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
orange_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"orange_big_bed"},{id:"orange_big_bed"}, Furniture.placeRotatableBlock(BlockID.orange_big_bed, orange_big_bedModel));

IDRegistry.genBlockID("yellow_big_bed");
Block.createBlock("yellow_big_bed", [
	{name: "Yellow Big Bed", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Big Bed", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Big Bed", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Big Bed", texture: [["wool_colored_yellow", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellow_big_bed");
Item.createItem("yellow_big_bed", "Yellow Big Bed", {name: "yellow_big_bed", meta: 0}, {stack: 64});

var yellow_big_bedModel = ModelAPI.newArray();
yellow_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
yellow_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
yellow_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
yellow_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
yellow_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
yellow_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
yellow_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
yellow_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
yellow_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 4);
yellow_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
yellow_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
yellow_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
yellow_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
yellow_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 4);
yellow_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 4);
yellow_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
yellow_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
yellow_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 4);
yellow_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 4);
yellow_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 4);
yellow_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 4);
yellow_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 4);
yellow_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
yellow_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
yellow_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 4);
yellow_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 4);
yellow_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
yellow_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
yellow_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 4);
yellow_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
yellow_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
yellow_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
yellow_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
yellow_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 4);
yellow_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 4);
yellow_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
yellow_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
yellow_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 4);
yellow_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 4);
yellow_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 4);
yellow_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 4);
yellow_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
yellow_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 4);
yellow_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
yellow_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
yellow_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"yellow_big_bed"},{id:"yellow_big_bed"}, Furniture.placeRotatableBlock(BlockID.yellow_big_bed, yellow_big_bedModel));

IDRegistry.genBlockID("lime_big_bed");
Block.createBlock("lime_big_bed", [
	{name: "Lime Big Bed", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Big Bed", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Big Bed", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Big Bed", texture: [["wool_colored_lime", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lime_big_bed");
Item.createItem("lime_big_bed", "Lime Big Bed", {name: "lime_big_bed", meta: 0}, {stack: 64});

var lime_big_bedModel = ModelAPI.newArray();
lime_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
lime_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
lime_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
lime_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
lime_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
lime_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
lime_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
lime_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
lime_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 5);
lime_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
lime_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
lime_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
lime_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
lime_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 5);
lime_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 5);
lime_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
lime_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
lime_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 5);
lime_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 5);
lime_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 5);
lime_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 5);
lime_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 5);
lime_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
lime_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
lime_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 5);
lime_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 5);
lime_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
lime_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
lime_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 5);
lime_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
lime_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
lime_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
lime_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
lime_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 5);
lime_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 5);
lime_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
lime_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
lime_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 5);
lime_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 5);
lime_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 5);
lime_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 5);
lime_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
lime_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 5);
lime_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
lime_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
lime_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"lime_big_bed"},{id:"lime_big_bed"}, Furniture.placeRotatableBlock(BlockID.lime_big_bed, lime_big_bedModel));

IDRegistry.genBlockID("green_big_bed");
Block.createBlock("green_big_bed", [
	{name: "Green Big Bed", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Big Bed", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Big Bed", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Big Bed", texture: [["wool_colored_green", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("green_big_bed");
Item.createItem("green_big_bed", "Green Big Bed", {name: "green_big_bed", meta: 0}, {stack: 64});

var green_big_bedModel = ModelAPI.newArray();
green_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
green_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
green_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
green_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
green_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
green_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
green_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
green_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
green_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 13);
green_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
green_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
green_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
green_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
green_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 13);
green_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 13);
green_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
green_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
green_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 13);
green_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 13);
green_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 13);
green_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 13);
green_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 13);
green_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
green_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
green_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 13);
green_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 13);
green_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
green_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
green_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 13);
green_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
green_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
green_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
green_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
green_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 13);
green_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 13);
green_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
green_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
green_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 13);
green_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 13);
green_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 13);
green_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 13);
green_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
green_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 13);
green_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
green_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
green_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"green_big_bed"},{id:"green_big_bed"}, Furniture.placeRotatableBlock(BlockID.green_big_bed, green_big_bedModel));

IDRegistry.genBlockID("cyan_big_bed");
Block.createBlock("cyan_big_bed", [
	{name: "Cyan Big Bed", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Big Bed", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Big Bed", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Big Bed", texture: [["wool_colored_cyan", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyan_big_bed");
Item.createItem("cyan_big_bed", "Cyan Big Bed", {name: "cyan_big_bed", meta: 0}, {stack: 64});

var cyan_big_bedModel = ModelAPI.newArray();
cyan_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
cyan_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
cyan_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
cyan_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
cyan_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
cyan_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
cyan_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
cyan_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
cyan_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 9);
cyan_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
cyan_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
cyan_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
cyan_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
cyan_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 9);
cyan_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 9);
cyan_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
cyan_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
cyan_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 9);
cyan_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 9);
cyan_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 9);
cyan_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 9);
cyan_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 9);
cyan_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
cyan_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
cyan_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 9);
cyan_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 9);
cyan_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
cyan_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
cyan_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 9);
cyan_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
cyan_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
cyan_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
cyan_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
cyan_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 9);
cyan_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 9);
cyan_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
cyan_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
cyan_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 9);
cyan_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 9);
cyan_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 9);
cyan_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 9);
cyan_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
cyan_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 9);
cyan_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
cyan_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
cyan_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"cyan_big_bed"},{id:"cyan_big_bed"}, Furniture.placeRotatableBlock(BlockID.cyan_big_bed, cyan_big_bedModel));

IDRegistry.genBlockID("light_blue_big_bed");
Block.createBlock("light_blue_big_bed", [
	{name: "Light Blue Big Bed", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Big Bed", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Big Bed", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Big Bed", texture: [["wool_colored_light_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("light_blue_big_bed");
Item.createItem("light_blue_big_bed", "Light Blue Big Bed", {name: "light_blue_big_bed", meta: 0}, {stack: 64});

var light_blue_big_bedModel = ModelAPI.newArray();
light_blue_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
light_blue_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
light_blue_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
light_blue_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
light_blue_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
light_blue_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
light_blue_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
light_blue_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
light_blue_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 3);
light_blue_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
light_blue_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
light_blue_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
light_blue_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
light_blue_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 3);
light_blue_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 3);
light_blue_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
light_blue_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
light_blue_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 3);
light_blue_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 3);
light_blue_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 3);
light_blue_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 3);
light_blue_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 3);
light_blue_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
light_blue_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
light_blue_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 3);
light_blue_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 3);
light_blue_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
light_blue_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
light_blue_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 3);
light_blue_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
light_blue_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
light_blue_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
light_blue_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
light_blue_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 3);
light_blue_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 3);
light_blue_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
light_blue_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
light_blue_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 3);
light_blue_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 3);
light_blue_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 3);
light_blue_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 3);
light_blue_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
light_blue_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 3);
light_blue_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
light_blue_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
light_blue_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"light_blue_big_bed"},{id:"light_blue_big_bed"}, Furniture.placeRotatableBlock(BlockID.light_blue_big_bed, light_blue_big_bedModel));

IDRegistry.genBlockID("blue_big_bed");
Block.createBlock("blue_big_bed", [
	{name: "Blue Big Bed", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Big Bed", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Big Bed", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Big Bed", texture: [["wool_colored_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blue_big_bed");
Item.createItem("blue_big_bed", "Blue Big Bed", {name: "blue_big_bed", meta: 0}, {stack: 64});

var blue_big_bedModel = ModelAPI.newArray();
blue_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
blue_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
blue_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
blue_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
blue_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
blue_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
blue_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
blue_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
blue_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 11);
blue_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
blue_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
blue_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
blue_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
blue_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 11);
blue_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 11);
blue_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
blue_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
blue_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 11);
blue_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 11);
blue_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 11);
blue_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 11);
blue_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 11);
blue_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
blue_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
blue_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 11);
blue_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 11);
blue_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
blue_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
blue_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 11);
blue_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
blue_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
blue_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
blue_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
blue_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 11);
blue_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 11);
blue_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
blue_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
blue_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 11);
blue_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 11);
blue_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 11);
blue_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 11);
blue_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
blue_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 11);
blue_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
blue_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
blue_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"blue_big_bed"},{id:"blue_big_bed"}, Furniture.placeRotatableBlock(BlockID.blue_big_bed, blue_big_bedModel));

IDRegistry.genBlockID("purple_big_bed");
Block.createBlock("purple_big_bed", [
	{name: "Purple Big Bed", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Big Bed", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Big Bed", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Big Bed", texture: [["wool_colored_purple", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purple_big_bed");
Item.createItem("purple_big_bed", "Purple Big Bed", {name: "purple_big_bed", meta: 0}, {stack: 64});

var purple_big_bedModel = ModelAPI.newArray();
purple_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
purple_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
purple_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
purple_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
purple_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
purple_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
purple_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
purple_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
purple_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 10);
purple_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
purple_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
purple_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
purple_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
purple_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 10);
purple_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 10);
purple_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
purple_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
purple_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 10);
purple_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 10);
purple_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 10);
purple_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 10);
purple_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 10);
purple_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
purple_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
purple_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 10);
purple_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 10);
purple_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
purple_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
purple_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 10);
purple_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
purple_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
purple_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
purple_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
purple_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 10);
purple_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 10);
purple_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
purple_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
purple_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 10);
purple_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 10);
purple_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 10);
purple_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 10);
purple_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
purple_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 10);
purple_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
purple_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
purple_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"purple_big_bed"},{id:"purple_big_bed"}, Furniture.placeRotatableBlock(BlockID.purple_big_bed, purple_big_bedModel));

IDRegistry.genBlockID("magenta_big_bed");
Block.createBlock("magenta_big_bed", [
	{name: "Magenta Big Bed", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Big Bed", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Big Bed", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Big Bed", texture: [["wool_colored_magenta", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magenta_big_bed");
Item.createItem("magenta_big_bed", "Magenta Big Bed", {name: "magenta_big_bed", meta: 0}, {stack: 64});

var magenta_big_bedModel = ModelAPI.newArray();
magenta_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
magenta_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
magenta_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
magenta_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
magenta_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
magenta_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
magenta_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
magenta_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
magenta_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 2);
magenta_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
magenta_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
magenta_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
magenta_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
magenta_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 2);
magenta_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 2);
magenta_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
magenta_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
magenta_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 2);
magenta_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 2);
magenta_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 2);
magenta_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 2);
magenta_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 2);
magenta_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
magenta_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
magenta_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 2);
magenta_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 2);
magenta_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
magenta_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
magenta_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 2);
magenta_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
magenta_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
magenta_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
magenta_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
magenta_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 2);
magenta_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 2);
magenta_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
magenta_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
magenta_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 2);
magenta_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 2);
magenta_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 2);
magenta_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 2);
magenta_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
magenta_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 2);
magenta_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
magenta_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
magenta_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"magenta_big_bed"},{id:"magenta_big_bed"}, Furniture.placeRotatableBlock(BlockID.magenta_big_bed, magenta_big_bedModel));

IDRegistry.genBlockID("pink_big_bed");
Block.createBlock("pink_big_bed", [
	{name: "Pink Big Bed", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Big Bed", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Big Bed", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Big Bed", texture: [["wool_colored_pink", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pink_big_bed");
Item.createItem("pink_big_bed", "Pink Big Bed", {name: "pink_big_bed", meta: 0}, {stack: 64});

var pink_big_bedModel = ModelAPI.newArray();
pink_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
pink_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
pink_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
pink_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
pink_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
pink_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
pink_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
pink_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
pink_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 6);
pink_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
pink_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
pink_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
pink_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
pink_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 6);
pink_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 6);
pink_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
pink_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
pink_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 6);
pink_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 6);
pink_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 6);
pink_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 6);
pink_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 6);
pink_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
pink_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
pink_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 6);
pink_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 6);
pink_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
pink_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
pink_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 6);
pink_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
pink_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
pink_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
pink_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
pink_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 6);
pink_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 6);
pink_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
pink_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
pink_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 6);
pink_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 6);
pink_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 6);
pink_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 6);
pink_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
pink_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 6);
pink_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
pink_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
pink_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"pink_big_bed"},{id:"pink_big_bed"}, Furniture.placeRotatableBlock(BlockID.pink_big_bed, pink_big_bedModel));

Block.setShape(BlockID.white_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.silver_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.gray_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.black_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.brown_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.red_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.orange_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.yellow_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.lime_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.green_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.cyan_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.light_blue_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.blue_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.purple_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.magenta_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.pink_big_bed,0,0,0,1,0.36,1);

Translation.addTranslation("White Big Bed", {ru: "Белая Большая Кровать"});
Translation.addTranslation("Light Gray Big Bed", {ru: "Светло-серая Большая Кровать"});
Translation.addTranslation("Gray Big Bed", {ru: "Серая Большая Кровать"});
Translation.addTranslation("Black Big Bed", {ru: "Черная Большая Кровать"});
Translation.addTranslation("Brown Big Bed", {ru: "Коричневая Большая Кровать"});
Translation.addTranslation("Red Big Bed", {ru: "Красная Большая Кровать"});
Translation.addTranslation("Orange Big Bed", {ru: "Оранжевая Большая Кровать"});
Translation.addTranslation("Yellow Big Bed", {ru: "Желтая Большая Кровать"});
Translation.addTranslation("Lime Big Bed", {ru: "Лаймовая Большая Кровать"});
Translation.addTranslation("Green Big Bed", {ru: "Зеленая Большая Кровать"});
Translation.addTranslation("Cyan Big Bed", {ru: "Бирюзовая Большая Кровать"});
Translation.addTranslation("Light Blue Big Bed", {ru: "Голубая Большая Кровать"});
Translation.addTranslation("Blue Big Bed", {ru: "Синяя Большая Кровать"});
Translation.addTranslation("Purple Big Bed", {ru: "Фиолетвая Большая Кровать"});
Translation.addTranslation("Magenta Big Bed", {ru: "Пурпурная Большая Кровать"});
Translation.addTranslation("Pink Big Bed", {ru: "Розовая Большая Кровать"});

Recipes.addShaped({id: ItemID.white_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,0]);
Recipes.addShaped({id: ItemID.silver_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,8]);
Recipes.addShaped({id: ItemID.gray_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,7]);
Recipes.addShaped({id: ItemID.black_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,15]);
Recipes.addShaped({id: ItemID.brown_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,12]);
Recipes.addShaped({id: ItemID.red_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,14]);
Recipes.addShaped({id: ItemID.orange_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,1]);
Recipes.addShaped({id: ItemID.yellow_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,4]);
Recipes.addShaped({id: ItemID.lime_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,5]);
Recipes.addShaped({id: ItemID.green_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,13]);
Recipes.addShaped({id: ItemID.cyan_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,9]);
Recipes.addShaped({id: ItemID.light_blue_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,3]);
Recipes.addShaped({id: ItemID.blue_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,11]);
Recipes.addShaped({id: ItemID.purple_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,10]);
Recipes.addShaped({id: ItemID.magenta_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,2]);
Recipes.addShaped({id: ItemID.pink_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,6]);




// file: new_sofa.js

IDRegistry.genBlockID("white_sofa");
Block.createBlock("white_sofa", [
	{name: "White Sofa", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Sofa", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Sofa", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Sofa", texture: [["wool_colored_white", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("white_sofa");
Item.createItem("white_sofa", "White Sofa", {name: "white_sofa", meta: 0}, {stack: 64});

var white_sofaModel = ModelAPI.newArray();
white_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
white_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
white_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
white_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
white_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35);
white_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35);
white_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35);
white_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35);
white_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35);
white_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35);
Furniture.addReplacementItem({id:"white_sofa"},{id:"white_sofa"}, Furniture.placeRotatableBlock(BlockID.white_sofa, white_sofaModel));

IDRegistry.genBlockID("silver_sofa");
Block.createBlock("silver_sofa", [
	{name: "Light Gray Sofa", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Sofa", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Sofa", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Sofa", texture: [["wool_colored_silver", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("silver_sofa");
Item.createItem("silver_sofa", "Light Gray Sofa", {name: "silver_sofa", meta: 0}, {stack: 64});

var silver_sofaModel = ModelAPI.newArray();
silver_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
silver_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
silver_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
silver_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
silver_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 8);
silver_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 8);
silver_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 8);
silver_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 8);
silver_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 8);
silver_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 8);
Furniture.addReplacementItem({id:"silver_sofa"},{id:"silver_sofa"}, Furniture.placeRotatableBlock(BlockID.silver_sofa, silver_sofaModel));

IDRegistry.genBlockID("gray_sofa");
Block.createBlock("gray_sofa", [
	{name: "Gray Sofa", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Sofa", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Sofa", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Sofa", texture: [["wool_colored_gray", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("gray_sofa");
Item.createItem("gray_sofa", "Gray Sofa", {name: "gray_sofa", meta: 0}, {stack: 64});

var gray_sofaModel = ModelAPI.newArray();
gray_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
gray_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
gray_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
gray_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
gray_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 7);
gray_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 7);
gray_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 7);
gray_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 7);
gray_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 7);
gray_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 7);
Furniture.addReplacementItem({id:"gray_sofa"},{id:"gray_sofa"}, Furniture.placeRotatableBlock(BlockID.gray_sofa, gray_sofaModel));

IDRegistry.genBlockID("black_sofa");
Block.createBlock("black_sofa", [
	{name: "Black Sofa", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Sofa", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Sofa", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Sofa", texture: [["wool_colored_black", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("black_sofa");
Item.createItem("black_sofa", "Black Sofa", {name: "black_sofa", meta: 0}, {stack: 64});

var black_sofaModel = ModelAPI.newArray();
black_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
black_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
black_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
black_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
black_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 15);
black_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 15);
black_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 15);
black_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 15);
black_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 15);
black_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 15);
Furniture.addReplacementItem({id:"black_sofa"},{id:"black_sofa"}, Furniture.placeRotatableBlock(BlockID.black_sofa, black_sofaModel));

IDRegistry.genBlockID("brown_sofa");
Block.createBlock("brown_sofa", [
	{name: "Brown Sofa", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Sofa", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Sofa", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Sofa", texture: [["wool_colored_brown", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brown_sofa");
Item.createItem("brown_sofa", "Brown Sofa", {name: "brown_sofa", meta: 0}, {stack: 64});

var brown_sofaModel = ModelAPI.newArray();
brown_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
brown_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
brown_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
brown_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
brown_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 12);
brown_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 12);
brown_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 12);
brown_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 12);
brown_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 12);
brown_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 12);
Furniture.addReplacementItem({id:"brown_sofa"},{id:"brown_sofa"}, Furniture.placeRotatableBlock(BlockID.brown_sofa, brown_sofaModel));

IDRegistry.genBlockID("red_sofa");
Block.createBlock("red_sofa", [
	{name: "Red Sofa", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Sofa", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Sofa", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Sofa", texture: [["wool_colored_red", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("red_sofa");
Item.createItem("red_sofa", "Red Sofa", {name: "red_sofa", meta: 0}, {stack: 64});

var red_sofaModel = ModelAPI.newArray();
red_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
red_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
red_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
red_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
red_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 14);
red_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 14);
red_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 14);
red_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 14);
red_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 14);
red_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 14);
Furniture.addReplacementItem({id:"red_sofa"},{id:"red_sofa"}, Furniture.placeRotatableBlock(BlockID.red_sofa, red_sofaModel));

IDRegistry.genBlockID("orange_sofa");
Block.createBlock("orange_sofa", [
	{name: "Orange Sofa", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Sofa", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Sofa", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Sofa", texture: [["wool_colored_orange", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orange_sofa");
Item.createItem("orange_sofa", "Orange Sofa", {name: "orange_sofa", meta: 0}, {stack: 64});

var orange_sofaModel = ModelAPI.newArray();
orange_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
orange_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
orange_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
orange_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
orange_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 1);
orange_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 1);
orange_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 1);
orange_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 1);
orange_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 1);
orange_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 1);
Furniture.addReplacementItem({id:"orange_sofa"},{id:"orange_sofa"}, Furniture.placeRotatableBlock(BlockID.orange_sofa, orange_sofaModel));

IDRegistry.genBlockID("yellow_sofa");
Block.createBlock("yellow_sofa", [
	{name: "Yellow Sofa", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Sofa", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Sofa", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Sofa", texture: [["wool_colored_yellow", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellow_sofa");
Item.createItem("yellow_sofa", "Yellow Sofa", {name: "yellow_sofa", meta: 0}, {stack: 64});

var yellow_sofaModel = ModelAPI.newArray();
yellow_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
yellow_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
yellow_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
yellow_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
yellow_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 4);
yellow_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 4);
yellow_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 4);
yellow_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 4);
yellow_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 4);
yellow_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 4);
Furniture.addReplacementItem({id:"yellow_sofa"},{id:"yellow_sofa"}, Furniture.placeRotatableBlock(BlockID.yellow_sofa, yellow_sofaModel));

IDRegistry.genBlockID("lime_sofa");
Block.createBlock("lime_sofa", [
	{name: "Lime Sofa", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Sofa", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Sofa", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Sofa", texture: [["wool_colored_lime", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lime_sofa");
Item.createItem("lime_sofa", "Lime Sofa", {name: "lime_sofa", meta: 0}, {stack: 64});

var lime_sofaModel = ModelAPI.newArray();
lime_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
lime_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
lime_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
lime_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
lime_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 5);
lime_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 5);
lime_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 5);
lime_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 5);
lime_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 5);
lime_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 5);
Furniture.addReplacementItem({id:"lime_sofa"},{id:"lime_sofa"}, Furniture.placeRotatableBlock(BlockID.lime_sofa, lime_sofaModel));

IDRegistry.genBlockID("green_sofa");
Block.createBlock("green_sofa", [
	{name: "Green Sofa", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Sofa", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Sofa", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Sofa", texture: [["wool_colored_green", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("green_sofa");
Item.createItem("green_sofa", "Green Sofa", {name: "green_sofa", meta: 0}, {stack: 64});

var green_sofaModel = ModelAPI.newArray();
green_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
green_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
green_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
green_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
green_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 13);
green_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 13);
green_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 13);
green_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 13);
green_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 13);
green_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 13);
Furniture.addReplacementItem({id:"green_sofa"},{id:"green_sofa"}, Furniture.placeRotatableBlock(BlockID.green_sofa, green_sofaModel));

IDRegistry.genBlockID("cyan_sofa");
Block.createBlock("cyan_sofa", [
	{name: "Cyan Sofa", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Sofa", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Sofa", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Sofa", texture: [["wool_colored_cyan", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyan_sofa");
Item.createItem("cyan_sofa", "Cyan Sofa", {name: "cyan_sofa", meta: 0}, {stack: 64});

var cyan_sofaModel = ModelAPI.newArray();
cyan_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
cyan_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
cyan_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
cyan_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
cyan_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 9);
cyan_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 9);
cyan_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 9);
cyan_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 9);
cyan_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 9);
cyan_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 9);
Furniture.addReplacementItem({id:"cyan_sofa"},{id:"cyan_sofa"}, Furniture.placeRotatableBlock(BlockID.cyan_sofa, cyan_sofaModel));

IDRegistry.genBlockID("light_blue_sofa");
Block.createBlock("light_blue_sofa", [
	{name: "Light Blue Sofa", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Sofa", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Sofa", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Sofa", texture: [["wool_colored_light_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("light_blue_sofa");
Item.createItem("light_blue_sofa", "Light Blue Sofa", {name: "light_blue_sofa", meta: 0}, {stack: 64});

var light_blue_sofaModel = ModelAPI.newArray();
light_blue_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
light_blue_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
light_blue_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
light_blue_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
light_blue_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 3);
light_blue_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 3);
light_blue_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 3);
light_blue_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 3);
light_blue_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 3);
light_blue_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 3);
Furniture.addReplacementItem({id:"light_blue_sofa"},{id:"light_blue_sofa"}, Furniture.placeRotatableBlock(BlockID.light_blue_sofa, light_blue_sofaModel));

IDRegistry.genBlockID("blue_sofa");
Block.createBlock("blue_sofa", [
	{name: "Blue Sofa", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Sofa", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Sofa", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Sofa", texture: [["wool_colored_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blue_sofa");
Item.createItem("blue_sofa", "Blue Sofa", {name: "blue_sofa", meta: 0}, {stack: 64});

var blue_sofaModel = ModelAPI.newArray();
blue_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
blue_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
blue_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
blue_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
blue_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 11);
blue_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 11);
blue_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 11);
blue_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 11);
blue_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 11);
blue_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 11);
Furniture.addReplacementItem({id:"blue_sofa"},{id:"blue_sofa"}, Furniture.placeRotatableBlock(BlockID.blue_sofa, blue_sofaModel));

IDRegistry.genBlockID("purple_sofa");
Block.createBlock("purple_sofa", [
	{name: "Purple Sofa", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Sofa", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Sofa", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Sofa", texture: [["wool_colored_purple", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purple_sofa");
Item.createItem("purple_sofa", "Purple Sofa", {name: "purple_sofa", meta: 0}, {stack: 64});

var purple_sofaModel = ModelAPI.newArray();
purple_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
purple_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
purple_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
purple_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
purple_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 10);
purple_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 10);
purple_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 10);
purple_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 10);
purple_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 10);
purple_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 10);
Furniture.addReplacementItem({id:"purple_sofa"},{id:"purple_sofa"}, Furniture.placeRotatableBlock(BlockID.purple_sofa, purple_sofaModel));

IDRegistry.genBlockID("magenta_sofa");
Block.createBlock("magenta_sofa", [
	{name: "Magenta Sofa", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Sofa", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Sofa", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Sofa", texture: [["wool_colored_magenta", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magenta_sofa");
Item.createItem("magenta_sofa", "Magenta Sofa", {name: "magenta_sofa", meta: 0}, {stack: 64});

var magenta_sofaModel = ModelAPI.newArray();
magenta_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
magenta_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
magenta_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
magenta_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
magenta_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 2);
magenta_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 2);
magenta_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 2);
magenta_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 2);
magenta_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 2);
magenta_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 2);
Furniture.addReplacementItem({id:"magenta_sofa"},{id:"magenta_sofa"}, Furniture.placeRotatableBlock(BlockID.magenta_sofa, magenta_sofaModel));

IDRegistry.genBlockID("pink_sofa");
Block.createBlock("pink_sofa", [
	{name: "Pink Sofa", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Sofa", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Sofa", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Sofa", texture: [["wool_colored_pink", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pink_sofa");
Item.createItem("pink_sofa", "Pink Sofa", {name: "pink_sofa", meta: 0}, {stack: 64});

var pink_sofaModel = ModelAPI.newArray();
pink_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
pink_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
pink_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
pink_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
pink_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 6);
pink_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 6);
pink_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 6);
pink_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 6);
pink_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 6);
pink_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 6);
Furniture.addReplacementItem({id:"pink_sofa"},{id:"pink_sofa"}, Furniture.placeRotatableBlock(BlockID.pink_sofa, pink_sofaModel));

Block.setShape(BlockID.white_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.silver_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.gray_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.black_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.brown_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.red_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.orange_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.yellow_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.lime_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.green_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.cyan_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.light_blue_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.blue_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.purple_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.magenta_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.pink_sofa,0,0,0,1,0.36,1);

Translation.addTranslation("White Sofa", {ru: "Белая Диван"});
Translation.addTranslation("Light Gray Sofa", {ru: "Светло-серая Диван"});
Translation.addTranslation("Gray Sofa", {ru: "Серая Диван"});
Translation.addTranslation("Black Sofa", {ru: "Черная Диван"});
Translation.addTranslation("Brown Sofa", {ru: "Коричневая Диван"});
Translation.addTranslation("Red Sofa", {ru: "Красная Диван"});
Translation.addTranslation("Orange Sofa", {ru: "Оранжевая Диван"});
Translation.addTranslation("Yellow Sofa", {ru: "Желтая Диван"});
Translation.addTranslation("Lime Sofa", {ru: "Лаймовая Диван"});
Translation.addTranslation("Green Sofa", {ru: "Зеленая Диван"});
Translation.addTranslation("Cyan Sofa", {ru: "Бирюзовая Диван"});
Translation.addTranslation("Light Blue Sofa", {ru: "Голубая Диван"});
Translation.addTranslation("Blue Sofa", {ru: "Синяя Диван"});
Translation.addTranslation("Purple Sofa", {ru: "Фиолетвая Диван"});
Translation.addTranslation("Magenta Sofa", {ru: "Пурпурная Диван"});
Translation.addTranslation("Pink Sofa", {ru: "Розовая Диван"});

Recipes.addShaped({id: ItemID.white_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,0]);
Recipes.addShaped({id: ItemID.silver_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,8]);
Recipes.addShaped({id: ItemID.gray_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,7]);
Recipes.addShaped({id: ItemID.black_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,15]);
Recipes.addShaped({id: ItemID.brown_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,12]);
Recipes.addShaped({id: ItemID.red_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,14]);
Recipes.addShaped({id: ItemID.orange_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,1]);
Recipes.addShaped({id: ItemID.yellow_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,4]);
Recipes.addShaped({id: ItemID.lime_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,5]);
Recipes.addShaped({id: ItemID.green_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,13]);
Recipes.addShaped({id: ItemID.cyan_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,9]);
Recipes.addShaped({id: ItemID.light_blue_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,3]);
Recipes.addShaped({id: ItemID.blue_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,11]);
Recipes.addShaped({id: ItemID.purple_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,10]);
Recipes.addShaped({id: ItemID.magenta_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,2]);
Recipes.addShaped({id: ItemID.pink_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,6]);




// file: new_scarecrow.js

IDRegistry.genBlockID("white_scarecrow");
Block.createBlock("white_scarecrow", [
	{name: "white_scarecrow", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "white_scarecrow", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "white_scarecrow", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "white_scarecrow", texture: [["wool_colored_white", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("white_scarecrow");
Item.createItem("white_scarecrow", "White Scarecrow", {name: "white_scarecrow", meta: 0}, {stack: 64});

var white_scarecrowModel = ModelAPI.newArray();
white_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
white_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
white_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
white_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
white_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
white_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
white_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
white_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
white_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
white_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
white_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35);
white_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35);
white_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35);
white_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35);
white_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35);
white_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35);
white_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35);
white_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35);
white_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
white_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35);
white_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35);
white_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35);
white_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
white_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
white_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
white_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
white_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
white_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35);
white_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35);
white_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35);
white_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35);
white_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35);
white_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35);
Furniture.addReplacementItem({id:"white_scarecrow"},{id:"white_scarecrow"}, Furniture.placeRotatableBlock(BlockID.white_scarecrow, white_scarecrowModel));

IDRegistry.genBlockID("silver_scarecrow");
Block.createBlock("silver_scarecrow", [
	{name: "silver_scarecrow", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "silver_scarecrow", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "silver_scarecrow", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "silver_scarecrow", texture: [["wool_colored_silver", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("silver_scarecrow");
Item.createItem("silver_scarecrow", "Light Gray Scarecrow", {name: "silver_scarecrow", meta: 0}, {stack: 64});

var silver_scarecrowModel = ModelAPI.newArray();
silver_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
silver_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
silver_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
silver_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
silver_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
silver_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
silver_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
silver_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
silver_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
silver_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
silver_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 8);
silver_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 8);
silver_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
silver_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 8);
silver_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
silver_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
silver_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
silver_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
silver_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
silver_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 8);
silver_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 8);
silver_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 8);
silver_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 8);
silver_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 8);
Furniture.addReplacementItem({id:"silver_scarecrow"},{id:"silver_scarecrow"}, Furniture.placeRotatableBlock(BlockID.silver_scarecrow, silver_scarecrowModel));

IDRegistry.genBlockID("gray_scarecrow");
Block.createBlock("gray_scarecrow", [
	{name: "gray_scarecrow", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "gray_scarecrow", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "gray_scarecrow", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "gray_scarecrow", texture: [["wool_colored_gray", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("gray_scarecrow");
Item.createItem("gray_scarecrow", "Gray Scarecrow", {name: "gray_scarecrow", meta: 0}, {stack: 64});

var gray_scarecrowModel = ModelAPI.newArray();
gray_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
gray_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
gray_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
gray_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
gray_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
gray_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
gray_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
gray_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
gray_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
gray_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
gray_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 8);
gray_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 8);
gray_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
gray_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 8);
gray_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
gray_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
gray_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
gray_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
gray_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
gray_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 8);
gray_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 8);
gray_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 8);
gray_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 8);
gray_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 8);
Furniture.addReplacementItem({id:"gray_scarecrow"},{id:"gray_scarecrow"}, Furniture.placeRotatableBlock(BlockID.gray_scarecrow, gray_scarecrowModel));

IDRegistry.genBlockID("black_scarecrow");
Block.createBlock("black_scarecrow", [
	{name: "black_scarecrow", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "black_scarecrow", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "black_scarecrow", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "black_scarecrow", texture: [["wool_colored_black", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("black_scarecrow");
Item.createItem("black_scarecrow", "Black Scarecrow", {name: "black_scarecrow", meta: 0}, {stack: 64});

var black_scarecrowModel = ModelAPI.newArray();
black_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
black_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
black_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
black_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
black_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
black_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
black_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
black_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
black_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
black_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
black_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 15);
black_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 15);
black_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 15);
black_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 15);
black_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 15);
black_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 15);
black_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 15);
black_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 15);
black_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
black_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 15);
black_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 15);
black_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 15);
black_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
black_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
black_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
black_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
black_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
black_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 15);
black_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 15);
black_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 15);
black_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 15);
black_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 15);
black_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 15);
Furniture.addReplacementItem({id:"black_scarecrow"},{id:"black_scarecrow"}, Furniture.placeRotatableBlock(BlockID.black_scarecrow, black_scarecrowModel));

IDRegistry.genBlockID("brown_scarecrow");
Block.createBlock("brown_scarecrow", [
	{name: "brown_scarecrow", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "brown_scarecrow", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "brown_scarecrow", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "brown_scarecrow", texture: [["wool_colored_brown", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brown_scarecrow");
Item.createItem("brown_scarecrow", "Brown Scarecrow", {name: "brown_scarecrow", meta: 0}, {stack: 64});

var brown_scarecrowModel = ModelAPI.newArray();
brown_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
brown_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
brown_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
brown_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
brown_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
brown_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
brown_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
brown_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
brown_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
brown_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
brown_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 12);
brown_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 12);
brown_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
brown_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 12);
brown_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
brown_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
brown_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
brown_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
brown_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
brown_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 12);
brown_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 12);
brown_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 12);
brown_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 12);
brown_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 12);
Furniture.addReplacementItem({id:"brown_scarecrow"},{id:"brown_scarecrow"}, Furniture.placeRotatableBlock(BlockID.brown_scarecrow, brown_scarecrowModel));

IDRegistry.genBlockID("red_scarecrow");
Block.createBlock("red_scarecrow", [
	{name: "red_scarecrow", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "red_scarecrow", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "red_scarecrow", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "red_scarecrow", texture: [["wool_colored_red", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("red_scarecrow");
Item.createItem("red_scarecrow", "Red Scarecrow", {name: "red_scarecrow", meta: 0}, {stack: 64});

var red_scarecrowModel = ModelAPI.newArray();
red_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
red_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
red_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
red_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
red_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
red_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
red_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
red_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
red_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
red_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
red_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 14);
red_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 14);
red_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 14);
red_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 14);
red_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 14);
red_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 14);
red_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 14);
red_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 14);
red_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
red_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 14);
red_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 14);
red_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 14);
red_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
red_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
red_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
red_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
red_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
red_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 14);
red_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 14);
red_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 14);
red_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 14);
red_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 14);
red_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 14);
Furniture.addReplacementItem({id:"red_scarecrow"},{id:"red_scarecrow"}, Furniture.placeRotatableBlock(BlockID.red_scarecrow, red_scarecrowModel));

IDRegistry.genBlockID("orange_scarecrow");
Block.createBlock("orange_scarecrow", [
	{name: "orange_scarecrow", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "orange_scarecrow", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "orange_scarecrow", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "orange_scarecrow", texture: [["wool_colored_orange", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orange_scarecrow");
Item.createItem("orange_scarecrow", "Orange Scarecrow", {name: "orange_scarecrow", meta: 0}, {stack: 64});

var orange_scarecrowModel = ModelAPI.newArray();
orange_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
orange_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
orange_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
orange_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
orange_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
orange_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
orange_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
orange_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
orange_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
orange_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
orange_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 1);
orange_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 1);
orange_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
orange_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 1);
orange_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
orange_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
orange_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
orange_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
orange_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
orange_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 1);
orange_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 1);
orange_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 1);
orange_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 1);
orange_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 1);
Furniture.addReplacementItem({id:"orange_scarecrow"},{id:"orange_scarecrow"}, Furniture.placeRotatableBlock(BlockID.orange_scarecrow, orange_scarecrowModel));

IDRegistry.genBlockID("yellow_scarecrow");
Block.createBlock("yellow_scarecrow", [
	{name: "yellow_scarecrow", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "yellow_scarecrow", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "yellow_scarecrow", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "yellow_scarecrow", texture: [["wool_colored_yellow", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellow_scarecrow");
Item.createItem("yellow_scarecrow", "Yellow Scarecrow", {name: "yellow_scarecrow", meta: 0}, {stack: 64});

var yellow_scarecrowModel = ModelAPI.newArray();
yellow_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
yellow_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
yellow_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
yellow_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
yellow_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
yellow_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
yellow_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
yellow_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
yellow_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
yellow_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
yellow_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 4);
yellow_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 4);
yellow_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
yellow_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 4);
yellow_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
yellow_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
yellow_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
yellow_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
yellow_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
yellow_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 4);
yellow_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 4);
yellow_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 4);
yellow_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 4);
yellow_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 4);
Furniture.addReplacementItem({id:"yellow_scarecrow"},{id:"yellow_scarecrow"}, Furniture.placeRotatableBlock(BlockID.yellow_scarecrow, yellow_scarecrowModel));

IDRegistry.genBlockID("lime_scarecrow");
Block.createBlock("lime_scarecrow", [
	{name: "lime_scarecrow", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "lime_scarecrow", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "lime_scarecrow", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "lime_scarecrow", texture: [["wool_colored_lime", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lime_scarecrow");
Item.createItem("lime_scarecrow", "Lime Scarecrow", {name: "lime_scarecrow", meta: 0}, {stack: 64});

var lime_scarecrowModel = ModelAPI.newArray();
lime_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
lime_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
lime_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
lime_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
lime_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
lime_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
lime_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
lime_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
lime_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
lime_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
lime_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 5);
lime_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 5);
lime_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
lime_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 5);
lime_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
lime_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
lime_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
lime_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
lime_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
lime_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 5);
lime_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 5);
lime_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 5);
lime_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 5);
lime_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 5);
Furniture.addReplacementItem({id:"lime_scarecrow"},{id:"lime_scarecrow"}, Furniture.placeRotatableBlock(BlockID.lime_scarecrow, lime_scarecrowModel));

IDRegistry.genBlockID("green_scarecrow");
Block.createBlock("green_scarecrow", [
	{name: "green_scarecrow", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "green_scarecrow", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "green_scarecrow", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "green_scarecrow", texture: [["wool_colored_green", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("green_scarecrow");
Item.createItem("green_scarecrow", "Green Scarecrow", {name: "green_scarecrow", meta: 0}, {stack: 64});

var green_scarecrowModel = ModelAPI.newArray();
green_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
green_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
green_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
green_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
green_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
green_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
green_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
green_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
green_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
green_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
green_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 13);
green_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 13);
green_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 13);
green_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 13);
green_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 13);
green_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 13);
green_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 13);
green_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 13);
green_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
green_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 13);
green_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 13);
green_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 13);
green_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
green_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
green_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
green_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
green_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
green_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 13);
green_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 13);
green_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 13);
green_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 13);
green_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 13);
green_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 13);
Furniture.addReplacementItem({id:"green_scarecrow"},{id:"green_scarecrow"}, Furniture.placeRotatableBlock(BlockID.green_scarecrow, green_scarecrowModel));

IDRegistry.genBlockID("cyan_scarecrow");
Block.createBlock("cyan_scarecrow", [
	{name: "cyan_scarecrow", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "cyan_scarecrow", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "cyan_scarecrow", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "cyan_scarecrow", texture: [["wool_colored_cyan", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyan_scarecrow");
Item.createItem("cyan_scarecrow", "Cyan Scarecrow", {name: "cyan_scarecrow", meta: 0}, {stack: 64});

var cyan_scarecrowModel = ModelAPI.newArray();
cyan_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
cyan_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
cyan_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
cyan_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
cyan_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
cyan_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
cyan_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
cyan_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
cyan_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
cyan_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
cyan_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 9);
cyan_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 9);
cyan_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
cyan_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 9);
cyan_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
cyan_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
cyan_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
cyan_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
cyan_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
cyan_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 9);
cyan_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 9);
cyan_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 9);
cyan_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 9);
cyan_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 9);
Furniture.addReplacementItem({id:"cyan_scarecrow"},{id:"cyan_scarecrow"}, Furniture.placeRotatableBlock(BlockID.cyan_scarecrow, cyan_scarecrowModel));

IDRegistry.genBlockID("light_blue_scarecrow");
Block.createBlock("light_blue_scarecrow", [
	{name: "light_blue_scarecrow", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "light_blue_scarecrow", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "light_blue_scarecrow", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "light_blue_scarecrow", texture: [["wool_colored_light_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("light_blue_scarecrow");
Item.createItem("light_blue_scarecrow", "Light Blue Scarecrow", {name: "light_blue_scarecrow", meta: 0}, {stack: 64});

var light_blue_scarecrowModel = ModelAPI.newArray();
light_blue_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
light_blue_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
light_blue_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
light_blue_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
light_blue_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
light_blue_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
light_blue_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
light_blue_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
light_blue_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
light_blue_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
light_blue_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 3);
light_blue_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 3);
light_blue_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
light_blue_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 3);
light_blue_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
light_blue_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
light_blue_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
light_blue_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
light_blue_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
light_blue_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 3);
light_blue_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 3);
light_blue_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 3);
light_blue_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 3);
light_blue_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 3);
Furniture.addReplacementItem({id:"light_blue_scarecrow"},{id:"light_blue_scarecrow"}, Furniture.placeRotatableBlock(BlockID.light_blue_scarecrow, light_blue_scarecrowModel));

IDRegistry.genBlockID("blue_scarecrow");
Block.createBlock("blue_scarecrow", [
	{name: "blue_scarecrow", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "blue_scarecrow", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "blue_scarecrow", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "blue_scarecrow", texture: [["wool_colored_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blue_scarecrow");
Item.createItem("blue_scarecrow", "Blue Scarecrow", {name: "blue_scarecrow", meta: 0}, {stack: 64});

var blue_scarecrowModel = ModelAPI.newArray();
blue_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
blue_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
blue_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
blue_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
blue_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
blue_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
blue_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
blue_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
blue_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
blue_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
blue_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 11);
blue_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 11);
blue_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
blue_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 11);
blue_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
blue_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
blue_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
blue_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
blue_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
blue_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 11);
blue_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 11);
blue_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 11);
blue_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 11);
blue_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 11);
Furniture.addReplacementItem({id:"blue_scarecrow"},{id:"blue_scarecrow"}, Furniture.placeRotatableBlock(BlockID.blue_scarecrow, blue_scarecrowModel));

IDRegistry.genBlockID("purple_scarecrow");
Block.createBlock("purple_scarecrow", [
	{name: "purple_scarecrow", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "purple_scarecrow", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "purple_scarecrow", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "purple_scarecrow", texture: [["wool_colored_purple", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purple_scarecrow");
Item.createItem("purple_scarecrow", "Purple Scarecrow", {name: "purple_scarecrow", meta: 0}, {stack: 64});

var purple_scarecrowModel = ModelAPI.newArray();
purple_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
purple_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
purple_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
purple_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
purple_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
purple_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
purple_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
purple_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
purple_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
purple_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
purple_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 10);
purple_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 10);
purple_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
purple_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 10);
purple_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
purple_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
purple_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
purple_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
purple_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
purple_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 10);
purple_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 10);
purple_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 10);
purple_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 10);
purple_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 10);
Furniture.addReplacementItem({id:"purple_scarecrow"},{id:"purple_scarecrow"}, Furniture.placeRotatableBlock(BlockID.purple_scarecrow, purple_scarecrowModel));

IDRegistry.genBlockID("magenta_scarecrow");
Block.createBlock("magenta_scarecrow", [
	{name: "magenta_scarecrow", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "magenta_scarecrow", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "magenta_scarecrow", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "magenta_scarecrow", texture: [["wool_colored_magenta", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magenta_scarecrow");
Item.createItem("magenta_scarecrow", "Magenta Scarecrow", {name: "magenta_scarecrow", meta: 0}, {stack: 64});

var magenta_scarecrowModel = ModelAPI.newArray();
magenta_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
magenta_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
magenta_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
magenta_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
magenta_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
magenta_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
magenta_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
magenta_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
magenta_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
magenta_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
magenta_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 2);
magenta_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 2);
magenta_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
magenta_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 2);
magenta_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
magenta_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
magenta_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
magenta_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
magenta_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
magenta_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 2);
magenta_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 2);
magenta_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 2);
magenta_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 2);
magenta_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 2);
Furniture.addReplacementItem({id:"magenta_scarecrow"},{id:"magenta_scarecrow"}, Furniture.placeRotatableBlock(BlockID.magenta_scarecrow, magenta_scarecrowModel));

IDRegistry.genBlockID("pink_scarecrow");
Block.createBlock("pink_scarecrow", [
	{name: "pink_scarecrow", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "pink_scarecrow", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "pink_scarecrow", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "pink_scarecrow", texture: [["wool_colored_pink", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pink_scarecrow");
Item.createItem("pink_scarecrow", "Pink Scarecrow", {name: "pink_scarecrow", meta: 0}, {stack: 64});

var pink_scarecrowModel = ModelAPI.newArray();
pink_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
pink_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
pink_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
pink_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
pink_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
pink_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
pink_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
pink_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
pink_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
pink_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
pink_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 6);
pink_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 6);
pink_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
pink_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 6);
pink_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
pink_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
pink_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
pink_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
pink_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
pink_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 6);
pink_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 6);
pink_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 6);
pink_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 6);
pink_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 6);
Furniture.addReplacementItem({id:"pink_scarecrow"},{id:"pink_scarecrow"}, Furniture.placeRotatableBlock(BlockID.pink_scarecrow, pink_scarecrowModel));

//shapes
Block.setShape(BlockID.white_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.silver_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.gray_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.black_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.brown_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.red_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.orange_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.yellow_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.lime_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.green_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.cyan_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.light_blue_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.blue_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.purple_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.magenta_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.pink_scarecrow,0,0,0,1,3,1);

//recipes
Recipes.addShaped({id: ItemID.white_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,0]);
Recipes.addShaped({id: ItemID.silver_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,8]);
Recipes.addShaped({id: ItemID.gray_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,7]);
Recipes.addShaped({id: ItemID.black_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,15]);
Recipes.addShaped({id: ItemID.brown_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,12]);
Recipes.addShaped({id: ItemID.red_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,14]);
Recipes.addShaped({id: ItemID.orange_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,1]);
Recipes.addShaped({id: ItemID.yellow_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,4]);
Recipes.addShaped({id: ItemID.lime_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,5]);
Recipes.addShaped({id: ItemID.green_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,13]);
Recipes.addShaped({id: ItemID.cyan_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,9]);
Recipes.addShaped({id: ItemID.light_blue_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,3]);
Recipes.addShaped({id: ItemID.blue_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,11]);
Recipes.addShaped({id: ItemID.purple_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,10]);
Recipes.addShaped({id: ItemID.magenta_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,2]);
Recipes.addShaped({id: ItemID.pink_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,6]);

//translation
Translation.addTranslation("White Scarecrow", {ru: "Белая Пугало"});
Translation.addTranslation("Light Gray Scarecrow", {ru: "Светло-серая Пугало"});
Translation.addTranslation("Gray Scarecrow", {ru: "Серая Пугало"});
Translation.addTranslation("Black Scarecrow", {ru: "Черная Пугало"});
Translation.addTranslation("Brown Scarecrow", {ru: "Коричневая Пугало"});
Translation.addTranslation("Red Scarecrow", {ru: "Красная Пугало"});
Translation.addTranslation("Orange Scarecrow", {ru: "Оранжевая Пугало"});
Translation.addTranslation("Yellow Scarecrow", {ru: "Желтая Пугало"});
Translation.addTranslation("Lime Scarecrow", {ru: "Лаймовая Пугало"});
Translation.addTranslation("Green Scarecrow", {ru: "Зеленая Пугало"});
Translation.addTranslation("Cyan Scarecrow", {ru: "Бирюзовая Пугало"});
Translation.addTranslation("Light Blue Scarecrow", {ru: "Голубая Пугало"});
Translation.addTranslation("Blue Scarecrow", {ru: "Синяя Пугало"});
Translation.addTranslation("Purple Scarecrow", {ru: "Фиолетвая Пугало"});
Translation.addTranslation("Magenta Scarecrow", {ru: "Пурпурная Пугало"});
Translation.addTranslation("Pink Scarecrow", {ru: "Розовая Пугало"});




// file: new_lamps.js

IDRegistry.genBlockID("white_lamp");
Block.createBlock("white_lamp", [
	{name: "White Lamp", texture: [["wool_colored_white", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var white_lampModel = ModelAPI.newArray();
white_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
white_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
white_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35);
white_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
white_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35);
white_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35);
white_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35);
white_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35);
white_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.white_lamp, white_lampModel);

IDRegistry.genBlockID("silver_lamp");
Block.createBlock("silver_lamp", [
	{name: "Light Gray Lamp", texture: [["wool_colored_silver", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var silver_lampModel = ModelAPI.newArray();
silver_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
silver_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
silver_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 8);
silver_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
silver_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 8);
silver_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 8);
silver_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 8);
silver_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 8);
silver_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.silver_lamp, silver_lampModel);

IDRegistry.genBlockID("gray_lamp");
Block.createBlock("gray_lamp", [
	{name: "Gray Lamp", texture: [["wool_colored_gray", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var gray_lampModel = ModelAPI.newArray();
gray_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
gray_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
gray_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 7);
gray_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
gray_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 7);
gray_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 7);
gray_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 7);
gray_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 7);
gray_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.gray_lamp, gray_lampModel);

IDRegistry.genBlockID("black_lamp");
Block.createBlock("black_lamp", [
	{name: "Black Lamp", texture: [["wool_colored_black", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var black_lampModel = ModelAPI.newArray();
black_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
black_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
black_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 15);
black_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
black_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 15);
black_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 15);
black_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 15);
black_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 15);
black_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.black_lamp, black_lampModel);

IDRegistry.genBlockID("brown_lamp");
Block.createBlock("brown_lamp", [
	{name: "Brown Lamp", texture: [["wool_colored_brown", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var brown_lampModel = ModelAPI.newArray();
brown_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
brown_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
brown_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 12);
brown_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
brown_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 12);
brown_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 12);
brown_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 12);
brown_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 12);
brown_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.brown_lamp, brown_lampModel);

IDRegistry.genBlockID("red_lamp");
Block.createBlock("red_lamp", [
	{name: "Red Lamp", texture: [["wool_colored_red", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var red_lampModel = ModelAPI.newArray();
red_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
red_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
red_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 14);
red_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
red_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 14);
red_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 14);
red_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 14);
red_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 14);
red_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.red_lamp, red_lampModel);

IDRegistry.genBlockID("orange_lamp");
Block.createBlock("orange_lamp", [
	{name: "Orange Lamp", texture: [["wool_colored_orange", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var orange_lampModel = ModelAPI.newArray();
orange_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
orange_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
orange_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 1);
orange_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
orange_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 1);
orange_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 1);
orange_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 1);
orange_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 1);
orange_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.orange_lamp, orange_lampModel);

IDRegistry.genBlockID("yellow_lamp");
Block.createBlock("yellow_lamp", [
	{name: "Yellow Lamp", texture: [["wool_colored_yellow", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var yellow_lampModel = ModelAPI.newArray();
yellow_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
yellow_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
yellow_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 4);
yellow_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
yellow_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 4);
yellow_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 4);
yellow_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 4);
yellow_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 4);
yellow_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.yellow_lamp, yellow_lampModel);

IDRegistry.genBlockID("lime_lamp");
Block.createBlock("lime_lamp", [
	{name: "Lime Lamp", texture: [["wool_colored_lime", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var lime_lampModel = ModelAPI.newArray();
lime_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
lime_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
lime_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 5);
lime_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
lime_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 5);
lime_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 5);
lime_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 5);
lime_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 5);
lime_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.lime_lamp, lime_lampModel);

IDRegistry.genBlockID("green_lamp");
Block.createBlock("green_lamp", [
	{name: "Green Lamp", texture: [["wool_colored_green", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var green_lampModel = ModelAPI.newArray();
green_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
green_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
green_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 13);
green_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
green_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 13);
green_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 13);
green_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 13);
green_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 13);
green_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.green_lamp, green_lampModel);

IDRegistry.genBlockID("cyan_lamp");
Block.createBlock("cyan_lamp", [
	{name: "Cyan Lamp", texture: [["wool_colored_cyan", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var cyan_lampModel = ModelAPI.newArray();
cyan_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
cyan_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
cyan_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 9);
cyan_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
cyan_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 9);
cyan_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 9);
cyan_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 9);
cyan_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 9);
cyan_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.cyan_lamp, cyan_lampModel);

IDRegistry.genBlockID("light_blue_lamp");
Block.createBlock("light_blue_lamp", [
	{name: "Light Blue Lamp", texture: [["wool_colored_light_blue", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var light_blue_lampModel = ModelAPI.newArray();
light_blue_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
light_blue_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
light_blue_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 3);
light_blue_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
light_blue_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 3);
light_blue_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 3);
light_blue_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 3);
light_blue_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 3);
light_blue_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.light_blue_lamp, light_blue_lampModel);

IDRegistry.genBlockID("blue_lamp");
Block.createBlock("blue_lamp", [
	{name: "Blue Lamp", texture: [["wool_colored_blue", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var blue_lampModel = ModelAPI.newArray();
blue_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
blue_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
blue_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 11);
blue_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
blue_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 11);
blue_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 11);
blue_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 11);
blue_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 11);
blue_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.blue_lamp, blue_lampModel);

IDRegistry.genBlockID("purple_lamp");
Block.createBlock("purple_lamp", [
	{name: "Purple Lamp", texture: [["wool_colored_purple", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var purple_lampModel = ModelAPI.newArray();
purple_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
purple_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
purple_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 10);
purple_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
purple_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 10);
purple_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 10);
purple_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 10);
purple_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 10);
purple_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.purple_lamp, purple_lampModel);

IDRegistry.genBlockID("magenta_lamp");
Block.createBlock("magenta_lamp", [
	{name: "Magenta Lamp", texture: [["wool_colored_magenta", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var magenta_lampModel = ModelAPI.newArray();
magenta_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
magenta_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
magenta_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 2);
magenta_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
magenta_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 2);
magenta_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 2);
magenta_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 2);
magenta_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 2);
magenta_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.magenta_lamp, magenta_lampModel);

IDRegistry.genBlockID("pink_lamp");
Block.createBlock("pink_lamp", [
	{name: "Pink Lamp", texture: [["wool_colored_pink", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var pink_lampModel = ModelAPI.newArray();
pink_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
pink_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
pink_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 6);
pink_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
pink_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 6);
pink_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 6);
pink_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 6);
pink_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 6);
pink_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.pink_lamp, pink_lampModel);

//translation lamps
Translation.addTranslation("White Lamp", {ru: "Белая Лампа"});
Translation.addTranslation("Light Gray Lamp", {ru: "Светло-серая Лампа"});
Translation.addTranslation("Gray Lamp", {ru: "Серая Лампа"});
Translation.addTranslation("Black Lamp", {ru: "Черная Лампа"});
Translation.addTranslation("Brown Lamp", {ru: "Коричневая Лампа"});
Translation.addTranslation("Red Lamp", {ru: "Красная Лампа"});
Translation.addTranslation("Orange Lamp", {ru: "Оранжевый Лампа"});
Translation.addTranslation("Yellow Lamp", {ru: "Желтая Лампа"});
Translation.addTranslation("Lime Lamp", {ru: "Лаймовая Лампа"});
Translation.addTranslation("Green Lamp", {ru: "Зеленая Лампа"});
Translation.addTranslation("Cyan Lamp", {ru: "Бирюзовая Лампа"});
Translation.addTranslation("Light Blue Lamp", {ru: "Голубая Лампа"});
Translation.addTranslation("Blue Lamp", {ru: "Синяя Лампа"});
Translation.addTranslation("Purple Lamp", {ru: "Фиолетвая Лампа"});
Translation.addTranslation("Magenta Lamp", {ru: "Пурпурная Лампа"});
Translation.addTranslation("Pink Lamp", {ru: "Розовая Лампа"});

//recipes lamps
Recipes.addShaped({id: BlockID.white_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,0, 'c', 85,0])
Recipes.addShaped({id: BlockID.silver_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,8, 'c', 85,0])
Recipes.addShaped({id: BlockID.gray_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,7, 'c', 85,0])
Recipes.addShaped({id: BlockID.black_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,15, 'c', 85,0])
Recipes.addShaped({id: BlockID.brown_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,12, 'c', 85,0])
Recipes.addShaped({id: BlockID.red_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,14, 'c', 85,0])
Recipes.addShaped({id: BlockID.orange_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,1, 'c', 85,0])
Recipes.addShaped({id: BlockID.yellow_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,4, 'c', 85,0])
Recipes.addShaped({id: BlockID.lime_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,5, 'c', 85,0])
Recipes.addShaped({id: BlockID.green_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,13, 'c', 85,0])
Recipes.addShaped({id: BlockID.cyan_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,9, 'c', 85,0])
Recipes.addShaped({id: BlockID.light_blue_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,3, 'c', 85,0])
Recipes.addShaped({id: BlockID.blue_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,11, 'c', 85,0])
Recipes.addShaped({id: BlockID.purple_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,10, 'c', 85,0])
Recipes.addShaped({id: BlockID.magenta_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,2, 'c', 85,0])
Recipes.addShaped({id: BlockID.pink_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,6, 'c', 85,0])




// file: new_barrel.js

IDRegistry.genBlockID("oak_barrel");
Block.createBlock("oak_barrel", [
	{name: "Oak Barrel", texture: [["planks_oak", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var oak_barrelModel = ModelAPI.newArray();
oak_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5);
oak_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5);
oak_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5);
oak_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5);
oak_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5);
oak_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5);
oak_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5);
oak_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5);
oak_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5);
oak_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
oak_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
oak_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
oak_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
oak_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
oak_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
oak_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
oak_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
oak_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
oak_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
oak_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
oak_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
oak_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
oak_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
oak_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
oak_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
oak_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
oak_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
oak_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
oak_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
oak_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
oak_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
oak_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
oak_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
oak_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
oak_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
oak_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
oak_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
oak_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
oak_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
oak_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
oak_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
oak_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.oak_barrel, oak_barrelModel);

IDRegistry.genBlockID("spruce_barrel");
Block.createBlock("spruce_barrel", [
	{name: "Spruce Barrel", texture: [["planks_spruce", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var spruce_barrelModel = ModelAPI.newArray();
spruce_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 1);
spruce_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 1);
spruce_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 1);
spruce_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 1);
spruce_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 1);
spruce_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 1);
spruce_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 1);
spruce_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 1);
spruce_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 1);
spruce_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
spruce_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
spruce_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
spruce_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
spruce_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
spruce_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
spruce_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
spruce_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
spruce_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
spruce_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
spruce_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
spruce_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
spruce_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
spruce_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
spruce_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
spruce_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
spruce_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
spruce_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
spruce_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
spruce_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
spruce_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
spruce_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
spruce_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
spruce_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
spruce_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
spruce_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
spruce_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.spruce_barrel, spruce_barrelModel);

IDRegistry.genBlockID("birch_barrel");
Block.createBlock("birch_barrel", [
	{name: "Birch Barrel", texture: [["planks_birch", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var birch_barrelModel = ModelAPI.newArray();
birch_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 2);
birch_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 2);
birch_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 2);
birch_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 2);
birch_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 2);
birch_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 2);
birch_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 2);
birch_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 2);
birch_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 2);
birch_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
birch_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
birch_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
birch_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
birch_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
birch_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
birch_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
birch_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
birch_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
birch_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
birch_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
birch_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
birch_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
birch_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
birch_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
birch_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
birch_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
birch_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
birch_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
birch_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
birch_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
birch_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
birch_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
birch_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
birch_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
birch_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
birch_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
birch_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
birch_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
birch_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
birch_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
birch_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
birch_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.birch_barrel, birch_barrelModel);

IDRegistry.genBlockID("jungle_barrel");
Block.createBlock("jungle_barrel", [
	{name: "Jungle Barrel", texture: [["planks_jungle", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var jungle_barrelModel = ModelAPI.newArray();
jungle_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 3);
jungle_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 3);
jungle_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 3);
jungle_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 3);
jungle_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 3);
jungle_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 3);
jungle_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 3);
jungle_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 3);
jungle_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 3);
jungle_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
jungle_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
jungle_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
jungle_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
jungle_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
jungle_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
jungle_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
jungle_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
jungle_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
jungle_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
jungle_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
jungle_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
jungle_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
jungle_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
jungle_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
jungle_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
jungle_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
jungle_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
jungle_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
jungle_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
jungle_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
jungle_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
jungle_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
jungle_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
jungle_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
jungle_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
jungle_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.jungle_barrel, jungle_barrelModel);

IDRegistry.genBlockID("acacia_barrel");
Block.createBlock("acacia_barrel", [
	{name: "Acacia Barrel", texture: [["planks_acacia", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var acacia_barrelModel = ModelAPI.newArray();
acacia_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 4);
acacia_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 4);
acacia_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 4);
acacia_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 4);
acacia_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 4);
acacia_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 4);
acacia_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 4);
acacia_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 4);
acacia_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 4);
acacia_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
acacia_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
acacia_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
acacia_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
acacia_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
acacia_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
acacia_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
acacia_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
acacia_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
acacia_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
acacia_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
acacia_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
acacia_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
acacia_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
acacia_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
acacia_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
acacia_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
acacia_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
acacia_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
acacia_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
acacia_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
acacia_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
acacia_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
acacia_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
acacia_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
acacia_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
acacia_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.acacia_barrel, acacia_barrelModel);

IDRegistry.genBlockID("dark_oak_barrel");
Block.createBlock("dark_oak_barrel", [
	{name: "Dark Oak Barrel", texture: [["planks_big_oak", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var dark_oak_barrelModel = ModelAPI.newArray();
dark_oak_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 5);
dark_oak_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 5);
dark_oak_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 5);
dark_oak_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 5);
dark_oak_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 5);
dark_oak_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 5);
dark_oak_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 5);
dark_oak_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 5);
dark_oak_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 5);
dark_oak_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
dark_oak_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
dark_oak_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
dark_oak_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
dark_oak_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
dark_oak_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
dark_oak_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
dark_oak_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
dark_oak_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
dark_oak_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
dark_oak_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
dark_oak_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
dark_oak_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
dark_oak_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
dark_oak_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
dark_oak_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
dark_oak_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
dark_oak_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
dark_oak_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
dark_oak_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
dark_oak_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.dark_oak_barrel, dark_oak_barrelModel);

//translation barrels
Translation.addTranslation("Oak Barrel", {ru: "Дубовая Бочка"});
Translation.addTranslation("Spruce Barrel", {ru: "Еловая Бочка"});
Translation.addTranslation("Birch Barrel", {ru: "Берёзовая Бочка"});
Translation.addTranslation("Jungle Barrel", {ru: "Джунглевая Бочка"});
Translation.addTranslation("Acacia Barrel", {ru: "Акациевая Бочка"});
Translation.addTranslation("Dark Oak Barrel", {ru: "Тёмно Дубовая Бочка"});

//recipes barrels
Recipes.addShaped({id: BlockID.oak_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,0, 'x', 158,0])
Recipes.addShaped({id: BlockID.spruce_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,1, 'x', 158,1])
Recipes.addShaped({id: BlockID.birch_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,2, 'x', 158,2])
Recipes.addShaped({id: BlockID.jungle_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,3, 'x', 158,3])
Recipes.addShaped({id: BlockID.acacia_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,4, 'x', 158,4])
Recipes.addShaped({id: BlockID.dark_oak_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,5, 'x', 158,5])




// file: new_chest.js

IDRegistry.genBlockID("oak_chest");
Block.createBlock("oak_chest", [
	{name: "Oak Big Chest", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Big Chest", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Big Chest", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Big Chest", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_chest");
Item.createItem("oak_chest", "Oak Big Chest", {name: "oak_chest", meta: 0}, {stack: 64});

var oak_chestModel = ModelAPI.newArray();
oak_chestModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5);
oak_chestModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5);
oak_chestModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
oak_chestModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
oak_chestModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
oak_chestModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
oak_chestModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
oak_chestModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
oak_chestModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5);
oak_chestModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5);
oak_chestModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5);
oak_chestModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5);
oak_chestModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5);
oak_chestModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5);
oak_chestModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
oak_chestModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
oak_chestModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
oak_chestModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
oak_chestModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
oak_chestModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
oak_chestModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
oak_chestModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
oak_chestModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
oak_chestModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
oak_chestModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5);
oak_chestModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5);
oak_chestModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5);
oak_chestModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5);
oak_chestModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5);
oak_chestModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5);
oak_chestModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
oak_chestModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
oak_chestModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
oak_chestModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
oak_chestModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
oak_chestModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
oak_chestModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
oak_chestModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
oak_chestModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
oak_chestModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
oak_chestModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
oak_chestModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
oak_chestModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
oak_chestModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
oak_chestModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5);
oak_chestModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5);
oak_chestModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5);
oak_chestModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5);
oak_chestModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5);
oak_chestModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5);
oak_chestModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5);
oak_chestModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5);
oak_chestModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5);
oak_chestModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5);
oak_chestModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5);
oak_chestModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5);
oak_chestModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5);
oak_chestModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5);
oak_chestModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5);
oak_chestModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5);
oak_chestModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5);
oak_chestModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5);
oak_chestModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5);
oak_chestModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5);
oak_chestModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
oak_chestModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"oak_chest"},{id:"oak_chest"}, Furniture.placeRotatableBlock(BlockID.oak_chest, oak_chestModel));

IDRegistry.genBlockID("spruce_chest");
Block.createBlock("spruce_chest", [
	{name: "Spruce Big Chest", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Big Chest", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Big Chest", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Big Chest", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_chest");
Item.createItem("spruce_chest", "Spruce Big Chest", {name: "spruce_chest", meta: 0}, {stack: 64});

var spruce_chestModel = ModelAPI.newArray();
spruce_chestModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 1);
spruce_chestModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 1);
spruce_chestModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
spruce_chestModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
spruce_chestModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
spruce_chestModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
spruce_chestModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
spruce_chestModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
spruce_chestModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 1);
spruce_chestModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 1);
spruce_chestModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 1);
spruce_chestModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 1);
spruce_chestModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 1);
spruce_chestModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 1);
spruce_chestModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
spruce_chestModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
spruce_chestModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
spruce_chestModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
spruce_chestModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
spruce_chestModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
spruce_chestModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
spruce_chestModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
spruce_chestModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
spruce_chestModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
spruce_chestModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 1);
spruce_chestModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 1);
spruce_chestModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 1);
spruce_chestModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 1);
spruce_chestModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 1);
spruce_chestModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 1);
spruce_chestModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
spruce_chestModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
spruce_chestModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
spruce_chestModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
spruce_chestModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
spruce_chestModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
spruce_chestModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
spruce_chestModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
spruce_chestModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
spruce_chestModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
spruce_chestModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
spruce_chestModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
spruce_chestModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
spruce_chestModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
spruce_chestModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 1);
spruce_chestModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 1);
spruce_chestModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 1);
spruce_chestModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 1);
spruce_chestModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 1);
spruce_chestModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 1);
spruce_chestModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 1);
spruce_chestModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 1);
spruce_chestModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 1);
spruce_chestModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 1);
spruce_chestModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 1);
spruce_chestModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 1);
spruce_chestModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 1);
spruce_chestModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 1);
spruce_chestModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 1);
spruce_chestModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 1);
spruce_chestModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 1);
spruce_chestModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 1);
spruce_chestModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 1);
spruce_chestModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 1);
spruce_chestModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
spruce_chestModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"spruce_chest"},{id:"spruce_chest"}, Furniture.placeRotatableBlock(BlockID.spruce_chest, spruce_chestModel));

IDRegistry.genBlockID("birch_chest");
Block.createBlock("birch_chest", [
	{name: "Birch Big Chest", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Big Chest", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Big Chest", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Big Chest", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_chest");
Item.createItem("birch_chest", "Birch Big Chest", {name: "birch_chest", meta: 0}, {stack: 64});

var birch_chestModel = ModelAPI.newArray();
birch_chestModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 2);
birch_chestModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 2);
birch_chestModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
birch_chestModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
birch_chestModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
birch_chestModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
birch_chestModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
birch_chestModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
birch_chestModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 2);
birch_chestModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 2);
birch_chestModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 2);
birch_chestModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 2);
birch_chestModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 2);
birch_chestModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 2);
birch_chestModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
birch_chestModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
birch_chestModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
birch_chestModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
birch_chestModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
birch_chestModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
birch_chestModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
birch_chestModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
birch_chestModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
birch_chestModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
birch_chestModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 2);
birch_chestModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 2);
birch_chestModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 2);
birch_chestModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 2);
birch_chestModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 2);
birch_chestModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 2);
birch_chestModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
birch_chestModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
birch_chestModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
birch_chestModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
birch_chestModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
birch_chestModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
birch_chestModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
birch_chestModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
birch_chestModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
birch_chestModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
birch_chestModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
birch_chestModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
birch_chestModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
birch_chestModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
birch_chestModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 2);
birch_chestModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 2);
birch_chestModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 2);
birch_chestModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 2);
birch_chestModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 2);
birch_chestModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 2);
birch_chestModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 2);
birch_chestModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 2);
birch_chestModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 2);
birch_chestModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 2);
birch_chestModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 2);
birch_chestModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 2);
birch_chestModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 2);
birch_chestModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 2);
birch_chestModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 2);
birch_chestModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 2);
birch_chestModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 2);
birch_chestModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 2);
birch_chestModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 2);
birch_chestModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 2);
birch_chestModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
birch_chestModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"birch_chest"},{id:"birch_chest"}, Furniture.placeRotatableBlock(BlockID.birch_chest, birch_chestModel));

IDRegistry.genBlockID("jungle_chest");
Block.createBlock("jungle_chest", [
	{name: "Jungle Big Chest", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Big Chest", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Big Chest", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Big Chest", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_chest");
Item.createItem("jungle_chest", "Jungle Big Chest", {name: "jungle_chest", meta: 0}, {stack: 64});

var jungle_chestModel = ModelAPI.newArray();
jungle_chestModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 3);
jungle_chestModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 3);
jungle_chestModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
jungle_chestModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
jungle_chestModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
jungle_chestModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
jungle_chestModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
jungle_chestModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
jungle_chestModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 3);
jungle_chestModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 3);
jungle_chestModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 3);
jungle_chestModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 3);
jungle_chestModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 3);
jungle_chestModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 3);
jungle_chestModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
jungle_chestModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
jungle_chestModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
jungle_chestModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
jungle_chestModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
jungle_chestModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
jungle_chestModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
jungle_chestModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
jungle_chestModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
jungle_chestModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
jungle_chestModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 3);
jungle_chestModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 3);
jungle_chestModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 3);
jungle_chestModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 3);
jungle_chestModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 3);
jungle_chestModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 3);
jungle_chestModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
jungle_chestModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
jungle_chestModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
jungle_chestModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
jungle_chestModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
jungle_chestModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
jungle_chestModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
jungle_chestModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
jungle_chestModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
jungle_chestModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
jungle_chestModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
jungle_chestModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
jungle_chestModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
jungle_chestModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
jungle_chestModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 3);
jungle_chestModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 3);
jungle_chestModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 3);
jungle_chestModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 3);
jungle_chestModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 3);
jungle_chestModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 3);
jungle_chestModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 3);
jungle_chestModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 3);
jungle_chestModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 3);
jungle_chestModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 3);
jungle_chestModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 3);
jungle_chestModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 3);
jungle_chestModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 3);
jungle_chestModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 3);
jungle_chestModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 3);
jungle_chestModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 3);
jungle_chestModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 3);
jungle_chestModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 3);
jungle_chestModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 3);
jungle_chestModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 3);
jungle_chestModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
jungle_chestModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"jungle_chest"},{id:"jungle_chest"}, Furniture.placeRotatableBlock(BlockID.jungle_chest, jungle_chestModel));

IDRegistry.genBlockID("acacia_chest");
Block.createBlock("acacia_chest", [
	{name: "Acacia Big Chest", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Big Chest", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Big Chest", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Big Chest", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_chest");
Item.createItem("acacia_chest", "Acacia Big Chest", {name: "acacia_chest", meta: 0}, {stack: 64});

var acacia_chestModel = ModelAPI.newArray();
acacia_chestModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 4);
acacia_chestModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 4);
acacia_chestModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
acacia_chestModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
acacia_chestModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
acacia_chestModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
acacia_chestModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
acacia_chestModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
acacia_chestModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 4);
acacia_chestModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 4);
acacia_chestModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 4);
acacia_chestModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 4);
acacia_chestModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 4);
acacia_chestModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 4);
acacia_chestModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
acacia_chestModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
acacia_chestModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
acacia_chestModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
acacia_chestModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
acacia_chestModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
acacia_chestModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
acacia_chestModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
acacia_chestModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
acacia_chestModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
acacia_chestModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 4);
acacia_chestModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 4);
acacia_chestModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 4);
acacia_chestModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 4);
acacia_chestModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 4);
acacia_chestModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 4);
acacia_chestModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
acacia_chestModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
acacia_chestModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
acacia_chestModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
acacia_chestModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
acacia_chestModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
acacia_chestModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
acacia_chestModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
acacia_chestModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
acacia_chestModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
acacia_chestModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
acacia_chestModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
acacia_chestModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
acacia_chestModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
acacia_chestModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 4);
acacia_chestModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 4);
acacia_chestModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 4);
acacia_chestModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 4);
acacia_chestModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 4);
acacia_chestModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 4);
acacia_chestModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 4);
acacia_chestModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 4);
acacia_chestModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 4);
acacia_chestModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 4);
acacia_chestModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 4);
acacia_chestModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 4);
acacia_chestModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 4);
acacia_chestModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 4);
acacia_chestModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 4);
acacia_chestModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 4);
acacia_chestModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 4);
acacia_chestModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 4);
acacia_chestModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 4);
acacia_chestModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 4);
acacia_chestModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
acacia_chestModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"acacia_chest"},{id:"acacia_chest"}, Furniture.placeRotatableBlock(BlockID.acacia_chest, acacia_chestModel));

IDRegistry.genBlockID("dark_oak_chest");
Block.createBlock("dark_oak_chest", [
	{name: "Dark Oak Big Chest", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Big Chest", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Big Chest", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Big Chest", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_chest");
Item.createItem("dark_oak_chest", "Dark Oak Big Chest", {name: "dark_oak_chest", meta: 0}, {stack: 64});

var dark_oak_chestModel = ModelAPI.newArray();
dark_oak_chestModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 5);
dark_oak_chestModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 5);
dark_oak_chestModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
dark_oak_chestModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
dark_oak_chestModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
dark_oak_chestModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
dark_oak_chestModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
dark_oak_chestModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
dark_oak_chestModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 5);
dark_oak_chestModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 5);
dark_oak_chestModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 5);
dark_oak_chestModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 5);
dark_oak_chestModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 5);
dark_oak_chestModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 5);
dark_oak_chestModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
dark_oak_chestModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
dark_oak_chestModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
dark_oak_chestModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
dark_oak_chestModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
dark_oak_chestModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
dark_oak_chestModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
dark_oak_chestModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
dark_oak_chestModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
dark_oak_chestModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
dark_oak_chestModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 5);
dark_oak_chestModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 5);
dark_oak_chestModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 5);
dark_oak_chestModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 5);
dark_oak_chestModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 5);
dark_oak_chestModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 5);
dark_oak_chestModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
dark_oak_chestModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
dark_oak_chestModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
dark_oak_chestModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
dark_oak_chestModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
dark_oak_chestModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
dark_oak_chestModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
dark_oak_chestModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
dark_oak_chestModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
dark_oak_chestModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
dark_oak_chestModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
dark_oak_chestModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
dark_oak_chestModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
dark_oak_chestModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
dark_oak_chestModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 5);
dark_oak_chestModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 5);
dark_oak_chestModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 5);
dark_oak_chestModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 5);
dark_oak_chestModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 5);
dark_oak_chestModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 5);
dark_oak_chestModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 5);
dark_oak_chestModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 5);
dark_oak_chestModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 5);
dark_oak_chestModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 5);
dark_oak_chestModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 5);
dark_oak_chestModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 5);
dark_oak_chestModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 5);
dark_oak_chestModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 5);
dark_oak_chestModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 5);
dark_oak_chestModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 5);
dark_oak_chestModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 5);
dark_oak_chestModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 5);
dark_oak_chestModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 5);
dark_oak_chestModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 5);
dark_oak_chestModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
dark_oak_chestModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"dark_oak_chest"},{id:"dark_oak_chest"}, Furniture.placeRotatableBlock(BlockID.dark_oak_chest, dark_oak_chestModel));

Translation.addTranslation("Oak Big Chest", {ru: "Дубовая Большая Сундук"});
Translation.addTranslation("Spruce Big Chest", {ru: "Еловая Большая Сундук"});
Translation.addTranslation("Birch Big Chest", {ru: "Берёзовая Большая Сундук"});
Translation.addTranslation("Jungle Big Chest", {ru: "Джуглевая Большая Сундук"});
Translation.addTranslation("Acacia Big Chest", {ru: "Акацивая Большая Сундук"});
Translation.addTranslation("Dark Oak Big Chest", {ru: "Тёмно Дубовая Большая Сундук"});

Recipes.addShaped({id: ItemID.oak_chest, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,0, 'x', 158,0]);
Recipes.addShaped({id: ItemID.spruce_chest, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,1, 'x', 158,1]);
Recipes.addShaped({id: ItemID.birch_chest, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,2, 'x', 158,2]);
Recipes.addShaped({id: ItemID.jungle_chest, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,3, 'x', 158,3]);
Recipes.addShaped({id: ItemID.acacia_chest, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,4, 'x', 158,4]);
Recipes.addShaped({id: ItemID.dark_oak_chest, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,5, 'x', 158,5]);




// file: new_trough.js

//trough wheat
IDRegistry.genBlockID("oak_trough_wheat");
Block.createBlock("oak_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_trough_wheat");
Item.createItem("oak_trough_wheat", "Trough Wheat", {name: "oak_trough_wheat", meta: 0}, {stack: 64});

var oak_trough_wheatModel = ModelAPI.newArray();
oak_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5);
oak_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5);
oak_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
oak_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5);
oak_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5);
oak_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5);
oak_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5);
oak_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5);
oak_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5);
oak_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"oak_trough_wheat"},{id:"oak_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.oak_trough_wheat, oak_trough_wheatModel));

IDRegistry.genBlockID("spruce_trough_wheat");
Block.createBlock("spruce_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_trough_wheat");
Item.createItem("spruce_trough_wheat", "Trough Wheat", {name: "spruce_trough_wheat", meta: 0}, {stack: 64});

var spruce_trough_wheatModel = ModelAPI.newArray();
spruce_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 1);
spruce_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 1);
spruce_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
spruce_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 1);
spruce_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 1);
spruce_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 1);
spruce_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 1);
spruce_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 1);
spruce_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 1);
spruce_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"spruce_trough_wheat"},{id:"spruce_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.spruce_trough_wheat, spruce_trough_wheatModel));

IDRegistry.genBlockID("birch_trough_wheat");
Block.createBlock("birch_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_trough_wheat");
Item.createItem("birch_trough_wheat", "Trough Wheat", {name: "birch_trough_wheat", meta: 0}, {stack: 64});

var birch_trough_wheatModel = ModelAPI.newArray();
birch_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 2);
birch_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 2);
birch_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
birch_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 2);
birch_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 2);
birch_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 2);
birch_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 2);
birch_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 2);
birch_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 2);
birch_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"birch_trough_wheat"},{id:"birch_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.birch_trough_wheat, birch_trough_wheatModel));

IDRegistry.genBlockID("jungle_trough_wheat");
Block.createBlock("jungle_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_trough_wheat");
Item.createItem("jungle_trough_wheat", "Trough Wheat", {name: "jungle_trough_wheat", meta: 0}, {stack: 64});

var jungle_trough_wheatModel = ModelAPI.newArray();
jungle_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 3);
jungle_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 3);
jungle_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
jungle_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 3);
jungle_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 3);
jungle_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 3);
jungle_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 3);
jungle_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 3);
jungle_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 3);
jungle_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"jungle_trough_wheat"},{id:"jungle_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.jungle_trough_wheat, jungle_trough_wheatModel));

IDRegistry.genBlockID("acacia_trough_wheat");
Block.createBlock("acacia_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_trough_wheat");
Item.createItem("acacia_trough_wheat", "Trough Wheat", {name: "acacia_trough_wheat", meta: 0}, {stack: 64});

var acacia_trough_wheatModel = ModelAPI.newArray();
acacia_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 4);
acacia_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 4);
acacia_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
acacia_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 4);
acacia_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 4);
acacia_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 4);
acacia_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 4);
acacia_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 4);
acacia_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 4);
acacia_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"acacia_trough_wheat"},{id:"acacia_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.acacia_trough_wheat, acacia_trough_wheatModel));

IDRegistry.genBlockID("dark_oak_trough_wheat");
Block.createBlock("dark_oak_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_trough_wheat");
Item.createItem("dark_oak_trough_wheat", "Trough Wheat", {name: "dark_oak_trough_wheat", meta: 0}, {stack: 64});

var dark_oak_trough_wheatModel = ModelAPI.newArray();
dark_oak_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
dark_oak_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"dark_oak_trough_wheat"},{id:"dark_oak_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.dark_oak_trough_wheat, dark_oak_trough_wheatModel));

Translation.addTranslation("Trough Wheat", {ru: "Корыто с Пшеницей"});

Recipes.addShaped({id: ItemID.oak_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,0])
Recipes.addShaped({id: ItemID.spruce_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,1])
Recipes.addShaped({id: ItemID.birch_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,2])
Recipes.addShaped({id: ItemID.jungle_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,3])
Recipes.addShaped({id: ItemID.acacia_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,4])
Recipes.addShaped({id: ItemID.dark_oak_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,5])

Block.setShape(BlockID.oak_trough_wheat,0,0,0,1,1/2,1);
Block.setShape(BlockID.spruce_trough_wheat,0,0,0,1,1/2,1);
Block.setShape(BlockID.birch_trough_wheat,0,0,0,1,1/2,1);
Block.setShape(BlockID.jungle_trough_wheat,0,0,0,1,1/2,1);
Block.setShape(BlockID.acacia_trough_wheat,0,0,0,1,1/2,1);
Block.setShape(BlockID.dark_oak_trough_wheat,0,0,0,1,1/2,1);

//trough water
IDRegistry.genBlockID("oak_trough_water");
Block.createBlock("oak_trough_water", [
	{name: "Trough Water", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_trough_water");
Item.createItem("oak_trough_water", "Trough Water", {name: "oak_trough_water", meta: 0}, {stack: 64});

var oak_trough_waterModel = ModelAPI.newArray();
oak_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5);
oak_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5);
oak_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
oak_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5);
oak_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5);
oak_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5);
oak_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5);
oak_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5);
oak_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5);
oak_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"oak_trough_water"},{id:"oak_trough_water"}, Furniture.placeRotatableBlock(BlockID.oak_trough_water, oak_trough_waterModel));

IDRegistry.genBlockID("spruce_trough_water");
Block.createBlock("spruce_trough_water", [
	{name: "Trough Water", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_trough_water");
Item.createItem("spruce_trough_water", "Trough Water", {name: "spruce_trough_water", meta: 0}, {stack: 64});

var spruce_trough_waterModel = ModelAPI.newArray();
spruce_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 1);
spruce_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 1);
spruce_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
spruce_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 1);
spruce_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 1);
spruce_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 1);
spruce_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 1);
spruce_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 1);
spruce_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 1);
spruce_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"spruce_trough_water"},{id:"spruce_trough_water"}, Furniture.placeRotatableBlock(BlockID.spruce_trough_water, spruce_trough_waterModel));

IDRegistry.genBlockID("birch_trough_water");
Block.createBlock("birch_trough_water", [
	{name: "Trough Water", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_trough_water");
Item.createItem("birch_trough_water", "Trough Water", {name: "birch_trough_water", meta: 0}, {stack: 64});

var birch_trough_waterModel = ModelAPI.newArray();
birch_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 2);
birch_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 2);
birch_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
birch_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 2);
birch_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 2);
birch_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 2);
birch_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 2);
birch_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 2);
birch_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 2);
birch_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"birch_trough_water"},{id:"birch_trough_water"}, Furniture.placeRotatableBlock(BlockID.birch_trough_water, birch_trough_waterModel));

IDRegistry.genBlockID("jungle_trough_water");
Block.createBlock("jungle_trough_water", [
	{name: "Trough Water", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_trough_water");
Item.createItem("jungle_trough_water", "Trough Water", {name: "jungle_trough_water", meta: 0}, {stack: 64});

var jungle_trough_waterModel = ModelAPI.newArray();
jungle_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 3);
jungle_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 3);
jungle_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
jungle_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 3);
jungle_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 3);
jungle_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 3);
jungle_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 3);
jungle_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 3);
jungle_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 3);
jungle_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"jungle_trough_water"},{id:"jungle_trough_water"}, Furniture.placeRotatableBlock(BlockID.jungle_trough_water, jungle_trough_waterModel));

IDRegistry.genBlockID("acacia_trough_water");
Block.createBlock("acacia_trough_water", [
	{name: "Trough Water", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_trough_water");
Item.createItem("acacia_trough_water", "Trough Water", {name: "acacia_trough_water", meta: 0}, {stack: 64});

var acacia_trough_waterModel = ModelAPI.newArray();
acacia_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 4);
acacia_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 4);
acacia_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
acacia_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 4);
acacia_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 4);
acacia_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 4);
acacia_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 4);
acacia_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 4);
acacia_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 4);
acacia_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"acacia_trough_water"},{id:"acacia_trough_water"}, Furniture.placeRotatableBlock(BlockID.acacia_trough_water, acacia_trough_waterModel));

IDRegistry.genBlockID("dark_oak_trough_water");
Block.createBlock("dark_oak_trough_water", [
	{name: "Trough Water", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_trough_water");
Item.createItem("dark_oak_trough_water", "Trough Water", {name: "dark_oak_trough_water", meta: 0}, {stack: 64});

var dark_oak_trough_waterModel = ModelAPI.newArray();
dark_oak_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 5);
dark_oak_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 5);
dark_oak_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
dark_oak_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 5);
dark_oak_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 5);
dark_oak_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 5);
dark_oak_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 5);
dark_oak_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 5);
dark_oak_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 5);
dark_oak_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"dark_oak_trough_water"},{id:"dark_oak_trough_water"}, Furniture.placeRotatableBlock(BlockID.dark_oak_trough_water, dark_oak_trough_waterModel));

Translation.addTranslation("Trough Water", {ru: "Корыта с Водой"});

Recipes.addShapeless(
	{id: ItemID.oak_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 0}, {id: 5, data: 0}, {id: 5, data: 0}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.spruce_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 1}, {id: 5, data: 1}, {id: 5, data: 1}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.birch_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 2}, {id: 5, data: 2}, {id: 5, data: 2}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.jungle_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 3}, {id: 5, data: 3}, {id: 5, data: 3}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.acacia_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 4}, {id: 5, data: 4}, {id: 5, data: 4}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.dark_oak_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 5}, {id: 5, data: 5}, {id: 5, data: 5}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Block.setShape(BlockID.oak_trough_water,0,0,0,1,1/2,1);
Block.setShape(BlockID.spruce_trough_water,0,0,0,1,1/2,1);
Block.setShape(BlockID.birch_trough_water,0,0,0,1,1/2,1);
Block.setShape(BlockID.jungle_trough_water,0,0,0,1,1/2,1);
Block.setShape(BlockID.acacia_trough_water,0,0,0,1,1/2,1);
Block.setShape(BlockID.dark_oak_trough_water,0,0,0,1,1/2,1);




// file: new_cradle.js

IDRegistry.genBlockID("oak_cradle");
Block.createBlock("oak_cradle", [
	{name: "Oak Cradle", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Cradle", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Cradle", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Cradle", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_cradle");
Item.createItem("oak_cradle", "Oak Cradle", {name: "oak_cradle", meta: 0}, {stack: 64});

var oak_cradleModel = ModelAPI.newArray();
oak_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5);
oak_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5);
oak_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35);
oak_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5);
oak_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5);
oak_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5);
oak_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5);
oak_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5);
oak_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5);
oak_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5);
oak_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5);
oak_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5);
oak_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5);
oak_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5);
oak_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5);
oak_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5);
oak_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5);
oak_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5);
oak_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5);
oak_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5);
oak_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5);
oak_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5);
oak_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5);
oak_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5);
oak_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5);
oak_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5);
oak_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5);
oak_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5);
oak_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5);
oak_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5);
oak_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5);
oak_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35);
oak_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5);
oak_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5);
oak_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5);
oak_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5);
oak_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5);
oak_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
oak_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
oak_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"oak_cradle"},{id:"oak_cradle"}, Furniture.placeRotatableBlock(BlockID.oak_cradle, oak_cradleModel));

IDRegistry.genBlockID("spruce_cradle");
Block.createBlock("spruce_cradle", [
	{name: "Spruce Cradle", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Cradle", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Cradle", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Cradle", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_cradle");
Item.createItem("spruce_cradle", "Spruce Cradle", {name: "spruce_cradle", meta: 0}, {stack: 64});

var spruce_cradleModel = ModelAPI.newArray();
spruce_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 1);
spruce_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 1);
spruce_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 1);
spruce_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 1);
spruce_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 1);
spruce_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 1);
spruce_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 1);
spruce_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 1);
spruce_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 1);
spruce_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 1);
spruce_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 1);
spruce_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 1);
spruce_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 1);
spruce_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 1);
spruce_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 1);
spruce_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 1);
spruce_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 1);
spruce_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 1);
spruce_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 1);
spruce_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 1);
spruce_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 1);
spruce_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 1);
spruce_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 1);
spruce_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 1);
spruce_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 1);
spruce_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 1);
spruce_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 1);
spruce_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 1);
spruce_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 1);
spruce_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 1);
spruce_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
spruce_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
spruce_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"spruce_cradle"},{id:"spruce_cradle"}, Furniture.placeRotatableBlock(BlockID.spruce_cradle, spruce_cradleModel));

IDRegistry.genBlockID("birch_cradle");
Block.createBlock("birch_cradle", [
	{name: "Birch Cradle", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Cradle", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Cradle", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Cradle", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_cradle");
Item.createItem("birch_cradle", "Birch Cradle", {name: "birch_cradle", meta: 0}, {stack: 64});

var birch_cradleModel = ModelAPI.newArray();
birch_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 2);
birch_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 2);
birch_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 2);
birch_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 2);
birch_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 2);
birch_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 2);
birch_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 2);
birch_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 2);
birch_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 2);
birch_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 2);
birch_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 2);
birch_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 2);
birch_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 2);
birch_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 2);
birch_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 2);
birch_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 2);
birch_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 2);
birch_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 2);
birch_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 2);
birch_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 2);
birch_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 2);
birch_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 2);
birch_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 2);
birch_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 2);
birch_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 2);
birch_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 2);
birch_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 2);
birch_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 2);
birch_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 2);
birch_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 2);
birch_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
birch_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
birch_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"birch_cradle"},{id:"birch_cradle"}, Furniture.placeRotatableBlock(BlockID.birch_cradle, birch_cradleModel));

IDRegistry.genBlockID("jungle_cradle");
Block.createBlock("jungle_cradle", [
	{name: "Jungle Cradle", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Cradle", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Cradle", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Cradle", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_cradle");
Item.createItem("jungle_cradle", "Jungle Cradle", {name: "jungle_cradle", meta: 0}, {stack: 64});

var jungle_cradleModel = ModelAPI.newArray();
jungle_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 3);
jungle_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 3);
jungle_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 3);
jungle_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 3);
jungle_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 3);
jungle_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 3);
jungle_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 3);
jungle_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 3);
jungle_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 3);
jungle_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 3);
jungle_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 3);
jungle_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 3);
jungle_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 3);
jungle_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 3);
jungle_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 3);
jungle_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 3);
jungle_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 3);
jungle_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 3);
jungle_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 3);
jungle_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 3);
jungle_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 3);
jungle_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 3);
jungle_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 3);
jungle_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 3);
jungle_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 3);
jungle_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 3);
jungle_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 3);
jungle_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 3);
jungle_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 3);
jungle_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 3);
jungle_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
jungle_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
jungle_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"jungle_cradle"},{id:"jungle_cradle"}, Furniture.placeRotatableBlock(BlockID.jungle_cradle, jungle_cradleModel));

IDRegistry.genBlockID("acacia_cradle");
Block.createBlock("acacia_cradle", [
	{name: "Acacia Cradle", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Cradle", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Cradle", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Cradle", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_cradle");
Item.createItem("acacia_cradle", "Acacia Cradle", {name: "acacia_cradle", meta: 0}, {stack: 64});

var acacia_cradleModel = ModelAPI.newArray();
acacia_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 4);
acacia_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 4);
acacia_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 4);
acacia_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 4);
acacia_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 4);
acacia_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 4);
acacia_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 4);
acacia_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 4);
acacia_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 4);
acacia_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 4);
acacia_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 4);
acacia_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 4);
acacia_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 4);
acacia_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 4);
acacia_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 4);
acacia_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 4);
acacia_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 4);
acacia_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 4);
acacia_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 4);
acacia_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 4);
acacia_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 4);
acacia_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 4);
acacia_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 4);
acacia_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 4);
acacia_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 4);
acacia_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 4);
acacia_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 4);
acacia_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 4);
acacia_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 4);
acacia_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 4);
acacia_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
acacia_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 5);
acacia_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 14);
Furniture.addReplacementItem({id:"acacia_cradle"},{id:"acacia_cradle"}, Furniture.placeRotatableBlock(BlockID.acacia_cradle, acacia_cradleModel));

IDRegistry.genBlockID("dark_oak_cradle");
Block.createBlock("dark_oak_cradle", [
	{name: "Dark Oak Cradle", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Cradle", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Cradle", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Cradle", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_cradle");
Item.createItem("dark_oak_cradle", "Dark Oak Cradle", {name: "dark_oak_cradle", meta: 0}, {stack: 64});

var dark_oak_cradleModel = ModelAPI.newArray();
dark_oak_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 5);
dark_oak_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 5);
dark_oak_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 5);
dark_oak_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 5);
dark_oak_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 5);
dark_oak_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 5);
dark_oak_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 5);
dark_oak_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 5);
dark_oak_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 5);
dark_oak_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 5);
dark_oak_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 5);
dark_oak_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 5);
dark_oak_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 5);
dark_oak_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 5);
dark_oak_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 5);
dark_oak_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 5);
dark_oak_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 5);
dark_oak_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 5);
dark_oak_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 5);
dark_oak_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 5);
dark_oak_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
dark_oak_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 5);
Furniture.addReplacementItem({id:"dark_oak_cradle"},{id:"dark_oak_cradle"}, Furniture.placeRotatableBlock(BlockID.dark_oak_cradle, dark_oak_cradleModel));

Block.setShape(BlockID.oak_cradle,0,0,0,1,0.20,1);
Block.setShape(BlockID.spruce_cradle,0,0,0,1,0.20,1);
Block.setShape(BlockID.birch_cradle,0,0,0,1,0.20,1);
Block.setShape(BlockID.jungle_cradle,0,0,0,1,0.20,1);
Block.setShape(BlockID.acacia_cradle,0,0,0,1,0.20,1);
Block.setShape(BlockID.dark_oak_cradle,0,0,0,1,0.20,1);

Translation.addTranslation("Oak Cradle", {ru: "Дубовая Колыбель"});
Translation.addTranslation("Spruce Cradle", {ru: "Еловая Колыбель"});
Translation.addTranslation("Birch Cradle", {ru: "Берёзовая Колыбель"});
Translation.addTranslation("Jungle Cradle", {ru: "Джунглевая  Колыбель"});
Translation.addTranslation("Acacia Cradle", {ru: "Акациевая Колыбель"});
Translation.addTranslation("Dark Oak Cradle", {ru: "Тёмно Дубовая Колыбель"});

Recipes.addShaped({id: ItemID.oak_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,0, 'x', 158,0])
Recipes.addShaped({id: ItemID.spruce_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,1, 'x', 158,1])
Recipes.addShaped({id: ItemID.birch_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,2, 'x', 158,2])
Recipes.addShaped({id: ItemID.jungle_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,3, 'x', 158,3])
Recipes.addShaped({id: ItemID.acacia_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,4, 'x', 158,4])
Recipes.addShaped({id: ItemID.dark_oak_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,5, 'x', 158,5])




// file: new_desk.js

IDRegistry.genBlockID("oak_desk");
Block.createBlock("oak_desk", [
	{name: "Oak Desk", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desk", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desk", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desk", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_desk");
Item.createItem("oak_desk", "Oak Desk", {name: "oak_desk", meta: 0}, {stack: 64});

var oak_deskModel = ModelAPI.newArray();
oak_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
oak_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5);
oak_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
oak_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
oak_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
oak_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
oak_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
oak_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
oak_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
oak_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5);
oak_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
oak_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
oak_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
oak_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
oak_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
oak_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
oak_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
oak_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"oak_desk"},{id:"oak_desk"}, Furniture.placeRotatableBlock(BlockID.oak_desk, oak_deskModel));

IDRegistry.genBlockID("spruce_desk");
Block.createBlock("spruce_desk", [
	{name: "Spruce Desk", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desk", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desk", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desk", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_desk");
Item.createItem("spruce_desk", "Spruce Desk", {name: "spruce_desk", meta: 0}, {stack: 64});

var spruce_deskModel = ModelAPI.newArray();
spruce_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
spruce_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 1);
spruce_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
spruce_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
spruce_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
spruce_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
spruce_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
spruce_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
spruce_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
spruce_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 1);
spruce_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
spruce_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
spruce_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
spruce_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
spruce_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
spruce_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
spruce_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
spruce_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"spruce_desk"},{id:"spruce_desk"}, Furniture.placeRotatableBlock(BlockID.spruce_desk, spruce_deskModel));

IDRegistry.genBlockID("birch_desk");
Block.createBlock("birch_desk", [
	{name: "Birch Desk", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desk", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desk", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desk", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_desk");
Item.createItem("birch_desk", "Birch Desk", {name: "birch_desk", meta: 0}, {stack: 64});

var birch_deskModel = ModelAPI.newArray();
birch_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
birch_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 2);
birch_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
birch_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
birch_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
birch_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
birch_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
birch_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
birch_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
birch_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 2);
birch_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
birch_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
birch_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
birch_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
birch_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
birch_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
birch_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
birch_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"birch_desk"},{id:"birch_desk"}, Furniture.placeRotatableBlock(BlockID.birch_desk, birch_deskModel));

IDRegistry.genBlockID("jungle_desk");
Block.createBlock("jungle_desk", [
	{name: "Jungle Desk", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desk", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desk", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desk", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_desk");
Item.createItem("jungle_desk", "Jungle Desk", {name: "jungle_desk", meta: 0}, {stack: 64});

var jungle_deskModel = ModelAPI.newArray();
jungle_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
jungle_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 3);
jungle_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
jungle_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
jungle_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
jungle_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
jungle_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
jungle_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
jungle_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
jungle_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 3);
jungle_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
jungle_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
jungle_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
jungle_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
jungle_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
jungle_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
jungle_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
jungle_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"jungle_desk"},{id:"jungle_desk"}, Furniture.placeRotatableBlock(BlockID.jungle_desk, jungle_deskModel));

IDRegistry.genBlockID("acacia_desk");
Block.createBlock("acacia_desk", [
	{name: "Acacia Desk", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desk", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desk", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desk", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_desk");
Item.createItem("acacia_desk", "Acacia Desk", {name: "acacia_desk", meta: 0}, {stack: 64});

var acacia_deskModel = ModelAPI.newArray();
acacia_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
acacia_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 4);
acacia_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
acacia_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
acacia_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
acacia_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
acacia_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
acacia_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
acacia_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
acacia_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 4);
acacia_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
acacia_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
acacia_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
acacia_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
acacia_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
acacia_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
acacia_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
acacia_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"acacia_desk"},{id:"acacia_desk"}, Furniture.placeRotatableBlock(BlockID.acacia_desk, acacia_deskModel));

IDRegistry.genBlockID("dark_oak_desk");
Block.createBlock("dark_oak_desk", [
	{name: "Dark Oak Desk", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desk", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desk", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desk", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_desk");
Item.createItem("dark_oak_desk", "Dark Oak Desk", {name: "dark_oak_desk", meta: 0}, {stack: 64});

var dark_oak_deskModel = ModelAPI.newArray();
dark_oak_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
dark_oak_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 5);
dark_oak_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
dark_oak_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
dark_oak_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
dark_oak_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
dark_oak_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
dark_oak_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
dark_oak_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
dark_oak_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 5);
dark_oak_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
dark_oak_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
dark_oak_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
dark_oak_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
dark_oak_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
dark_oak_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
dark_oak_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
dark_oak_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"dark_oak_desk"},{id:"dark_oak_desk"}, Furniture.placeRotatableBlock(BlockID.dark_oak_desk, dark_oak_deskModel));

Translation.addTranslation("Oak Desk", {ru: "Дубовая Парта"});
Translation.addTranslation("Spruce Desk", {ru: "Еловая Парта"});
Translation.addTranslation("Birch Desk", {ru: "Берёзовая Парта"});
Translation.addTranslation("Jungle Desk", {ru: "Джунглевая Парта"});
Translation.addTranslation("Acacia Desk", {ru: "Акациевая Парта"});
Translation.addTranslation("Dark Oak Desk", {ru: "Тёмно Дубовая Парта"});

Recipes.addShaped({id: ItemID.oak_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 0, 'c', 85, 0]);
Recipes.addShaped({id: ItemID.spruce_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 1, 'c', 85, 1]);
Recipes.addShaped({id: ItemID.birch_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 2, 'c', 85, 2]);
Recipes.addShaped({id: ItemID.jungle_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 3, 'c', 85, 3]);
Recipes.addShaped({id: ItemID.acacia_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 4, 'c', 85, 4]);
Recipes.addShaped({id: ItemID.dark_oak_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 5, 'c', 85, 5]);




// file: new_bench.js

IDRegistry.genBlockID("oak_bench");
Block.createBlock("oak_bench", [
	{name: "Oak Bench", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bench", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bench", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bench", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_bench");
Item.createItem("oak_bench", "Oak Bench", {name: "oak_bench", meta: 0}, {stack: 64});

var oak_benchModel = ModelAPI.newArray();
oak_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
oak_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
oak_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
oak_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
oak_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
oak_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
oak_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
oak_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
oak_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
oak_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
oak_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5);
oak_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5);
oak_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5);
oak_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5);
oak_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5);
oak_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5);
oak_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5);
oak_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5);
oak_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
oak_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
oak_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
oak_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
oak_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5);
oak_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5);
oak_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5);
oak_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5);
Furniture.addReplacementItem({id:"oak_bench"},{id:"oak_bench"}, Furniture.placeRotatableBlock(BlockID.oak_bench, oak_benchModel));

IDRegistry.genBlockID("spruce_bench");
Block.createBlock("spruce_bench", [
	{name: "Spruce Bench", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bench", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bench", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bench", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_bench");
Item.createItem("spruce_bench", "Spruce Bench", {name: "spruce_bench", meta: 0}, {stack: 64});

var spruce_benchModel = ModelAPI.newArray();
spruce_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
spruce_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
spruce_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
spruce_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
spruce_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
spruce_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
spruce_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
spruce_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
spruce_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
spruce_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
spruce_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 1);
spruce_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 1);
spruce_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 1);
spruce_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 1);
spruce_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 1);
spruce_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 1);
spruce_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 1);
spruce_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 1);
spruce_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
spruce_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
spruce_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
spruce_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
spruce_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 1);
spruce_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 1);
spruce_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 1);
spruce_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 1);
Furniture.addReplacementItem({id:"spruce_bench"},{id:"spruce_bench"}, Furniture.placeRotatableBlock(BlockID.spruce_bench, spruce_benchModel));

IDRegistry.genBlockID("birch_bench");
Block.createBlock("birch_bench", [
	{name: "Birch Bench", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bench", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bench", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bench", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_bench");
Item.createItem("birch_bench", "Birch Bench", {name: "birch_bench", meta: 0}, {stack: 64});

var birch_benchModel = ModelAPI.newArray();
birch_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
birch_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
birch_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
birch_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
birch_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
birch_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
birch_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
birch_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
birch_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
birch_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
birch_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 2);
birch_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 2);
birch_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 2);
birch_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 2);
birch_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 2);
birch_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 2);
birch_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 2);
birch_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 2);
birch_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
birch_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
birch_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
birch_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
birch_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 2);
birch_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 2);
birch_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 2);
birch_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 2);
Furniture.addReplacementItem({id:"birch_bench"},{id:"birch_bench"}, Furniture.placeRotatableBlock(BlockID.birch_bench, birch_benchModel));

IDRegistry.genBlockID("jungle_bench");
Block.createBlock("jungle_bench", [
	{name: "Jungle Bench", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bench", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bench", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bench", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_bench");
Item.createItem("jungle_bench", "Jungle Bench", {name: "jungle_bench", meta: 0}, {stack: 64});

var jungle_benchModel = ModelAPI.newArray();
jungle_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
jungle_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
jungle_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
jungle_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
jungle_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
jungle_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
jungle_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
jungle_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
jungle_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
jungle_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
jungle_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 3);
jungle_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 3);
jungle_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 3);
jungle_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 3);
jungle_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 3);
jungle_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 3);
jungle_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 3);
jungle_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 3);
jungle_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
jungle_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
jungle_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
jungle_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
jungle_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 3);
jungle_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 3);
jungle_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 3);
jungle_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 3);
Furniture.addReplacementItem({id:"jungle_bench"},{id:"jungle_bench"}, Furniture.placeRotatableBlock(BlockID.jungle_bench, jungle_benchModel));

IDRegistry.genBlockID("acacia_bench");
Block.createBlock("acacia_bench", [
	{name: "Acacia Bench", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bench", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bench", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bench", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_bench");
Item.createItem("acacia_bench", "Acacia Bench", {name: "acacia_bench", meta: 0}, {stack: 64});

var acacia_benchModel = ModelAPI.newArray();
acacia_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
acacia_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
acacia_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
acacia_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
acacia_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
acacia_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
acacia_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
acacia_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
acacia_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
acacia_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
acacia_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 4);
acacia_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 4);
acacia_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 4);
acacia_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 4);
acacia_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 4);
acacia_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 4);
acacia_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 4);
acacia_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 4);
acacia_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
acacia_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
acacia_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
acacia_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
acacia_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 4);
acacia_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 4);
acacia_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 4);
acacia_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 4);
Furniture.addReplacementItem({id:"acacia_bench"},{id:"acacia_bench"}, Furniture.placeRotatableBlock(BlockID.acacia_bench, acacia_benchModel));

IDRegistry.genBlockID("dark_oak_bench");
Block.createBlock("dark_oak_bench", [
	{name: "Dark Oak Bench", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bench", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bench", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bench", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_bench");
Item.createItem("dark_oak_bench", "Dark Oak Bench", {name: "dark_oak_bench", meta: 0}, {stack: 64});

var dark_oak_benchModel = ModelAPI.newArray();
dark_oak_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
dark_oak_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
dark_oak_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
dark_oak_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
dark_oak_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
dark_oak_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
dark_oak_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
dark_oak_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
dark_oak_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
dark_oak_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
dark_oak_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 5);
dark_oak_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 5);
dark_oak_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 5);
dark_oak_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 5);
dark_oak_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 5);
dark_oak_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 5);
dark_oak_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 5);
dark_oak_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 5);
dark_oak_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
dark_oak_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
dark_oak_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
dark_oak_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
dark_oak_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 5);
dark_oak_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 5);
dark_oak_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 5);
dark_oak_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 5);
Furniture.addReplacementItem({id:"dark_oak_bench"},{id:"dark_oak_bench"}, Furniture.placeRotatableBlock(BlockID.dark_oak_bench, dark_oak_benchModel));

Block.setShape(BlockID.oak_bench,0,0,0,1,0.36,1);
Block.setShape(BlockID.spruce_bench,0,0,0,1,0.36,1);
Block.setShape(BlockID.birch_bench,0,0,0,1,0.36,1);
Block.setShape(BlockID.jungle_bench,0,0,0,1,0.36,1);
Block.setShape(BlockID.acacia_bench,0,0,0,1,0.36,1);
Block.setShape(BlockID.dark_oak_bench,0,0,0,1,0.36,1);


Recipes.addShaped({id: ItemID.oak_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,0]);
Recipes.addShaped({id: ItemID.spruce_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,1]);
Recipes.addShaped({id: ItemID.birch_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,2]);
Recipes.addShaped({id: ItemID.jungle_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,3]);
Recipes.addShaped({id: ItemID.acacia_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,4]);
Recipes.addShaped({id: ItemID.dark_oak_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,5]);

Translation.addTranslation("Oak Bench", {ru: "Дубовая Скамейка"});
Translation.addTranslation("Spruce Bench", {ru: "Еловая Скамейка"});
Translation.addTranslation("Birch Bench", {ru: "Берёзовая Скамейка"});
Translation.addTranslation("Jungle Bench", {ru: "Джунглевая Скамейка"});
Translation.addTranslation("Acacia Bench", {ru: "Акациевая Скамейка"});
Translation.addTranslation("Dark Oak Bench", {ru: "Тёмно Дубовая Скамейка"});




// file: new_board.js

IDRegistry.genBlockID("oak_board");
Block.createBlock("oak_board", [
	{name: "Oak Board", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Board", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Board", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Board", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_board");
Item.createItem("oak_board", "Oak Board", {name: "oak_board", meta: 0}, {stack: 64});

var oak_boardModel = ModelAPI.newArray();
oak_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5);
oak_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5);
oak_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5);
oak_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5);
oak_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5);
oak_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
oak_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5);
oak_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5);
oak_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5);
oak_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5);
oak_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5);
oak_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5);
oak_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5);
oak_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5);
oak_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5);
oak_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5);
oak_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5);
Furniture.addReplacementItem({id:"oak_board"},{id:"oak_board"}, Furniture.placeRotatableBlock(BlockID.oak_board, oak_boardModel));

IDRegistry.genBlockID("spruce_board");
Block.createBlock("spruce_board", [
	{name: "Spruce Board", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Board", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Board", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Board", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_board");
Item.createItem("spruce_board", "Spruce Board", {name: "spruce_board", meta: 0}, {stack: 64});

var spruce_boardModel = ModelAPI.newArray();
spruce_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 1);
spruce_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 1);
spruce_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 1);
spruce_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 1);
spruce_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 1);
spruce_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
spruce_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 1);
spruce_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 1);
spruce_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 1);
spruce_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 1);
spruce_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 1);
spruce_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 1);
spruce_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 1);
spruce_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 1);
spruce_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 1);
spruce_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 1);
spruce_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 1);
Furniture.addReplacementItem({id:"spruce_board"},{id:"spruce_board"}, Furniture.placeRotatableBlock(BlockID.spruce_board, spruce_boardModel));

IDRegistry.genBlockID("birch_board");
Block.createBlock("birch_board", [
	{name: "Birch Board", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Board", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Board", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Board", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_board");
Item.createItem("birch_board", "Birch Board", {name: "birch_board", meta: 0}, {stack: 64});

var birch_boardModel = ModelAPI.newArray();
birch_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 2);
birch_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 2);
birch_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 2);
birch_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 2);
birch_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 2);
birch_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
birch_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 2);
birch_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 2);
birch_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 2);
birch_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 2);
birch_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 2);
birch_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 2);
birch_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 2);
birch_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 2);
birch_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 2);
birch_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 2);
birch_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 2);
Furniture.addReplacementItem({id:"birch_board"},{id:"birch_board"}, Furniture.placeRotatableBlock(BlockID.birch_board, birch_boardModel));

IDRegistry.genBlockID("jungle_board");
Block.createBlock("jungle_board", [
	{name: "Jungle Board", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Board", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Board", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Board", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_board");
Item.createItem("jungle_board", "Jungle Board", {name: "jungle_board", meta: 0}, {stack: 64});

var jungle_boardModel = ModelAPI.newArray();
jungle_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 3);
jungle_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 3);
jungle_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 3);
jungle_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 3);
jungle_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 3);
jungle_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
jungle_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 3);
jungle_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 3);
jungle_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 3);
jungle_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 3);
jungle_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 3);
jungle_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 3);
jungle_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 3);
jungle_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 3);
jungle_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 3);
jungle_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 3);
jungle_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 3);
Furniture.addReplacementItem({id:"jungle_board"},{id:"jungle_board"}, Furniture.placeRotatableBlock(BlockID.jungle_board, jungle_boardModel));

IDRegistry.genBlockID("acacia_board");
Block.createBlock("acacia_board", [
	{name: "Acacia Board", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Board", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Board", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Board", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_board");
Item.createItem("acacia_board", "Acacia Board", {name: "acacia_board", meta: 0}, {stack: 64});

var acacia_boardModel = ModelAPI.newArray();
acacia_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 4);
acacia_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 4);
acacia_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 4);
acacia_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 4);
acacia_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 4);
acacia_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
acacia_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 4);
acacia_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 4);
acacia_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 4);
acacia_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 4);
acacia_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 4);
acacia_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 4);
acacia_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 4);
acacia_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 4);
acacia_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 4);
acacia_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 4);
acacia_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 4);
Furniture.addReplacementItem({id:"acacia_board"},{id:"acacia_board"}, Furniture.placeRotatableBlock(BlockID.acacia_board, acacia_boardModel));

IDRegistry.genBlockID("dark_oak_board");
Block.createBlock("dark_oak_board", [
	{name: "Dark Oak Board", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Board", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Board", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Board", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_board");
Item.createItem("dark_oak_board", "Dark Oak Board", {name: "dark_oak_board", meta: 0}, {stack: 64});

var dark_oak_boardModel = ModelAPI.newArray();
dark_oak_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 5);
dark_oak_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 5);
dark_oak_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
dark_oak_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 5);
dark_oak_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 5);
dark_oak_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 5);
dark_oak_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 5);
dark_oak_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 5);
dark_oak_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 5);
dark_oak_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 5);
Furniture.addReplacementItem({id:"dark_oak_board"},{id:"dark_oak_board"}, Furniture.placeRotatableBlock(BlockID.dark_oak_board, dark_oak_boardModel));

Block.setShape(BlockID.oak_board,0,0,1,1,1,1);
Block.setShape(BlockID.spruce_board,0,0,1,1,1,1);
Block.setShape(BlockID.birch_board,0,0,1,1,1,1);
Block.setShape(BlockID.jungle_board,0,0,1,1,1,1);
Block.setShape(BlockID.acacia_board,0,0,1,1,1,1);
Block.setShape(BlockID.dark_oak_board,0,0,1,1,1,1);

Translation.addTranslation("Oak Board", {ru: "Дубовая Доска"});
Translation.addTranslation("Spruce Board", {ru: "Еловая Доска"});
Translation.addTranslation("Birch Board", {ru: "Берёзовая Доска"});
Translation.addTranslation("Jungle Board", {ru: "ДжунглеваяДоска"});
Translation.addTranslation("Acacia Board", {ru: "Акациевая Доска"});
Translation.addTranslation("Dark Oak Board", {ru: "Тёмно Дубовая Доска"});

Recipes.addShaped({id: ItemID.oak_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,0, 'x', 85,0, 's', 351,2])
Recipes.addShaped({id: ItemID.spruce_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,1, 'x', 85,1, 's', 351,2])
Recipes.addShaped({id: ItemID.birch_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,2, 'x', 85,2, 's', 351,2])
Recipes.addShaped({id: ItemID.jungle_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,3, 'x', 85,3, 's', 351,2])
Recipes.addShaped({id: ItemID.acacia_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,4, 'x', 85,4, 's', 351,2])
Recipes.addShaped({id: ItemID.dark_oak_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,5, 'x', 85,5, 's', 351,2])




// file: new_bookshelf.js

IDRegistry.genBlockID("oak_bookshelf");
Block.createBlock("oak_bookshelf", [
	{name: "Oak Bookshelf", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bookshelf", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bookshelf", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bookshelf", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_bookshelf");
Item.createItem("oak_bookshelf", "Oak Bookshelf", {name: "oak_bookshelf", meta: 0}, {stack: 64});

var oak_bookshelfModel = ModelAPI.newArray();
oak_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5);
oak_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5);
oak_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5);
oak_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5);
oak_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
oak_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
oak_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
oak_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
oak_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
oak_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5);
oak_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5);
oak_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5);
oak_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5);
oak_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5);
oak_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5);
oak_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5);
oak_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5);
oak_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5);
oak_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5);
oak_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5);
oak_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5);
oak_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5);
oak_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5);
oak_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
oak_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
oak_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
oak_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"oak_bookshelf"},{id:"oak_bookshelf"}, Furniture.placeRotatableBlock(BlockID.oak_bookshelf, oak_bookshelfModel));

IDRegistry.genBlockID("spruce_bookshelf");
Block.createBlock("spruce_bookshelf", [
	{name: "Spruce Bookshelf", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bookshelf", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bookshelf", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bookshelf", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_bookshelf");
Item.createItem("spruce_bookshelf", "Spruce Bookshelf", {name: "spruce_bookshelf", meta: 0}, {stack: 64});

var spruce_bookshelfModel = ModelAPI.newArray();
spruce_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 1);
spruce_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
spruce_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
spruce_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
spruce_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
spruce_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
spruce_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 1);
spruce_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 1);
spruce_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 1);
spruce_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 1);
spruce_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 1);
spruce_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
spruce_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
spruce_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
spruce_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"spruce_bookshelf"},{id:"spruce_bookshelf"}, Furniture.placeRotatableBlock(BlockID.spruce_bookshelf, spruce_bookshelfModel));

IDRegistry.genBlockID("birch_bookshelf");
Block.createBlock("birch_bookshelf", [
	{name: "Birch Bookshelf", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bookshelf", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bookshelf", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bookshelf", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_bookshelf");
Item.createItem("birch_bookshelf", "Birch Bookshelf", {name: "birch_bookshelf", meta: 0}, {stack: 64});

var birch_bookshelfModel = ModelAPI.newArray();
birch_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 2);
birch_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
birch_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
birch_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
birch_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
birch_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
birch_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 2);
birch_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 2);
birch_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 2);
birch_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 2);
birch_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 2);
birch_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
birch_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
birch_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
birch_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"birch_bookshelf"},{id:"birch_bookshelf"}, Furniture.placeRotatableBlock(BlockID.birch_bookshelf, birch_bookshelfModel));

IDRegistry.genBlockID("jungle_bookshelf");
Block.createBlock("jungle_bookshelf", [
	{name: "Jungle Bookshelf", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bookshelf", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bookshelf", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bookshelf", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_bookshelf");
Item.createItem("jungle_bookshelf", "Jungle Bookshelf", {name: "jungle_bookshelf", meta: 0}, {stack: 64});

var jungle_bookshelfModel = ModelAPI.newArray();
jungle_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 3);
jungle_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
jungle_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
jungle_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
jungle_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
jungle_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
jungle_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 3);
jungle_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 3);
jungle_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 3);
jungle_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 3);
jungle_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 3);
jungle_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
jungle_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
jungle_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
jungle_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"jungle_bookshelf"},{id:"jungle_bookshelf"}, Furniture.placeRotatableBlock(BlockID.jungle_bookshelf, jungle_bookshelfModel));

IDRegistry.genBlockID("acacia_bookshelf");
Block.createBlock("acacia_bookshelf", [
	{name: "Acacia Bookshelf", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bookshelf", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bookshelf", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bookshelf", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_bookshelf");
Item.createItem("acacia_bookshelf", "Acacia Bookshelf", {name: "acacia_bookshelf", meta: 0}, {stack: 64});

var acacia_bookshelfModel = ModelAPI.newArray();
acacia_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 4);
acacia_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
acacia_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
acacia_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
acacia_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
acacia_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
acacia_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 4);
acacia_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 4);
acacia_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 4);
acacia_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 4);
acacia_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 4);
acacia_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
acacia_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
acacia_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
acacia_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"acacia_bookshelf"},{id:"acacia_bookshelf"}, Furniture.placeRotatableBlock(BlockID.acacia_bookshelf, acacia_bookshelfModel));

IDRegistry.genBlockID("dark_oak_bookshelf");
Block.createBlock("dark_oak_bookshelf", [
	{name: "Dark Oak Bookshelf", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bookshelf", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bookshelf", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bookshelf", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_bookshelf");
Item.createItem("dark_oak_bookshelf", "Dark Oak Bookshelf", {name: "dark_oak_bookshelf", meta: 0}, {stack: 64});

var dark_oak_bookshelfModel = ModelAPI.newArray();
dark_oak_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 5);
dark_oak_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
dark_oak_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
dark_oak_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
dark_oak_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
dark_oak_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
dark_oak_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 5);
dark_oak_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 5);
dark_oak_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 5);
dark_oak_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
dark_oak_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
dark_oak_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
dark_oak_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"dark_oak_bookshelf"},{id:"dark_oak_bookshelf"}, Furniture.placeRotatableBlock(BlockID.dark_oak_bookshelf, dark_oak_bookshelfModel));

Block.setShape(BlockID.oak_bookshelf,0,0,0,1,3,1);
Block.setShape(BlockID.spruce_bookshelf,0,0,0,1,3,1);
Block.setShape(BlockID.birch_bookshelf,0,0,0,1,3,1);
Block.setShape(BlockID.jungle_bookshelf,0,0,0,1,3,1);
Block.setShape(BlockID.acacia_bookshelf,0,0,0,1,3,1);
Block.setShape(BlockID.dark_oak_bookshelf,0,0,0,1,3,1);

Translation.addTranslation("Oak Bookshelf", {ru: "Дубовая Книжная Полка"});
Translation.addTranslation("Spruce Bookshelf", {ru: "Еловая Книжная Полка"});
Translation.addTranslation("Birch Bookshelf", {ru: "Берёзовая Книжная Полка"});
Translation.addTranslation("Jungle Bookshelf", {ru: "ДжунглеваяКнижная Полка"});
Translation.addTranslation("Acacia Bookshelf", {ru: "Акациевая Книжная Полка"});
Translation.addTranslation("Dark Oak Bookshelf", {ru: "Тёмно Дубовая Книжная Полка"});

Recipes.addShaped({id: ItemID.oak_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,0, 'x', 340,0, 's', 81,0]);
Recipes.addShaped({id: ItemID.spruce_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,1, 'x', 340,0, 's', 81,0]);
Recipes.addShaped({id: ItemID.birch_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,2, 'x', 340,0, 's', 81,0]);
Recipes.addShaped({id: ItemID.jungle_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,3, 'x', 340,0, 's', 81,0]);
Recipes.addShaped({id: ItemID.acacia_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,4, 'x', 340,0, 's', 81,0]);
Recipes.addShaped({id: ItemID.dark_oak_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,5, 'x', 340,0, 's', 81,0]);




// file: new_large_table.js

IDRegistry.genBlockID("oak_large_table");
Block.createBlock("oak_large_table", [
	{name: "Oak Large Table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Large Table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Large Table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Large Table", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_large_table");
Item.createItem("oak_large_table", "Oak Large Table", {name: "oak_large_table", meta: 0}, {stack: 64});

var oak_large_tableModel = ModelAPI.newArray();
oak_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5);
oak_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5);
oak_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
oak_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
oak_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5);
oak_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5);
oak_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5);
oak_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
oak_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
oak_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
oak_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
oak_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
oak_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
oak_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5);
oak_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5);
oak_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5);
Furniture.addReplacementItem({id:"oak_large_table"},{id:"oak_large_table"}, Furniture.placeRotatableBlock(BlockID.oak_large_table, oak_large_tableModel));

IDRegistry.genBlockID("spruce_large_table");
Block.createBlock("spruce_large_table", [
	{name: "Spruce Large Table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Large Table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Large Table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Large Table", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_large_table");
Item.createItem("spruce_large_table", "Spruce Large Table", {name: "spruce_large_table", meta: 0}, {stack: 64});

var spruce_large_tableModel = ModelAPI.newArray();
spruce_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 1);
spruce_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 1);
spruce_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
spruce_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
spruce_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 1);
spruce_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 1);
spruce_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 1);
spruce_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
spruce_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
spruce_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
spruce_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
spruce_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
spruce_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
spruce_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 1);
spruce_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 1);
spruce_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 1);
Furniture.addReplacementItem({id:"spruce_large_table"},{id:"spruce_large_table"}, Furniture.placeRotatableBlock(BlockID.spruce_large_table, spruce_large_tableModel));

IDRegistry.genBlockID("birch_large_table");
Block.createBlock("birch_large_table", [
	{name: "Birch Large Table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Large Table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Large Table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Large Table", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_large_table");
Item.createItem("birch_large_table", "Birch Large Table", {name: "birch_large_table", meta: 0}, {stack: 64});

var birch_large_tableModel = ModelAPI.newArray();
birch_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 2);
birch_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 2);
birch_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
birch_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
birch_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 2);
birch_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 2);
birch_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 2);
birch_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
birch_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
birch_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
birch_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
birch_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
birch_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
birch_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 2);
birch_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 2);
birch_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 2);
Furniture.addReplacementItem({id:"birch_large_table"},{id:"birch_large_table"}, Furniture.placeRotatableBlock(BlockID.birch_large_table, birch_large_tableModel));

IDRegistry.genBlockID("jungle_large_table");
Block.createBlock("jungle_large_table", [
	{name: "Jungle Large Table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Large Table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Large Table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Large Table", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_large_table");
Item.createItem("jungle_large_table", "Jungle Large Table", {name: "jungle_large_table", meta: 0}, {stack: 64});

var jungle_large_tableModel = ModelAPI.newArray();
jungle_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 3);
jungle_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 3);
jungle_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
jungle_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
jungle_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 3);
jungle_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 3);
jungle_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 3);
jungle_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
jungle_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
jungle_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
jungle_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
jungle_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
jungle_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
jungle_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 3);
jungle_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 3);
jungle_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 3);
Furniture.addReplacementItem({id:"jungle_large_table"},{id:"jungle_large_table"}, Furniture.placeRotatableBlock(BlockID.jungle_large_table, jungle_large_tableModel));

IDRegistry.genBlockID("acacia_large_table");
Block.createBlock("acacia_large_table", [
	{name: "Acacia Large Table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Large Table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Large Table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Large Table", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_large_table");
Item.createItem("acacia_large_table", "Acacia Large Table", {name: "acacia_large_table", meta: 0}, {stack: 64});

var acacia_large_tableModel = ModelAPI.newArray();
acacia_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 4);
acacia_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 4);
acacia_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
acacia_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
acacia_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 4);
acacia_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 4);
acacia_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 4);
acacia_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
acacia_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
acacia_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
acacia_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
acacia_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
acacia_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
acacia_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 4);
acacia_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 4);
acacia_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 4);
Furniture.addReplacementItem({id:"acacia_large_table"},{id:"acacia_large_table"}, Furniture.placeRotatableBlock(BlockID.acacia_large_table, acacia_large_tableModel));

IDRegistry.genBlockID("dark_oak_large_table");
Block.createBlock("dark_oak_large_table", [
	{name: "Dark Oak Large Table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Large Table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Large Table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Large Table", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_large_table");
Item.createItem("dark_oak_large_table", "Dark Oak Large Table", {name: "dark_oak_large_table", meta: 0}, {stack: 64});

var dark_oak_large_tableModel = ModelAPI.newArray();
dark_oak_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 5);
dark_oak_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 5);
dark_oak_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
dark_oak_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
dark_oak_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 5);
dark_oak_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 5);
dark_oak_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 5);
dark_oak_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
dark_oak_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
dark_oak_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
dark_oak_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
dark_oak_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
dark_oak_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
dark_oak_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 5);
dark_oak_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 5);
dark_oak_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 5);
Furniture.addReplacementItem({id:"dark_oak_large_table"},{id:"dark_oak_large_table"}, Furniture.placeRotatableBlock(BlockID.dark_oak_large_table, dark_oak_large_tableModel));

Translation.addTranslation("Oak Large Table", {ru: "Дубовая Большая Стол"});
Translation.addTranslation("Spruce Large Table", {ru: "Еловая Большая Стол"});
Translation.addTranslation("Birch Large Table", {ru: "Берёзовая Большая Стол"});
Translation.addTranslation("Jungle Large Table", {ru: "Джунглевая Большая Стол"});
Translation.addTranslation("Acacia Large Table", {ru: "Акациевая Большая Стол"});
Translation.addTranslation("Dark Oak Large Table", {ru: "Тёмно Дубовая Большая Стол"});

Recipes.addShaped({id: ItemID.oak_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,0, 'x', 158,0]);
Recipes.addShaped({id: ItemID.spruce_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,1, 'x', 158,1]);
Recipes.addShaped({id: ItemID.birch_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,2, 'x', 158,2]);
Recipes.addShaped({id: ItemID.jungle_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,3, 'x', 158,3]);
Recipes.addShaped({id: ItemID.acacia_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,4, 'x', 158,4]);
Recipes.addShaped({id: ItemID.dark_oak_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,5, 'x', 158,5]);




// file: new_bedside_table.js

IDRegistry.genBlockID("oak_bedside_table");
Block.createBlockWithRotation("oak_bedside_table", [
	{name: "oak_bedside_table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "oak_bedside_table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "oak_bedside_table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "oak_bedside_table", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_bedside_table");
Item.createItem("oak_bedside_table", "Oak Bedside Table", {name: "oak_bedside_table", meta: 0}, {stack: 64});

var oak_bedside_tableModel = ModelAPI.newArray();
oak_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5);
oak_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
oak_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
oak_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5);
oak_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
oak_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
oak_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5);
oak_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5);
oak_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5);
oak_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5);
oak_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5);
oak_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
oak_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
oak_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
oak_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
oak_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"oak_bedside_table"},{id:"oak_bedside_table"}, Furniture.placeRotatableBlock(BlockID.oak_bedside_table, oak_bedside_tableModel));

let oak_bedside_tableModel = new BlockRenderer.Model();
oak_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 0);
oak_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
oak_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
oak_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 0);
oak_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
oak_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
oak_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 0);
oak_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 0);
oak_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 0);
oak_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 0);
oak_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 0);
oak_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
oak_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
oak_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
oak_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
oak_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.oak_bedside_table, 0).setModel(oak_bedside_tableModel);

IDRegistry.genBlockID("spruce_bedside_table");
Block.createBlock("spruce_bedside_table", [
	{name: "spruce_bedside_table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "spruce_bedside_table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "spruce_bedside_table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "spruce_bedside_table", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_bedside_table");
Item.createItem("spruce_bedside_table", "Spruce Bedside Table", {name: "spruce_bedside_table", meta: 0}, {stack: 64});

var spruce_bedside_tableModel = ModelAPI.newArray();
spruce_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 1);
spruce_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
spruce_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
spruce_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 1);
spruce_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
spruce_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
spruce_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 1);
spruce_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 1);
spruce_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 1);
spruce_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 1);
spruce_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 1);
spruce_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
spruce_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
spruce_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
spruce_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
spruce_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"spruce_bedside_table"},{id:"spruce_bedside_table"}, Furniture.placeRotatableBlock(BlockID.spruce_bedside_table, spruce_bedside_tableModel));

let spruce_bedside_tableModel = new BlockRenderer.Model();
spruce_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 1);
spruce_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
spruce_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
spruce_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 1);
spruce_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
spruce_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
spruce_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 1);
spruce_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 1);
spruce_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 1);
spruce_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 1);
spruce_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 1);
spruce_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
spruce_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
spruce_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
spruce_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
spruce_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.spruce_bedside_table, 0).setModel(spruce_bedside_tableModel);

IDRegistry.genBlockID("birch_bedside_table");
Block.createBlock("birch_bedside_table", [
	{name: "birch_bedside_table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "birch_bedside_table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "birch_bedside_table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "birch_bedside_table", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_bedside_table");
Item.createItem("birch_bedside_table", "Birch Bedside Table", {name: "birch_bedside_table", meta: 0}, {stack: 64});

var birch_bedside_tableModel = ModelAPI.newArray();
birch_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 2);
birch_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
birch_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
birch_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 2);
birch_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
birch_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
birch_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 2);
birch_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 2);
birch_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 2);
birch_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 2);
birch_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 2);
birch_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
birch_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
birch_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
birch_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
birch_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"birch_bedside_table"},{id:"birch_bedside_table"}, Furniture.placeRotatableBlock(BlockID.birch_bedside_table, birch_bedside_tableModel));

let birch_bedside_tableModel = new BlockRenderer.Model();
birch_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 2);
birch_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
birch_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
birch_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 2);
birch_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
birch_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
birch_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 2);
birch_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 2);
birch_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 2);
birch_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 2);
birch_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 2);
birch_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
birch_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
birch_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
birch_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
birch_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.birch_bedside_table, 0).setModel(birch_bedside_tableModel);

IDRegistry.genBlockID("jungle_bedside_table");
Block.createBlock("jungle_bedside_table", [
	{name: "jungle_bedside_table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "jungle_bedside_table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "jungle_bedside_table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "jungle_bedside_table", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_bedside_table");
Item.createItem("jungle_bedside_table", "Jungle Bedside Table", {name: "jungle_bedside_table", meta: 0}, {stack: 64});

var jungle_bedside_tableModel = ModelAPI.newArray();
jungle_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 3);
jungle_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
jungle_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
jungle_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 3);
jungle_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
jungle_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
jungle_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 3);
jungle_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 3);
jungle_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 3);
jungle_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 3);
jungle_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 3);
jungle_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
jungle_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
jungle_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
jungle_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
jungle_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"jungle_bedside_table"},{id:"jungle_bedside_table"}, Furniture.placeRotatableBlock(BlockID.jungle_bedside_table, jungle_bedside_tableModel));

let jungle_bedside_tableModel = new BlockRenderer.Model();
jungle_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 3);
jungle_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
jungle_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
jungle_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 3);
jungle_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
jungle_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
jungle_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 3);
jungle_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 3);
jungle_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 3);
jungle_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 3);
jungle_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 3);
jungle_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
jungle_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
jungle_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
jungle_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
jungle_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.jungle_bedside_table, 0).setModel(jungle_bedside_tableModel);

IDRegistry.genBlockID("acacia_bedside_table");
Block.createBlock("acacia_bedside_table", [
	{name: "acacia_bedside_table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "acacia_bedside_table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "acacia_bedside_table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "acacia_bedside_table", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_bedside_table");
Item.createItem("acacia_bedside_table", "Acacia Bedside Table", {name: "acacia_bedside_table", meta: 0}, {stack: 64});

var acacia_bedside_tableModel = ModelAPI.newArray();
acacia_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 4);
acacia_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
acacia_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
acacia_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 4);
acacia_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
acacia_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
acacia_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 4);
acacia_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 4);
acacia_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 4);
acacia_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 4);
acacia_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 4);
acacia_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
acacia_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
acacia_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
acacia_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
acacia_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"acacia_bedside_table"},{id:"acacia_bedside_table"}, Furniture.placeRotatableBlock(BlockID.acacia_bedside_table, acacia_bedside_tableModel));

let acacia_bedside_tableModel = new BlockRenderer.Model();
acacia_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 4);
acacia_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
acacia_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
acacia_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 4);
acacia_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
acacia_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
acacia_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 4);
acacia_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 4);
acacia_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 4);
acacia_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 4);
acacia_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 4);
acacia_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
acacia_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
acacia_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
acacia_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
acacia_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.acacia_bedside_table, 0).setModel(acacia_bedside_tableModel);

IDRegistry.genBlockID("dark_oak_bedside_table");
Block.createBlock("dark_oak_bedside_table", [
	{name: "dark_oak_bedside_table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "dark_oak_bedside_table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "dark_oak_bedside_table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "dark_oak_bedside_table", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_bedside_table");
Item.createItem("dark_oak_bedside_table", "Dark Oak Bedside Table", {name: "dark_oak_bedside_table", meta: 0}, {stack: 64});

var dark_oak_bedside_tableModel = ModelAPI.newArray();
dark_oak_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"dark_oak_bedside_table"},{id:"dark_oak_bedside_table"}, Furniture.placeRotatableBlock(BlockID.dark_oak_bedside_table, dark_oak_bedside_tableModel));

let dark_oak_bedside_tableModel = new BlockRenderer.Model();
dark_oak_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 5);
dark_oak_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
dark_oak_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
dark_oak_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 5);
dark_oak_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
dark_oak_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 5);
dark_oak_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 5);
dark_oak_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 5);
dark_oak_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 5);
dark_oak_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 5);
dark_oak_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
dark_oak_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.dark_oak_bedside_table, 0).setModel(dark_oak_bedside_tableModel);

//translation night stands
Translation.addTranslation("Oak Bedside Table", {ru: "Дубовая Прикроватная Тумбочка"});
Translation.addTranslation("Spruce Bedside Table", {ru: "Еловая Прикроватная Тумбочка"});
Translation.addTranslation("Birch Bedside Table", {ru: "Берёзовая Прикроватная Тумбочка "});
Translation.addTranslation("Jungle Bedside Table", {ru: "Джунглевая Прикроватная Тумбочка"});
Translation.addTranslation("Acacia Bedside Table", {ru: "Акациевая Прикроватная Тумбочка"});
Translation.addTranslation("Dark Oak Bedside Table", {ru: "Тёмно Дубовая Прикроватная Тумбочка"});

//recipes night stands
Recipes.addShaped({id: ItemID.oak_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,0, 'x', 85,0, 'c', 54,0]);
Recipes.addShaped({id: ItemID.spruce_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,1, 'x', 85,1, 'c', 54,0]);
Recipes.addShaped({id: ItemID.birch_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,2, 'x', 85,2, 'c', 54,0]);
Recipes.addShaped({id: ItemID.jungle_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,3, 'x', 85,3, 'c', 54,0]);
Recipes.addShaped({id: ItemID.acacia_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,4, 'x', 85,4, 'c', 54,0]);
Recipes.addShaped({id: ItemID.dark_oak_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,5, 'x', 85,5, 'c', 54,0]);




// file: new_desktop.js

IDRegistry.genBlockID("oak_desktop");
Block.createBlock("oak_desktop", [
	{name: "Oak Desktop", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desktop", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desktop", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desktop", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_desktop");
Item.createItem("oak_desktop", "Oak Desktop", {name: "oak_desktop", meta: 0}, {stack: 64});

var oak_desktopModel = ModelAPI.newArray();
oak_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5);
oak_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
oak_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
oak_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
oak_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5);
oak_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5);
oak_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
oak_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
oak_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
oak_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5);
oak_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5);
oak_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5);
oak_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5);
oak_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5);
oak_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5);
oak_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5);
oak_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
oak_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
oak_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
oak_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
oak_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"oak_desktop"},{id:"oak_desktop"}, Furniture.placeRotatableBlock(BlockID.oak_desktop, oak_desktopModel));

IDRegistry.genBlockID("spruce_desktop");
Block.createBlock("spruce_desktop", [
	{name: "Spruce Desktop", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desktop", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desktop", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desktop", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_desktop");
Item.createItem("spruce_desktop", "Spruce Desktop", {name: "spruce_desktop", meta: 0}, {stack: 64});

var spruce_desktopModel = ModelAPI.newArray();
spruce_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 1);
spruce_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
spruce_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
spruce_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
spruce_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 1);
spruce_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 1);
spruce_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
spruce_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
spruce_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
spruce_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 1);
spruce_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 1);
spruce_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 1);
spruce_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 1);
spruce_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 1);
spruce_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 1);
spruce_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 1);
spruce_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
spruce_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
spruce_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
spruce_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
spruce_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"spruce_desktop"},{id:"spruce_desktop"}, Furniture.placeRotatableBlock(BlockID.spruce_desktop, spruce_desktopModel));

IDRegistry.genBlockID("birch_desktop");
Block.createBlock("birch_desktop", [
	{name: "Birch Desktop", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desktop", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desktop", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desktop", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_desktop");
Item.createItem("birch_desktop", "Birch Desktop", {name: "birch_desktop", meta: 0}, {stack: 64});

var birch_desktopModel = ModelAPI.newArray();
birch_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 2);
birch_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
birch_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
birch_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
birch_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 2);
birch_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 2);
birch_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
birch_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
birch_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
birch_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 2);
birch_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 2);
birch_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 2);
birch_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 2);
birch_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 2);
birch_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 2);
birch_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 2);
birch_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
birch_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
birch_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
birch_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
birch_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"birch_desktop"},{id:"birch_desktop"}, Furniture.placeRotatableBlock(BlockID.birch_desktop, birch_desktopModel));

IDRegistry.genBlockID("jungle_desktop");
Block.createBlock("jungle_desktop", [
	{name: "Jungle Desktop", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desktop", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desktop", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desktop", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_desktop");
Item.createItem("jungle_desktop", "Jungle Desktop", {name: "jungle_desktop", meta: 0}, {stack: 64});

var jungle_desktopModel = ModelAPI.newArray();
jungle_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 3);
jungle_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
jungle_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
jungle_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
jungle_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 3);
jungle_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 3);
jungle_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
jungle_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
jungle_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
jungle_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 3);
jungle_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 3);
jungle_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 3);
jungle_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 3);
jungle_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 3);
jungle_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 3);
jungle_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 3);
jungle_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
jungle_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
jungle_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
jungle_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
jungle_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"jungle_desktop"},{id:"jungle_desktop"}, Furniture.placeRotatableBlock(BlockID.jungle_desktop, jungle_desktopModel));

IDRegistry.genBlockID("acacia_desktop");
Block.createBlock("acacia_desktop", [
	{name: "Acacia Desktop", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desktop", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desktop", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desktop", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_desktop");
Item.createItem("acacia_desktop", "Acacia Desktop", {name: "acacia_desktop", meta: 0}, {stack: 64});

var acacia_desktopModel = ModelAPI.newArray();
acacia_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 4);
acacia_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
acacia_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
acacia_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
acacia_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 4);
acacia_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 4);
acacia_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
acacia_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
acacia_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
acacia_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 4);
acacia_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 4);
acacia_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 4);
acacia_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 4);
acacia_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 4);
acacia_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 4);
acacia_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 4);
acacia_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
acacia_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
acacia_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
acacia_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
acacia_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"acacia_desktop"},{id:"acacia_desktop"}, Furniture.placeRotatableBlock(BlockID.acacia_desktop, acacia_desktopModel));

IDRegistry.genBlockID("dark_oak_desktop");
Block.createBlock("dark_oak_desktop", [
	{name: "Dark Oak Desktop", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desktop", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desktop", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desktop", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_desktop");
Item.createItem("dark_oak_desktop", "Dark Oak Desktop", {name: "dark_oak_desktop", meta: 0}, {stack: 64});

var dark_oak_desktopModel = ModelAPI.newArray();
dark_oak_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 5);
dark_oak_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
dark_oak_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
dark_oak_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
dark_oak_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 5);
dark_oak_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 5);
dark_oak_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
dark_oak_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
dark_oak_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
dark_oak_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 5);
dark_oak_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 5);
dark_oak_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 5);
dark_oak_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 5);
dark_oak_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 5);
dark_oak_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 5);
dark_oak_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 5);
dark_oak_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
dark_oak_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
dark_oak_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
dark_oak_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
dark_oak_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"dark_oak_desktop"},{id:"dark_oak_desktop"}, Furniture.placeRotatableBlock(BlockID.dark_oak_desktop, dark_oak_desktopModel));

Translation.addTranslation("Oak Desktop", {ru: "Дубовая Рабочий Стол"});
Translation.addTranslation("Spruce Desktop", {ru: "Еловая Рабочий Стол"});
Translation.addTranslation("Birch Desktop", {ru: "Берёзовая Рабочий Стол"});
Translation.addTranslation("Jungle Desktop", {ru: "Джунглевая Рабочий Стол"});
Translation.addTranslation("Acacia Desktop", {ru: "Акациевая Рабочий Стол"});
Translation.addTranslation("Dark Oak Desktop", {ru: "Тёмно Дубовая Рабочий Стол"});

Recipes.addShaped({id: ItemID.oak_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,0, 'z', 158,0])
Recipes.addShaped({id: ItemID.spruce_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,1, 'z', 158,1])
Recipes.addShaped({id: ItemID.birch_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,2, 'z', 158,2])
Recipes.addShaped({id: ItemID.jungle_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,3, 'z', 158,3])
Recipes.addShaped({id: ItemID.acacia_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,4, 'z', 158,4])
Recipes.addShaped({id: ItemID.dark_oak_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,5, 'z', 158,5])




// file: new_barrel_gui.js

var barreloakUI=new UI.StandartWindow({standart:{header:{text:{text:"Barrel"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50}}});
TileEntity.registerPrototype(BlockID.oak_barrel,{getGuiScreen:function(){return barreloakUI}});

var barrelspruceUI=new UI.StandartWindow({standart:{header:{text:{text:"Barrel"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50}}});
TileEntity.registerPrototype(BlockID.spruce_barrel,{getGuiScreen:function(){return barrelspruceUI}});

var barrelbrichUI=new UI.StandartWindow({standart:{header:{text:{text:"Barrel"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50}}});
TileEntity.registerPrototype(BlockID.birch_barrel,{getGuiScreen:function(){return barrelbrichUI}});

var barreljungleUI=new UI.StandartWindow({standart:{header:{text:{text:"Barrel"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50}}});
TileEntity.registerPrototype(BlockID.jungle_barrel,{getGuiScreen:function(){return barreljungleUI}});

var barrelacaciaUI=new UI.StandartWindow({standart:{header:{text:{text:"Barrel"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50}}});
TileEntity.registerPrototype(BlockID.acacia_barrel,{getGuiScreen:function(){return barrelacaciaUI}});

var barrelbigoakUI=new UI.StandartWindow({standart:{header:{text:{text:"Barrel"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50}}});
TileEntity.registerPrototype(BlockID.dark_oak_barrel,{getGuiScreen:function(){return barrelbigoakUI}});




// file: new_chest_gui.js

var chestoakUI=new UI.StandartWindow({standart:{header:{text:{text:"Oak Big Chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50},
slot28:{type:"slot",x:425,y:190,size:50},
slot29:{type:"slot",x:475,y:190,size:50},
slot30:{type:"slot",x:525,y:190,size:50},
slot31:{type:"slot",x:575,y:190,size:50},
slot32:{type:"slot",x:625,y:190,size:50},
slot33:{type:"slot",x:675,y:190,size:50},
slot34:{type:"slot",x:725,y:190,size:50},
slot35:{type:"slot",x:775,y:190,size:50},
slot36:{type:"slot",x:825,y:190,size:50},
slot37:{type:"slot",x:425,y:240,size:50},
slot38:{type:"slot",x:475,y:240,size:50},
slot39:{type:"slot",x:525,y:240,size:50},
slot40:{type:"slot",x:575,y:240,size:50},
slot41:{type:"slot",x:625,y:240,size:50},
slot42:{type:"slot",x:675,y:240,size:50},
slot43:{type:"slot",x:725,y:240,size:50},
slot44:{type:"slot",x:775,y:240,size:50},
slot45:{type:"slot",x:825,y:240,size:50},
slot46:{type:"slot",x:425,y:290,size:50},
slot47:{type:"slot",x:475,y:290,size:50},
slot48:{type:"slot",x:525,y:290,size:50},
slot49:{type:"slot",x:575,y:290,size:50},
slot50:{type:"slot",x:625,y:290,size:50},
slot51:{type:"slot",x:675,y:290,size:50},
slot52:{type:"slot",x:725,y:290,size:50},
slot53:{type:"slot",x:775,y:290,size:50},
slot54:{type:"slot",x:825,y:290,size:50},
slot55:{type:"slot",x:425,y:340,size:50},
slot56:{type:"slot",x:475,y:340,size:50},
slot57:{type:"slot",x:525,y:340,size:50},
slot58:{type:"slot",x:575,y:340,size:50},
slot59:{type:"slot",x:625,y:340,size:50},
slot60:{type:"slot",x:675,y:340,size:50},
slot61:{type:"slot",x:725,y:340,size:50},
slot62:{type:"slot",x:775,y:340,size:50},
slot63:{type:"slot",x:825,y:340,size:50},
slot64:{type:"slot",x:425,y:390,size:50},
slot65:{type:"slot",x:475,y:390,size:50},
slot66:{type:"slot",x:525,y:390,size:50},
slot67:{type:"slot",x:575,y:390,size:50},
slot68:{type:"slot",x:625,y:390,size:50},
slot69:{type:"slot",x:675,y:390,size:50},
slot70:{type:"slot",x:725,y:390,size:50},
slot71:{type:"slot",x:775,y:390,size:50},
slot72:{type:"slot",x:825,y:390,size:50},
}});
TileEntity.registerPrototype(BlockID.oak_chest,{getGuiScreen:function(){return chestoakUI}});

var chestspruceUI=new UI.StandartWindow({standart:{header:{text:{text:"Spruce Big Chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50},
slot28:{type:"slot",x:425,y:190,size:50},
slot29:{type:"slot",x:475,y:190,size:50},
slot30:{type:"slot",x:525,y:190,size:50},
slot31:{type:"slot",x:575,y:190,size:50},
slot32:{type:"slot",x:625,y:190,size:50},
slot33:{type:"slot",x:675,y:190,size:50},
slot34:{type:"slot",x:725,y:190,size:50},
slot35:{type:"slot",x:775,y:190,size:50},
slot36:{type:"slot",x:825,y:190,size:50},
slot37:{type:"slot",x:425,y:240,size:50},
slot38:{type:"slot",x:475,y:240,size:50},
slot39:{type:"slot",x:525,y:240,size:50},
slot40:{type:"slot",x:575,y:240,size:50},
slot41:{type:"slot",x:625,y:240,size:50},
slot42:{type:"slot",x:675,y:240,size:50},
slot43:{type:"slot",x:725,y:240,size:50},
slot44:{type:"slot",x:775,y:240,size:50},
slot45:{type:"slot",x:825,y:240,size:50},
slot46:{type:"slot",x:425,y:290,size:50},
slot47:{type:"slot",x:475,y:290,size:50},
slot48:{type:"slot",x:525,y:290,size:50},
slot49:{type:"slot",x:575,y:290,size:50},
slot50:{type:"slot",x:625,y:290,size:50},
slot51:{type:"slot",x:675,y:290,size:50},
slot52:{type:"slot",x:725,y:290,size:50},
slot53:{type:"slot",x:775,y:290,size:50},
slot54:{type:"slot",x:825,y:290,size:50},
slot55:{type:"slot",x:425,y:340,size:50},
slot56:{type:"slot",x:475,y:340,size:50},
slot57:{type:"slot",x:525,y:340,size:50},
slot58:{type:"slot",x:575,y:340,size:50},
slot59:{type:"slot",x:625,y:340,size:50},
slot60:{type:"slot",x:675,y:340,size:50},
slot61:{type:"slot",x:725,y:340,size:50},
slot62:{type:"slot",x:775,y:340,size:50},
slot63:{type:"slot",x:825,y:340,size:50},
slot64:{type:"slot",x:425,y:390,size:50},
slot65:{type:"slot",x:475,y:390,size:50},
slot66:{type:"slot",x:525,y:390,size:50},
slot67:{type:"slot",x:575,y:390,size:50},
slot68:{type:"slot",x:625,y:390,size:50},
slot69:{type:"slot",x:675,y:390,size:50},
slot70:{type:"slot",x:725,y:390,size:50},
slot71:{type:"slot",x:775,y:390,size:50},
slot72:{type:"slot",x:825,y:390,size:50},
}});
TileEntity.registerPrototype(BlockID.spruce_chest,{getGuiScreen:function(){return chestspruceUI}});

var chestbrichUI=new UI.StandartWindow({standart:{header:{text:{text:"Birch Big Chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50},
slot28:{type:"slot",x:425,y:190,size:50},
slot29:{type:"slot",x:475,y:190,size:50},
slot30:{type:"slot",x:525,y:190,size:50},
slot31:{type:"slot",x:575,y:190,size:50},
slot32:{type:"slot",x:625,y:190,size:50},
slot33:{type:"slot",x:675,y:190,size:50},
slot34:{type:"slot",x:725,y:190,size:50},
slot35:{type:"slot",x:775,y:190,size:50},
slot36:{type:"slot",x:825,y:190,size:50},
slot37:{type:"slot",x:425,y:240,size:50},
slot38:{type:"slot",x:475,y:240,size:50},
slot39:{type:"slot",x:525,y:240,size:50},
slot40:{type:"slot",x:575,y:240,size:50},
slot41:{type:"slot",x:625,y:240,size:50},
slot42:{type:"slot",x:675,y:240,size:50},
slot43:{type:"slot",x:725,y:240,size:50},
slot44:{type:"slot",x:775,y:240,size:50},
slot45:{type:"slot",x:825,y:240,size:50},
slot46:{type:"slot",x:425,y:290,size:50},
slot47:{type:"slot",x:475,y:290,size:50},
slot48:{type:"slot",x:525,y:290,size:50},
slot49:{type:"slot",x:575,y:290,size:50},
slot50:{type:"slot",x:625,y:290,size:50},
slot51:{type:"slot",x:675,y:290,size:50},
slot52:{type:"slot",x:725,y:290,size:50},
slot53:{type:"slot",x:775,y:290,size:50},
slot54:{type:"slot",x:825,y:290,size:50},
slot55:{type:"slot",x:425,y:340,size:50},
slot56:{type:"slot",x:475,y:340,size:50},
slot57:{type:"slot",x:525,y:340,size:50},
slot58:{type:"slot",x:575,y:340,size:50},
slot59:{type:"slot",x:625,y:340,size:50},
slot60:{type:"slot",x:675,y:340,size:50},
slot61:{type:"slot",x:725,y:340,size:50},
slot62:{type:"slot",x:775,y:340,size:50},
slot63:{type:"slot",x:825,y:340,size:50},
slot64:{type:"slot",x:425,y:390,size:50},
slot65:{type:"slot",x:475,y:390,size:50},
slot66:{type:"slot",x:525,y:390,size:50},
slot67:{type:"slot",x:575,y:390,size:50},
slot68:{type:"slot",x:625,y:390,size:50},
slot69:{type:"slot",x:675,y:390,size:50},
slot70:{type:"slot",x:725,y:390,size:50},
slot71:{type:"slot",x:775,y:390,size:50},
slot72:{type:"slot",x:825,y:390,size:50},
}});
TileEntity.registerPrototype(BlockID.birch_chest,{getGuiScreen:function(){return chestbrichUI}});

var chestjungleUI=new UI.StandartWindow({standart:{header:{text:{text:"Jungle Big Chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50},
slot28:{type:"slot",x:425,y:190,size:50},
slot29:{type:"slot",x:475,y:190,size:50},
slot30:{type:"slot",x:525,y:190,size:50},
slot31:{type:"slot",x:575,y:190,size:50},
slot32:{type:"slot",x:625,y:190,size:50},
slot33:{type:"slot",x:675,y:190,size:50},
slot34:{type:"slot",x:725,y:190,size:50},
slot35:{type:"slot",x:775,y:190,size:50},
slot36:{type:"slot",x:825,y:190,size:50},
slot37:{type:"slot",x:425,y:240,size:50},
slot38:{type:"slot",x:475,y:240,size:50},
slot39:{type:"slot",x:525,y:240,size:50},
slot40:{type:"slot",x:575,y:240,size:50},
slot41:{type:"slot",x:625,y:240,size:50},
slot42:{type:"slot",x:675,y:240,size:50},
slot43:{type:"slot",x:725,y:240,size:50},
slot44:{type:"slot",x:775,y:240,size:50},
slot45:{type:"slot",x:825,y:240,size:50},
slot46:{type:"slot",x:425,y:290,size:50},
slot47:{type:"slot",x:475,y:290,size:50},
slot48:{type:"slot",x:525,y:290,size:50},
slot49:{type:"slot",x:575,y:290,size:50},
slot50:{type:"slot",x:625,y:290,size:50},
slot51:{type:"slot",x:675,y:290,size:50},
slot52:{type:"slot",x:725,y:290,size:50},
slot53:{type:"slot",x:775,y:290,size:50},
slot54:{type:"slot",x:825,y:290,size:50},
slot55:{type:"slot",x:425,y:340,size:50},
slot56:{type:"slot",x:475,y:340,size:50},
slot57:{type:"slot",x:525,y:340,size:50},
slot58:{type:"slot",x:575,y:340,size:50},
slot59:{type:"slot",x:625,y:340,size:50},
slot60:{type:"slot",x:675,y:340,size:50},
slot61:{type:"slot",x:725,y:340,size:50},
slot62:{type:"slot",x:775,y:340,size:50},
slot63:{type:"slot",x:825,y:340,size:50},
slot64:{type:"slot",x:425,y:390,size:50},
slot65:{type:"slot",x:475,y:390,size:50},
slot66:{type:"slot",x:525,y:390,size:50},
slot67:{type:"slot",x:575,y:390,size:50},
slot68:{type:"slot",x:625,y:390,size:50},
slot69:{type:"slot",x:675,y:390,size:50},
slot70:{type:"slot",x:725,y:390,size:50},
slot71:{type:"slot",x:775,y:390,size:50},
slot72:{type:"slot",x:825,y:390,size:50},
}});
TileEntity.registerPrototype(BlockID.jungle_chest,{getGuiScreen:function(){return chestjungleUI}});

var chestacaciaUI=new UI.StandartWindow({standart:{header:{text:{text:"Acacia Big Chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50},
slot28:{type:"slot",x:425,y:190,size:50},
slot29:{type:"slot",x:475,y:190,size:50},
slot30:{type:"slot",x:525,y:190,size:50},
slot31:{type:"slot",x:575,y:190,size:50},
slot32:{type:"slot",x:625,y:190,size:50},
slot33:{type:"slot",x:675,y:190,size:50},
slot34:{type:"slot",x:725,y:190,size:50},
slot35:{type:"slot",x:775,y:190,size:50},
slot36:{type:"slot",x:825,y:190,size:50},
slot37:{type:"slot",x:425,y:240,size:50},
slot38:{type:"slot",x:475,y:240,size:50},
slot39:{type:"slot",x:525,y:240,size:50},
slot40:{type:"slot",x:575,y:240,size:50},
slot41:{type:"slot",x:625,y:240,size:50},
slot42:{type:"slot",x:675,y:240,size:50},
slot43:{type:"slot",x:725,y:240,size:50},
slot44:{type:"slot",x:775,y:240,size:50},
slot45:{type:"slot",x:825,y:240,size:50},
slot46:{type:"slot",x:425,y:290,size:50},
slot47:{type:"slot",x:475,y:290,size:50},
slot48:{type:"slot",x:525,y:290,size:50},
slot49:{type:"slot",x:575,y:290,size:50},
slot50:{type:"slot",x:625,y:290,size:50},
slot51:{type:"slot",x:675,y:290,size:50},
slot52:{type:"slot",x:725,y:290,size:50},
slot53:{type:"slot",x:775,y:290,size:50},
slot54:{type:"slot",x:825,y:290,size:50},
slot55:{type:"slot",x:425,y:340,size:50},
slot56:{type:"slot",x:475,y:340,size:50},
slot57:{type:"slot",x:525,y:340,size:50},
slot58:{type:"slot",x:575,y:340,size:50},
slot59:{type:"slot",x:625,y:340,size:50},
slot60:{type:"slot",x:675,y:340,size:50},
slot61:{type:"slot",x:725,y:340,size:50},
slot62:{type:"slot",x:775,y:340,size:50},
slot63:{type:"slot",x:825,y:340,size:50},
slot64:{type:"slot",x:425,y:390,size:50},
slot65:{type:"slot",x:475,y:390,size:50},
slot66:{type:"slot",x:525,y:390,size:50},
slot67:{type:"slot",x:575,y:390,size:50},
slot68:{type:"slot",x:625,y:390,size:50},
slot69:{type:"slot",x:675,y:390,size:50},
slot70:{type:"slot",x:725,y:390,size:50},
slot71:{type:"slot",x:775,y:390,size:50},
slot72:{type:"slot",x:825,y:390,size:50},
}});
TileEntity.registerPrototype(BlockID.acacia_chest,{getGuiScreen:function(){return chestacaciaUI}});

var chestbigoakUI=new UI.StandartWindow({standart:{header:{text:{text:"Dark Oak Big Chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},
slot11:{type:"slot",x:475,y:90,size:50},
slot12:{type:"slot",x:525,y:90,size:50},
slot13:{type:"slot",x:575,y:90,size:50},
slot14:{type:"slot",x:625,y:90,size:50},
slot15:{type:"slot",x:675,y:90,size:50},
slot16:{type:"slot",x:725,y:90,size:50},
slot17:{type:"slot",x:775,y:90,size:50},
slot18:{type:"slot",x:825,y:90,size:50},
slot19:{type:"slot",x:425,y:140,size:50},
slot20:{type:"slot",x:475,y:140,size:50},
slot21:{type:"slot",x:525,y:140,size:50},
slot22:{type:"slot",x:575,y:140,size:50},
slot23:{type:"slot",x:625,y:140,size:50},
slot24:{type:"slot",x:675,y:140,size:50},
slot25:{type:"slot",x:725,y:140,size:50},
slot26:{type:"slot",x:775,y:140,size:50},
slot27:{type:"slot",x:825,y:140,size:50},
slot28:{type:"slot",x:425,y:190,size:50},
slot29:{type:"slot",x:475,y:190,size:50},
slot30:{type:"slot",x:525,y:190,size:50},
slot31:{type:"slot",x:575,y:190,size:50},
slot32:{type:"slot",x:625,y:190,size:50},
slot33:{type:"slot",x:675,y:190,size:50},
slot34:{type:"slot",x:725,y:190,size:50},
slot35:{type:"slot",x:775,y:190,size:50},
slot36:{type:"slot",x:825,y:190,size:50},
slot37:{type:"slot",x:425,y:240,size:50},
slot38:{type:"slot",x:475,y:240,size:50},
slot39:{type:"slot",x:525,y:240,size:50},
slot40:{type:"slot",x:575,y:240,size:50},
slot41:{type:"slot",x:625,y:240,size:50},
slot42:{type:"slot",x:675,y:240,size:50},
slot43:{type:"slot",x:725,y:240,size:50},
slot44:{type:"slot",x:775,y:240,size:50},
slot45:{type:"slot",x:825,y:240,size:50},
slot46:{type:"slot",x:425,y:290,size:50},
slot47:{type:"slot",x:475,y:290,size:50},
slot48:{type:"slot",x:525,y:290,size:50},
slot49:{type:"slot",x:575,y:290,size:50},
slot50:{type:"slot",x:625,y:290,size:50},
slot51:{type:"slot",x:675,y:290,size:50},
slot52:{type:"slot",x:725,y:290,size:50},
slot53:{type:"slot",x:775,y:290,size:50},
slot54:{type:"slot",x:825,y:290,size:50},
slot55:{type:"slot",x:425,y:340,size:50},
slot56:{type:"slot",x:475,y:340,size:50},
slot57:{type:"slot",x:525,y:340,size:50},
slot58:{type:"slot",x:575,y:340,size:50},
slot59:{type:"slot",x:625,y:340,size:50},
slot60:{type:"slot",x:675,y:340,size:50},
slot61:{type:"slot",x:725,y:340,size:50},
slot62:{type:"slot",x:775,y:340,size:50},
slot63:{type:"slot",x:825,y:340,size:50},
slot64:{type:"slot",x:425,y:390,size:50},
slot65:{type:"slot",x:475,y:390,size:50},
slot66:{type:"slot",x:525,y:390,size:50},
slot67:{type:"slot",x:575,y:390,size:50},
slot68:{type:"slot",x:625,y:390,size:50},
slot69:{type:"slot",x:675,y:390,size:50},
slot70:{type:"slot",x:725,y:390,size:50},
slot71:{type:"slot",x:775,y:390,size:50},
slot72:{type:"slot",x:825,y:390,size:50},
}});
TileEntity.registerPrototype(BlockID.dark_oak_chest,{getGuiScreen:function(){return chestbigoakUI}});




// file: new_bedside_table_gui.js

var nightstandoakUI=new UI.StandartWindow({standart:{header:{text:{text:"Oak Bedside Table"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.oak_bedside_table,{getGuiScreen:function(){return nightstandoakUI}});

var nightstandspruceUI=new UI.StandartWindow({standart:{header:{text:{text:"Spruce Bedside Table"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.spruce_bedside_table,{getGuiScreen:function(){return nightstandspruceUI}});

var nightstandbrichUI=new UI.StandartWindow({standart:{header:{text:{text:"Birch Bedside Table"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.birch_bedside_table,{getGuiScreen:function(){return nightstandbrichUI}});

var nightstandjungleUI=new UI.StandartWindow({standart:{header:{text:{text:"Jungle Bedside Table"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.jungle_bedside_table,{getGuiScreen:function(){return nightstandjungleUI}});

var nightstandacaciaUI=new UI.StandartWindow({standart:{header:{text:{text:"Acacia Bedside Table"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.acacia_bedside_table,{getGuiScreen:function(){return nightstandacaciaUI}});

var nightstandbigoakUI=new UI.StandartWindow({standart:{header:{text:{text:"Dark Oak Bedside Table"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.dark_oak_bedside_table,{getGuiScreen:function(){return nightstandbigoakUI}});




// file: new_desktop_gui.js

var desktopoakUI=new UI.StandartWindow({standart:{header:{text:{text:"Oak Desktop"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.oak_desktop,{getGuiScreen:function(){return desktopoakUI}});

var desktopspruceUI=new UI.StandartWindow({standart:{header:{text:{text:"Spruce Desktop"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.spruce_desktop,{getGuiScreen:function(){return desktopspruceUI}});

var desktopbrichUI=new UI.StandartWindow({standart:{header:{text:{text:"Birch Desktop"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.birch_desktop,{getGuiScreen:function(){return desktopbrichUI}});

var desktopjungleUI=new UI.StandartWindow({standart:{header:{text:{text:"Jungle Desktop"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.jungle_desktop,{getGuiScreen:function(){return desktopjungleUI}});

var desktopacaciaUI=new UI.StandartWindow({standart:{header:{text:{text:"Acacia Desktop"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.acacia_desktop,{getGuiScreen:function(){return desktopacaciaUI}});

var desktopbigoakUI=new UI.StandartWindow({standart:{header:{text:{text:"Dark Oak Desktop"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.dark_oak_desktop,{getGuiScreen:function(){return desktopbigoakUI}});




// file: new_carpets.js

//carpets
IDRegistry.genBlockID("chess_silver");
Block.createBlock("chess_silver", [
    {name: "Chess Silver", texture: [["chess_silver", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_gray");
Block.createBlock("chess_gray", [
    {name: "Chess gray", texture: [["chess_gray", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_black");
Block.createBlock("chess_black", [
    {name: "Chess Black", texture: [["chess_black", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_brown");
Block.createBlock("chess_brown", [
    {name: "Chess Brown", texture: [["chess_brown", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_red");
Block.createBlock("chess_red", [
    {name: "Chess Red", texture: [["chess_red", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_orange");
Block.createBlock("chess_orange", [
    {name: "Chess Orange", texture: [["chess_orange", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_yellow");
Block.createBlock("chess_yellow", [
    {name: "Chess Yellow", texture: [["chess_yellow", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_lime");
Block.createBlock("chess_lime", [
    {name: "Chess Lime", texture: [["chess_lime", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_green");
Block.createBlock("chess_green", [
    {name: "Chess Green", texture: [["chess_green", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_cyan");
Block.createBlock("chess_cyan", [
    {name: "Chess Cyan", texture: [["chess_cyan", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_light_blue");
Block.createBlock("chess_light_blue", [
    {name: "Chess Light Blue", texture: [["chess_light_blue", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_blue");
Block.createBlock("chess_blue", [
    {name: "Chess Blue", texture: [["chess_blue", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_purple");
Block.createBlock("chess_purple", [
    {name: "Chess Purple", texture: [["chess_purple", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_magenta");
Block.createBlock("chess_magenta", [
    {name: "Chess Magenta", texture: [["chess_magenta", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chess_pink");
Block.createBlock("chess_pink", [
    {name: "Chess Pink", texture: [["chess_pink", 0]], inCreative: true}
]);
IDRegistry.genBlockID("gray_silver");
Block.createBlock("gray_silver", [
    {name: "Chess gray-Silver", texture: [["gray_silver", 0]], inCreative: true}
]);
IDRegistry.genBlockID("brown_silver");
Block.createBlock("brown_silver", [
    {name: "Chess Brown-Silver", texture: [["brown_silver", 0]], inCreative: true}
]);
IDRegistry.genBlockID("red_orange");
Block.createBlock("red_orange", [
    {name: "Chess Red-Orange", texture: [["red_orange", 0]], inCreative: true}
]);
IDRegistry.genBlockID("orange_yellow");
Block.createBlock("orange_yellow", [
    {name: "Chess Orange-Yellow", texture: [["orange_yellow", 0]], inCreative: true}
]);
IDRegistry.genBlockID("lime_yellow");
Block.createBlock("lime_yellow", [
    {name: "Chess Yellow-Lime", texture: [["lime_yellow", 0]], inCreative: true}
]);
IDRegistry.genBlockID("green_lime");
Block.createBlock("green_lime", [
    {name: "Chess Green-Lime", texture: [["green_lime", 0]], inCreative: true}
]);
IDRegistry.genBlockID("blue_light_blue");
Block.createBlock("blue_light_blue", [
    {name: "Chess Blue-Light Blue", texture: [["blue_light_blue", 0]], inCreative: true}
]);
IDRegistry.genBlockID("purple_silver");
Block.createBlock("purple_silver", [
    {name: "Chess Purple-Silver", texture: [["purple_silver", 0]], inCreative: true}
]);
IDRegistry.genBlockID("magenta_silver");
Block.createBlock("magenta_silver", [
    {name: "Chess Magenta-Silver", texture: [["magenta_silver", 0]], inCreative: true}
]);
IDRegistry.genBlockID("magenta_pink");
Block.createBlock("magenta_pink", [
    {name: "Chess Magenta-Pink", texture: [["magenta_pink", 0]], inCreative: true}
]);
IDRegistry.genBlockID("gray_silver_plus");
Block.createBlock("gray_silver_plus", [
    {name: "Chess gray-Silver plus", texture: [["cub1", 0]], inCreative: true}
]);
IDRegistry.genBlockID("brown_silver_plus");
Block.createBlock("brown_silver_plus", [
    {name: "Chess Brown-Silver plus", texture: [["cub2", 0]], inCreative: true}
]);
IDRegistry.genBlockID("red_orange_plus");
Block.createBlock("red_orange_plus", [
    {name: "Chess Red-Orange plus", texture: [["cub3", 0]], inCreative: true}
]);
IDRegistry.genBlockID("orange_yellow_plus");
Block.createBlock("orange_yellow_plus", [
    {name: "Chess Orange-Yellow plus", texture: [["cub4", 0]], inCreative: true}
]);
IDRegistry.genBlockID("lime_yellow_plus");
Block.createBlock("lime_yellow_plus", [
    {name: "Chess Yellow-Lime plus", texture: [["cub5", 0]], inCreative: true}
]);
IDRegistry.genBlockID("green_lime_plus");
Block.createBlock("green_lime_plus", [
    {name: "Chess Green-Lime plus", texture: [["cub6", 0]], inCreative: true}
]);
IDRegistry.genBlockID("blue_light_blue_plus");
Block.createBlock("blue_light_blue_plus", [
    {name: "Chess Blue-Light Blue plus", texture: [["cub7", 0]], inCreative: true}
]);
IDRegistry.genBlockID("purple_silver_plus");
Block.createBlock("purple_silver_plus", [
    {name: "Chess Purple-Silver plus", texture: [["cub8", 0]], inCreative: true}
]);
IDRegistry.genBlockID("magenta_silver_plus");
Block.createBlock("magenta_silver_plus", [
    {name: "Chess Magenta-Silver plus", texture: [["cub9", 0]], inCreative: true}
]);
IDRegistry.genBlockID("magenta_pink_plus");
Block.createBlock("magenta_pink_plus", [
    {name: "Chess Magenta-Pink plus", texture: [["cub10", 0]], inCreative: true}
]);
IDRegistry.genBlockID("carpet1");
Block.createBlock("carpet1", [
    {name: "Carpet", texture: [["carpet1", 0]], inCreative: true}
]);
IDRegistry.genBlockID("carpet2");
Block.createBlock("carpet2", [
    {name: "Carpet", texture: [["carpet2", 0]], inCreative: true}
]);
IDRegistry.genBlockID("carpet3");
Block.createBlock("carpet3", [
    {name: "Carpet", texture: [["carpet3", 0]], inCreative: true}
]);
IDRegistry.genBlockID("carpet4");
Block.createBlock("carpet4", [
    {name: "Carpet", texture: [["carpet4", 0]], inCreative: true}
]);
IDRegistry.genBlockID("carpet5");
Block.createBlock("carpet5", [
    {name: "Carpet", texture: [["carpet5", 0]], inCreative: true}
]);
IDRegistry.genBlockID("carpet6");
Block.createBlock("carpet6", [
    {name: "Carpet", texture: [["carpet6", 0]], inCreative: true}
]);
IDRegistry.genBlockID("carpet7");
Block.createBlock("carpet7", [
    {name: "Carpet", texture: [["carpet7", 0]], inCreative: true}
]);
IDRegistry.genBlockID("carpet8");
Block.createBlock("carpet8", [
    {name: "Carpet", texture: [["carpet8", 0]], inCreative: true}
]);
IDRegistry.genBlockID("carpet9");
Block.createBlock("carpet9", [
    {name: "Carpet", texture: [["carpet9", 0]], inCreative: true}
]);
IDRegistry.genBlockID("carpet10");
Block.createBlock("carpet10", [
    {name: "Carpet", texture: [["carpet10", 0]], inCreative: true}
]);

//Material carpets
ToolAPI.registerBlockMaterial(BlockID.chess_silver, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_gray, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_black, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_brown, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_red, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_orange, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_yellow, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_lime, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_green, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_cyan, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_light_blue, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_blue, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_purple, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_magenta, "dirt");
ToolAPI.registerBlockMaterial(BlockID.chess_pink, "dirt");
ToolAPI.registerBlockMaterial(BlockID.gray_silver, "dirt");
ToolAPI.registerBlockMaterial(BlockID.brown_silver, "dirt");
ToolAPI.registerBlockMaterial(BlockID.red_orange, "dirt");
ToolAPI.registerBlockMaterial(BlockID.orange_yellow, "dirt");
ToolAPI.registerBlockMaterial(BlockID.lime_yellow, "dirt");
ToolAPI.registerBlockMaterial(BlockID.green_lime, "dirt");
ToolAPI.registerBlockMaterial(BlockID.blue_light_blue, "dirt");
ToolAPI.registerBlockMaterial(BlockID.purple_silver, "dirt");
ToolAPI.registerBlockMaterial(BlockID.magenta_silver, "dirt");
ToolAPI.registerBlockMaterial(BlockID.magenta_pink, "dirt");
ToolAPI.registerBlockMaterial(BlockID.gray_silver_plus, "dirt");
ToolAPI.registerBlockMaterial(BlockID.brown_silver_plus, "dirt");
ToolAPI.registerBlockMaterial(BlockID.red_orange_plus, "dirt");
ToolAPI.registerBlockMaterial(BlockID.orange_yellow_plus, "dirt");
ToolAPI.registerBlockMaterial(BlockID.lime_yellow_plus, "dirt");
ToolAPI.registerBlockMaterial(BlockID.green_lime_plus, "dirt");
ToolAPI.registerBlockMaterial(BlockID.blue_light_blue_plus, "dirt");
ToolAPI.registerBlockMaterial(BlockID.purple_silver_plus, "dirt");
ToolAPI.registerBlockMaterial(BlockID.magenta_silver_plus, "dirt");
ToolAPI.registerBlockMaterial(BlockID.magenta_pink_plus, "dirt");
ToolAPI.registerBlockMaterial(BlockID.carpet1, "dirt");
ToolAPI.registerBlockMaterial(BlockID.carpet2, "dirt");
ToolAPI.registerBlockMaterial(BlockID.carpet3, "dirt");
ToolAPI.registerBlockMaterial(BlockID.carpet4, "dirt");
ToolAPI.registerBlockMaterial(BlockID.carpet5, "dirt");
ToolAPI.registerBlockMaterial(BlockID.carpet6, "dirt");
ToolAPI.registerBlockMaterial(BlockID.carpet7, "dirt");
ToolAPI.registerBlockMaterial(BlockID.carpet8, "dirt");
ToolAPI.registerBlockMaterial(BlockID.carpet9, "dirt");
ToolAPI.registerBlockMaterial(BlockID.carpet10, "dirt");

//destroy level carpets
Block.setDestroyLevel("chess_silver", 0.5);
Block.setDestroyLevel("chess_gray", 0.5);
Block.setDestroyLevel("chess_black", 0.5);
Block.setDestroyLevel("chess_brown", 0.5);
Block.setDestroyLevel("chess_red", 0.5);
Block.setDestroyLevel("chess_orange", 0.5);
Block.setDestroyLevel("chess_yellow", 0.5);
Block.setDestroyLevel("chess_lime", 0.5);
Block.setDestroyLevel("chess_green", 0.5);
Block.setDestroyLevel("chess_cyan", 0.5);
Block.setDestroyLevel("chess_light_blue", 0.5);
Block.setDestroyLevel("chess_blue", 0.5);
Block.setDestroyLevel("chess_purple", 0.5);
Block.setDestroyLevel("chess_magenta", 0.5);
Block.setDestroyLevel("chess_pink", 0.5);
Block.setDestroyLevel("gray_silver", 0.5);
Block.setDestroyLevel("brown_silver", 0.5);
Block.setDestroyLevel("red_orange", 0.5);
Block.setDestroyLevel("orange_yellow", 0.5);
Block.setDestroyLevel("lime_yellow", 0.5);
Block.setDestroyLevel("green_lime", 0.5);
Block.setDestroyLevel("blue_light_blue", 0.5);
Block.setDestroyLevel("purple_silver", 0.5);
Block.setDestroyLevel("magenta_silver", 0.5);
Block.setDestroyLevel("magenta_pink", 0.5);
Block.setDestroyLevel("gray_silver_plus", 0.5);
Block.setDestroyLevel("brown_silver_plus", 0.5);
Block.setDestroyLevel("red_orange_plus", 0.5);
Block.setDestroyLevel("orange_yellow_plus", 0.5);
Block.setDestroyLevel("lime_yellow_plus", 0.5);
Block.setDestroyLevel("green_lime_plus", 0.5);
Block.setDestroyLevel("blue_light_blue_plus", 0.5);
Block.setDestroyLevel("purple_silver_plus", 0.5);
Block.setDestroyLevel("magenta_silver_plus", 0.5);
Block.setDestroyLevel("magenta_pink_plus", 0.5);
Block.setDestroyLevel("carpet1", 0.5);
Block.setDestroyLevel("carpet2", 0.5);
Block.setDestroyLevel("carpet3", 0.5);
Block.setDestroyLevel("carpet4", 0.5);
Block.setDestroyLevel("carpet5", 0.5);
Block.setDestroyLevel("carpet6", 0.5);
Block.setDestroyLevel("carpet7", 0.5);
Block.setDestroyLevel("carpet8", 0.5);
Block.setDestroyLevel("carpet9", 0.5);
Block.setDestroyLevel("carpet10", 0.5);

//translation carpets
Translation.addTranslation("Chess Silver", {ru: "Светло-серая ковер"});
Translation.addTranslation("Chess Gray", {ru: "Серая ковер"});
Translation.addTranslation("Chess Black", {ru: "Черная ковер"});
Translation.addTranslation("Chess Brown", {ru: "Коричневая ковер"});
Translation.addTranslation("Chess Red", {ru: "Красная ковер"});
Translation.addTranslation("Chess Orange", {ru: "Оранжевая ковер"});
Translation.addTranslation("Chess Yellow", {ru: "Желтая ковер"});
Translation.addTranslation("Chess Lime", {ru: "Лаймовая ковер"});
Translation.addTranslation("Chess Green", {ru: "Зеленая ковер"});
Translation.addTranslation("Chess Cyan", {ru: "Бирюзовая ковер"});
Translation.addTranslation("Chess Light Blue", {ru: "Голубая ковер"});
Translation.addTranslation("Chess Blue", {ru: "Синяя ковер"});
Translation.addTranslation("Chess Purple", {ru: "Фиолетвая ковер"});
Translation.addTranslation("Chess Magenta", {ru: "Пурпурная ковер"});
Translation.addTranslation("Chess Pink", {ru: "Розовая ковер"});
Translation.addTranslation("Chess Gray-Silver", {ru: "Светло-серый-Серая ковер"});
Translation.addTranslation("Chess Brown-Silver", {ru: "Коричневая-Серая ковер"});
Translation.addTranslation("Chess Red-Orange", {ru: "Красная-Оранжевая ковер"});
Translation.addTranslation("Chess Orange-Yellow", {ru: "Оранжевая-Желтая ковер"});
Translation.addTranslation("Chess Yellow-Lime", {ru: "Желтая-Лаймовая ковер"});
Translation.addTranslation("Chess Green-Lime", {ru: "Зеленая-Лаймовая ковер"});
Translation.addTranslation("Chess Blue-Light Blue", {ru: "Синяя-Голубая ковер"});
Translation.addTranslation("Chess Purple-Silver", {ru: "Фиолетвая-Светло-серая ковер"});
Translation.addTranslation("Chess Magenta-Silver", {ru: "Пурпурная-Светло-серая ковер"});
Translation.addTranslation("Chess Magenta-Pink", {ru: "Пурпурная-Розовая ковер"});
Translation.addTranslation("Chess Gray-Silver Plus", {ru: "Светло-серый-Серая ковер плюс"});
Translation.addTranslation("Chess Brown-Silver plus", {ru: "Коричневая-Серая ковер плюс"});
Translation.addTranslation("Chess Red-Orange plus", {ru: "Красная-Оранжевая ковер плюс"});
Translation.addTranslation("Chess Orange-Yellow plus", {ru: "Оранжевая-Желтая ковер плюс"});
Translation.addTranslation("Chess Yellow-Lime plus", {ru: "Желтая-Лаймовая ковер плюс"});
Translation.addTranslation("Chess Green-Lime plus", {ru: "Зеленая-Лаймовая ковер плюс"});
Translation.addTranslation("Chess Blue-Light Blue plus", {ru: "Синяя-Голубая ковер плюс"});
Translation.addTranslation("Chess Purple-Silver plus", {ru: "Фиолетвая-Светло-серая ковер плюс"});
Translation.addTranslation("Chess Magenta-Silver plus", {ru: "Пурпурная-Светло-серая ковер плюс"});
Translation.addTranslation("Chess Magenta-Pink plus", {ru: "Пурпурная-Розовая ковер плюс"});
Translation.addTranslation("Carpet", {ru: "Ковер"});

//recipes carpets
Recipes.addShaped({id: BlockID.chess_silver, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,8]);
Recipes.addShaped({id: BlockID.chess_gray, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,7]);
Recipes.addShaped({id: BlockID.chess_black, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,15]);
Recipes.addShaped({id: BlockID.chess_brown, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,12]);
Recipes.addShaped({id: BlockID.chess_red, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,14]);
Recipes.addShaped({id: BlockID.chess_orange, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,1]);
Recipes.addShaped({id: BlockID.chess_yellow, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,4]);
Recipes.addShaped({id: BlockID.chess_lime, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,5]);
Recipes.addShaped({id: BlockID.chess_green, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,13]);
Recipes.addShaped({id: BlockID.chess_cyan, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,9]);
Recipes.addShaped({id: BlockID.chess_light_blue, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,3]);
Recipes.addShaped({id: BlockID.chess_blue, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,11]);
Recipes.addShaped({id: BlockID.chess_purple, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,10]);
Recipes.addShaped({id: BlockID.chess_magenta, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,2]);
Recipes.addShaped({id: BlockID.chess_pink, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,6]);
Recipes.addShaped({id: BlockID.gray_silver, count: 4, data: 0}, ["xa ", "ax "], ["x",35,8, "a", 35,7]);
Recipes.addShaped({id: BlockID.brown_silver, count: 4, data: 0}, ["xa ", "ax "], ["x",35,12, "a", 35,7]);
Recipes.addShaped({id: BlockID.red_orange, count: 4, data: 0}, ["xa ", "ax "], ["x",35,14, "a", 35,1]);
Recipes.addShaped({id: BlockID.orange_yellow, count: 4, data: 0}, ["xa ", "ax "], ["x",35,1, "a", 35,4]);
Recipes.addShaped({id: BlockID.lime_yellow, count: 4, data: 0}, ["xa ", "ax "], ["x",35,4, "a", 35,5]);
Recipes.addShaped({id: BlockID.green_lime, count: 4, data: 0}, ["xa ", "ax "], ["x",35,13, "a", 35,5]);
Recipes.addShaped({id: BlockID.blue_light_blue, count: 4, data: 0}, ["xa ", "ax "], ["x",35,11, "a", 35,3]);
Recipes.addShaped({id: BlockID.purple_silver, count: 4, data: 0}, ["xa ", "ax "], ["x",35,10, "a", 35,8]);
Recipes.addShaped({id: BlockID.magenta_silver, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,8]);
Recipes.addShaped({id: BlockID.magenta_pink, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.gray_silver_plus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,8, "a", 35,7]);
Recipes.addShaped({id: BlockID.brown_silver_plus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,12, "a", 35,7]);
Recipes.addShaped({id: BlockID.red_orange_plus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,14, "a", 35,1]);
Recipes.addShaped({id: BlockID.orange_yellow_plus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,1, "a", 35,4]);
Recipes.addShaped({id: BlockID.lime_yellow_plus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,4, "a", 35,5]);
Recipes.addShaped({id: BlockID.green_lime_plus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,13, "a", 35,5]);
Recipes.addShaped({id: BlockID.blue_light_blue_plus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,11, "a", 35,3]);
Recipes.addShaped({id: BlockID.purple_silver_plus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,10, "a", 35,8]);
Recipes.addShaped({id: BlockID.magenta_silver_plus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,8]);
Recipes.addShaped({id: BlockID.magenta_pink_plus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.carpet1, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.carpet2, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.carpet3, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.carpet4, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.carpet5, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.carpet6, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.carpet7, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.carpet8, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.carpet9, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.carpet10, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);

//shape carpets
Block.setShape(BlockID.chess_silver,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_gray,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_black,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_brown,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_red,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_orange,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_yellow,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_lime,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_green,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_cyan,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_light_blue,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_blue,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_purple,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_magenta,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chess_pink,0,0,0,1,0.0625,1);
Block.setShape(BlockID.gray_silver,0,0,0,1,0.0625,1);
Block.setShape(BlockID.brown_silver,0,0,0,1,0.0625,1);
Block.setShape(BlockID.red_orange,0,0,0,1,0.0625,1);
Block.setShape(BlockID.orange_yellow,0,0,0,1,0.0625,1);
Block.setShape(BlockID.lime_yellow,0,0,0,1,0.0625,1);
Block.setShape(BlockID.green_lime,0,0,0,1,0.0625,1);
Block.setShape(BlockID.blue_light_blue,0,0,0,1,0.0625,1);
Block.setShape(BlockID.purple_silver,0,0,0,1,0.0625,1);
Block.setShape(BlockID.magenta_silver,0,0,0,1,0.0625,1);
Block.setShape(BlockID.magenta_pink,0,0,0,1,0.0625,1);
Block.setShape(BlockID.gray_silver_plus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.brown_silver_plus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.red_orange_plus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.orange_yellow_plus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.lime_yellow_plus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.green_lime_plus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.blue_light_blue_plus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.purple_silver_plus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.magenta_silver_plus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.magenta_pink_plus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.carpet1,0,0,0,1,0.0625,1);
Block.setShape(BlockID.carpet2,0,0,0,1,0.0625,1);
Block.setShape(BlockID.carpet3,0,0,0,1,0.0625,1);
Block.setShape(BlockID.carpet4,0,0,0,1,0.0625,1);
Block.setShape(BlockID.carpet5,0,0,0,1,0.0625,1);
Block.setShape(BlockID.carpet6,0,0,0,1,0.0625,1);
Block.setShape(BlockID.carpet7,0,0,0,1,0.0625,1);
Block.setShape(BlockID.carpet8,0,0,0,1,0.0625,1);
Block.setShape(BlockID.carpet9,0,0,0,1,0.0625,1);
Block.setShape(BlockID.carpet10,0,0,0,1,0.0625,1);




// file: new_blinds.js

IDRegistry.genBlockID("oak_blinds");
Block.createBlock("oak_blinds", [
	{name: "Oak Blinds", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Blinds", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Blinds", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Blinds", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_blinds");
Item.createItem("oak_blinds", "Oak Blinds", {name: "oak_blinds", meta: 0}, {stack: 64});

var oak_blindsModel = ModelAPI.newArray();
oak_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_oak", 0]]);
oak_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"oak_blinds"},{id:"oak_blinds"}, Furniture.placeRotatableBlock(BlockID.oak_blinds, oak_blindsModel));

IDRegistry.genBlockID("spruce_blinds");
Block.createBlock("spruce_blinds", [
	{name: "Spruce Blinds", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Blinds", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Blinds", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Blinds", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_blinds");
Item.createItem("spruce_blinds", "Spruce Blinds", {name: "spruce_blinds", meta: 0}, {stack: 64});

var spruce_blindsModel = ModelAPI.newArray();
spruce_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_spruce", 0]]);
spruce_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"spruce_blinds"},{id:"spruce_blinds"}, Furniture.placeRotatableBlock(BlockID.spruce_blinds, spruce_blindsModel));

IDRegistry.genBlockID("birch_blinds");
Block.createBlock("birch_blinds", [
	{name: "Birch Blinds", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Blinds", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Blinds", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Blinds", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_blinds");
Item.createItem("birch_blinds", "Birch Blinds", {name: "birch_blinds", meta: 0}, {stack: 64});

var birch_blindsModel = ModelAPI.newArray();
birch_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_birch", 0]]);
birch_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"birch_blinds"},{id:"birch_blinds"}, Furniture.placeRotatableBlock(BlockID.birch_blinds, birch_blindsModel));

IDRegistry.genBlockID("jungle_blinds");
Block.createBlock("jungle_blinds", [
	{name: "Jungle Blinds", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Blinds", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Blinds", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Blinds", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_blinds");
Item.createItem("jungle_blinds", "Jungle Blinds", {name: "jungle_blinds", meta: 0}, {stack: 64});

var jungle_blindsModel = ModelAPI.newArray();
jungle_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_jungle", 0]]);
jungle_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jungle_blinds"},{id:"jungle_blinds"}, Furniture.placeRotatableBlock(BlockID.jungle_blinds, jungle_blindsModel));

IDRegistry.genBlockID("acacia_blinds");
Block.createBlock("acacia_blinds", [
	{name: "Acacia Blinds", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Blinds", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Blinds", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Blinds", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_blinds");
Item.createItem("acacia_blinds", "Acacia Blinds", {name: "acacia_blinds", meta: 0}, {stack: 64});

var acacia_blindsModel = ModelAPI.newArray();
acacia_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_acacia", 0]]);
acacia_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"acacia_blinds"},{id:"acacia_blinds"}, Furniture.placeRotatableBlock(BlockID.acacia_blinds, acacia_blindsModel));

IDRegistry.genBlockID("dark_oak_blinds");
Block.createBlock("dark_oak_blinds", [
	{name: "Dark Oak Blinds", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Blinds", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Blinds", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Blinds", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_blinds");
Item.createItem("dark_oak_blinds", "Dark Oak Blinds", {name: "dark_oak_blinds", meta: 0}, {stack: 64});

var dark_oak_blindsModel = ModelAPI.newArray();
dark_oak_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_big_oak", 0]]);
dark_oak_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"dark_oak_blinds"},{id:"dark_oak_blinds"}, Furniture.placeRotatableBlock(BlockID.dark_oak_blinds, dark_oak_blindsModel));

Block.setShape(BlockID.oak_blinds,0,0,1,1,1,1);
Block.setShape(BlockID.spruce_blinds,0,0,1,1,1,1);
Block.setShape(BlockID.birch_blinds,0,0,1,1,1,1);
Block.setShape(BlockID.jungle_blinds,0,0,1,1,1,1);
Block.setShape(BlockID.acacia_blinds,0,0,1,1,1,1);
Block.setShape(BlockID.dark_oak_blinds,0,0,1,1,1,1);

Translation.addTranslation("Oak Blinds", {ru: "Дубовая Жалюзи"});
Translation.addTranslation("Spruce Blinds", {ru: "Еловая Жалюзи"});
Translation.addTranslation("Birch Blinds", {ru: "Берёзовая Жалюзи"});
Translation.addTranslation("Jungle Blinds", {ru: "Джунглевая Жалюзи"});
Translation.addTranslation("Acacia Blinds", {ru: "Акацивая Жалюзи"});
Translation.addTranslation("Dark Oak Blinds", {ru: "Тёмно Дубовая Жалюзи"});

Recipes.addShaped({id: ItemID.oak_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,0]);
Recipes.addShaped({id: ItemID.spruce_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,1]);
Recipes.addShaped({id: ItemID.birch_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,2]);
Recipes.addShaped({id: ItemID.jungle_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,3]);
Recipes.addShaped({id: ItemID.acacia_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 162,0]);
Recipes.addShaped({id: ItemID.dark_oak_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 162,1]);




// file: new_fan.js

IDRegistry.genBlockID("ceiling_fan");
Block.createBlock("ceiling_fan", [
	{name: "Ceiling Fan", texture: [["concrete_white", 0]], inCreative: false},
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("ceiling_fan");
Item.createItem("ceiling_fan", "Ceiling Fan", {name: "ceiling_fan", meta: 0}, {stack: 64});

var ceiling_fanModel = ModelAPI.newArray();
ceiling_fanModel.addBoxByID("1", 0.375,0.875,0.375,0.625,1,0.625, 236, 7);
ceiling_fanModel.addBoxByID("2", 0.4375,0.625,0.4375,0.5625,0.875,0.5625, 236);
ceiling_fanModel.addBoxByID("3", 0.375,0.625,-0.625,0.625,0.6875,0.375, 236);
ceiling_fanModel.addBoxByID("4", 0.3125,0.5625,0.3125,0.6875,0.625,0.6875, 236, 7);
ceiling_fanModel.addBoxByID("5", 0.375,0.5,0.375,0.625,0.5625,0.625, 236, 8);
ceiling_fanModel.addBoxByID("6", -0.625,0.625,0.375,0.375,0.6875,0.625, 236);
ceiling_fanModel.addBoxByID("7", 0.375,0.625,0.625,0.625,0.6875,1.625, 236);
ceiling_fanModel.addBoxByID("8", 0.625,0.625,0.375,1.625,0.6875,0.625, 236);
Furniture.addReplacementItem({id:"ceiling_fan"},{id:"ceiling_fan"}, Furniture.placeRotatableBlock(BlockID.ceiling_fan, ceiling_fanModel));

Translation.addTranslation("Ceiling Fan", {ru: "Потолочный вентилятор"});
Recipes.addShaped({id: ItemID.ceiling_fan, count: 1, data: 0}, [" a ", " s ", "xzx"], ["x",265,0, "a", 98,0, "s",152,0, "z",98,3]);




// file: new_various.js

IDRegistry.genBlockID("pottedfoliage");
Block.createBlock("pottedfoliage", [
	{name: "Potted Foliage", texture: [["concrete_brown", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var pottedfoliageModel = ModelAPI.newArray();
pottedfoliageModel.addBoxByID("1", 0.0625,0.8125,0.0625,0.9375,0.875,0.9375, 3);
pottedfoliageModel.addBoxByID("2", 0.9375,0.8125,0,1,0.9375,1, 159, 12);
pottedfoliageModel.addBoxByID("3", 0,0.8125,0,0.0625,0.9375,1, 159, 12);
pottedfoliageModel.addBoxByID("4", 0,0.8125,0,1,0.9375,0.0625, 159, 12);
pottedfoliageModel.addBoxByID("5", 0,0.8125,0.9375,1,0.9375,1, 159, 12);
pottedfoliageModel.addBoxByID("6", 0.4375,0.875,0.5,0.5,1,0.5625, 5);
pottedfoliageModel.addBoxByID("7", 0.4375,1,0.5,0.5,1.375,0.5625, 5);
pottedfoliageModel.addBoxByID("8", 0,1.375,0,1,2,1, 161);
pottedfoliageModel.addBoxByID("9", 0,2,0,1,2.375,1, 161);
pottedfoliageModel.addBoxByID("10", 0.0625,0,0.0625,0.9375,0.8125,0.9375, 159, 12);
Furniture.placeRotatableBlock(BlockID.pottedfoliage, pottedfoliageModel);

IDRegistry.genBlockID("lamp");
Block.createBlock("lamp", [
	{name: "Lamp", texture: [["concrete_gray", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var lampModel = ModelAPI.newArray();
lampModel.addBoxByID("1", 0.25,0.625,0.25,0.75,0.6875,0.75, 159, 9);
lampModel.addBoxByID("2", 0.1875,0.5625,0.1875,0.8125,0.625,0.8125, 159, 9);
lampModel.addBoxByID("3", 0.3125,0.125,0.25,0.6875,0.625,0.3125, 20);
lampModel.addBoxByID("4", 0.25,0.125,0.25,0.3125,0.625,0.75, 20);
lampModel.addBoxByID("5", 0.6875,0.125,0.25,0.75,0.625,0.75, 20);
lampModel.addBoxByID("6", 0.3125,0.125,0.6875,0.6875,0.625,0.75, 20);
lampModel.addBoxByID("7", 0.3125,0.125,0.3125,0.6875,0.625,0.6875, 10);
lampModel.addBoxByID("8", 0.25,0.0625,0.25,0.75,0.125,0.75, 159, 9);
lampModel.addBoxByID("9", 0.1875,0,0.1875,0.8125,0.0625,0.8125, 159, 9);
lampModel.addBoxByID("10", 0.625,0.6875,0.5,0.6875,0.875,0.5625, 159, 9);
lampModel.addBoxByID("11", 0.3125,0.875,0.5,0.6875,0.9375,0.5625, 159, 9);
lampModel.addBoxByID("12", 0.3125,0.6875,0.5,0.375,0.875,0.5625, 159, 9);
Furniture.placeRotatableBlock(BlockID.lamp, lampModel);

IDRegistry.genBlockID("tv");
Block.createBlock("tv", [
	{name: "tv", texture: [["concrete_black", 0]], inCreative: false},
	{name: "tv", texture: [["concrete_black", 0]], inCreative: false},
	{name: "tv", texture: [["concrete_black", 0]], inCreative: false},
	{name: "tv", texture: [["concrete_black", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("tv");
Item.createItem("tv", "TV", {name: "tv", meta: 0}, {stack: 64});

var tvModel = ModelAPI.newArray();
tvModel.addBoxByID("1", 1,0.375,0.4375,1.375,1.125,0.5, 159, 9);
tvModel.addBoxByID("2", 0.125,0,0.3125,0.875,0.0625,0.6875, 173);
tvModel.addBoxByID("3", 0.25,0.0625,0.375,0.75,0.125,0.625, 173);
tvModel.addBoxByID("4", 0.4375,0.125,0.4375,0.5625,0.3125,0.5, 173);
tvModel.addBoxByID("5", -0.5,0.25,0.4375,-0.375,1.25,0.5, 173);
tvModel.addBoxByID("6", 1.375,0.25,0.4375,1.5,1.25,0.5, 173);
tvModel.addBoxByID("7", 1,0.25,0.4375,1.375,0.375,0.5, 173);
tvModel.addBoxByID("8", 1,0.375,0.375,1.375,1.125,0.4375, 173);
tvModel.addBoxByID("9", 0,0.375,0.4375,1,1.125,0.5, 159, 9);
tvModel.addBoxByID("10", -0.375,0.375,0.4375,0,1.125,0.5, 159, 9);
tvModel.addBoxByID("11", 0,1.125,0.4375,1,1.25,0.5, 173);
tvModel.addBoxByID("12", 1,1.125,0.4375,1.375,1.25,0.5, 173);
tvModel.addBoxByID("13", 0,0.25,0.4375,1,0.375,0.5, 173);
tvModel.addBoxByID("14", -0.375,0.25,0.4375,0,0.375,0.5, 173);
tvModel.addBoxByID("15", -0.375,1.125,0.4375,0,1.25,0.5, 173);
tvModel.addBoxByID("16", 0,0.375,0.375,1,1.125,0.4375, 173);
tvModel.addBoxByID("17", -0.375,0.375,0.375,0,1.125,0.4375, 173);
Furniture.addReplacementItem({id:"tv"},{id:"tv"}, Furniture.placeRotatableBlock(BlockID.tv, tvModel));

IDRegistry.genBlockID("happycake");
Block.createBlock("happycake", [
	{name: "Big Cake", texture: [["concrete_white", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var happycakeModel = ModelAPI.newArray();
happycakeModel.addBoxByID("1", 0.125,0.8125,0.125,0.875,0.875,0.875, 100, 14);
happycakeModel.addBoxByID("2", 0.125,0.4375,0.125,0.875,0.8125,0.875, 80);
happycakeModel.addBoxByID("3", 0.0625,0,0.0625,0.9375,0.375,0.9375, 80);
happycakeModel.addBoxByID("4", 0.0625,0.375,0.0625,0.9375,0.4375,0.9375, 100, 14);
happycakeModel.addBoxByID("5", 0.25,0.875,0.6875,0.3125,0.9375,0.75, 5);
happycakeModel.addBoxByID("6", 0.25,0.9375,0.6875,0.3125,1,0.75, 35, 4);
happycakeModel.addBoxByID("7", 0.25,0.875,0.25,0.3125,0.9375,0.3125, 5);
happycakeModel.addBoxByID("8", 0.5,0.875,0.5,0.5625,0.9375,0.5625, 5);
happycakeModel.addBoxByID("9", 0.6875,0.875,0.6875,0.75,0.9375,0.75, 5);
happycakeModel.addBoxByID("10", 0.6875,0.9375,0.6875,0.75,1,0.75, 35, 4);
happycakeModel.addBoxByID("11", 0.6875,0.9375,0.25,0.75,1,0.3125, 35, 4);
happycakeModel.addBoxByID("12", 0.5,0.9375,0.5,0.5625,1,0.5625, 35, 4);
happycakeModel.addBoxByID("13", 0.6875,0.875,0.25,0.75,0.9375,0.3125, 5);
happycakeModel.addBoxByID("14", 0.25,0.9375,0.25,0.3125,1,0.3125, 35, 4);
Furniture.placeRotatableBlock(BlockID.happycake, happycakeModel);

//translation various
Translation.addTranslation("Potted Foliage", {ru: "Листва на Горшке"});
Translation.addTranslation("Lamp", {ru: "Светильник"});
Translation.addTranslation("Big Cake", {ru: "Большая Торт"});

//recipes various
Recipes.addShaped({id: BlockID.pottedfoliage, count: 1, data: 0}, [" x ", " c ", " a "], ['a', 390,0, 'x', 85,0, 'x', 161,0]);
Recipes.addShaped({id: ItemID.tv, count: 1, data: 0}, ["aaa", "axa", "aaa"], ['a', 35,15, 'x', 49,0])
Recipes.addShaped({id: BlockID.happycake, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,0]);
Recipes.addShapeless(
	{id: BlockID.lamp, count: 1, data: 0},
	[{id: 4, data: 0}, {id: 4, data: 0}, {id: 325, data: 10},
	 {id: 4, data: 0}, {id: 4, data: 0}, {id: 4, data: 0}, {id: 4, data: 0}],
function(api, field){
 Player.addItemToInventory(325, 1)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});




// file: kitchen_counter.js

//oak kitchen
IDRegistry.genBlockID("oak_kitchen_counter");
Block.createBlockWithRotation("oak_kitchen_counter", [
	{name: "Oak Kitchen Counter", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Counter", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Counter", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Counter", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_kitchen_counter");
Item.createItem("oak_kitchen_counter", "Oak Kitchen Counter", {name: "oak_kitchen_counter", meta: 0}, {stack: 64});

var oak_kitchen_counterModel = ModelAPI.newArray();
oak_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_oak", 0]]);
oak_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_oak", 0]]);
Furniture.addReplacementItem({id:"oak_kitchen_counter"},{id:"oak_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.oak_kitchen_counter, oak_kitchen_counterModel));

let oak_kitchen_counterModel = new BlockRenderer.Model();
oak_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_oak', 0]]);
oak_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_oak', 0]]);
ItemModel.getForWithFallback(ItemID.oak_kitchen_counter, 0).setModel(oak_kitchen_counterModel);

//spruce kitchen
IDRegistry.genBlockID("spruce_kitchen_counter");
Block.createBlockWithRotation("spruce_kitchen_counter", [
	{name: "Spruce Kitchen Counter", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Counter", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Counter", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Counter", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_kitchen_counter");
Item.createItem("spruce_kitchen_counter", "Spruce Kitchen Counter", {name: "spruce_kitchen_counter", meta: 0}, {stack: 64});

var spruce_kitchen_counterModel = ModelAPI.newArray();
spruce_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_spruce", 0]]);
spruce_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_spruce", 0]]);
Furniture.addReplacementItem({id:"spruce_kitchen_counter"},{id:"spruce_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.spruce_kitchen_counter, spruce_kitchen_counterModel));

let spruce_kitchen_counterModel = new BlockRenderer.Model();
spruce_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_spruce', 0]]);
spruce_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_spruce', 0]]);
ItemModel.getForWithFallback(ItemID.spruce_kitchen_counter, 0).setModel(spruce_kitchen_counterModel);

//birch kitchen
IDRegistry.genBlockID("birch_kitchen_counter");
Block.createBlockWithRotation("birch_kitchen_counter", [
	{name: "Birch Kitchen Counter", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Counter", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Counter", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Counter", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_kitchen_counter");
Item.createItem("birch_kitchen_counter", "Birch Kitchen Counter", {name: "birch_kitchen_counter", meta: 0}, {stack: 64});

var birch_kitchen_counterModel = ModelAPI.newArray();
birch_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_birch", 0]]);
birch_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_birch", 0]]);
Furniture.addReplacementItem({id:"birch_kitchen_counter"},{id:"birch_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.birch_kitchen_counter, birch_kitchen_counterModel));

let birch_kitchen_counterModel = new BlockRenderer.Model();
birch_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_birch', 0]]);
birch_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_birch', 0]]);
ItemModel.getForWithFallback(ItemID.birch_kitchen_counter, 0).setModel(birch_kitchen_counterModel);

//jungle kitchen
IDRegistry.genBlockID("jungle_kitchen_counter");
Block.createBlockWithRotation("jungle_kitchen_counter", [
	{name: "Jungle Kitchen Counter", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Counter", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Counter", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Counter", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_kitchen_counter");
Item.createItem("jungle_kitchen_counter", "Jungle Kitchen Counter", {name: "jungle_kitchen_counter", meta: 0}, {stack: 64});

var jungle_kitchen_counterModel = ModelAPI.newArray();
jungle_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_jungle", 0]]);
jungle_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_jungle", 0]]);
Furniture.addReplacementItem({id:"jungle_kitchen_counter"},{id:"jungle_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.jungle_kitchen_counter, jungle_kitchen_counterModel));

let jungle_kitchen_counterModel = new BlockRenderer.Model();
jungle_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_jungle', 0]]);
jungle_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_jungle', 0]]);
ItemModel.getForWithFallback(ItemID.jungle_kitchen_counter, 0).setModel(jungle_kitchen_counterModel);

//acacia kitchen
IDRegistry.genBlockID("acacia_kitchen_counter");
Block.createBlockWithRotation("acacia_kitchen_counter", [
	{name: "Acacia Kitchen Counter", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Counter", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Counter", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Counter", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_kitchen_counter");
Item.createItem("acacia_kitchen_counter", "Acacia Kitchen Counter", {name: "acacia_kitchen_counter", meta: 0}, {stack: 64});

var acacia_kitchen_counterModel = ModelAPI.newArray();
acacia_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_acacia", 0]]);
acacia_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_acacia", 0]]);
Furniture.addReplacementItem({id:"acacia_kitchen_counter"},{id:"acacia_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.acacia_kitchen_counter, acacia_kitchen_counterModel));

let acacia_kitchen_counterModel = new BlockRenderer.Model();
acacia_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_acacia', 0]]);
acacia_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_acacia', 0]]);
ItemModel.getForWithFallback(ItemID.acacia_kitchen_counter, 0).setModel(acacia_kitchen_counterModel);

//dark oak kitchen
IDRegistry.genBlockID("dark_oak_kitchen_counter");
Block.createBlockWithRotation("dark_oak_kitchen_counter", [
	{name: "Dark Oak Kitchen Counter", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Counter", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Counter", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Counter", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_kitchen_counter");
Item.createItem("dark_oak_kitchen_counter", "Dark Oak Kitchen Counter", {name: "dark_oak_kitchen_counter", meta: 0}, {stack: 64});

var dark_oak_kitchen_counterModel = ModelAPI.newArray();
dark_oak_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_big_oak", 0]]);
dark_oak_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_big_oak", 0]]);
Furniture.addReplacementItem({id:"dark_oak_kitchen_counter"},{id:"dark_oak_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.dark_oak_kitchen_counter, dark_oak_kitchen_counterModel));

let dark_oak_kitchen_counterModel = new BlockRenderer.Model();
dark_oak_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_big_oak', 0]]);
dark_oak_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_big_oak', 0]]);
ItemModel.getForWithFallback(ItemID.dark_oak_kitchen_counter, 0).setModel(dark_oak_kitchen_counterModel);

//crimson kitchen
IDRegistry.genBlockID("crimson_kitchen_counter");
Block.createBlockWithRotation("crimson_kitchen_counter", [
	{name: "Crimson Kitchen Counter", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Counter", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Counter", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Counter", texture: [["crimson_log_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("crimson_kitchen_counter");
Item.createItem("crimson_kitchen_counter", "Crimson Kitchen Counter", {name: "crimson_log_side", meta: 0}, {stack: 64});

var crimson_kitchen_counterModel = ModelAPI.newArray();
crimson_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["crimson_log_side", 0]]);
crimson_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["crimson_planks", 0]]);
Furniture.addReplacementItem({id:"crimson_kitchen_counter"},{id:"crimson_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.crimson_kitchen_counter, crimson_kitchen_counterModel));

let crimson_kitchen_counterModel = new BlockRenderer.Model();
crimson_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['crimson_log_side', 0]]);
crimson_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['crimson_planks', 0]]);
ItemModel.getForWithFallback(ItemID.crimson_kitchen_counter, 0).setModel(crimson_kitchen_counterModel);

//warped kitchen
IDRegistry.genBlockID("warped_kitchen_counter");
Block.createBlockWithRotation("warped_kitchen_counter", [
	{name: "Warped Kitchen Counter", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Counter", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Counter", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Counter", texture: [["warped_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("warped_kitchen_counter");
Item.createItem("warped_kitchen_counter", "Warped Kitchen Counter", {name: "warped_stem_side", meta: 0}, {stack: 64});

var warped_kitchen_counterModel = ModelAPI.newArray();
warped_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["warped_stem_side", 0]]);
warped_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["warped_planks", 0]]);
Furniture.addReplacementItem({id:"warped_kitchen_counter"},{id:"warped_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.warped_kitchen_counter, warped_kitchen_counterModel));

let warped_kitchen_counterModel = new BlockRenderer.Model();
warped_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['warped_stem_side', 0]]);
warped_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['warped_planks', 0]]);
ItemModel.getForWithFallback(ItemID.warped_kitchen_counter, 0).setModel(warped_kitchen_counterModel);

//translation kitchens
Translation.addTranslation("Oak Kitchen Counter", {ru: "Дубовая Кухонная Стойка"});
Translation.addTranslation("Spruce Kitchen Counter", {ru: "Еловая Кухонная Стойка"});
Translation.addTranslation("Birch Kitchen Counter", {ru: "Берёзовая Кухонная Стойка"});
Translation.addTranslation("Jungle Kitchen Counter", {ru: "Джунглевая Кухонная Стойка"});
Translation.addTranslation("Acacia Kitchen Counter", {ru: "Акациевая Кухонная Стойка"});
Translation.addTranslation("Dark Oak Kitchen Counter", {ru: "Тёмно Дубовая Кухонная Стойка"});
Translation.addTranslation("Crimson Kitchen Counter", {ru: "Искажённая Кухонная Стойка"});
Translation.addTranslation("Warped Kitchen Counter", {ru: "Багровая Кухонная Стойка"});

//recipes kithens
Recipes.addShaped({id: ItemID.oak_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 0, 'x', 5, 0]);
Recipes.addShaped({id: ItemID.spruce_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 1, 'x', 5, 1]);
Recipes.addShaped({id: ItemID.birch_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 2, 'x', 5, 2]);
Recipes.addShaped({id: ItemID.jungle_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 3, 'x', 5, 3]);
Recipes.addShaped({id: ItemID.acacia_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 162, 0, 'x', 5, 4]);
Recipes.addShaped({id: ItemID.dark_oak_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 162, 1, 'x', 5, 5]);
Recipes.addShaped({id: ItemID.crimson_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', VanillaBlockID.crimson_stem, 0, 'x', VanillaBlockID.crimson_planks, 0]);
Recipes.addShaped({id: ItemID.warped_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', VanillaBlockID.warped_stem, 0, 'x', VanillaBlockID.warped_planks, 0]);

//stripped oak kitchen
IDRegistry.genBlockID("stripped_oak_kitchen_counter");
Block.createBlockWithRotation("stripped_oak_kitchen_counter", [
	{name: "Stripped Oak Kitchen Counter", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Counter", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Counter", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Counter", texture: [["stripped_oak_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_oak_kitchen_counter");
Item.createItem("stripped_oak_kitchen_counter", "Stripped Oak Kitchen Counter", {name: "stripped_oak_log", meta: 0}, {stack: 64});

var stripped_oak_kitchen_counterModel = ModelAPI.newArray();
stripped_oak_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_oak_log", 0]]);
Furniture.addReplacementItem({id:"stripped_oak_kitchen_counter"},{id:"stripped_oak_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_oak_kitchen_counter, stripped_oak_kitchen_counterModel));

let stripped_oak_kitchen_counterModel = new BlockRenderer.Model();
stripped_oak_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_oak_kitchen_counter, 0).setModel(stripped_oak_kitchen_counterModel);

//stripped spruce kitchen
IDRegistry.genBlockID("stripped_spruce_kitchen_counter");
Block.createBlockWithRotation("stripped_spruce_kitchen_counter", [
	{name: "Stripped Spruce Kitchen Counter", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Counter", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Counter", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Counter", texture: [["stripped_spruce_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_spruce_kitchen_counter");
Item.createItem("stripped_spruce_kitchen_counter", "Stripped Spruce Kitchen Counter", {name: "stripped_spruce_log", meta: 0}, {stack: 64});

var stripped_spruce_kitchen_counterModel = ModelAPI.newArray();
stripped_spruce_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_spruce_log", 0]]);
Furniture.addReplacementItem({id:"stripped_spruce_kitchen_counter"},{id:"stripped_spruce_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_spruce_kitchen_counter, stripped_spruce_kitchen_counterModel));

let stripped_spruce_kitchen_counterModel = new BlockRenderer.Model();
stripped_spruce_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_spruce_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_spruce_kitchen_counter, 0).setModel(stripped_spruce_kitchen_counterModel);

//stripped birch kitchen
IDRegistry.genBlockID("stripped_birch_kitchen_counter");
Block.createBlockWithRotation("stripped_birch_kitchen_counter", [
	{name: "Stripped Birch Kitchen Counter", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Counter", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Counter", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Counter", texture: [["stripped_birch_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_birch_kitchen_counter");
Item.createItem("stripped_birch_kitchen_counter", "Stripped Birch Kitchen Counter", {name: "stripped_birch_log", meta: 0}, {stack: 64});

var stripped_birch_kitchen_counterModel = ModelAPI.newArray();
stripped_birch_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_birch_log", 0]]);
Furniture.addReplacementItem({id:"stripped_birch_kitchen_counter"},{id:"stripped_birch_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_birch_kitchen_counter, stripped_birch_kitchen_counterModel));

let stripped_birch_kitchen_counterModel = new BlockRenderer.Model();
stripped_birch_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_birch_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_birch_kitchen_counter, 0).setModel(stripped_birch_kitchen_counterModel);

//stripped jungle kitchen
IDRegistry.genBlockID("stripped_jungle_kitchen_counter");
Block.createBlockWithRotation("stripped_jungle_kitchen_counter", [
	{name: "Stripped Jungle Kitchen Counter", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Counter", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Counter", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Counter", texture: [["stripped_jungle_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_jungle_kitchen_counter");
Item.createItem("stripped_jungle_kitchen_counter", "Stripped Jungle Kitchen Counter", {name: "stripped_jungle_log", meta: 0}, {stack: 64});

var stripped_jungle_kitchen_counterModel = ModelAPI.newArray();
stripped_jungle_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_jungle_log", 0]]);
Furniture.addReplacementItem({id:"stripped_jungle_kitchen_counter"},{id:"stripped_jungle_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_jungle_kitchen_counter, stripped_jungle_kitchen_counterModel));

let stripped_jungle_kitchen_counterModel = new BlockRenderer.Model();
stripped_jungle_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_jungle_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_jungle_kitchen_counter, 0).setModel(stripped_jungle_kitchen_counterModel);

//stripped acacia kitchen
IDRegistry.genBlockID("stripped_acacia_kitchen_counter");
Block.createBlockWithRotation("stripped_acacia_kitchen_counter", [
	{name: "Stripped Acacia Kitchen Counter", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Counter", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Counter", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Counter", texture: [["stripped_acacia_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_acacia_kitchen_counter");
Item.createItem("stripped_acacia_kitchen_counter", "Stripped Acacia Kitchen Counter", {name: "stripped_acacia_log", meta: 0}, {stack: 64});

var stripped_acacia_kitchen_counterModel = ModelAPI.newArray();
stripped_acacia_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_acacia_log", 0]]);
Furniture.addReplacementItem({id:"stripped_acacia_kitchen_counter"},{id:"stripped_acacia_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_acacia_kitchen_counter, stripped_acacia_kitchen_counterModel));

let stripped_acacia_kitchen_counterModel = new BlockRenderer.Model();
stripped_acacia_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_acacia_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_acacia_kitchen_counter, 0).setModel(stripped_acacia_kitchen_counterModel);

//stripped dark oak kitchen
IDRegistry.genBlockID("stripped_dark_oak_kitchen_counter");
Block.createBlockWithRotation("stripped_dark_oak_kitchen_counter", [
	{name: "Stripped Dark Oak Kitchen Counter", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Counter", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Counter", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Counter", texture: [["stripped_dark_oak_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_dark_oak_kitchen_counter");
Item.createItem("stripped_dark_oak_kitchen_counter", "Stripped Dark Oak Kitchen Counter", {name: "stripped_dark_oak_log", meta: 0}, {stack: 64});

var stripped_dark_oak_kitchen_counterModel = ModelAPI.newArray();
stripped_dark_oak_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_dark_oak_log", 0]]);
Furniture.addReplacementItem({id:"stripped_dark_oak_kitchen_counter"},{id:"stripped_dark_oak_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_dark_oak_kitchen_counter, stripped_dark_oak_kitchen_counterModel));

let stripped_dark_oak_kitchen_counterModel = new BlockRenderer.Model();
stripped_dark_oak_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_dark_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_dark_oak_kitchen_counter, 0).setModel(stripped_dark_oak_kitchen_counterModel);

//stripped crimson kitchen
IDRegistry.genBlockID("stripped_crimson_kitchen_counter");
Block.createBlockWithRotation("stripped_crimson_kitchen_counter", [
	{name: "Stripped Crimson Kitchen Counter", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Counter", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Counter", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Counter", texture: [["stripped_crimson_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_crimson_kitchen_counter");
Item.createItem("stripped_crimson_kitchen_counter", "Stripped Crimson Kitchen Counter", {name: "stripped_crimson_stem_side", meta: 0}, {stack: 64});

var stripped_crimson_kitchen_counterModel = ModelAPI.newArray();
stripped_crimson_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_crimson_stem_side", 0]]);
Furniture.addReplacementItem({id:"stripped_crimson_kitchen_counter"},{id:"stripped_crimson_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_crimson_kitchen_counter, stripped_crimson_kitchen_counterModel));

let stripped_crimson_kitchen_counterModel = new BlockRenderer.Model();
stripped_crimson_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_crimson_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_crimson_kitchen_counter, 0).setModel(stripped_crimson_kitchen_counterModel);

//stripped warped kitchen
IDRegistry.genBlockID("stripped_warped_kitchen_counter");
Block.createBlockWithRotation("stripped_warped_kitchen_counter", [
	{name: "Stripped Warped Kitchen Counter", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Counter", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Counter", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Counter", texture: [["stripped_warped_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_warped_kitchen_counter");
Item.createItem("stripped_warped_kitchen_counter", "Stripped Warped Kitchen Counter", {name: "stripped_warped_stem_side", meta: 0}, {stack: 64});

var stripped_warped_kitchen_counterModel = ModelAPI.newArray();
stripped_warped_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_warped_stem_side", 0]]);
Furniture.addReplacementItem({id:"stripped_warped_kitchen_counter"},{id:"stripped_warped_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_warped_kitchen_counter, stripped_warped_kitchen_counterModel));

let stripped_warped_kitchen_counterModel = new BlockRenderer.Model();
stripped_warped_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_warped_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_warped_kitchen_counter, 0).setModel(stripped_warped_kitchen_counterModel);

//translation kitchens
Translation.addTranslation("Stripped Oak Kitchen Counter", {ru: "Ободранная Дубовая Кухонная Стойка"});
Translation.addTranslation("Stripped Spruce Kitchen Counter", {ru: "Ободранная Еловая Кухонная Стойка"});
Translation.addTranslation("Stripped Birch Kitchen Counter", {ru: "Ободранная Берёзовая Кухонная Стойка"});
Translation.addTranslation("Stripped Jungle Kitchen Counter", {ru: "Ободранная Джунглевая Кухонная Стойка"});
Translation.addTranslation("Stripped Acacia Kitchen Counter", {ru: "Ободранная Акациевая Кухонная Стойка"});
Translation.addTranslation("Stripped Dark Oak Kitchen Counter", {ru: "Ободранная Тёмно Дубовая Кухонная Стойка"});
Translation.addTranslation("Stripped Crimson Kitchen Counter", {ru: "Ободранная Искажённая Кухонная Стойка"});
Translation.addTranslation("Stripped Warped Kitchen Counter", {ru: "Ободранная Багровая Кухонная Стойка"});

//recipes kithens
Recipes.addShaped({id: ItemID.stripped_oak_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 0, 'x', VanillaBlockID.stripped_oak_log, 0]);
Recipes.addShaped({id: ItemID.stripped_spruce_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 1, 'x', VanillaBlockID.stripped_spruce_log, 0]);
Recipes.addShaped({id: ItemID.stripped_birch_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 2, 'x', VanillaBlockID.stripped_birch_log, 0]);
Recipes.addShaped({id: ItemID.stripped_jungle_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 3, 'x', VanillaBlockID.stripped_jungle_log, 0]);
Recipes.addShaped({id: ItemID.stripped_acacia_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 162, 0, 'x', VanillaBlockID.stripped_acacia_log, 0]);
Recipes.addShaped({id: ItemID.stripped_dark_oak_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 162, 1, 'x', VanillaBlockID.stripped_dark_oak_log, 0]);
Recipes.addShaped({id: ItemID.stripped_crimson_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', VanillaBlockID.crimson_stem, 0, 'x', VanillaBlockID.stripped_crimson_stem, 0]);
Recipes.addShaped({id: ItemID.stripped_warped_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', VanillaBlockID.warped_stem, 0, 'x', VanillaBlockID.stripped_warped_stem, 0]);

//white kitchen
IDRegistry.genBlockID("white_kitchen_counter");
Block.createBlockWithRotation("white_kitchen_counter", [
	{name: "White Kitchen Counter", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Counter", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Counter", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Counter", texture: [["hardened_clay_stained_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("white_kitchen_counter");
Item.createItem("white_kitchen_counter", "White Kitchen Counter", {name: "hardened_clay_stained_white", meta: 0}, {stack: 64});

var white_kitchen_counterModel = ModelAPI.newArray();
white_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"white_kitchen_counter"},{id:"white_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.white_kitchen_counter, white_kitchen_counterModel));

let white_kitchen_counterModel = new BlockRenderer.Model();
white_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_white', 0]]);
white_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.white_kitchen_counter, 0).setModel(white_kitchen_counterModel);

//orange kitchen
IDRegistry.genBlockID("orange_kitchen_counter");
Block.createBlockWithRotation("orange_kitchen_counter", [
	{name: "Orange Kitchen Counter", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Counter", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Counter", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Counter", texture: [["hardened_clay_stained_orange", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("orange_kitchen_counter");
Item.createItem("orange_kitchen_counter", "Orange Kitchen Counter", {name: "hardened_clay_stained_orange", meta: 0}, {stack: 64});

var orange_kitchen_counterModel = ModelAPI.newArray();
orange_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"orange_kitchen_counter"},{id:"orange_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.orange_kitchen_counter, orange_kitchen_counterModel));

let orange_kitchen_counterModel = new BlockRenderer.Model();
orange_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_orange', 0]]);
orange_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.orange_kitchen_counter, 0).setModel(orange_kitchen_counterModel);

//magenta kitchen
IDRegistry.genBlockID("magenta_kitchen_counter");
Block.createBlockWithRotation("magenta_kitchen_counter", [
	{name: "Magenta Kitchen Counter", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Counter", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Counter", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Counter", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("magenta_kitchen_counter");
Item.createItem("magenta_kitchen_counter", "Magenta Kitchen Counter", {name: "hardened_clay_stained_magenta", meta: 0}, {stack: 64});

var magenta_kitchen_counterModel = ModelAPI.newArray();
magenta_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"magenta_kitchen_counter"},{id:"magenta_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.magenta_kitchen_counter, magenta_kitchen_counterModel));

let magenta_kitchen_counterModel = new BlockRenderer.Model();
magenta_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_magenta', 0]]);
magenta_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.magenta_kitchen_counter, 0).setModel(magenta_kitchen_counterModel);

//light blue kitchen
IDRegistry.genBlockID("light_blue_kitchen_counter");
Block.createBlockWithRotation("light_blue_kitchen_counter", [
	{name: "Light Blue Kitchen Counter", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Counter", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Counter", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Counter", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_blue_kitchen_counter");
Item.createItem("light_blue_kitchen_counter", "Light Blue Kitchen Counter", {name: "hardened_clay_stained_light_blue", meta: 0}, {stack: 64});

var light_blue_kitchen_counterModel = ModelAPI.newArray();
light_blue_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_blue_kitchen_counter"},{id:"light_blue_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.light_blue_kitchen_counter, light_blue_kitchen_counterModel));

let light_blue_kitchen_counterModel = new BlockRenderer.Model();
light_blue_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_light_blue', 0]]);
light_blue_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.light_blue_kitchen_counter, 0).setModel(light_blue_kitchen_counterModel);

//yellow kitchen
IDRegistry.genBlockID("yellow_kitchen_counter");
Block.createBlockWithRotation("yellow_kitchen_counter", [
	{name: "Yellow Kitchen Counter", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Counter", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Counter", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Counter", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("yellow_kitchen_counter");
Item.createItem("yellow_kitchen_counter", "Yellow Kitchen Counter", {name: "hardened_clay_stained_yellow", meta: 0}, {stack: 64});

var yellow_kitchen_counterModel = ModelAPI.newArray();
yellow_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"yellow_kitchen_counter"},{id:"yellow_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.yellow_kitchen_counter, yellow_kitchen_counterModel));

let yellow_kitchen_counterModel = new BlockRenderer.Model();
yellow_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_yellow', 0]]);
yellow_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.yellow_kitchen_counter, 0).setModel(yellow_kitchen_counterModel);

//lime kitchen
IDRegistry.genBlockID("lime_kitchen_counter");
Block.createBlockWithRotation("lime_kitchen_counter", [
	{name: "Lime Kitchen Counter", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Counter", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Counter", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Counter", texture: [["hardened_clay_stained_lime", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("lime_kitchen_counter");
Item.createItem("lime_kitchen_counter", "Lime Kitchen Counter", {name: "hardened_clay_stained_lime", meta: 0}, {stack: 64});

var lime_kitchen_counterModel = ModelAPI.newArray();
lime_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"lime_kitchen_counter"},{id:"lime_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.lime_kitchen_counter, lime_kitchen_counterModel));

let lime_kitchen_counterModel = new BlockRenderer.Model();
lime_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_lime', 0]]);
lime_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.lime_kitchen_counter, 0).setModel(lime_kitchen_counterModel);

//pink kitchen
IDRegistry.genBlockID("pink_kitchen_counter");
Block.createBlockWithRotation("pink_kitchen_counter", [
	{name: "Pink Kitchen Counter", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Counter", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Counter", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Counter", texture: [["hardened_clay_stained_pink", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("pink_kitchen_counter");
Item.createItem("pink_kitchen_counter", "Pink Kitchen Counter", {name: "hardened_clay_stained_pink", meta: 0}, {stack: 64});

var pink_kitchen_counterModel = ModelAPI.newArray();
pink_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"pink_kitchen_counter"},{id:"pink_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.pink_kitchen_counter, pink_kitchen_counterModel));

let pink_kitchen_counterModel = new BlockRenderer.Model();
pink_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_pink', 0]]);
pink_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.pink_kitchen_counter, 0).setModel(pink_kitchen_counterModel);

//gray kitchen
IDRegistry.genBlockID("gray_kitchen_counter");
Block.createBlockWithRotation("gray_kitchen_counter", [
	{name: "Gray Kitchen Counter", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Counter", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Counter", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Counter", texture: [["hardened_clay_stained_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("gray_kitchen_counter");
Item.createItem("gray_kitchen_counter", "Gray Kitchen Counter", {name: "hardened_clay_stained_gray", meta: 0}, {stack: 64});

var gray_kitchen_counterModel = ModelAPI.newArray();
gray_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"gray_kitchen_counter"},{id:"gray_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.gray_kitchen_counter, gray_kitchen_counterModel));

let gray_kitchen_counterModel = new BlockRenderer.Model();
gray_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_gray', 0]]);
gray_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.gray_kitchen_counter, 0).setModel(gray_kitchen_counterModel);

//light gray kitchen
IDRegistry.genBlockID("light_gray_kitchen_counter");
Block.createBlockWithRotation("light_gray_kitchen_counter", [
	{name: "Light Gray Kitchen Counter", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Counter", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Counter", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Counter", texture: [["hardened_clay_stained_silver", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_gray_kitchen_counter");
Item.createItem("light_gray_kitchen_counter", "Light Gray Kitchen Counter", {name: "hardened_clay_stained_silver", meta: 0}, {stack: 64});

var light_gray_kitchen_counterModel = ModelAPI.newArray();
light_gray_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_gray_kitchen_counter"},{id:"light_gray_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.light_gray_kitchen_counter, light_gray_kitchen_counterModel));

let light_gray_kitchen_counterModel = new BlockRenderer.Model();
light_gray_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_silver', 0]]);
light_gray_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.light_gray_kitchen_counter, 0).setModel(light_gray_kitchen_counterModel);

//cyan kitchen
IDRegistry.genBlockID("cyan_kitchen_counter");
Block.createBlockWithRotation("cyan_kitchen_counter", [
	{name: "Cyan Kitchen Counter", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Counter", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Counter", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Counter", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("cyan_kitchen_counter");
Item.createItem("cyan_kitchen_counter", "Cyan Kitchen Counter", {name: "hardened_clay_stained_cyan", meta: 0}, {stack: 64});

var cyan_kitchen_counterModel = ModelAPI.newArray();
cyan_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"cyan_kitchen_counter"},{id:"cyan_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.cyan_kitchen_counter, cyan_kitchen_counterModel));

let cyan_kitchen_counterModel = new BlockRenderer.Model();
cyan_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_cyan', 0]]);
cyan_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.cyan_kitchen_counter, 0).setModel(cyan_kitchen_counterModel);

//purple kitchen
IDRegistry.genBlockID("purple_kitchen_counter");
Block.createBlockWithRotation("purple_kitchen_counter", [
	{name: "Purple Kitchen Counter", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Counter", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Counter", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Counter", texture: [["hardened_clay_stained_purple", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("purple_kitchen_counter");
Item.createItem("purple_kitchen_counter", "Purple Kitchen Counter", {name: "hardened_clay_stained_purple", meta: 0}, {stack: 64});

var purple_kitchen_counterModel = ModelAPI.newArray();
purple_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"purple_kitchen_counter"},{id:"purple_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.purple_kitchen_counter, purple_kitchen_counterModel));

let purple_kitchen_counterModel = new BlockRenderer.Model();
purple_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_purple', 0]]);
purple_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.purple_kitchen_counter, 0).setModel(purple_kitchen_counterModel);

//blue kitchen
IDRegistry.genBlockID("blue_kitchen_counter");
Block.createBlockWithRotation("blue_kitchen_counter", [
	{name: "Blue Kitchen Counter", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Counter", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Counter", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Counter", texture: [["hardened_clay_stained_blue", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("blue_kitchen_counter");
Item.createItem("blue_kitchen_counter", "Blue Kitchen Counter", {name: "hardened_clay_stained_blue", meta: 0}, {stack: 64});

var blue_kitchen_counterModel = ModelAPI.newArray();
blue_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"blue_kitchen_counter"},{id:"blue_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.blue_kitchen_counter, blue_kitchen_counterModel));

let blue_kitchen_counterModel = new BlockRenderer.Model();
blue_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_blue', 0]]);
blue_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.blue_kitchen_counter, 0).setModel(blue_kitchen_counterModel);

//brown kitchen
IDRegistry.genBlockID("brown_kitchen_counter");
Block.createBlockWithRotation("brown_kitchen_counter", [
	{name: "Brown Kitchen Counter", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Counter", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Counter", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Counter", texture: [["hardened_clay_stained_brown", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("brown_kitchen_counter");
Item.createItem("brown_kitchen_counter", "Brown Kitchen Counter", {name: "hardened_clay_stained_brown", meta: 0}, {stack: 64});

var brown_kitchen_counterModel = ModelAPI.newArray();
brown_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"brown_kitchen_counter"},{id:"brown_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.brown_kitchen_counter, brown_kitchen_counterModel));

let brown_kitchen_counterModel = new BlockRenderer.Model();
brown_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_brown', 0]]);
brown_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.brown_kitchen_counter, 0).setModel(brown_kitchen_counterModel);

//green kitchen
IDRegistry.genBlockID("green_kitchen_counter");
Block.createBlockWithRotation("green_kitchen_counter", [
	{name: "Green Kitchen Counter", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Counter", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Counter", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Counter", texture: [["hardened_clay_stained_green", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("green_kitchen_counter");
Item.createItem("green_kitchen_counter", "Green Kitchen Counter", {name: "hardened_clay_stained_green", meta: 0}, {stack: 64});

var green_kitchen_counterModel = ModelAPI.newArray();
green_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"green_kitchen_counter"},{id:"green_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.green_kitchen_counter, green_kitchen_counterModel));

let green_kitchen_counterModel = new BlockRenderer.Model();
green_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_green', 0]]);
green_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.green_kitchen_counter, 0).setModel(green_kitchen_counterModel);

//red kitchen
IDRegistry.genBlockID("red_kitchen_counter");
Block.createBlockWithRotation("red_kitchen_counter", [
	{name: "Red Kitchen Counter", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Counter", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Counter", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Counter", texture: [["hardened_clay_stained_red", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("red_kitchen_counter");
Item.createItem("red_kitchen_counter", "Red Kitchen Counter", {name: "hardened_clay_stained_red", meta: 0}, {stack: 64});

var red_kitchen_counterModel = ModelAPI.newArray();
red_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"red_kitchen_counter"},{id:"red_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.red_kitchen_counter, red_kitchen_counterModel));

let red_kitchen_counterModel = new BlockRenderer.Model();
red_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_red', 0]]);
red_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.red_kitchen_counter, 0).setModel(red_kitchen_counterModel);

//black kitchen
IDRegistry.genBlockID("black_kitchen_counter");
Block.createBlockWithRotation("black_kitchen_counter", [
	{name: "Black Kitchen Counter", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Counter", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Counter", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Counter", texture: [["hardened_clay_stained_black", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("black_kitchen_counter");
Item.createItem("black_kitchen_counter", "Black Kitchen Counter", {name: "hardened_clay_stained_black", meta: 0}, {stack: 64});

var black_kitchen_counterModel = ModelAPI.newArray();
black_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"black_kitchen_counter"},{id:"black_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.black_kitchen_counter, black_kitchen_counterModel));

let black_kitchen_counterModel = new BlockRenderer.Model();
black_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_black', 0]]);
black_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.black_kitchen_counter, 0).setModel(black_kitchen_counterModel);

//translation kitchens
Translation.addTranslation("White Kitchen Counter", {ru: "Белая Кухонная Стойка"});
Translation.addTranslation("Orange Kitchen Counter", {ru: "Оранжевая Кухонная Стойка"});
Translation.addTranslation("Magenta Kitchen Counter", {ru: "Пурпурная Кухонная Стойка"});
Translation.addTranslation("Light Blue Kitchen Counter", {ru: "Голубая Кухонная Стойка"});
Translation.addTranslation("Yellow Kitchen Counter", {ru: "Жёлтая Кухонная Стойка"});
Translation.addTranslation("Lime Kitchen Counter", {ru: "Лаймовая Кухонная Стойка"});
Translation.addTranslation("Pink Kitchen Counter", {ru: "Розовая Кухонная Стойка"});
Translation.addTranslation("Gray Kitchen Counter", {ru: "Серая Кухонная Стойка"});
Translation.addTranslation("Light Gray Kitchen Counter", {ru: "Светло Серая Кухонная Стойка"});
Translation.addTranslation("Cyan Kitchen Counter", {ru: "Бирюзовая Кухонная Стойка"});
Translation.addTranslation("Purple Kitchen Counter", {ru: "Фиолетвая Кухонная Стойка"});
Translation.addTranslation("Blue Kitchen Counter", {ru: "Синяя Кухонная Стойка"});
Translation.addTranslation("Brown Kitchen Counter", {ru: "Коричневая Кухонная Стойка"});
Translation.addTranslation("Green Kitchen Counter", {ru: "Зеленая Кухонная Стойка"});
Translation.addTranslation("Red Kitchen Counter", {ru: "Красная Кухонная Стойка"});
Translation.addTranslation("Black Kitchen Counter", {ru: "Черная Кухонная Стойка"});

//recipes
Recipes.addShaped({id: ItemID.white_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.white_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.orange_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.orange_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.magenta_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.magenta_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.light_blue_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.light_blue_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.yellow_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.yellow_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.lime_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.lime_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.pink_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.pink_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.gray_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.gray_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.light_gray_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.light_gray_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.cyan_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.cyan_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.purple_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.purple_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.blue_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.blue_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.brown_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.brown_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.green_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.green_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.red_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.red_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.black_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.black_dye, 0, 'x', VanillaBlockID.concrete, 0]);




// file: kitchen_drawer.js

//oak kitchen
IDRegistry.genBlockID("oak_kitchen_drawer");
Block.createBlockWithRotation("oak_kitchen_drawer", [
	{name: "Oak Kitchen Drawer", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Drawer", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Drawer", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Drawer", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_kitchen_drawer");
Item.createItem("oak_kitchen_drawer", "Oak Kitchen Drawer", {name: "oak_kitchen_drawer", meta: 0}, {stack: 64});

var oak_kitchen_drawerModel = ModelAPI.newArray();
oak_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_oak", 0]]);
oak_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_oak", 0]]);
oak_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_oak", 0]]);
oak_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_oak", 0]]);
oak_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_oak_log", 0]]);
oak_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_oak_log", 0]]);
Furniture.addReplacementItem({id:"oak_kitchen_drawer"},{id:"oak_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.oak_kitchen_drawer, oak_kitchen_drawerModel));

let oak_kitchen_drawerModel = new BlockRenderer.Model();
oak_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_oak', 0]]);
oak_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_oak', 0]]);
oak_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_oak', 0]]);
oak_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_oak', 0]]);
oak_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_oak_log', 0]]);
oak_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.oak_kitchen_drawer, 0).setModel(oak_kitchen_drawerModel);

//spruce kitchen
IDRegistry.genBlockID("spruce_kitchen_drawer");
Block.createBlockWithRotation("spruce_kitchen_drawer", [
	{name: "Spruce Kitchen Drawer", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Drawer", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Drawer", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Drawer", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_kitchen_drawer");
Item.createItem("spruce_kitchen_drawer", "Spruce Kitchen Drawer", {name: "spruce_kitchen_drawer", meta: 0}, {stack: 64});

var spruce_kitchen_drawerModel = ModelAPI.newArray();
spruce_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_spruce", 0]]);
spruce_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_spruce", 0]]);
spruce_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_spruce", 0]]);
spruce_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_spruce", 0]]);
spruce_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_spruce_log", 0]]);
spruce_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_spruce_log", 0]]);
Furniture.addReplacementItem({id:"spruce_kitchen_drawer"},{id:"spruce_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.spruce_kitchen_drawer, spruce_kitchen_drawerModel));

let spruce_kitchen_drawerModel = new BlockRenderer.Model();
spruce_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_spruce', 0]]);
spruce_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_spruce', 0]]);
spruce_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_spruce', 0]]);
spruce_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_spruce', 0]]);
spruce_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_spruce_log', 0]]);
spruce_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_spruce_log', 0]]);
ItemModel.getForWithFallback(ItemID.spruce_kitchen_drawer, 0).setModel(spruce_kitchen_drawerModel);

//birch kitchen
IDRegistry.genBlockID("birch_kitchen_drawer");
Block.createBlockWithRotation("birch_kitchen_drawer", [
	{name: "Birch Kitchen Drawer", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Drawer", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Drawer", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Drawer", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_kitchen_drawer");
Item.createItem("birch_kitchen_drawer", "Birch Kitchen Drawer", {name: "birch_kitchen_drawer", meta: 0}, {stack: 64});

var birch_kitchen_drawerModel = ModelAPI.newArray();
birch_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_birch", 0]]);
birch_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_birch", 0]]);
birch_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_birch", 0]]);
birch_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_birch", 0]]);
birch_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_birch_log", 0]]);
birch_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_birch_log", 0]]);
Furniture.addReplacementItem({id:"birch_kitchen_drawer"},{id:"birch_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.birch_kitchen_drawer, birch_kitchen_drawerModel));

let birch_kitchen_drawerModel = new BlockRenderer.Model();
birch_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_birch', 0]]);
birch_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_birch', 0]]);
birch_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_birch', 0]]);
birch_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_birch', 0]]);
birch_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_birch_log', 0]]);
birch_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_birch_log', 0]]);
ItemModel.getForWithFallback(ItemID.birch_kitchen_drawer, 0).setModel(birch_kitchen_drawerModel);

//jungle kitchen
IDRegistry.genBlockID("jungle_kitchen_drawer");
Block.createBlockWithRotation("jungle_kitchen_drawer", [
	{name: "Jungle Kitchen Drawer", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Drawer", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Drawer", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Drawer", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_kitchen_drawer");
Item.createItem("jungle_kitchen_drawer", "Jungle Kitchen Drawer", {name: "jungle_kitchen_drawer", meta: 0}, {stack: 64});

var jungle_kitchen_drawerModel = ModelAPI.newArray();
jungle_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_jungle", 0]]);
jungle_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_jungle", 0]]);
jungle_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_jungle", 0]]);
jungle_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_jungle", 0]]);
jungle_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_jungle_log", 0]]);
jungle_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_jungle_log", 0]]);
Furniture.addReplacementItem({id:"jungle_kitchen_drawer"},{id:"jungle_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.jungle_kitchen_drawer, jungle_kitchen_drawerModel));

let jungle_kitchen_drawerModel = new BlockRenderer.Model();
jungle_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_jungle', 0]]);
jungle_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_jungle', 0]]);
jungle_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_jungle', 0]]);
jungle_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_jungle', 0]]);
jungle_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_jungle_log', 0]]);
jungle_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_jungle_log', 0]]);
ItemModel.getForWithFallback(ItemID.jungle_kitchen_drawer, 0).setModel(jungle_kitchen_drawerModel);

//acacia kitchen
IDRegistry.genBlockID("acacia_kitchen_drawer");
Block.createBlockWithRotation("acacia_kitchen_drawer", [
	{name: "Acacia Kitchen Drawer", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Drawer", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Drawer", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Drawer", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_kitchen_drawer");
Item.createItem("acacia_kitchen_drawer", "Acacia Kitchen Drawer", {name: "acacia_kitchen_drawer", meta: 0}, {stack: 64});

var acacia_kitchen_drawerModel = ModelAPI.newArray();
acacia_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_acacia", 0]]);
acacia_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_acacia", 0]]);
acacia_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_acacia", 0]]);
acacia_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_acacia", 0]]);
acacia_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_acacia_log", 0]]);
acacia_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_acacia_log", 0]]);
Furniture.addReplacementItem({id:"acacia_kitchen_drawer"},{id:"acacia_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.acacia_kitchen_drawer, acacia_kitchen_drawerModel));

let acacia_kitchen_drawerModel = new BlockRenderer.Model();
acacia_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_acacia', 0]]);
acacia_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_acacia', 0]]);
acacia_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_acacia', 0]]);
acacia_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_acacia', 0]]);
acacia_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_acacia_log', 0]]);
acacia_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_acacia_log', 0]]);
ItemModel.getForWithFallback(ItemID.acacia_kitchen_drawer, 0).setModel(acacia_kitchen_drawerModel);

//dark oak kitchen
IDRegistry.genBlockID("dark_oak_kitchen_drawer");
Block.createBlockWithRotation("dark_oak_kitchen_drawer", [
	{name: "Dark Oak Kitchen Drawer", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Drawer", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Drawer", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Drawer", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_kitchen_drawer");
Item.createItem("dark_oak_kitchen_drawer", "Dark Oak Kitchen Drawer", {name: "planks_big_oak", meta: 0}, {stack: 64});

var dark_oak_kitchen_drawerModel = ModelAPI.newArray();
dark_oak_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_big_oak", 0]]);
dark_oak_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_big_oak", 0]]);
dark_oak_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_big_oak", 0]]);
dark_oak_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_big_oak", 0]]);
dark_oak_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_dark_oak_log", 0]]);
dark_oak_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_dark_oak_log", 0]]);
Furniture.addReplacementItem({id:"dark_oak_kitchen_drawer"},{id:"dark_oak_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.dark_oak_kitchen_drawer, dark_oak_kitchen_drawerModel));

let dark_oak_kitchen_drawerModel = new BlockRenderer.Model();
dark_oak_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_big_oak', 0]]);
dark_oak_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_big_oak', 0]]);
dark_oak_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_big_oak', 0]]);
dark_oak_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_big_oak', 0]]);
dark_oak_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_dark_oak_log', 0]]);
dark_oak_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_dark_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.dark_oak_kitchen_drawer, 0).setModel(dark_oak_kitchen_drawerModel);

//crimson kitchen
IDRegistry.genBlockID("crimson_kitchen_drawer");
Block.createBlockWithRotation("crimson_kitchen_drawer", [
	{name: "Crimson Kitchen Drawer", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Drawer", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Drawer", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Drawer", texture: [["crimson_log_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("crimson_kitchen_drawer");
Item.createItem("crimson_kitchen_drawer", "Crimson Kitchen Drawer", {name: "crimson_log_side", meta: 0}, {stack: 64});

var crimson_kitchen_drawerModel = ModelAPI.newArray();
crimson_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["crimson_log_side", 0]]);
crimson_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["crimson_planks", 0]]);
crimson_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["crimson_log_side", 0]]);
crimson_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["crimson_log_side", 0]]);
crimson_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_crimson_stem_side", 0]]);
crimson_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_crimson_stem_side", 0]]);
Furniture.addReplacementItem({id:"crimson_kitchen_drawer"},{id:"crimson_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.crimson_kitchen_drawer, crimson_kitchen_drawerModel));

let crimson_kitchen_drawerModel = new BlockRenderer.Model();
crimson_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['crimson_log_side', 0]]);
crimson_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['crimson_planks', 0]]);
crimson_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['crimson_log_side', 0]]);
crimson_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['crimson_log_side', 0]]);
crimson_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_crimson_stem_side', 0]]);
crimson_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_crimson_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.crimson_kitchen_drawer, 0).setModel(crimson_kitchen_drawerModel);

//warped kitchen
IDRegistry.genBlockID("warped_kitchen_drawer");
Block.createBlockWithRotation("warped_kitchen_drawer", [
	{name: "Warped Kitchen Drawer", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Drawer", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Drawer", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Drawer", texture: [["warped_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("warped_kitchen_drawer");
Item.createItem("warped_kitchen_drawer", "Warped Kitchen Drawer", {name: "warped_stem_side", meta: 0}, {stack: 64});

var warped_kitchen_drawerModel = ModelAPI.newArray();
warped_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["warped_stem_side", 0]]);
warped_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["warped_planks", 0]]);
warped_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["warped_stem_side", 0]]);
warped_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["warped_stem_side", 0]]);
warped_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_warped_stem_side", 0]]);
warped_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_warped_stem_side", 0]]);
Furniture.addReplacementItem({id:"warped_kitchen_drawer"},{id:"warped_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.warped_kitchen_drawer, warped_kitchen_drawerModel));

let warped_kitchen_drawerModel = new BlockRenderer.Model();
warped_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['warped_stem_side', 0]]);
warped_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['warped_planks', 0]]);
warped_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['warped_stem_side', 0]]);
warped_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['warped_stem_side', 0]]);
warped_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_warped_stem_side', 0]]);
warped_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_warped_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.warped_kitchen_drawer, 0).setModel(warped_kitchen_drawerModel);

//translation
Translation.addTranslation("Oak Kitchen Drawer", {ru: "Дубовая Кухонная Ящик"});
Translation.addTranslation("Spruce Kitchen Drawer", {ru: "Еловая Кухонная Ящик"});
Translation.addTranslation("Birch Kitchen Drawer", {ru: "Берёзовая Кухонная Ящик"});
Translation.addTranslation("Jungle Kitchen Drawer", {ru: "Джунглевая Кухонная Ящик"});
Translation.addTranslation("Acacia Kitchen Drawer", {ru: "Акациевая Кухонная Ящик"});
Translation.addTranslation("Dark Oak Kitchen Drawer", {ru: "Тёмно Дубовая Кухонная Ящик"});
Translation.addTranslation("Crimson Kitchen Drawer", {ru: "Искажённая Кухонная Ящик"});
Translation.addTranslation("Warped Kitchen Drawer", {ru: "Багровая Кухонная Ящик"});

Recipes.addShaped({id: ItemID.oak_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 0, 'x', 5, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.spruce_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 1, 'x', 5, 1, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.birch_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 2, 'x', 5, 2, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.jungle_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 3, 'x', 5, 3, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.acacia_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 162, 0, 'x', 5, 4, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.dark_oak_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 162, 1, 'x', 5, 5, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.crimson_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', VanillaBlockID.crimson_stem, 0, 'x', VanillaBlockID.crimson_planks, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.warped_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', VanillaBlockID.warped_stem, 0, 'x', VanillaBlockID.warped_planks, 0, 'v', 54, 0]);

//stripped oak kitchen
IDRegistry.genBlockID("stripped_oak_kitchen_drawer");
Block.createBlockWithRotation("stripped_oak_kitchen_drawer", [
	{name: "Stripped Oak Kitchen Drawer", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Drawer", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Drawer", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Drawer", texture: [["stripped_oak_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_oak_kitchen_drawer");
Item.createItem("stripped_oak_kitchen_drawer", "Stripped Oak Kitchen Drawer", {name: "stripped_oak_kitchen_drawer", meta: 0}, {stack: 64});

var stripped_oak_kitchen_drawerModel = ModelAPI.newArray();
stripped_oak_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_oak_log", 0]]);
Furniture.addReplacementItem({id:"stripped_oak_kitchen_drawer"},{id:"stripped_oak_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_oak_kitchen_drawer, stripped_oak_kitchen_drawerModel));

let stripped_oak_kitchen_drawerModel = new BlockRenderer.Model();
stripped_oak_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_oak_kitchen_drawer, 0).setModel(stripped_oak_kitchen_drawerModel);

//stripped spruce kitchen
IDRegistry.genBlockID("stripped_spruce_kitchen_drawer");
Block.createBlockWithRotation("stripped_spruce_kitchen_drawer", [
	{name: "Stripped Spruce Kitchen Drawer", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Drawer", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Drawer", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Drawer", texture: [["stripped_spruce_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_spruce_kitchen_drawer");
Item.createItem("stripped_spruce_kitchen_drawer", "Stripped Spruce Kitchen Drawer", {name: "stripped_spruce_log", meta: 0}, {stack: 64});

var stripped_spruce_kitchen_drawerModel = ModelAPI.newArray();
stripped_spruce_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_spruce_log", 0]]);
Furniture.addReplacementItem({id:"stripped_spruce_kitchen_drawer"},{id:"stripped_spruce_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_spruce_kitchen_drawer, stripped_spruce_kitchen_drawerModel));

let stripped_spruce_kitchen_drawerModel = new BlockRenderer.Model();
stripped_spruce_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_spruce_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_spruce_kitchen_drawer, 0).setModel(stripped_spruce_kitchen_drawerModel);

//stripped birch kitchen
IDRegistry.genBlockID("stripped_birch_kitchen_drawer");
Block.createBlockWithRotation("stripped_birch_kitchen_drawer", [
	{name: "Stripped Birch Kitchen Drawer", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Drawer", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Drawer", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Drawer", texture: [["stripped_birch_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_birch_kitchen_drawer");
Item.createItem("stripped_birch_kitchen_drawer", "Stripped Birch Kitchen Drawer", {name: "stripped_birch_log", meta: 0}, {stack: 64});

var stripped_birch_kitchen_drawerModel = ModelAPI.newArray();
stripped_birch_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_birch_log", 0]]);
Furniture.addReplacementItem({id:"stripped_birch_kitchen_drawer"},{id:"stripped_birch_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_birch_kitchen_drawer, stripped_birch_kitchen_drawerModel));

let stripped_birch_kitchen_drawerModel = new BlockRenderer.Model();
stripped_birch_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_birch_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_birch_kitchen_drawer, 0).setModel(stripped_birch_kitchen_drawerModel);

//stripped jungle kitchen
IDRegistry.genBlockID("stripped_jungle_kitchen_drawer");
Block.createBlockWithRotation("stripped_jungle_kitchen_drawer", [
	{name: "Stripped Jungle Kitchen Drawer", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Drawer", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Drawer", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Drawer", texture: [["stripped_jungle_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_jungle_kitchen_drawer");
Item.createItem("stripped_jungle_kitchen_drawer", "Stripped Jungle Kitchen Drawer", {name: "stripped_jungle_log", meta: 0}, {stack: 64});

var stripped_jungle_kitchen_drawerModel = ModelAPI.newArray();
stripped_jungle_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_jungle_log", 0]]);
Furniture.addReplacementItem({id:"stripped_jungle_kitchen_drawer"},{id:"stripped_jungle_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_jungle_kitchen_drawer, stripped_jungle_kitchen_drawerModel));

let stripped_jungle_kitchen_drawerModel = new BlockRenderer.Model();
stripped_jungle_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_jungle_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_jungle_kitchen_drawer, 0).setModel(stripped_jungle_kitchen_drawerModel);

//stripped acacia kitchen
IDRegistry.genBlockID("stripped_acacia_kitchen_drawer");
Block.createBlockWithRotation("stripped_acacia_kitchen_drawer", [
	{name: "Stripped Acacia Kitchen Drawer", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Drawer", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Drawer", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Drawer", texture: [["stripped_acacia_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_acacia_kitchen_drawer");
Item.createItem("stripped_acacia_kitchen_drawer", "Stripped Acacia Kitchen Drawer", {name: "stripped_acacia_log", meta: 0}, {stack: 64});

var stripped_acacia_kitchen_drawerModel = ModelAPI.newArray();
stripped_acacia_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_acacia_log", 0]]);
Furniture.addReplacementItem({id:"stripped_acacia_kitchen_drawer"},{id:"stripped_acacia_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_acacia_kitchen_drawer, stripped_acacia_kitchen_drawerModel));

let stripped_acacia_kitchen_drawerModel = new BlockRenderer.Model();
stripped_acacia_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_acacia_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_acacia_kitchen_drawer, 0).setModel(stripped_acacia_kitchen_drawerModel);

//dark oak kitchen
IDRegistry.genBlockID("stripped_dark_oak_kitchen_drawer");
Block.createBlockWithRotation("stripped_dark_oak_kitchen_drawer", [
	{name: "Stripped Dark Oak Kitchen Drawer", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Drawer", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Drawer", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Drawer", texture: [["stripped_dark_oak_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_dark_oak_kitchen_drawer");
Item.createItem("stripped_dark_oak_kitchen_drawer", "Stripped Dark Oak Kitchen Drawer", {name: "stripped_dark_oak_log", meta: 0}, {stack: 64});

var stripped_dark_oak_kitchen_drawerModel = ModelAPI.newArray();
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_dark_oak_log", 0]]);
Furniture.addReplacementItem({id:"stripped_dark_oak_kitchen_drawer"},{id:"stripped_dark_oak_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_dark_oak_kitchen_drawer, stripped_dark_oak_kitchen_drawerModel));

let stripped_dark_oak_kitchen_drawerModel = new BlockRenderer.Model();
stripped_dark_oak_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_dark_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_dark_oak_kitchen_drawer, 0).setModel(stripped_dark_oak_kitchen_drawerModel);

//stripped crimson kitchen
IDRegistry.genBlockID("stripped_crimson_kitchen_drawer");
Block.createBlockWithRotation("stripped_crimson_kitchen_drawer", [
	{name: "Stripped Crimson Kitchen Drawer", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Drawer", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Drawer", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Drawer", texture: [["stripped_crimson_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_crimson_kitchen_drawer");
Item.createItem("stripped_crimson_kitchen_drawer", "Stripped Crimson Kitchen Drawer", {name: "stripped_crimson_stem_side", meta: 0}, {stack: 64});

var stripped_crimson_kitchen_drawerModel = ModelAPI.newArray();
stripped_crimson_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_crimson_stem_side", 0]]);
Furniture.addReplacementItem({id:"stripped_crimson_kitchen_drawer"},{id:"stripped_crimson_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_crimson_kitchen_drawer, stripped_crimson_kitchen_drawerModel));

let stripped_crimson_kitchen_drawerModel = new BlockRenderer.Model();
stripped_crimson_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_crimson_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_crimson_kitchen_drawer, 0).setModel(stripped_crimson_kitchen_drawerModel);

//stripped warped kitchen
IDRegistry.genBlockID("stripped_warped_kitchen_drawer");
Block.createBlockWithRotation("stripped_warped_kitchen_drawer", [
	{name: "Stripped Warped Kitchen Drawer", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Drawer", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Drawer", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Drawer", texture: [["stripped_warped_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_warped_kitchen_drawer");
Item.createItem("stripped_warped_kitchen_drawer", "Stripped Warped Kitchen Drawer", {name: "stripped_warped_stem_side", meta: 0}, {stack: 64});

var stripped_warped_kitchen_drawerModel = ModelAPI.newArray();
stripped_warped_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_warped_stem_side", 0]]);
Furniture.addReplacementItem({id:"stripped_warped_kitchen_drawer"},{id:"stripped_warped_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_warped_kitchen_drawer, stripped_warped_kitchen_drawerModel));

let stripped_warped_kitchen_drawerModel = new BlockRenderer.Model();
stripped_warped_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_warped_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_warped_kitchen_drawer, 0).setModel(stripped_warped_kitchen_drawerModel);

//translation
Translation.addTranslation("Stripped Oak Kitchen Drawer", {ru: "Ободранная Дубовая Кухонная Ящик"});
Translation.addTranslation("Stripped Spruce Kitchen Drawer", {ru: "Ободранная Еловая Кухонная Ящик"});
Translation.addTranslation("Stripped Birch Kitchen Drawer", {ru: "Ободранная Берёзовая Кухонная Ящик"});
Translation.addTranslation("Stripped Jungle Kitchen Drawer", {ru: "Ободранная Джунглевая Кухонная Ящик"});
Translation.addTranslation("Stripped Acacia Kitchen Drawer", {ru: "Ободранная Акациевая Кухонная Ящик"});
Translation.addTranslation("Stripped Dark Oak Kitchen Drawer", {ru: "Ободранная Тёмно Дубовая Кухонная Ящик"});
Translation.addTranslation("Stripped Crimson Kitchen Drawer", {ru: "Ободранная Искажённая Кухонная Ящик"});
Translation.addTranslation("Stripped Warped Kitchen Drawer", {ru: "Ободранная Багровая Кухонная Ящик"});

//recipes
Recipes.addShaped({id: ItemID.stripped_oak_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 0, 'x', VanillaBlockID.stripped_oak_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_spruce_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 1, 'x', VanillaBlockID.stripped_spruce_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_birch_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 2, 'x', VanillaBlockID.stripped_birch_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_jungle_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 3, 'x', VanillaBlockID.stripped_jungle_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_acacia_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 162, 0, 'x', VanillaBlockID.stripped_acacia_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_dark_oak_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 162, 1, 'x', VanillaBlockID.stripped_dark_oak_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_crimson_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', VanillaBlockID.crimson_stem, 0, 'x', VanillaBlockID.stripped_crimson_stem, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_warped_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', VanillaBlockID.warped_stem, 0, 'x', VanillaBlockID.stripped_warped_stem, 0, 'v', 54, 0]);

//white kitchen
IDRegistry.genBlockID("white_kitchen_drawer");
Block.createBlockWithRotation("white_kitchen_drawer", [
	{name: "White Kitchen Drawer", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Drawer", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Drawer", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Drawer", texture: [["hardened_clay_stained_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("white_kitchen_drawer");
Item.createItem("white_kitchen_drawer", "White Kitchen Drawer", {name: "hardened_clay_stained_white", meta: 0}, {stack: 64});

var white_kitchen_drawerModel = ModelAPI.newArray();
white_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
white_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
white_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"white_kitchen_drawer"},{id:"white_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.white_kitchen_drawer, white_kitchen_drawerModel));

let white_kitchen_drawerModel = new BlockRenderer.Model();
white_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_white', 0]]);
white_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
white_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_white', 0]]);
white_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_white', 0]]);
white_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
white_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white ', 0]]);
ItemModel.getForWithFallback(ItemID.white_kitchen_drawer, 0).setModel(white_kitchen_drawerModel);

//orange kitchen
IDRegistry.genBlockID("orange_kitchen_drawer");
Block.createBlockWithRotation("orange_kitchen_drawer", [
	{name: "Orange Kitchen Drawer", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Drawer", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Drawer", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Drawer", texture: [["hardened_clay_stained_orange", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("orange_kitchen_drawer");
Item.createItem("orange_kitchen_drawer", "Orange Kitchen Drawer", {name: "hardened_clay_stained_orange", meta: 0}, {stack: 64});

var orange_kitchen_drawerModel = ModelAPI.newArray();
orange_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
orange_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
orange_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"orange_kitchen_drawer"},{id:"orange_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.orange_kitchen_drawer, orange_kitchen_drawerModel));

let orange_kitchen_drawerModel = new BlockRenderer.Model();
orange_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_orange', 0]]);
orange_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
orange_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_orange', 0]]);
orange_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_orange', 0]]);
orange_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
orange_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white ', 0]]);
ItemModel.getForWithFallback(ItemID.orange_kitchen_drawer, 0).setModel(orange_kitchen_drawerModel);

//magenta kitchen
IDRegistry.genBlockID("magenta_kitchen_drawer");
Block.createBlockWithRotation("magenta_kitchen_drawer", [
	{name: "Magenta Kitchen Drawer", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Drawer", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Drawer", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Drawer", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("magenta_kitchen_drawer");
Item.createItem("magenta_kitchen_drawer", "Magenta Kitchen Drawer", {name: "hardened_clay_stained_magenta", meta: 0}, {stack: 64});

var magenta_kitchen_drawerModel = ModelAPI.newArray();
magenta_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
magenta_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
magenta_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"magenta_kitchen_drawer"},{id:"magenta_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.magenta_kitchen_drawer, magenta_kitchen_drawerModel));

let magenta_kitchen_drawerModel = new BlockRenderer.Model();
magenta_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_magenta', 0]]);
magenta_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
magenta_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_magenta', 0]]);
magenta_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_magenta', 0]]);
magenta_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
magenta_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.magenta_kitchen_drawer, 0).setModel(magenta_kitchen_drawerModel);

//light blue kitchen
IDRegistry.genBlockID("light_blue_kitchen_drawer");
Block.createBlockWithRotation("light_blue_kitchen_drawer", [
	{name: "Light Blue Kitchen Drawer", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Drawer", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Drawer", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Drawer", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_blue_kitchen_drawer");
Item.createItem("light_blue_kitchen_drawer", "Light Blue Kitchen Drawer", {name: "hardened_clay_stained_light_blue", meta: 0}, {stack: 64});

var light_blue_kitchen_drawerModel = ModelAPI.newArray();
light_blue_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
light_blue_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_blue_kitchen_drawer"},{id:"light_blue_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.light_blue_kitchen_drawer, light_blue_kitchen_drawerModel));

let light_blue_kitchen_drawerModel = new BlockRenderer.Model();
light_blue_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_light_blue', 0]]);
light_blue_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
light_blue_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_light_blue', 0]]);
light_blue_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_light_blue', 0]]);
light_blue_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
light_blue_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.light_blue_kitchen_drawer, 0).setModel(light_blue_kitchen_drawerModel);

//yellow kitchen
IDRegistry.genBlockID("yellow_kitchen_drawer");
Block.createBlockWithRotation("yellow_kitchen_drawer", [
	{name: "Yellow Kitchen Drawer", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Drawer", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Drawer", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Drawer", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("yellow_kitchen_drawer");
Item.createItem("yellow_kitchen_drawer", "Yellow Kitchen Drawer", {name: "hardened_clay_stained_yellow", meta: 0}, {stack: 64});

var yellow_kitchen_drawerModel = ModelAPI.newArray();
yellow_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
yellow_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
yellow_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"yellow_kitchen_drawer"},{id:"yellow_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.yellow_kitchen_drawer, yellow_kitchen_drawerModel));

let yellow_kitchen_drawerModel = new BlockRenderer.Model();
yellow_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_yellow', 0]]);
yellow_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
yellow_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_yellow', 0]]);
yellow_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_yellow', 0]]);
yellow_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
yellow_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.yellow_kitchen_drawer, 0).setModel(yellow_kitchen_drawerModel);

//lime kitchen
IDRegistry.genBlockID("lime_kitchen_drawer");
Block.createBlockWithRotation("lime_kitchen_drawer", [
	{name: "Lime Kitchen Drawer", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Drawer", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Drawer", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Drawer", texture: [["hardened_clay_stained_lime", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("lime_kitchen_drawer");
Item.createItem("lime_kitchen_drawer", "Lime Kitchen Drawer", {name: "hardened_clay_stained_lime", meta: 0}, {stack: 64});

var lime_kitchen_drawerModel = ModelAPI.newArray();
lime_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
lime_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
lime_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"lime_kitchen_drawer"},{id:"lime_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.lime_kitchen_drawer, lime_kitchen_drawerModel));

let lime_kitchen_drawerModel = new BlockRenderer.Model();
lime_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_lime', 0]]);
lime_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
lime_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_lime', 0]]);
lime_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_lime', 0]]);
lime_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
lime_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.lime_kitchen_drawer, 0).setModel(lime_kitchen_drawerModel);

//pink kitchen
IDRegistry.genBlockID("pink_kitchen_drawer");
Block.createBlockWithRotation("pink_kitchen_drawer", [
	{name: "Pink Kitchen Drawer", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Drawer", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Drawer", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Drawer", texture: [["hardened_clay_stained_pink", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("pink_kitchen_drawer");
Item.createItem("pink_kitchen_drawer", "Pink Kitchen Drawer", {name: "hardened_clay_stained_pink", meta: 0}, {stack: 64});

var pink_kitchen_drawerModel = ModelAPI.newArray();
pink_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
pink_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
pink_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"pink_kitchen_drawer"},{id:"pink_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.pink_kitchen_drawer, pink_kitchen_drawerModel));

let pink_kitchen_drawerModel = new BlockRenderer.Model();
pink_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_pink', 0]]);
pink_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
pink_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_pink', 0]]);
pink_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_pink', 0]]);
pink_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
pink_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.pink_kitchen_drawer, 0).setModel(pink_kitchen_drawerModel);

//gray kitchen
IDRegistry.genBlockID("gray_kitchen_drawer");
Block.createBlockWithRotation("gray_kitchen_drawer", [
	{name: "Gray Kitchen Drawer", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Drawer", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Drawer", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Drawer", texture: [["hardened_clay_stained_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("gray_kitchen_drawer");
Item.createItem("gray_kitchen_drawer", "Gray Kitchen Drawer", {name: "hardened_clay_stained_gray", meta: 0}, {stack: 64});

var gray_kitchen_drawerModel = ModelAPI.newArray();
gray_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
gray_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
gray_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"gray_kitchen_drawer"},{id:"gray_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.gray_kitchen_drawer, gray_kitchen_drawerModel));

let gray_kitchen_drawerModel = new BlockRenderer.Model();
gray_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_gray', 0]]);
gray_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
gray_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_gray', 0]]);
gray_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_gray', 0]]);
gray_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
gray_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.gray_kitchen_drawer, 0).setModel(gray_kitchen_drawerModel);

//light gray kitchen
IDRegistry.genBlockID("light_gray_kitchen_drawer");
Block.createBlockWithRotation("light_gray_kitchen_drawer", [
	{name: "Light Gray Kitchen Drawer", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Drawer", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Drawer", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Drawer", texture: [["hardened_clay_stained_silver", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_gray_kitchen_drawer");
Item.createItem("light_gray_kitchen_drawer", "Light Gray Kitchen Drawer", {name: "hardened_clay_stained_silver", meta: 0}, {stack: 64});

var light_gray_kitchen_drawerModel = ModelAPI.newArray();
light_gray_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
light_gray_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_gray_kitchen_drawer"},{id:"light_gray_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.light_gray_kitchen_drawer, light_gray_kitchen_drawerModel));

let light_gray_kitchen_drawerModel = new BlockRenderer.Model();
light_gray_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_silver', 0]]);
light_gray_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
light_gray_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_silver', 0]]);
light_gray_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_silver', 0]]);
light_gray_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
light_gray_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.light_gray_kitchen_drawer, 0).setModel(light_gray_kitchen_drawerModel);

//cyan kitchen
IDRegistry.genBlockID("cyan_kitchen_drawer");
Block.createBlockWithRotation("cyan_kitchen_drawer", [
	{name: "Cyan Kitchen Drawer", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Drawer", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Drawer", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Drawer", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("cyan_kitchen_drawer");
Item.createItem("cyan_kitchen_drawer", "Cyan Kitchen Drawer", {name: "hardened_clay_stained_cyan", meta: 0}, {stack: 64});

var cyan_kitchen_drawerModel = ModelAPI.newArray();
cyan_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
cyan_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
cyan_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"cyan_kitchen_drawer"},{id:"cyan_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.cyan_kitchen_drawer, cyan_kitchen_drawerModel));

let cyan_kitchen_drawerModel = new BlockRenderer.Model();
cyan_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_cyan', 0]]);
cyan_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
cyan_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_cyan', 0]]);
cyan_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_cyan', 0]]);
cyan_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
cyan_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.cyan_kitchen_drawer, 0).setModel(cyan_kitchen_drawerModel);

//purple kitchen
IDRegistry.genBlockID("purple_kitchen_drawer");
Block.createBlockWithRotation("purple_kitchen_drawer", [
	{name: "Purple Kitchen Drawer", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Drawer", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Drawer", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Drawer", texture: [["hardened_clay_stained_purple", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("purple_kitchen_drawer");
Item.createItem("purple_kitchen_drawer", "Purple Kitchen Drawer", {name: "hardened_clay_stained_purple", meta: 0}, {stack: 64});

var purple_kitchen_drawerModel = ModelAPI.newArray();
purple_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
purple_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
purple_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"purple_kitchen_drawer"},{id:"purple_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.purple_kitchen_drawer, purple_kitchen_drawerModel));

let purple_kitchen_drawerModel = new BlockRenderer.Model();
purple_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_purple', 0]]);
purple_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
purple_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_purple', 0]]);
purple_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_purple', 0]]);
purple_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
purple_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.purple_kitchen_drawer, 0).setModel(purple_kitchen_drawerModel);

//blue kitchen
IDRegistry.genBlockID("blue_kitchen_drawer");
Block.createBlockWithRotation("blue_kitchen_drawer", [
	{name: "Blue Kitchen Drawer", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Drawer", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Drawer", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Drawer", texture: [["hardened_clay_stained_blue", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("blue_kitchen_drawer");
Item.createItem("blue_kitchen_drawer", "Blue Kitchen Drawer", {name: "hardened_clay_stained_blue", meta: 0}, {stack: 64});

var blue_kitchen_drawerModel = ModelAPI.newArray();
blue_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
blue_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
blue_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"blue_kitchen_drawer"},{id:"blue_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.blue_kitchen_drawer, blue_kitchen_drawerModel));

let blue_kitchen_drawerModel = new BlockRenderer.Model();
blue_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_blue', 0]]);
blue_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
blue_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_blue', 0]]);
blue_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_blue', 0]]);
blue_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
blue_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.blue_kitchen_drawer, 0).setModel(blue_kitchen_drawerModel);

//brown kitchen
IDRegistry.genBlockID("brown_kitchen_drawer");
Block.createBlockWithRotation("brown_kitchen_drawer", [
	{name: "Brown Kitchen Drawer", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Drawer", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Drawer", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Drawer", texture: [["hardened_clay_stained_brown", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("brown_kitchen_drawer");
Item.createItem("brown_kitchen_drawer", "Brown Kitchen Drawer", {name: "hardened_clay_stained_brown", meta: 0}, {stack: 64});

var brown_kitchen_drawerModel = ModelAPI.newArray();
brown_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
brown_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
brown_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"brown_kitchen_drawer"},{id:"brown_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.brown_kitchen_drawer, brown_kitchen_drawerModel));

let brown_kitchen_drawerModel = new BlockRenderer.Model();
brown_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_brown', 0]]);
brown_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
brown_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_brown', 0]]);
brown_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_brown', 0]]);
brown_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
brown_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.brown_kitchen_drawer, 0).setModel(brown_kitchen_drawerModel);

//green kitchen
IDRegistry.genBlockID("green_kitchen_drawer");
Block.createBlockWithRotation("green_kitchen_drawer", [
	{name: "Green Kitchen Drawer", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Drawer", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Drawer", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Drawer", texture: [["hardened_clay_stained_green", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("green_kitchen_drawer");
Item.createItem("green_kitchen_drawer", "Green Kitchen Drawer", {name: "hardened_clay_stained_green", meta: 0}, {stack: 64});

var green_kitchen_drawerModel = ModelAPI.newArray();
green_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
green_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
green_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"green_kitchen_drawer"},{id:"green_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.green_kitchen_drawer, green_kitchen_drawerModel));

let green_kitchen_drawerModel = new BlockRenderer.Model();
green_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_green', 0]]);
green_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
green_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_green', 0]]);
green_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_green', 0]]);
green_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
green_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.green_kitchen_drawer, 0).setModel(green_kitchen_drawerModel);

//red kitchen
IDRegistry.genBlockID("red_kitchen_drawer");
Block.createBlockWithRotation("red_kitchen_drawer", [
	{name: "Red Kitchen Drawer", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Drawer", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Drawer", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Drawer", texture: [["hardened_clay_stained_red", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("red_kitchen_drawer");
Item.createItem("red_kitchen_drawer", "Red Kitchen Drawer", {name: "hardened_clay_stained_red", meta: 0}, {stack: 64});

var red_kitchen_drawerModel = ModelAPI.newArray();
red_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
red_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
red_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"red_kitchen_drawer"},{id:"red_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.red_kitchen_drawer, red_kitchen_drawerModel));

let red_kitchen_drawerModel = new BlockRenderer.Model();
red_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_red', 0]]);
red_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
red_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_red', 0]]);
red_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_red', 0]]);
red_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
red_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.red_kitchen_drawer, 0).setModel(red_kitchen_drawerModel);

//black kitchen
IDRegistry.genBlockID("black_kitchen_drawer");
Block.createBlockWithRotation("black_kitchen_drawer", [
	{name: "Black Kitchen Drawer", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Drawer", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Drawer", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Drawer", texture: [["hardened_clay_stained_black", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("black_kitchen_drawer");
Item.createItem("black_kitchen_drawer", "Black Kitchen Drawer", {name: "hardened_clay_stained_black", meta: 0}, {stack: 64});

var black_kitchen_drawerModel = ModelAPI.newArray();
black_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
black_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
black_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"black_kitchen_drawer"},{id:"black_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.black_kitchen_drawer, black_kitchen_drawerModel));

let black_kitchen_drawerModel = new BlockRenderer.Model();
black_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_black', 0]]);
black_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
black_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_black', 0]]);
black_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_black', 0]]);
black_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
black_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.black_kitchen_drawer, 0).setModel(black_kitchen_drawerModel);

//translation
Translation.addTranslation("White Kitchen Drawer", {ru: "Белая Кухонная Ящик"});
Translation.addTranslation("Orange Kitchen Drawer", {ru: "Оранжевая Кухонная Ящик"});
Translation.addTranslation("Magenta Kitchen Drawer", {ru: "Пурпурная Кухонная Ящик"});
Translation.addTranslation("Light Blue Kitchen Drawer", {ru: "Голубая Кухонная Ящик"});
Translation.addTranslation("Yellow Kitchen Drawer", {ru: "Жёлтая Кухонная Ящик"});
Translation.addTranslation("Lime Kitchen Drawer", {ru: "Лаймовая Кухонная Ящик"});
Translation.addTranslation("Pink Kitchen Drawer", {ru: "Розовая Кухонная Ящик"});
Translation.addTranslation("Gray Kitchen Drawer", {ru: "Серая Кухонная Ящик"});
Translation.addTranslation("Light Gray Kitchen Drawer", {ru: "Светло Серая Кухонная Ящик"});
Translation.addTranslation("Cyan Kitchen Drawer", {ru: "Бирюзовая Кухонная Ящик"});
Translation.addTranslation("Purple Kitchen Drawer", {ru: "Фиолетвая Кухонная Ящик"});
Translation.addTranslation("Blue Kitchen Drawer", {ru: "Синяя Кухонная Ящик"});
Translation.addTranslation("Brown Kitchen Drawer", {ru: "Коричневая Кухонная Ящик"});
Translation.addTranslation("Green Kitchen Drawer", {ru: "Зеленая Кухонная Ящик"});
Translation.addTranslation("Red Kitchen Drawer", {ru: "Красная Кухонная Ящик"});
Translation.addTranslation("Black Kitchen Drawer", {ru: "Черная Кухонная Ящик"});

//recipes
Recipes.addShaped({id: ItemID.white_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.white_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.orange_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.orange_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.magenta_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.magenta_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.light_blue_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.light_blue_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.yellow_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.yellow_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.lime_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.lime_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.pink_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.pink_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.gray_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.gray_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.light_gray_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.light_gray_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.cyan_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.cyan_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.purple_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.purple_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.blue_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.blue_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.brown_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.brown_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.green_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.green_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.red_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.red_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.black_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.black_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);




// file: kitchen_drawer_gui.js

var oak_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.oak_kitchen_drawer,{getGuiScreen:function(){return oak_kitchen_drawerUI}});

var spruce_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.spruce_kitchen_drawer,{getGuiScreen:function(){return spruce_kitchen_drawerUI}});

var birch_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.birch_kitchen_drawer,{getGuiScreen:function(){return birch_kitchen_drawerUI}});

var jungle_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.jungle_kitchen_drawer,{getGuiScreen:function(){return jungle_kitchen_drawerUI}});

var acacia_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.acacia_kitchen_drawer,{getGuiScreen:function(){return acacia_kitchen_drawerUI}});

var dark_oak_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.dark_oak_kitchen_drawer,{getGuiScreen:function(){return dark_oak_kitchen_drawerUI}});

var crimson_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.crimson_kitchen_drawer,{getGuiScreen:function(){return crimson_kitchen_drawerUI}});

var warped_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.warped_kitchen_drawer,{getGuiScreen:function(){return warped_kitchen_drawerUI}});

//stripped
var stripped_oak_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.stripped_oak_kitchen_drawer,{getGuiScreen:function(){return stripped_oak_kitchen_drawerUI}});

var stripped_spruce_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.stripped_spruce_kitchen_drawer,{getGuiScreen:function(){return stripped_spruce_kitchen_drawerUI}});

var stripped_birch_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.stripped_birch_kitchen_drawer,{getGuiScreen:function(){return stripped_birch_kitchen_drawerUI}});

var stripped_jungle_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.stripped_jungle_kitchen_drawer,{getGuiScreen:function(){return stripped_jungle_kitchen_drawerUI}});

var stripped_acacia_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.stripped_acacia_kitchen_drawer,{getGuiScreen:function(){return stripped_acacia_kitchen_drawerUI}});

var stripped_dark_oak_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.stripped_dark_oak_kitchen_drawer,{getGuiScreen:function(){return stripped_dark_oak_kitchen_drawerUI}});

var stripped_crimson_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.stripped_crimson_kitchen_drawer,{getGuiScreen:function(){return stripped_crimson_kitchen_drawerUI}});

var stripped_warped_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.stripped_warped_kitchen_drawer,{getGuiScreen:function(){return stripped_warped_kitchen_drawerUI}});

//coloros
var white_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.white_kitchen_drawer,{getGuiScreen:function(){return white_kitchen_drawerUI}});

var orange_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.orange_kitchen_drawer,{getGuiScreen:function(){return orange_kitchen_drawerUI}});

var magenta_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.magenta_kitchen_drawer,{getGuiScreen:function(){return magenta_kitchen_drawerUI}});

var light_blue_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.light_blue_kitchen_drawer,{getGuiScreen:function(){return light_blue_kitchen_drawerUI}});

var yellow_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.yellow_kitchen_drawer,{getGuiScreen:function(){return yellow_kitchen_drawerUI}});

var lime_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.lime_kitchen_drawer,{getGuiScreen:function(){return lime_kitchen_drawerUI}});

var pink_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.pink_kitchen_drawer,{getGuiScreen:function(){return pink_kitchen_drawerUI}});

var gray_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.gray_kitchen_drawer,{getGuiScreen:function(){return gray_kitchen_drawerUI}});

var light_gray_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.light_gray_kitchen_drawer,{getGuiScreen:function(){return light_gray_kitchen_drawerUI}});

var cyan_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.cyan_kitchen_drawer,{getGuiScreen:function(){return cyan_kitchen_drawerUI}});

var purple_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.purple_kitchen_drawer,{getGuiScreen:function(){return purple_kitchen_drawerUI}});

var blue_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.blue_kitchen_drawer,{getGuiScreen:function(){return blue_kitchen_drawerUI}});

var brown_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.brown_kitchen_drawer,{getGuiScreen:function(){return brown_kitchen_drawerUI}});

var green_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.green_kitchen_drawer,{getGuiScreen:function(){return green_kitchen_drawerUI}});

var red_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.red_kitchen_drawer,{getGuiScreen:function(){return red_kitchen_drawerUI}});

var black_kitchen_drawerUI=new UI.StandartWindow({standart:{header:{text:{text:"Kitchen Drawer"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:425,y:40,size:50},
slot2:{type:"slot",x:475,y:40,size:50},
slot3:{type:"slot",x:525,y:40,size:50},
slot4:{type:"slot",x:575,y:40,size:50},
slot5:{type:"slot",x:625,y:40,size:50},
slot6:{type:"slot",x:675,y:40,size:50},
slot7:{type:"slot",x:725,y:40,size:50},
slot8:{type:"slot",x:775,y:40,size:50},
slot9:{type:"slot",x:825,y:40,size:50}}});
TileEntity.registerPrototype(BlockID.black_kitchen_drawer,{getGuiScreen:function(){return black_kitchen_drawerUI}});




// file: kitchen_sink.js

//oak kitchen
IDRegistry.genBlockID("oak_kitchen_sink_light");
Block.createBlockWithRotation("oak_kitchen_sink_light", [
	{name: "Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("oak_kitchen_sink_light");
Item.createItem("oak_kitchen_sink_light", "Oak Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var oak_kitchen_sink_lightModel = ModelAPI.newArray();
oak_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_oak',0],['concrete_white',0],['planks_oak',0],['planks_oak',0],['planks_oak',0],['planks_oak',0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"oak_kitchen_sink_light"},{id:"oak_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.oak_kitchen_sink_light, oak_kitchen_sink_lightModel));

let oak_kitchen_sink_lightModel = new BlockRenderer.Model();
oak_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_oak',0],['concrete_white',0],['planks_oak',0],['planks_oak',0],['planks_oak',0],['planks_oak',0]]);
oak_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
oak_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
oak_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
oak_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
oak_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
oak_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.oak_kitchen_sink_light, 0).setModel(oak_kitchen_sink_lightModel);

//spruce kitchen
IDRegistry.genBlockID("spruce_kitchen_sink_light");
Block.createBlockWithRotation("spruce_kitchen_sink_light", [
	{name: "Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("spruce_kitchen_sink_light");
Item.createItem("spruce_kitchen_sink_light", "Spruce Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var spruce_kitchen_sink_lightModel = ModelAPI.newArray();
spruce_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_spruce',0],['concrete_white',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"spruce_kitchen_sink_light"},{id:"spruce_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.spruce_kitchen_sink_light, spruce_kitchen_sink_lightModel));

let spruce_kitchen_sink_lightModel = new BlockRenderer.Model();
spruce_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_spruce',0],['concrete_white',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0]]);
spruce_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
spruce_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
spruce_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.spruce_kitchen_sink_light, 0).setModel(spruce_kitchen_sink_lightModel);

//birch kitchen
IDRegistry.genBlockID("birch_kitchen_sink_light");
Block.createBlockWithRotation("birch_kitchen_sink_light", [
	{name: "Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("birch_kitchen_sink_light");
Item.createItem("birch_kitchen_sink_light", "Birch Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var birch_kitchen_sink_lightModel = ModelAPI.newArray();
birch_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_birch',0],['concrete_white',0],['planks_birch',0],['planks_birch',0],['planks_birch',0],['planks_birch',0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"birch_kitchen_sink_light"},{id:"birch_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.birch_kitchen_sink_light, birch_kitchen_sink_lightModel));

let birch_kitchen_sink_lightModel = new BlockRenderer.Model();
birch_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_birch',0],['concrete_white',0],['planks_birch',0],['planks_birch',0],['planks_birch',0],['planks_birch',0]]);
birch_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
birch_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
birch_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
birch_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
birch_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
birch_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
birch_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.birch_kitchen_sink_light, 0).setModel(birch_kitchen_sink_lightModel);

//jungle kitchen
IDRegistry.genBlockID("jungle_kitchen_sink_light");
Block.createBlockWithRotation("jungle_kitchen_sink_light", [
	{name: "Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("jungle_kitchen_sink_light");
Item.createItem("jungle_kitchen_sink_light", "Jungle Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var jungle_kitchen_sink_lightModel = ModelAPI.newArray();
jungle_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_jungle',0],['concrete_white',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"jungle_kitchen_sink_light"},{id:"jungle_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.jungle_kitchen_sink_light, jungle_kitchen_sink_lightModel));

let jungle_kitchen_sink_lightModel = new BlockRenderer.Model();
jungle_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_jungle',0],['concrete_white',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0]]);
jungle_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
jungle_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
jungle_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.jungle_kitchen_sink_light, 0).setModel(jungle_kitchen_sink_lightModel);

//acacia kitchen
IDRegistry.genBlockID("acacia_kitchen_sink_light");
Block.createBlockWithRotation("acacia_kitchen_sink_light", [
	{name: "Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("acacia_kitchen_sink_light");
Item.createItem("acacia_kitchen_sink_light", "Acacia Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var acacia_kitchen_sink_lightModel = ModelAPI.newArray();
acacia_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_acacia',0],['concrete_white',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"acacia_kitchen_sink_light"},{id:"acacia_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.acacia_kitchen_sink_light, acacia_kitchen_sink_lightModel));

let acacia_kitchen_sink_lightModel = new BlockRenderer.Model();
acacia_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_acacia',0],['concrete_white',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0]]);
acacia_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
acacia_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
acacia_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.acacia_kitchen_sink_light, 0).setModel(acacia_kitchen_sink_lightModel);

//dark_oak kitchen
IDRegistry.genBlockID("dark_oak_kitchen_sink_light");
Block.createBlockWithRotation("dark_oak_kitchen_sink_light", [
	{name: "Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("dark_oak_kitchen_sink_light");
Item.createItem("dark_oak_kitchen_sink_light", "Dark Oak Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var dark_oak_kitchen_sink_lightModel = ModelAPI.newArray();
dark_oak_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_big_oak',0],['concrete_white',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"dark_oak_kitchen_sink_light"},{id:"dark_oak_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.dark_oak_kitchen_sink_light, dark_oak_kitchen_sink_lightModel));

let dark_oak_kitchen_sink_lightModel = new BlockRenderer.Model();
dark_oak_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_big_oak',0],['concrete_white',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0]]);
dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.dark_oak_kitchen_sink_light, 0).setModel(dark_oak_kitchen_sink_lightModel);

//crimson kitchen
IDRegistry.genBlockID("crimson_kitchen_sink_light");
Block.createBlockWithRotation("crimson_kitchen_sink_light", [
	{name: "Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("crimson_kitchen_sink_light");
Item.createItem("crimson_kitchen_sink_light", "Crimson Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var crimson_kitchen_sink_lightModel = ModelAPI.newArray();
crimson_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['crimson_planks',0],['concrete_white',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"crimson_kitchen_sink_light"},{id:"crimson_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.crimson_kitchen_sink_light, crimson_kitchen_sink_lightModel));

let crimson_kitchen_sink_lightModel = new BlockRenderer.Model();
crimson_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['crimson_planks',0],['concrete_white',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0]]);
crimson_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
crimson_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
crimson_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.crimson_kitchen_sink_light, 0).setModel(crimson_kitchen_sink_lightModel);

//warped kitchen
IDRegistry.genBlockID("warped_kitchen_sink_light");
Block.createBlockWithRotation("warped_kitchen_sink_light", [
	{name: "Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("warped_kitchen_sink_light");
Item.createItem("warped_kitchen_sink_light", "Warped Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var warped_kitchen_sink_lightModel = ModelAPI.newArray();
warped_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['warped_planks',0],['concrete_white',0],['warped_planks',0],['warped_planks',0],['warped_planks',0],['warped_planks',0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"warped_kitchen_sink_light"},{id:"warped_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.warped_kitchen_sink_light, warped_kitchen_sink_lightModel));

let warped_kitchen_sink_lightModel = new BlockRenderer.Model();
warped_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['warped_planks',0],['concrete_white',0],['warped_planks',0],['warped_planks',0],['warped_planks',0],['warped_planks',0]]);
warped_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
warped_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
warped_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
warped_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
warped_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
warped_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
warped_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.warped_kitchen_sink_light, 0).setModel(warped_kitchen_sink_lightModel);

//translation
Translation.addTranslation("Oak Kitchen Sink (Light)", {ru: "Дубовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Spruce Kitchen Sink (Light)", {ru: "Еловая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Birch Kitchen Sink (Light)", {ru: "Берёзовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Jungle Kitchen Sink (Light)", {ru: "Джунглевая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Acacia Kitchen Sink (Light)", {ru: "Акациевая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Dark Oak Kitchen Sink (Light)", {ru: "Тёмно Дубовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Crimson Kitchen Sink (Light)", {ru: "Искажённая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Warped Kitchen Sink (Light)", {ru: "Багровая Кухонная Раковина (Светлая)"});

//recipes
Recipes.addShaped({id: ItemID.oak_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.spruce_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 1, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.birch_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 2, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.jungle_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 3, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.acacia_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 4, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.dark_oak_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 5, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.crimson_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.crimson_planks, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.warped_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.warped_planks, 0, 'v', 325, 0, 'o', 265, 0]);

//oak kitchen
IDRegistry.genBlockID("oak_kitchen_sink_dark");
Block.createBlockWithRotation("oak_kitchen_sink_dark", [
	{name: "Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("oak_kitchen_sink_dark");
Item.createItem("oak_kitchen_sink_dark", "Oak Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var oak_kitchen_sink_darkModel = ModelAPI.newArray();
oak_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_oak',0],['concrete_gray',0],['planks_oak',0],['planks_oak',0],['planks_oak',0],['planks_oak',0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"oak_kitchen_sink_dark"},{id:"oak_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.oak_kitchen_sink_dark, oak_kitchen_sink_darkModel));

let oak_kitchen_sink_darkModel = new BlockRenderer.Model();
oak_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_oak',0],['concrete_gray',0],['planks_oak',0],['planks_oak',0],['planks_oak',0],['planks_oak',0]]);
oak_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
oak_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
oak_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
oak_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
oak_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
oak_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.oak_kitchen_sink_dark, 0).setModel(oak_kitchen_sink_darkModel);

//spruce kitchen
IDRegistry.genBlockID("spruce_kitchen_sink_dark");
Block.createBlockWithRotation("spruce_kitchen_sink_dark", [
	{name: "Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("spruce_kitchen_sink_dark");
Item.createItem("spruce_kitchen_sink_dark", "Spruce Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var spruce_kitchen_sink_darkModel = ModelAPI.newArray();
spruce_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_spruce',0],['concrete_gray',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"spruce_kitchen_sink_dark"},{id:"spruce_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.spruce_kitchen_sink_dark, spruce_kitchen_sink_darkModel));

let spruce_kitchen_sink_darkModel = new BlockRenderer.Model();
spruce_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_spruce',0],['concrete_gray',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0]]);
spruce_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
spruce_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
spruce_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.spruce_kitchen_sink_dark, 0).setModel(spruce_kitchen_sink_darkModel);

//birch kitchen
IDRegistry.genBlockID("birch_kitchen_sink_dark");
Block.createBlockWithRotation("birch_kitchen_sink_dark", [
	{name: "Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("birch_kitchen_sink_dark");
Item.createItem("birch_kitchen_sink_dark", "Birch Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var birch_kitchen_sink_darkModel = ModelAPI.newArray();
birch_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_birch',0],['concrete_gray',0],['planks_birch',0],['planks_birch',0],['planks_birch',0],['planks_birch',0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"birch_kitchen_sink_dark"},{id:"birch_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.birch_kitchen_sink_dark, birch_kitchen_sink_darkModel));

let birch_kitchen_sink_darkModel = new BlockRenderer.Model();
birch_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_birch',0],['concrete_gray',0],['planks_birch',0],['planks_birch',0],['planks_birch',0],['planks_birch',0]]);
birch_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
birch_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
birch_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
birch_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
birch_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
birch_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
birch_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.birch_kitchen_sink_dark, 0).setModel(birch_kitchen_sink_darkModel);

//jungle kitchen
IDRegistry.genBlockID("jungle_kitchen_sink_dark");
Block.createBlockWithRotation("jungle_kitchen_sink_dark", [
	{name: "Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("jungle_kitchen_sink_dark");
Item.createItem("jungle_kitchen_sink_dark", "Jungle Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var jungle_kitchen_sink_darkModel = ModelAPI.newArray();
jungle_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_jungle',0],['concrete_gray',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"jungle_kitchen_sink_dark"},{id:"jungle_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.jungle_kitchen_sink_dark, jungle_kitchen_sink_darkModel));

let jungle_kitchen_sink_darkModel = new BlockRenderer.Model();
jungle_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_jungle',0],['concrete_gray',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0]]);
jungle_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
jungle_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
jungle_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.jungle_kitchen_sink_dark, 0).setModel(jungle_kitchen_sink_darkModel);

//acacia kitchen
IDRegistry.genBlockID("acacia_kitchen_sink_dark");
Block.createBlockWithRotation("acacia_kitchen_sink_dark", [
	{name: "Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("acacia_kitchen_sink_dark");
Item.createItem("acacia_kitchen_sink_dark", "Acacia Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var acacia_kitchen_sink_darkModel = ModelAPI.newArray();
acacia_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_acacia',0],['concrete_gray',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"acacia_kitchen_sink_dark"},{id:"acacia_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.acacia_kitchen_sink_dark, acacia_kitchen_sink_darkModel));

let acacia_kitchen_sink_darkModel = new BlockRenderer.Model();
acacia_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_acacia',0],['concrete_gray',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0]]);
acacia_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
acacia_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
acacia_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.acacia_kitchen_sink_dark, 0).setModel(acacia_kitchen_sink_darkModel);

//dark_oak kitchen
IDRegistry.genBlockID("dark_oak_kitchen_sink_dark");
Block.createBlockWithRotation("dark_oak_kitchen_sink_dark", [
	{name: "Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("dark_oak_kitchen_sink_dark");
Item.createItem("dark_oak_kitchen_sink_dark", "Dark Oak Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var dark_oak_kitchen_sink_darkModel = ModelAPI.newArray();
dark_oak_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_big_oak',0],['concrete_gray',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"dark_oak_kitchen_sink_dark"},{id:"dark_oak_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.dark_oak_kitchen_sink_dark, dark_oak_kitchen_sink_darkModel));

let dark_oak_kitchen_sink_darkModel = new BlockRenderer.Model();
dark_oak_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_big_oak',0],['concrete_gray',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0]]);
dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.dark_oak_kitchen_sink_dark, 0).setModel(dark_oak_kitchen_sink_darkModel);

//crimson kitchen
IDRegistry.genBlockID("crimson_kitchen_sink_dark");
Block.createBlockWithRotation("crimson_kitchen_sink_dark", [
	{name: "Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("crimson_kitchen_sink_dark");
Item.createItem("crimson_kitchen_sink_dark", "Crimson Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var crimson_kitchen_sink_darkModel = ModelAPI.newArray();
crimson_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['crimson_planks',0],['concrete_gray',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"crimson_kitchen_sink_dark"},{id:"crimson_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.crimson_kitchen_sink_dark, crimson_kitchen_sink_darkModel));

let crimson_kitchen_sink_darkModel = new BlockRenderer.Model();
crimson_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['crimson_planks',0],['concrete_gray',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0]]);
crimson_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
crimson_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
crimson_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.crimson_kitchen_sink_dark, 0).setModel(crimson_kitchen_sink_darkModel);

//warped kitchen
IDRegistry.genBlockID("warped_kitchen_sink_dark");
Block.createBlockWithRotation("warped_kitchen_sink_dark", [
	{name: "Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("warped_kitchen_sink_dark");
Item.createItem("warped_kitchen_sink_dark", "Warped Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var warped_kitchen_sink_darkModel = ModelAPI.newArray();
warped_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['warped_planks',0],['concrete_gray',0],['warped_planks',0],['warped_planks',0],['warped_planks',0],['warped_planks',0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"warped_kitchen_sink_dark"},{id:"warped_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.warped_kitchen_sink_dark, warped_kitchen_sink_darkModel));

let warped_kitchen_sink_darkModel = new BlockRenderer.Model();
warped_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['warped_planks',0],['concrete_gray',0],['warped_planks',0],['warped_planks',0],['warped_planks',0],['warped_planks',0]]);
warped_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
warped_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
warped_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
warped_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
warped_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
warped_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
warped_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.warped_kitchen_sink_dark, 0).setModel(warped_kitchen_sink_darkModel);

//translation
Translation.addTranslation("Oak Kitchen Sink (Dark)", {ru: "Дубовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Spruce Kitchen Sink (Dark)", {ru: "Еловая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Birch Kitchen Sink (Dark)", {ru: "Берёзовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Jungle Kitchen Sink (Dark)", {ru: "Джунглевая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Acacia Kitchen Sink (Dark)", {ru: "Акациевая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Dark Oak Kitchen Sink (Dark)", {ru: "Тёмно Дубовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Crimson Kitchen Sink (Dark)", {ru: "Искажённая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Warped Kitchen Sink (Dark)", {ru: "Багровая Кухонная Раковина (Тёмная)"});

//recipes
Recipes.addShaped({id: ItemID.oak_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.spruce_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 1, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.birch_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 2, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.jungle_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 3, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.acacia_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 4, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.dark_oak_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 5, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.crimson_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.crimson_planks, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.warped_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.warped_planks, 0, 'v', 325, 0, 'o', 265, 0]);

//stripped oak kitchen
IDRegistry.genBlockID("stripped_oak_kitchen_sink_light");
Block.createBlockWithRotation("stripped_oak_kitchen_sink_light", [
	{name: "Stripped Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_oak_kitchen_sink_light");
Item.createItem("stripped_oak_kitchen_sink_light", "Stripped Oak Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_oak_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_oak_log',0],['concrete_white',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_oak_kitchen_sink_light"},{id:"stripped_oak_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_oak_kitchen_sink_light, stripped_oak_kitchen_sink_lightModel));

let stripped_oak_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_oak_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_oak_log',0],['concrete_white',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_oak_kitchen_sink_light, 0).setModel(stripped_oak_kitchen_sink_lightModel);

//stripped spruce kitchen
IDRegistry.genBlockID("stripped_spruce_kitchen_sink_light");
Block.createBlockWithRotation("stripped_spruce_kitchen_sink_light", [
	{name: "Stripped Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_spruce_kitchen_sink_light");
Item.createItem("stripped_spruce_kitchen_sink_light", "Stripped Spruce Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_spruce_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_spruce_log',0],['concrete_white',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_spruce_kitchen_sink_light"},{id:"stripped_spruce_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_spruce_kitchen_sink_light, stripped_spruce_kitchen_sink_lightModel));

let stripped_spruce_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_spruce_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_spruce_log',0],['concrete_white',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_spruce_kitchen_sink_light, 0).setModel(stripped_spruce_kitchen_sink_lightModel);

//stripped birch kitchen
IDRegistry.genBlockID("stripped_birch_kitchen_sink_light");
Block.createBlockWithRotation("stripped_birch_kitchen_sink_light", [
	{name: "Stripped Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_birch_kitchen_sink_light");
Item.createItem("stripped_birch_kitchen_sink_light", "Stripped Birch Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_birch_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_birch_log',0],['concrete_white',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_birch_kitchen_sink_light"},{id:"stripped_birch_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_birch_kitchen_sink_light, stripped_birch_kitchen_sink_lightModel));

let stripped_birch_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_birch_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_birch_log',0],['concrete_white',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_birch_kitchen_sink_light, 0).setModel(stripped_birch_kitchen_sink_lightModel);

//stripped jungle kitchen
IDRegistry.genBlockID("stripped_jungle_kitchen_sink_light");
Block.createBlockWithRotation("stripped_jungle_kitchen_sink_light", [
	{name: "Stripped Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_jungle_kitchen_sink_light");
Item.createItem("stripped_jungle_kitchen_sink_light", "Stripped Jungle Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_jungle_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_jungle_log',0],['concrete_white',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_jungle_kitchen_sink_light"},{id:"stripped_jungle_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_jungle_kitchen_sink_light, stripped_jungle_kitchen_sink_lightModel));

let stripped_jungle_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_jungle_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_jungle_log',0],['concrete_white',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_jungle_kitchen_sink_light, 0).setModel(stripped_jungle_kitchen_sink_lightModel);

//stripped acacia kitchen
IDRegistry.genBlockID("stripped_acacia_kitchen_sink_light");
Block.createBlockWithRotation("stripped_acacia_kitchen_sink_light", [
	{name: "Stripped Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_acacia_kitchen_sink_light");
Item.createItem("stripped_acacia_kitchen_sink_light", "Stripped Acacia Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_acacia_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_acacia_log',0],['concrete_white',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_acacia_kitchen_sink_light"},{id:"stripped_acacia_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_acacia_kitchen_sink_light, stripped_acacia_kitchen_sink_lightModel));

let stripped_acacia_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_acacia_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_acacia_log',0],['concrete_white',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_acacia_kitchen_sink_light, 0).setModel(stripped_acacia_kitchen_sink_lightModel);

//stripped dark oak kitchen
IDRegistry.genBlockID("stripped_dark_oak_kitchen_sink_light");
Block.createBlockWithRotation("stripped_dark_oak_kitchen_sink_light", [
	{name: "Stripped Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_dark_oak_kitchen_sink_light");
Item.createItem("stripped_dark_oak_kitchen_sink_light", "Stripped Dark Oak Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_dark_oak_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_dark_oak_log',0],['concrete_white',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_dark_oak_kitchen_sink_light"},{id:"stripped_dark_oak_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_dark_oak_kitchen_sink_light, stripped_dark_oak_kitchen_sink_lightModel));

let stripped_dark_oak_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_dark_oak_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_dark_oak_log',0],['concrete_white',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_dark_oak_kitchen_sink_light, 0).setModel(stripped_dark_oak_kitchen_sink_lightModel);

//stripped crimson kitchen
IDRegistry.genBlockID("stripped_crimson_kitchen_sink_light");
Block.createBlockWithRotation("stripped_crimson_kitchen_sink_light", [
	{name: "Stripped Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_crimson_kitchen_sink_light");
Item.createItem("stripped_crimson_kitchen_sink_light", "stripped_crimson Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_crimson_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_crimson_stem_side',0],['concrete_white',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_crimson_kitchen_sink_light"},{id:"stripped_crimson_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_crimson_kitchen_sink_light, stripped_crimson_kitchen_sink_lightModel));

let stripped_crimson_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_crimson_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_crimson_stem_side',0],['concrete_white',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_crimson_kitchen_sink_light, 0).setModel(stripped_crimson_kitchen_sink_lightModel);

//stripped warped kitchen
IDRegistry.genBlockID("stripped_warped_kitchen_sink_light");
Block.createBlockWithRotation("stripped_warped_kitchen_sink_light", [
	{name: "Stripped Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_warped_kitchen_sink_light");
Item.createItem("stripped_warped_kitchen_sink_light", "Stripped Warped Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_warped_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_warped_stem_side',0],['concrete_white',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_warped_kitchen_sink_light"},{id:"stripped_warped_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_warped_kitchen_sink_light, stripped_warped_kitchen_sink_lightModel));

let stripped_warped_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_warped_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_warped_stem_side',0],['concrete_white',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_warped_kitchen_sink_light, 0).setModel(stripped_warped_kitchen_sink_lightModel);

//translation
Translation.addTranslation("Stripped Oak Kitchen Sink (Light)", {ru: "Ободранная Дубовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Spruce Kitchen Sink (Light)", {ru: "Ободранная Еловая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Birch Kitchen Sink (Light)", {ru: "Ободранная Берёзовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Jungle Kitchen Sink (Light)", {ru: "Ободранная Джунглевая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Acacia Kitchen Sink (Light)", {ru: "Ободранная Акациевая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Dark Oak Kitchen Sink (Light)", {ru: "Ободранная Тёмно Дубовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Crimson Kitchen Sink (Light)", {ru: "Ободранная Искажённая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Warped Kitchen Sink (Light)", {ru: "Ободранная Багровая Кухонная Раковина (Светлая)"});

//recipes
Recipes.addShaped({id: ItemID.stripped_oak_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_oak_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_spruce_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_spruce_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_birch_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_birch_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_jungle_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_jungle_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_acacia_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_acacia_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_dark_oak_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_dark_oak_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_crimson_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_crimson_stem, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_warped_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_warped_stem, 0, 'v', 325, 0, 'o', 265, 0]);

//stripped oak kitchen
IDRegistry.genBlockID("stripped_oak_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_oak_kitchen_sink_dark", [
	{name: "Stripped Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_oak_kitchen_sink_dark");
Item.createItem("stripped_oak_kitchen_sink_dark", "Stripped Oak Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_oak_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_oak_log',0],['concrete_gray',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_oak_kitchen_sink_dark"},{id:"stripped_oak_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_oak_kitchen_sink_dark, stripped_oak_kitchen_sink_darkModel));

let stripped_oak_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_oak_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_oak_log',0],['concrete_gray',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_oak_kitchen_sink_dark, 0).setModel(stripped_oak_kitchen_sink_darkModel);

//stripped spruce kitchen
IDRegistry.genBlockID("stripped_spruce_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_spruce_kitchen_sink_dark", [
	{name: "Stripped Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_spruce_kitchen_sink_dark");
Item.createItem("stripped_spruce_kitchen_sink_dark", "Stripped Spruce Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_spruce_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_spruce_log',0],['concrete_gray',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_spruce_kitchen_sink_dark"},{id:"stripped_spruce_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_spruce_kitchen_sink_dark, stripped_spruce_kitchen_sink_darkModel));

let stripped_spruce_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_spruce_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_spruce_log',0],['concrete_gray',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_spruce_kitchen_sink_dark, 0).setModel(stripped_spruce_kitchen_sink_darkModel);

//stripped birch kitchen
IDRegistry.genBlockID("stripped_birch_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_birch_kitchen_sink_dark", [
	{name: "Stripped Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_birch_kitchen_sink_dark");
Item.createItem("stripped_birch_kitchen_sink_dark", "Stripped Birch Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_birch_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_birch_log',0],['concrete_gray',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_birch_kitchen_sink_dark"},{id:"stripped_birch_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_birch_kitchen_sink_dark, stripped_birch_kitchen_sink_darkModel));

let stripped_birch_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_birch_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_birch_log',0],['concrete_gray',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_birch_kitchen_sink_dark, 0).setModel(stripped_birch_kitchen_sink_darkModel);

//stripped jungle kitchen
IDRegistry.genBlockID("stripped_jungle_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_jungle_kitchen_sink_dark", [
	{name: "Stripped Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_jungle_kitchen_sink_dark");
Item.createItem("stripped_jungle_kitchen_sink_dark", "Stripped Jungle Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_jungle_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_jungle_log',0],['concrete_gray',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_jungle_kitchen_sink_dark"},{id:"stripped_jungle_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_jungle_kitchen_sink_dark, stripped_jungle_kitchen_sink_darkModel));

let stripped_jungle_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_jungle_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_jungle_log',0],['concrete_gray',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_jungle_kitchen_sink_dark, 0).setModel(stripped_jungle_kitchen_sink_darkModel);

//stripped acacia kitchen
IDRegistry.genBlockID("stripped_acacia_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_acacia_kitchen_sink_dark", [
	{name: "Stripped Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_acacia_kitchen_sink_dark");
Item.createItem("stripped_acacia_kitchen_sink_dark", "Stripped Acacia Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_acacia_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_acacia_log',0],['concrete_gray',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_acacia_kitchen_sink_dark"},{id:"stripped_acacia_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_acacia_kitchen_sink_dark, stripped_acacia_kitchen_sink_darkModel));

let stripped_acacia_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_acacia_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_acacia_log',0],['concrete_gray',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_acacia_kitchen_sink_dark, 0).setModel(stripped_acacia_kitchen_sink_darkModel);

//stripped dark oak kitchen
IDRegistry.genBlockID("stripped_dark_oak_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_dark_oak_kitchen_sink_dark", [
	{name: "Stripped Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_dark_oak_kitchen_sink_dark");
Item.createItem("stripped_dark_oak_kitchen_sink_dark", "Stripped Dark Oak Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_dark_oak_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_dark_oak_log',0],['concrete_gray',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_dark_oak_kitchen_sink_dark"},{id:"stripped_dark_oak_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_dark_oak_kitchen_sink_dark, stripped_dark_oak_kitchen_sink_darkModel));

let stripped_dark_oak_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_dark_oak_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_dark_oak_log',0],['concrete_gray',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_dark_oak_kitchen_sink_dark, 0).setModel(stripped_dark_oak_kitchen_sink_darkModel);

//stripped crimson kitchen
IDRegistry.genBlockID("stripped_crimson_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_crimson_kitchen_sink_dark", [
	{name: "Stripped Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_crimson_kitchen_sink_dark");
Item.createItem("stripped_crimson_kitchen_sink_dark", "stripped_crimson Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_crimson_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_crimson_stem_side',0],['concrete_gray',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_crimson_kitchen_sink_dark"},{id:"stripped_crimson_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_crimson_kitchen_sink_dark, stripped_crimson_kitchen_sink_darkModel));

let stripped_crimson_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_crimson_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_crimson_stem_side',0],['concrete_gray',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_crimson_kitchen_sink_dark, 0).setModel(stripped_crimson_kitchen_sink_darkModel);

//stripped warped kitchen
IDRegistry.genBlockID("stripped_warped_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_warped_kitchen_sink_dark", [
	{name: "Stripped Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_warped_kitchen_sink_dark");
Item.createItem("stripped_warped_kitchen_sink_dark", "Stripped Warped Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_warped_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_warped_stem_side',0],['concrete_gray',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_warped_kitchen_sink_dark"},{id:"stripped_warped_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_warped_kitchen_sink_dark, stripped_warped_kitchen_sink_darkModel));

let stripped_warped_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_warped_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_warped_stem_side',0],['concrete_gray',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_warped_kitchen_sink_dark, 0).setModel(stripped_warped_kitchen_sink_darkModel);

//translation
Translation.addTranslation("Stripped Oak Kitchen Sink (Dark)", {ru: "Ободранная Дубовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Spruce Kitchen Sink (Dark)", {ru: "Ободранная Еловая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Birch Kitchen Sink (Dark)", {ru: "Ободранная Берёзовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Jungle Kitchen Sink (Dark)", {ru: "Ободранная Джунглевая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Acacia Kitchen Sink (Dark)", {ru: "Ободранная Акациевая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Dark Oak Kitchen Sink (Dark)", {ru: "Ободранная Тёмно Дубовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Crimson Kitchen Sink (Dark)", {ru: "Ободранная Искажённая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Warped Kitchen Sink (Dark)", {ru: "Ободранная Багровая Кухонная Раковина (Тёмная)"});

//recipes
Recipes.addShaped({id: ItemID.stripped_oak_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_oak_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_spruce_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_spruce_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_birch_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_birch_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_jungle_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_jungle_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_acacia_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_acacia_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_dark_oak_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_dark_oak_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_crimson_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_crimson_stem, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_warped_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_warped_stem, 0, 'v', 325, 0, 'o', 265, 0]);

//white kitchen
IDRegistry.genBlockID("white_kitchen_sink");
Block.createBlockWithRotation("white_kitchen_sink", [
	{name: "White Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "White Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "White Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "White Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("white_kitchen_sink");
Item.createItem("white_kitchen_sink", "White Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var white_kitchen_sinkModel = ModelAPI.newArray();
white_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"white_kitchen_sink"},{id:"white_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.white_kitchen_sink, white_kitchen_sinkModel));

let white_kitchen_sinkModel = new BlockRenderer.Model();
white_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.white_kitchen_sink, 0).setModel(white_kitchen_sinkModel);

//orange kitchen
IDRegistry.genBlockID("orange_kitchen_sink");
Block.createBlockWithRotation("orange_kitchen_sink", [
	{name: "Orange Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Orange Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Orange Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Orange Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("orange_kitchen_sink");
Item.createItem("orange_kitchen_sink", "Orange Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var orange_kitchen_sinkModel = ModelAPI.newArray();
orange_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"orange_kitchen_sink"},{id:"orange_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.orange_kitchen_sink, orange_kitchen_sinkModel));

let orange_kitchen_sinkModel = new BlockRenderer.Model();
orange_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.orange_kitchen_sink, 0).setModel(orange_kitchen_sinkModel);

//magenta kitchen
IDRegistry.genBlockID("magenta_kitchen_sink");
Block.createBlockWithRotation("magenta_kitchen_sink", [
	{name: "Magenta Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Magenta Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Magenta Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Magenta Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("magenta_kitchen_sink");
Item.createItem("magenta_kitchen_sink", "Magenta Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var magenta_kitchen_sinkModel = ModelAPI.newArray();
magenta_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"magenta_kitchen_sink"},{id:"magenta_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.magenta_kitchen_sink, magenta_kitchen_sinkModel));

let magenta_kitchen_sinkModel = new BlockRenderer.Model();
magenta_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.magenta_kitchen_sink, 0).setModel(magenta_kitchen_sinkModel);

//light_blue kitchen
IDRegistry.genBlockID("light_blue_kitchen_sink");
Block.createBlockWithRotation("light_blue_kitchen_sink", [
	{name: "Light Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_blue_kitchen_sink");
Item.createItem("light_blue_kitchen_sink", "Light Blue Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var light_blue_kitchen_sinkModel = ModelAPI.newArray();
light_blue_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_blue_kitchen_sink"},{id:"light_blue_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.light_blue_kitchen_sink, light_blue_kitchen_sinkModel));

let light_blue_kitchen_sinkModel = new BlockRenderer.Model();
light_blue_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.light_blue_kitchen_sink, 0).setModel(light_blue_kitchen_sinkModel);

//yellow kitchen
IDRegistry.genBlockID("yellow_kitchen_sink");
Block.createBlockWithRotation("yellow_kitchen_sink", [
	{name: "Yellow Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Yellow Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Yellow Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Yellow Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("yellow_kitchen_sink");
Item.createItem("yellow_kitchen_sink", "Yellow Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var yellow_kitchen_sinkModel = ModelAPI.newArray();
yellow_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"yellow_kitchen_sink"},{id:"yellow_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.yellow_kitchen_sink, yellow_kitchen_sinkModel));

let yellow_kitchen_sinkModel = new BlockRenderer.Model();
yellow_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.yellow_kitchen_sink, 0).setModel(yellow_kitchen_sinkModel);

//lime kitchen
IDRegistry.genBlockID("lime_kitchen_sink");
Block.createBlockWithRotation("lime_kitchen_sink", [
	{name: "Lime Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Lime Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Lime Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Lime Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("lime_kitchen_sink");
Item.createItem("lime_kitchen_sink", "Lime Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var lime_kitchen_sinkModel = ModelAPI.newArray();
lime_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"lime_kitchen_sink"},{id:"lime_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.lime_kitchen_sink, lime_kitchen_sinkModel));

let lime_kitchen_sinkModel = new BlockRenderer.Model();
lime_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.lime_kitchen_sink, 0).setModel(lime_kitchen_sinkModel);

//pink kitchen
IDRegistry.genBlockID("pink_kitchen_sink");
Block.createBlockWithRotation("pink_kitchen_sink", [
	{name: "Pink Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Pink Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Pink Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Pink Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("pink_kitchen_sink");
Item.createItem("pink_kitchen_sink", "Pink Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var pink_kitchen_sinkModel = ModelAPI.newArray();
pink_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"pink_kitchen_sink"},{id:"pink_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.pink_kitchen_sink, pink_kitchen_sinkModel));

let pink_kitchen_sinkModel = new BlockRenderer.Model();
pink_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.pink_kitchen_sink, 0).setModel(pink_kitchen_sinkModel);

//gray kitchen
IDRegistry.genBlockID("gray_kitchen_sink");
Block.createBlockWithRotation("gray_kitchen_sink", [
	{name: "Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("gray_kitchen_sink");
Item.createItem("gray_kitchen_sink", "Gray Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var gray_kitchen_sinkModel = ModelAPI.newArray();
gray_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"gray_kitchen_sink"},{id:"gray_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.gray_kitchen_sink, gray_kitchen_sinkModel));

let gray_kitchen_sinkModel = new BlockRenderer.Model();
gray_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.gray_kitchen_sink, 0).setModel(gray_kitchen_sinkModel);

//light_gray kitchen
IDRegistry.genBlockID("light_gray_kitchen_sink");
Block.createBlockWithRotation("light_gray_kitchen_sink", [
	{name: "Light Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_gray_kitchen_sink");
Item.createItem("light_gray_kitchen_sink", "Light Gray Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var light_gray_kitchen_sinkModel = ModelAPI.newArray();
light_gray_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_gray_kitchen_sink"},{id:"light_gray_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.light_gray_kitchen_sink, light_gray_kitchen_sinkModel));

let light_gray_kitchen_sinkModel = new BlockRenderer.Model();
light_gray_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.light_gray_kitchen_sink, 0).setModel(light_gray_kitchen_sinkModel);

//cyan kitchen
IDRegistry.genBlockID("cyan_kitchen_sink");
Block.createBlockWithRotation("cyan_kitchen_sink", [
	{name: "Cyan Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Cyan Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Cyan Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Cyan Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("cyan_kitchen_sink");
Item.createItem("cyan_kitchen_sink", "Cyan Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var cyan_kitchen_sinkModel = ModelAPI.newArray();
cyan_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"cyan_kitchen_sink"},{id:"cyan_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.cyan_kitchen_sink, cyan_kitchen_sinkModel));

let cyan_kitchen_sinkModel = new BlockRenderer.Model();
cyan_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.cyan_kitchen_sink, 0).setModel(cyan_kitchen_sinkModel);

//purple kitchen
IDRegistry.genBlockID("purple_kitchen_sink");
Block.createBlockWithRotation("purple_kitchen_sink", [
	{name: "Purple Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Purple Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Purple Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Purple Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("purple_kitchen_sink");
Item.createItem("purple_kitchen_sink", "Purple Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var purple_kitchen_sinkModel = ModelAPI.newArray();
purple_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"purple_kitchen_sink"},{id:"purple_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.purple_kitchen_sink, purple_kitchen_sinkModel));

let purple_kitchen_sinkModel = new BlockRenderer.Model();
purple_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.purple_kitchen_sink, 0).setModel(purple_kitchen_sinkModel);

//blue kitchen
IDRegistry.genBlockID("blue_kitchen_sink");
Block.createBlockWithRotation("blue_kitchen_sink", [
	{name: "Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("blue_kitchen_sink");
Item.createItem("blue_kitchen_sink", "Blue Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var blue_kitchen_sinkModel = ModelAPI.newArray();
blue_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"blue_kitchen_sink"},{id:"blue_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.blue_kitchen_sink, blue_kitchen_sinkModel));

let blue_kitchen_sinkModel = new BlockRenderer.Model();
blue_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.blue_kitchen_sink, 0).setModel(blue_kitchen_sinkModel);

//brown kitchen
IDRegistry.genBlockID("brown_kitchen_sink");
Block.createBlockWithRotation("brown_kitchen_sink", [
	{name: "Brown Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Brown Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Brown Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Brown Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("brown_kitchen_sink");
Item.createItem("brown_kitchen_sink", "Brown Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var brown_kitchen_sinkModel = ModelAPI.newArray();
brown_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"brown_kitchen_sink"},{id:"brown_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.brown_kitchen_sink, brown_kitchen_sinkModel));

let brown_kitchen_sinkModel = new BlockRenderer.Model();
brown_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.brown_kitchen_sink, 0).setModel(brown_kitchen_sinkModel);

//green kitchen
IDRegistry.genBlockID("green_kitchen_sink");
Block.createBlockWithRotation("green_kitchen_sink", [
	{name: "Green Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Green Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Green Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Green Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("green_kitchen_sink");
Item.createItem("green_kitchen_sink", "Green Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var green_kitchen_sinkModel = ModelAPI.newArray();
green_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"green_kitchen_sink"},{id:"green_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.green_kitchen_sink, green_kitchen_sinkModel));

let green_kitchen_sinkModel = new BlockRenderer.Model();
green_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.green_kitchen_sink, 0).setModel(green_kitchen_sinkModel);

//red kitchen
IDRegistry.genBlockID("red_kitchen_sink");
Block.createBlockWithRotation("red_kitchen_sink", [
	{name: "Red Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Red Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Red Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Red Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("red_kitchen_sink");
Item.createItem("red_kitchen_sink", "Red Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var red_kitchen_sinkModel = ModelAPI.newArray();
red_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"red_kitchen_sink"},{id:"red_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.red_kitchen_sink, red_kitchen_sinkModel));

let red_kitchen_sinkModel = new BlockRenderer.Model();
red_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.red_kitchen_sink, 0).setModel(red_kitchen_sinkModel);

//black kitchen
IDRegistry.genBlockID("black_kitchen_sink");
Block.createBlockWithRotation("black_kitchen_sink", [
	{name: "Black Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Black Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Black Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Black Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("black_kitchen_sink");
Item.createItem("black_kitchen_sink", "Black Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var black_kitchen_sinkModel = ModelAPI.newArray();
black_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"black_kitchen_sink"},{id:"black_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.black_kitchen_sink, black_kitchen_sinkModel));

let black_kitchen_sinkModel = new BlockRenderer.Model();
black_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.black_kitchen_sink, 0).setModel(black_kitchen_sinkModel);

//translation
Translation.addTranslation("White Kitchen Sink", {ru: "Белая Кухонная Раковина"});
Translation.addTranslation("Orange Kitchen Sink", {ru: "Оранжевая Кухонная Раковина"});
Translation.addTranslation("Magenta Kitchen Sink", {ru: "Пурпурная Кухонная Раковина"});
Translation.addTranslation("Light Blue Kitchen Sink", {ru: "Голубая Кухонная Раковина"});
Translation.addTranslation("Yellow Kitchen Sink", {ru: "Жёлтая Кухонная Раковина"});
Translation.addTranslation("Lime Kitchen Sink", {ru: "Лаймовая Кухонная Раковина"});
Translation.addTranslation("Pink Kitchen Sink", {ru: "Розовая Кухонная Раковина"});
Translation.addTranslation("Gray Kitchen Sink", {ru: "Серая Кухонная Раковина"});
Translation.addTranslation("Light Gray Kitchen Sink", {ru: "Светло Серая Кухонная Раковина"});
Translation.addTranslation("Cyan Kitchen Sink", {ru: "Бирюзовая Кухонная Раковина"});
Translation.addTranslation("Purple Kitchen Sink", {ru: "Фиолетвая Кухонная Раковина"});
Translation.addTranslation("Blue Kitchen Sink", {ru: "Синяя Кухонная Раковина"});
Translation.addTranslation("Brown Kitchen Sink", {ru: "Коричневая Кухонная Раковина"});
Translation.addTranslation("Green Kitchen Sink", {ru: "Зеленая Кухонная Раковина"});
Translation.addTranslation("Red Kitchen Sink", {ru: "Красная Кухонная Раковина"});
Translation.addTranslation("Black Kitchen Sink", {ru: "Черная Кухонная Раковина"});

//recipes
Recipes.addShaped({id: ItemID.white_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 0, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.orange_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 1, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.magenta_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 2, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.light_blue_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 3, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.yellow_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 4, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.lime_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 5, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.pink_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 6, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.gray_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 7, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.light_gray_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 8, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.cyan_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 9, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.purple_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 10, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.blue_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 11, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.brown_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 12, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.green_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 13, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.red_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 14, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.black_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 15, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);




// file: group.js

Item.addCreativeGroup("carpets", Translation.translate("Carpets"), [
BlockID.chess_silver,
BlockID.chess_gray,
BlockID.chess_black,
BlockID.chess_brown,
BlockID.chess_red,
BlockID.chess_orange,
BlockID.chess_yellow,
BlockID.chess_lime,
BlockID.chess_green,
BlockID.chess_cyan,
BlockID.chess_light_blue,
BlockID.chess_blue,
BlockID.chess_purple,
BlockID.chess_magenta,
BlockID.chess_pink,
BlockID.gray_silver,
BlockID.brown_silver,
BlockID.red_orange,
BlockID.orange_yellow,
BlockID.lime_yellow,
BlockID.green_lime,
BlockID.blue_light_blue,
BlockID.purple_silver,
BlockID.magenta_silver,
BlockID.magenta_pink,
BlockID.gray_silver_plus,
BlockID.brown_silver_plus,
BlockID.red_orange_plus,
BlockID.orange_yellow_plus,
BlockID.lime_yellow_plus,
BlockID.green_lime_plus,
BlockID.blue_light_blue_plus,
BlockID.purple_silver_plus,
BlockID.magenta_silver_plus,
BlockID.magenta_pink_plus,
BlockID.carpet1,
BlockID.carpet2,
BlockID.carpet3,
BlockID.carpet4,
BlockID.carpet5,
BlockID.carpet6,
BlockID.carpet7,
BlockID.carpet8,
BlockID.carpet9,
BlockID.carpet10
]);

Item.addCreativeGroup("lamps", Translation.translate("Lamps"), [
BlockID.white_lamp,
BlockID.silver_lamp,
BlockID.gray_lamp,
BlockID.black_lamp,
BlockID.brown_lamp,
BlockID.red_lamp,
BlockID.orange_lamp,
BlockID.yellow_lamp,
BlockID.lime_lamp,
BlockID.green_lamp,
BlockID.cyan_lamp,
BlockID.light_blue_lamp,
BlockID.blue_lamp,
BlockID.purple_lamp,
BlockID.magenta_lamp,
BlockID.pink_lamp
]);

Item.addCreativeGroup("scarecrow", Translation.translate("Scarecrow"), [
ItemID.white_scarecrow,
ItemID.silver_scarecrow,
ItemID.gray_scarecrow,
ItemID.black_scarecrow,
ItemID.brown_scarecrow,
ItemID.red_scarecrow,
ItemID.orange_scarecrow,
ItemID.yellow_scarecrow,
ItemID.lime_scarecrow,
ItemID.green_scarecrow,
ItemID.cyan_scarecrow,
ItemID.light_blue_scarecrow,
ItemID.blue_scarecrow,
ItemID.purple_scarecrow,
ItemID.magenta_scarecrow,
ItemID.pink_scarecrow
]);

Item.addCreativeGroup("barrel", Translation.translate("Barrels"), [
BlockID.oak_barrel,
BlockID.spruce_barrel,
BlockID.birch_barrel,
BlockID.jungle_barrel,
BlockID.acacia_barrel,
BlockID.dark_oak_barrel
]);

Item.addCreativeGroup("bedside_table", Translation.translate("Bedside Tables"), [
ItemID.oak_bedside_table,
ItemID.spruce_bedside_table,
ItemID.birch_bedside_table,
ItemID.jungle_bedside_table,
ItemID.acacia_bedside_table,
ItemID.dark_oak_bedside_table
]);

Item.addCreativeGroup("blinds", Translation.translate("Blinds"), [
ItemID.oak_blinds,
ItemID.spruce_blinds,
ItemID.birch_blinds,
ItemID.jungle_blinds,
ItemID.acacia_blinds,
ItemID.dark_oak_blinds
]);

Item.addCreativeGroup("sofa", Translation.translate("Sofa"), [
ItemID.white_sofa,
ItemID.silver_sofa,
ItemID.gray_sofa,
ItemID.black_sofa,
ItemID.brown_sofa,
ItemID.red_sofa,
ItemID.orange_sofa,
ItemID.yellow_sofa,
ItemID.lime_sofa,
ItemID.green_sofa,
ItemID.cyan_sofa,
ItemID.light_blue_sofa,
ItemID.blue_sofa,
ItemID.purple_sofa,
ItemID.magenta_sofa,
ItemID.pink_sofa
]);

Item.addCreativeGroup("desk", Translation.translate("Desk"), [
ItemID.oak_desk,
ItemID.spruce_desk,
ItemID.birch_desk,
ItemID.jungle_desk,
ItemID.acacia_desk,
ItemID.dark_oak_desk
]);

Item.addCreativeGroup("large_table", Translation.translate("Large Tables"), [
ItemID.oak_large_table,
ItemID.spruce_large_table,
ItemID.birch_large_table,
ItemID.jungle_large_table,
ItemID.acacia_large_table,
ItemID.dark_oak_large_table
]);

Item.addCreativeGroup("bench", Translation.translate("Bench"), [
ItemID.oak_bench,
ItemID.spruce_bench,
ItemID.birch_bench,
ItemID.jungle_bench,
ItemID.acacia_bench,
ItemID.dark_oak_bench
]);

Item.addCreativeGroup("board", Translation.translate("Board"), [
ItemID.oak_board,
ItemID.spruce_board,
ItemID.birch_board,
ItemID.jungle_board,
ItemID.acacia_board,
ItemID.dark_oak_board
]);

Item.addCreativeGroup("chest", Translation.translate("Chests"), [
ItemID.oak_chest,
ItemID.spruce_chest,
ItemID.birch_chest,
ItemID.jungle_chest,
ItemID.acacia_chest,
ItemID.dark_oak_chest
]);

Item.addCreativeGroup("chair", Translation.translate("Chairs"), [
ItemID.white_chair,
ItemID.silver_chair,
ItemID.gray_chair,
ItemID.black_chair,
ItemID.brown_chair,
ItemID.red_chair,
ItemID.orange_chair,
ItemID.yellow_chair,
ItemID.lime_chair,
ItemID.green_chair,
ItemID.cyan_chair,
ItemID.light_blue_chair,
ItemID.blue_chair,
ItemID.purple_chair,
ItemID.magenta_chair,
ItemID.pink_chair
]);

Item.addCreativeGroup("big_beds", Translation.translate("Big Beds"), [
ItemID.white_big_bed,
ItemID.silver_big_bed,
ItemID.gray_big_bed,
ItemID.black_big_bed,
ItemID.brown_big_bed,
ItemID.red_big_bed,
ItemID.orange_big_bed,
ItemID.yellow_big_bed,
ItemID.lime_big_bed,
ItemID.green_big_bed,
ItemID.cyan_big_bed,
ItemID.light_blue_big_bed,
ItemID.blue_big_bed,
ItemID.purple_big_bed,
ItemID.magenta_big_bed,
ItemID.pink_big_bed
]);

Item.addCreativeGroup("trough", Translation.translate("Trough"), [
ItemID.oak_trough_wheat,
ItemID.spruce_trough_wheat,
ItemID.birch_trough_wheat,
ItemID.jungle_trough_wheat,
ItemID.acacia_trough_wheat,
ItemID.dark_oak_trough_wheat,
ItemID.oak_trough_water,
ItemID.spruce_trough_water,
ItemID.birch_trough_water,
ItemID.jungle_trough_water,
ItemID.acacia_trough_water,
ItemID.dark_oak_trough_water
]);

Item.addCreativeGroup("desktop", Translation.translate("Desktop"), [
ItemID.oak_desktop,
ItemID.spruce_desktop,
ItemID.birch_desktop,
ItemID.jungle_desktop,
ItemID.acacia_desktop,
ItemID.dark_oak_desktop
]);

Item.addCreativeGroup("cradle", Translation.translate("Cradle"), [
ItemID.oak_cradle,
ItemID.spruce_cradle,
ItemID.birch_cradle,
ItemID.jungle_cradle,
ItemID.acacia_cradle,
ItemID.dark_oak_cradle
]);

Item.addCreativeGroup("bookshelf", Translation.translate("Bookshelf"), [
ItemID.oak_bookshelf,
ItemID.spruce_bookshelf,
ItemID.birch_bookshelf,
ItemID.jungle_bookshelf,
ItemID.acacia_bookshelf,
ItemID.dark_oak_bookshelf
]);

Item.addCreativeGroup("kitchen_sink", Translation.translate("Kitchen Sink"), [
ItemID.oak_kitchen_sink_light,
ItemID.spruce_kitchen_sink_light,
ItemID.birch_kitchen_sink_light,
ItemID.jungle_kitchen_sink_light,
ItemID.acacia_kitchen_sink_light,
ItemID.dark_oak_kitchen_sink_light,
ItemID.crimson_kitchen_sink_light,
ItemID.warped_kitchen_sink_light,
ItemID.oak_kitchen_sink_dark,
ItemID.spruce_kitchen_sink_dark,
ItemID.birch_kitchen_sink_dark,
ItemID.jungle_kitchen_sink_dark,
ItemID.acacia_kitchen_sink_dark,
ItemID.dark_oak_kitchen_sink_dark,
ItemID.crimson_kitchen_sink_dark,
ItemID.warped_kitchen_sink_dark,
ItemID.stripped_oak_kitchen_sink_light,
ItemID.stripped_spruce_kitchen_sink_light,
ItemID.stripped_birch_kitchen_sink_light,
ItemID.stripped_jungle_kitchen_sink_light,
ItemID.stripped_acacia_kitchen_sink_light,
ItemID.stripped_dark_oak_kitchen_sink_light,
ItemID.stripped_crimson_kitchen_sink_light,
ItemID.stripped_warped_kitchen_sink_light,
ItemID.stripped_oak_kitchen_sink_dark,
ItemID.stripped_spruce_kitchen_sink_dark,
ItemID.stripped_birch_kitchen_sink_dark,
ItemID.stripped_jungle_kitchen_sink_dark,
ItemID.stripped_acacia_kitchen_sink_dark,
ItemID.stripped_dark_oak_kitchen_sink_dark,
ItemID.stripped_crimson_kitchen_sink_dark,
ItemID.stripped_warped_kitchen_sink_dark,
ItemID.white_kitchen_sink,
ItemID.orange_kitchen_sink,
ItemID.magenta_kitchen_sink,
ItemID.light_blue_kitchen_sink,
ItemID.yellow_kitchen_sink,
ItemID.lime_kitchen_sink,
ItemID.pink_kitchen_sink,
ItemID.gray_kitchen_sink,
ItemID.light_gray_kitchen_sink,
ItemID.cyan_kitchen_sink,
ItemID.purple_kitchen_sink,
ItemID.blue_kitchen_sink,
ItemID.brown_kitchen_sink,
ItemID.green_kitchen_sink,
ItemID.red_kitchen_sink,
ItemID.black_kitchen_sink
]);

Item.addCreativeGroup("kitchen_counter", Translation.translate("Kitchen Counter"), [
ItemID.oak_kitchen_counter,
ItemID.spruce_kitchen_counter,
ItemID.birch_kitchen_counter,
ItemID.jungle_kitchen_counter,
ItemID.acacia_kitchen_counter,
ItemID.dark_oak_kitchen_counter,
ItemID.crimson_kitchen_counter,
ItemID.warped_kitchen_counter,
ItemID.stripped_oak_kitchen_counter,
ItemID.stripped_spruce_kitchen_counter,
ItemID.stripped_birch_kitchen_counter,
ItemID.stripped_jungle_kitchen_counter,
ItemID.stripped_acacia_kitchen_counter,
ItemID.stripped_dark_oak_kitchen_counter,
ItemID.stripped_crimson_kitchen_counter,
ItemID.stripped_warped_kitchen_counter,
ItemID.white_kitchen_counter,
ItemID.orange_kitchen_counter,
ItemID.magenta_kitchen_counter,
ItemID.light_blue_kitchen_counter,
ItemID.yellow_kitchen_counter,
ItemID.lime_kitchen_counter,
ItemID.pink_kitchen_counter,
ItemID.gray_kitchen_counter,
ItemID.light_gray_kitchen_counter,
ItemID.cyan_kitchen_counter,
ItemID.purple_kitchen_counter,
ItemID.blue_kitchen_counter,
ItemID.brown_kitchen_counter,
ItemID.green_kitchen_counter,
ItemID.red_kitchen_counter,
ItemID.black_kitchen_counter
]);

Item.addCreativeGroup("kitchen_drawer", Translation.translate("Kitchen Drawer"), [
ItemID.oak_kitchen_drawer,
ItemID.spruce_kitchen_drawer,
ItemID.birch_kitchen_drawer,
ItemID.jungle_kitchen_drawer,
ItemID.acacia_kitchen_drawer,
ItemID.dark_oak_kitchen_drawer,
ItemID.crimson_kitchen_drawer,
ItemID.warped_kitchen_drawer,
ItemID.stripped_oak_kitchen_drawer,
ItemID.stripped_spruce_kitchen_drawer,
ItemID.stripped_birch_kitchen_drawer,
ItemID.stripped_jungle_kitchen_drawer,
ItemID.stripped_acacia_kitchen_drawer,
ItemID.stripped_dark_oak_kitchen_drawer,
ItemID.stripped_crimson_kitchen_drawer,
ItemID.stripped_warped_kitchen_drawer,
ItemID.white_kitchen_drawer,
ItemID.orange_kitchen_drawer,
ItemID.magenta_kitchen_drawer,
ItemID.light_blue_kitchen_drawer,
ItemID.yellow_kitchen_drawer,
ItemID.lime_kitchen_drawer,
ItemID.pink_kitchen_drawer,
ItemID.gray_kitchen_drawer,
ItemID.light_gray_kitchen_drawer,
ItemID.cyan_kitchen_drawer,
ItemID.purple_kitchen_drawer,
ItemID.blue_kitchen_drawer,
ItemID.brown_kitchen_drawer,
ItemID.green_kitchen_drawer,
ItemID.red_kitchen_drawer,
ItemID.black_kitchen_drawer
]);




