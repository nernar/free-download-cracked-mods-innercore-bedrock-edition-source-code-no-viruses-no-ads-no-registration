/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 29
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




// file: ORYNDYK.js

IDRegistry.genBlockID("whiteor");
Block.createBlock("whiteor", [
	{name: "whiteor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whiteor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whiteor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whiteor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("whiteor");
Item.createItem("whiteor", "White Chair", {name: "whiteor", meta: 0}, {stack: 64});

Translation.addTranslation("White Chair", {ru: "Белая Стуля"});
Recipes.addShaped({id: ItemID.whiteor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,0]);

var whiteorModel = ModelAPI.newArray();
whiteorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35);
whiteorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
whiteorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
whiteorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
whiteorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
whiteorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
whiteorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
whiteorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
whiteorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
whiteorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
whiteorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
whiteorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
whiteorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
whiteorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
whiteorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35);
whiteorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
whiteorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
whiteorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
whiteorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
whiteorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
whiteorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
whiteorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
whiteorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
whiteorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
whiteorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35);
Furniture.addReplacementItem({id:"whiteor"},{id:"whiteor"}, Furniture.placeRotatableBlock(BlockID.whiteor, whiteorModel));

IDRegistry.genBlockID("lightgreyor");
Block.createBlock("lightgreyor", [
	{name: "lightgreyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreyor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightgreyor");
Item.createItem("lightgreyor", "Light Grey Chair", {name: "lightgreyor", meta: 0}, {stack: 64});

Translation.addTranslation("Light Grey Chair", {ru: "Светло-серая Стуля"});
Recipes.addShaped({id: ItemID.lightgreyor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,8]);

var lightgreyorModel = ModelAPI.newArray();
lightgreyorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 8);
lightgreyorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
lightgreyorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
lightgreyorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
lightgreyorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
lightgreyorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
lightgreyorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
lightgreyorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
lightgreyorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
lightgreyorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
lightgreyorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
lightgreyorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
lightgreyorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
lightgreyorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
lightgreyorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 8);
lightgreyorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
lightgreyorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
lightgreyorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
lightgreyorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
lightgreyorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
lightgreyorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
lightgreyorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
lightgreyorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
lightgreyorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
lightgreyorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 8);
Furniture.addReplacementItem({id:"lightgreyor"},{id:"lightgreyor"}, Furniture.placeRotatableBlock(BlockID.lightgreyor, lightgreyorModel));

IDRegistry.genBlockID("greyor");
Block.createBlock("greyor", [
	{name: "greyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greyor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greyor");
Item.createItem("greyor", "Grey Chair", {name: "greyor", meta: 0}, {stack: 64});

Translation.addTranslation("Grey Chair", {ru: "Серая Стуля"});
Recipes.addShaped({id: ItemID.greyor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,7]);

var greyorModel = ModelAPI.newArray();
greyorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 7);
greyorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
greyorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
greyorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
greyorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
greyorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
greyorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
greyorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
greyorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
greyorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
greyorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
greyorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
greyorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
greyorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
greyorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 7);
greyorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
greyorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
greyorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
greyorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
greyorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
greyorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
greyorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
greyorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
greyorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
greyorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 7);
Furniture.addReplacementItem({id:"greyor"},{id:"greyor"}, Furniture.placeRotatableBlock(BlockID.greyor, greyorModel));

IDRegistry.genBlockID("blackor");
Block.createBlock("blackor", [
	{name: "blackor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blackor");
Item.createItem("blackor", "Black Chair", {name: "blackor", meta: 0}, {stack: 64});

Translation.addTranslation("Black Chair", {ru: "Черная Стуля"});
Recipes.addShaped({id: ItemID.blackor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,15]);

var blackorModel = ModelAPI.newArray();
blackorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 15);
blackorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
blackorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
blackorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
blackorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
blackorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
blackorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
blackorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
blackorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
blackorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
blackorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
blackorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
blackorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
blackorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
blackorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 15);
blackorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
blackorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
blackorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
blackorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
blackorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
blackorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
blackorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
blackorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
blackorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
blackorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 15);
Furniture.addReplacementItem({id:"blackor"},{id:"blackor"}, Furniture.placeRotatableBlock(BlockID.blackor, blackorModel));

IDRegistry.genBlockID("brownor");
Block.createBlock("brownor", [
	{name: "brownor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brownor");
Item.createItem("brownor", "Brown Chair", {name: "brownor", meta: 0}, {stack: 64});

Translation.addTranslation("Brown Chair", {ru: "Коричневая Стуля"});
Recipes.addShaped({id: ItemID.brownor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,12]);

var brownorModel = ModelAPI.newArray();
brownorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 12);
brownorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
brownorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
brownorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
brownorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
brownorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
brownorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
brownorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
brownorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
brownorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
brownorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
brownorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
brownorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
brownorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
brownorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 12);
brownorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
brownorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
brownorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
brownorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
brownorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
brownorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
brownorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
brownorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
brownorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
brownorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 12);
Furniture.addReplacementItem({id:"brownor"},{id:"brownor"}, Furniture.placeRotatableBlock(BlockID.brownor, brownorModel));

IDRegistry.genBlockID("redor");
Block.createBlock("redor", [
	{name: "redor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("redor");
Item.createItem("redor", "Red Chair", {name: "redor", meta: 0}, {stack: 64});

Translation.addTranslation("Red Chair", {ru: "Красная Стуля"});
Recipes.addShaped({id: ItemID.redor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,14]);

var redorModel = ModelAPI.newArray();
redorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 14);
redorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
redorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
redorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
redorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
redorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
redorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
redorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
redorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
redorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
redorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
redorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
redorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
redorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
redorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 14);
redorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
redorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
redorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
redorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
redorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
redorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
redorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
redorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
redorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
redorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 14);
Furniture.addReplacementItem({id:"redor"},{id:"redor"}, Furniture.placeRotatableBlock(BlockID.redor, redorModel));

IDRegistry.genBlockID("orangeor");
Block.createBlock("orangeor", [
	{name: "orangeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangeor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orangeor");
Item.createItem("orangeor", "Orange Chair", {name: "orangeor", meta: 0}, {stack: 64});

Translation.addTranslation("Orange Chair", {ru: "Оранжевая Стуля"});
Recipes.addShaped({id: ItemID.orangeor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,1]);

var orangeorModel = ModelAPI.newArray();
orangeorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 1);
orangeorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
orangeorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
orangeorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
orangeorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
orangeorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
orangeorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
orangeorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
orangeorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
orangeorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
orangeorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
orangeorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
orangeorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
orangeorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
orangeorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 1);
orangeorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
orangeorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
orangeorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
orangeorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
orangeorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
orangeorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
orangeorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
orangeorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
orangeorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
orangeorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 1);
Furniture.addReplacementItem({id:"orangeor"},{id:"orangeor"}, Furniture.placeRotatableBlock(BlockID.orangeor, orangeorModel));

IDRegistry.genBlockID("yellowor");
Block.createBlock("yellowor", [
	{name: "yellowor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellowor");
Item.createItem("yellowor", "Yellow Chair", {name: "yellowor", meta: 0}, {stack: 64});

Translation.addTranslation("Yellow Chair", {ru: "Желтая Стуля"});
Recipes.addShaped({id: ItemID.yellowor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,4]);

var yelloworModel = ModelAPI.newArray();
yelloworModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 4);
yelloworModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
yelloworModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
yelloworModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
yelloworModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
yelloworModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
yelloworModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
yelloworModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
yelloworModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
yelloworModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
yelloworModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
yelloworModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
yelloworModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
yelloworModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
yelloworModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 4);
yelloworModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
yelloworModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
yelloworModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
yelloworModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
yelloworModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
yelloworModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
yelloworModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
yelloworModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
yelloworModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
yelloworModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 4);
Furniture.addReplacementItem({id:"yellowor"},{id:"yellowor"}, Furniture.placeRotatableBlock(BlockID.yellowor, yelloworModel));

IDRegistry.genBlockID("limeor");
Block.createBlock("limeor", [
	{name: "limeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limeor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("limeor");
Item.createItem("limeor", "Lime Chair", {name: "limeor", meta: 0}, {stack: 64});

Translation.addTranslation("Lime Chair", {ru: "Лаймовая Стуля"});
Recipes.addShaped({id: ItemID.limeor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,5]);

var limeorModel = ModelAPI.newArray();
limeorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 5);
limeorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
limeorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
limeorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
limeorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
limeorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
limeorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
limeorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
limeorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
limeorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
limeorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
limeorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
limeorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
limeorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
limeorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 5);
limeorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
limeorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
limeorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
limeorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
limeorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
limeorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
limeorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
limeorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
limeorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
limeorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 5);
Furniture.addReplacementItem({id:"limeor"},{id:"limeor"}, Furniture.placeRotatableBlock(BlockID.limeor, limeorModel));

IDRegistry.genBlockID("greenor");
Block.createBlock("greenor", [
	{name: "greenor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greenor");
Item.createItem("greenor", "Green Chair", {name: "greenor", meta: 0}, {stack: 64});

Translation.addTranslation("Green Chair", {ru: "Зеленая Стуля"});
Recipes.addShaped({id: ItemID.greenor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,13]);

var greenorModel = ModelAPI.newArray();
greenorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 13);
greenorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
greenorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
greenorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
greenorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
greenorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
greenorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
greenorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
greenorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
greenorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
greenorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
greenorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
greenorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
greenorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
greenorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 13);
greenorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
greenorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
greenorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
greenorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
greenorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
greenorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
greenorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
greenorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
greenorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
greenorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 13);
Furniture.addReplacementItem({id:"greenor"},{id:"greenor"}, Furniture.placeRotatableBlock(BlockID.greenor, greenorModel));

IDRegistry.genBlockID("cyanor");
Block.createBlock("cyanor", [
	{name: "cyanor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyanor");
Item.createItem("cyanor", "Cyan Chair", {name: "cyanor", meta: 0}, {stack: 64});

Translation.addTranslation("Cyan Chair", {ru: "Бирюзовая Стуля"});
Recipes.addShaped({id: ItemID.cyanor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,9]);

var cyanorModel = ModelAPI.newArray();
cyanorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 9);
cyanorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
cyanorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
cyanorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
cyanorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
cyanorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
cyanorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
cyanorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
cyanorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
cyanorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
cyanorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
cyanorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
cyanorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
cyanorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
cyanorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 9);
cyanorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
cyanorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
cyanorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
cyanorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
cyanorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
cyanorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
cyanorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
cyanorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
cyanorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
cyanorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 9);
Furniture.addReplacementItem({id:"cyanor"},{id:"cyanor"}, Furniture.placeRotatableBlock(BlockID.cyanor, cyanorModel));

IDRegistry.genBlockID("lightblueor");
Block.createBlock("lightblueor", [
	{name: "lightblueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightblueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightblueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightblueor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightblueor");
Item.createItem("lightblueor", "Light Blue Chair", {name: "lightblueor", meta: 0}, {stack: 64});

Translation.addTranslation("Light Blue Chair", {ru: "Голубая Стуля"});
Recipes.addShaped({id: ItemID.lightblueor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,3]);

var lightblueorModel = ModelAPI.newArray();
lightblueorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 3);
lightblueorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
lightblueorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
lightblueorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
lightblueorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
lightblueorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
lightblueorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
lightblueorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
lightblueorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
lightblueorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
lightblueorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
lightblueorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
lightblueorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
lightblueorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
lightblueorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 3);
lightblueorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
lightblueorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
lightblueorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
lightblueorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
lightblueorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
lightblueorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
lightblueorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
lightblueorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
lightblueorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
lightblueorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 3);
Furniture.addReplacementItem({id:"lightblueor"},{id:"lightblueor"}, Furniture.placeRotatableBlock(BlockID.lightblueor, lightblueorModel));

IDRegistry.genBlockID("blueor");
Block.createBlock("blueor", [
	{name: "blueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blueor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blueor");
Item.createItem("blueor", "Blue Chair", {name: "blueor", meta: 0}, {stack: 64});

Translation.addTranslation("Blue Chair", {ru: "Синяя Стуля"});
Recipes.addShaped({id: ItemID.blueor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,11]);

var blueorModel = ModelAPI.newArray();
blueorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 11);
blueorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
blueorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
blueorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
blueorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
blueorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
blueorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
blueorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
blueorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
blueorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
blueorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
blueorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
blueorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
blueorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
blueorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 11);
blueorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
blueorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
blueorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
blueorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
blueorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
blueorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
blueorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
blueorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
blueorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
blueorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 11);
Furniture.addReplacementItem({id:"blueor"},{id:"blueor"}, Furniture.placeRotatableBlock(BlockID.blueor, blueorModel));

IDRegistry.genBlockID("purpleor");
Block.createBlock("purpleor", [
	{name: "purpleor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purpleor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purpleor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purpleor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purpleor");
Item.createItem("purpleor", "Purple Chair", {name: "purpleor", meta: 0}, {stack: 64});

Translation.addTranslation("Purple Chair", {ru: "Фиолетвая Стуля"});
Recipes.addShaped({id: ItemID.purpleor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,10]);

var purpleorModel = ModelAPI.newArray();
purpleorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 10);
purpleorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
purpleorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
purpleorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
purpleorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
purpleorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
purpleorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
purpleorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
purpleorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
purpleorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
purpleorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
purpleorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
purpleorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
purpleorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
purpleorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 10);
purpleorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
purpleorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
purpleorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
purpleorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
purpleorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
purpleorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
purpleorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
purpleorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
purpleorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
purpleorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 10);
Furniture.addReplacementItem({id:"purpleor"},{id:"purpleor"}, Furniture.placeRotatableBlock(BlockID.purpleor, purpleorModel));

IDRegistry.genBlockID("magentaor");
Block.createBlock("magentaor", [
	{name: "magentaor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentaor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentaor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentaor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magentaor");
Item.createItem("magentaor", "Magenta Chair", {name: "magentaor", meta: 0}, {stack: 64});

Translation.addTranslation("Magenta Chair", {ru: "Пурпурная Стуля"});
Recipes.addShaped({id: ItemID.magentaor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,2]);

var magentaorModel = ModelAPI.newArray();
magentaorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 2);
magentaorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
magentaorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
magentaorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
magentaorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
magentaorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
magentaorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
magentaorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
magentaorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
magentaorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
magentaorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
magentaorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
magentaorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
magentaorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
magentaorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 2);
magentaorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
magentaorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
magentaorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
magentaorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
magentaorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
magentaorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
magentaorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
magentaorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
magentaorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
magentaorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 2);
Furniture.addReplacementItem({id:"magentaor"},{id:"magentaor"}, Furniture.placeRotatableBlock(BlockID.magentaor, magentaorModel));

IDRegistry.genBlockID("pinkor");
Block.createBlock("pinkor", [
	{name: "pinkor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pinkor");
Item.createItem("pinkor", "Pink Chair", {name: "pinkor", meta: 0}, {stack: 64});

Translation.addTranslation("Pink Chair", {ru: "Розовая Стуля"});
Recipes.addShaped({id: ItemID.pinkor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,6]);

var pinkorModel = ModelAPI.newArray();
pinkorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 6);
pinkorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
pinkorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
pinkorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
pinkorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
pinkorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
pinkorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
pinkorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
pinkorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
pinkorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
pinkorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
pinkorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
pinkorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
pinkorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
pinkorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 6);
pinkorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
pinkorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
pinkorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
pinkorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
pinkorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
pinkorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
pinkorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
pinkorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
pinkorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
pinkorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 6);
Furniture.addReplacementItem({id:"pinkor"},{id:"pinkor"}, Furniture.placeRotatableBlock(BlockID.pinkor, pinkorModel));

Block.setShape(BlockID.whiteor,0,0,0,1,1/2,1);
Block.setShape(BlockID.lightgreyor,0,0,0,1,1/2,1);
Block.setShape(BlockID.greyor,0,0,0,1,1/2,1);
Block.setShape(BlockID.blackor,0,0,0,1,1/2,1);
Block.setShape(BlockID.brownor,0,0,0,1,1/2,1);
Block.setShape(BlockID.redor,0,0,0,1,1/2,1);
Block.setShape(BlockID.orangeor,0,0,0,1,1/2,1);
Block.setShape(BlockID.yellowor,0,0,0,1,1/2,1);
Block.setShape(BlockID.limeor,0,0,0,1,1/2,1);
Block.setShape(BlockID.greenor,0,0,0,1,1/2,1);
Block.setShape(BlockID.cyanor,0,0,0,1,1/2,1);
Block.setShape(BlockID.lightblueor,0,0,0,1,1/2,1);
Block.setShape(BlockID.blueor,0,0,0,1,1/2,1);
Block.setShape(BlockID.purpleor,0,0,0,1,1/2,1);
Block.setShape(BlockID.magentaor,0,0,0,1,1/2,1);
Block.setShape(BlockID.pinkor,0,0,0,1,1/2,1);




// file: TOSEK.js

IDRegistry.genBlockID("whitebigbed");
Block.createBlock("whitebigbed", [
	{name: "whitebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("whitebigbed");
Item.createItem("whitebigbed", "White Big Bed", {name: "whitebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("White Big Bed", {ru: "Белая Большая Кровать"});
Recipes.addShaped({id: ItemID.whitebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,0]);

var whitebigbedModel = ModelAPI.newArray();
whitebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
whitebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
whitebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
whitebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
whitebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
whitebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
whitebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
whitebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
whitebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35);
whitebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
whitebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
whitebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
whitebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
whitebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35);
whitebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35);
whitebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
whitebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
whitebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35);
whitebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35);
whitebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35);
whitebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35);
whitebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35);
whitebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
whitebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
whitebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35);
whitebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35);
whitebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
whitebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
whitebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35);
whitebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
whitebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
whitebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
whitebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
whitebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35);
whitebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35);
whitebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
whitebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
whitebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35);
whitebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35);
whitebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35);
whitebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35);
whitebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
whitebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35);
whitebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
whitebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
whitebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"whitebigbed"},{id:"whitebigbed"}, Furniture.placeRotatableBlock(BlockID.whitebigbed, whitebigbedModel));

IDRegistry.genBlockID("lightgreybigbed");
Block.createBlock("lightgreybigbed", [
	{name: "lightgreybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreybigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightgreybigbed");
Item.createItem("lightgreybigbed", "Light Grey Big Bed", {name: "lightgreybigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Light Grey Big Bed", {ru: "Светло-серая Большая Кровать"});
Recipes.addShaped({id: ItemID.lightgreybigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,8]);

var lightgreybigbedModel = ModelAPI.newArray();
lightgreybigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
lightgreybigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
lightgreybigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
lightgreybigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
lightgreybigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
lightgreybigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
lightgreybigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
lightgreybigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
lightgreybigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 8);
lightgreybigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
lightgreybigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
lightgreybigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
lightgreybigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
lightgreybigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 8);
lightgreybigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 8);
lightgreybigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
lightgreybigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
lightgreybigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 8);
lightgreybigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 8);
lightgreybigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 8);
lightgreybigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 8);
lightgreybigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 8);
lightgreybigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
lightgreybigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
lightgreybigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 8);
lightgreybigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 8);
lightgreybigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
lightgreybigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
lightgreybigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 8);
lightgreybigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
lightgreybigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
lightgreybigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
lightgreybigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
lightgreybigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 8);
lightgreybigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 8);
lightgreybigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
lightgreybigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
lightgreybigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 8);
lightgreybigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 8);
lightgreybigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 8);
lightgreybigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 8);
lightgreybigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
lightgreybigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 8);
lightgreybigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
lightgreybigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
lightgreybigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"lightgreybigbed"},{id:"lightgreybigbed"}, Furniture.placeRotatableBlock(BlockID.lightgreybigbed, lightgreybigbedModel));

IDRegistry.genBlockID("greybigbed");
Block.createBlock("greybigbed", [
	{name: "greybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greybigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greybigbed");
Item.createItem("greybigbed", "Grey Big Bed", {name: "greybigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Grey Big Bed", {ru: "Серая Большая Кровать"});
Recipes.addShaped({id: ItemID.greybigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,7]);

var greybigbedModel = ModelAPI.newArray();
greybigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
greybigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
greybigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
greybigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
greybigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
greybigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
greybigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
greybigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
greybigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 7);
greybigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
greybigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
greybigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
greybigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
greybigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 7);
greybigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 7);
greybigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
greybigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
greybigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 7);
greybigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 7);
greybigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 7);
greybigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 7);
greybigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 7);
greybigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
greybigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
greybigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 7);
greybigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 7);
greybigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
greybigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
greybigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 7);
greybigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
greybigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
greybigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
greybigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
greybigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 7);
greybigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 7);
greybigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
greybigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
greybigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 7);
greybigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 7);
greybigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 7);
greybigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 7);
greybigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
greybigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 7);
greybigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
greybigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
greybigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"greybigbed"},{id:"greybigbed"}, Furniture.placeRotatableBlock(BlockID.greybigbed, greybigbedModel));

IDRegistry.genBlockID("blackbigbed");
Block.createBlock("blackbigbed", [
	{name: "blackbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blackbigbed");
Item.createItem("blackbigbed", "Black Big Bed", {name: "blackbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Black Big Bed", {ru: "Черная Большая Кровать"});
Recipes.addShaped({id: ItemID.blackbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,15]);

var blackbigbedModel = ModelAPI.newArray();
blackbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
blackbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
blackbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
blackbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
blackbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
blackbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
blackbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
blackbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
blackbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 15);
blackbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
blackbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
blackbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
blackbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
blackbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 15);
blackbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 15);
blackbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
blackbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
blackbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 15);
blackbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 15);
blackbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 15);
blackbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 15);
blackbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 15);
blackbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
blackbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
blackbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 15);
blackbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 15);
blackbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
blackbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
blackbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 15);
blackbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
blackbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
blackbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
blackbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
blackbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 15);
blackbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 15);
blackbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
blackbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
blackbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 15);
blackbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 15);
blackbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 15);
blackbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 15);
blackbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
blackbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 15);
blackbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
blackbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
blackbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"blackbigbed"},{id:"blackbigbed"}, Furniture.placeRotatableBlock(BlockID.blackbigbed, blackbigbedModel));

IDRegistry.genBlockID("brownbigbed");
Block.createBlock("brownbigbed", [
	{name: "brownbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brownbigbed");
Item.createItem("brownbigbed", "Brown Big Bed", {name: "brownbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Brown Big Bed", {ru: "Коричневая Большая Кровать"});
Recipes.addShaped({id: ItemID.brownbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,12]);

var brownbigbedModel = ModelAPI.newArray();
brownbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
brownbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
brownbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
brownbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
brownbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
brownbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
brownbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
brownbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
brownbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 12);
brownbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
brownbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
brownbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
brownbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
brownbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 12);
brownbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 12);
brownbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
brownbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
brownbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 12);
brownbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 12);
brownbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 12);
brownbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 12);
brownbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 12);
brownbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
brownbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
brownbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 12);
brownbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 12);
brownbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
brownbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
brownbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 12);
brownbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
brownbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
brownbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
brownbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
brownbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 12);
brownbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 12);
brownbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
brownbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
brownbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 12);
brownbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 12);
brownbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 12);
brownbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 12);
brownbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
brownbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 12);
brownbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
brownbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
brownbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"brownbigbed"},{id:"brownbigbed"}, Furniture.placeRotatableBlock(BlockID.brownbigbed, brownbigbedModel));

IDRegistry.genBlockID("redbigbed");
Block.createBlock("redbigbed", [
	{name: "redbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("redbigbed");
Item.createItem("redbigbed", "Red Big Bed", {name: "redbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Red Big Bed", {ru: "Красная Большая Кровать"});
Recipes.addShaped({id: ItemID.redbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,14]);

var redbigbedModel = ModelAPI.newArray();
redbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
redbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
redbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
redbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
redbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
redbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
redbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
redbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
redbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 14);
redbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
redbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
redbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
redbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
redbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 14);
redbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 14);
redbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
redbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
redbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 14);
redbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 14);
redbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 14);
redbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 14);
redbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 14);
redbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
redbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
redbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 14);
redbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 14);
redbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
redbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
redbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 14);
redbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
redbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
redbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
redbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
redbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 14);
redbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 14);
redbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
redbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
redbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 14);
redbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 14);
redbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 14);
redbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 14);
redbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
redbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 14);
redbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
redbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
redbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"redbigbed"},{id:"redbigbed"}, Furniture.placeRotatableBlock(BlockID.redbigbed, redbigbedModel));

IDRegistry.genBlockID("orangebigbed");
Block.createBlock("orangebigbed", [
	{name: "orangebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orangebigbed");
Item.createItem("orangebigbed", "Orange Big Bed", {name: "orangebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Orange Big Bed", {ru: "Оранжевая Большая Кровать"});
Recipes.addShaped({id: ItemID.orangebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,1]);

var orangebigbedModel = ModelAPI.newArray();
orangebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
orangebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
orangebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
orangebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
orangebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
orangebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
orangebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
orangebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
orangebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 1);
orangebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
orangebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
orangebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
orangebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
orangebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 1);
orangebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 1);
orangebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
orangebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
orangebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 1);
orangebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 1);
orangebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 1);
orangebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 1);
orangebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 1);
orangebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
orangebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
orangebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 1);
orangebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 1);
orangebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
orangebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
orangebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 1);
orangebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
orangebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
orangebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
orangebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
orangebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 1);
orangebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 1);
orangebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
orangebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
orangebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 1);
orangebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 1);
orangebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 1);
orangebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 1);
orangebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
orangebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 1);
orangebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
orangebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
orangebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"orangebigbed"},{id:"orangebigbed"}, Furniture.placeRotatableBlock(BlockID.orangebigbed, orangebigbedModel));

IDRegistry.genBlockID("yellowbigbed");
Block.createBlock("yellowbigbed", [
	{name: "yellowbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellowbigbed");
Item.createItem("yellowbigbed", "Yellow Big Bed", {name: "yellowbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Yellow Big Bed", {ru: "Желтая Большая Кровать"});
Recipes.addShaped({id: ItemID.yellowbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,4]);

var yellowbigbedModel = ModelAPI.newArray();
yellowbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
yellowbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
yellowbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
yellowbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
yellowbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
yellowbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
yellowbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
yellowbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
yellowbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 4);
yellowbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
yellowbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
yellowbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
yellowbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
yellowbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 4);
yellowbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 4);
yellowbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
yellowbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
yellowbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 4);
yellowbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 4);
yellowbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 4);
yellowbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 4);
yellowbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 4);
yellowbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
yellowbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
yellowbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 4);
yellowbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 4);
yellowbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
yellowbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
yellowbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 4);
yellowbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
yellowbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
yellowbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
yellowbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
yellowbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 4);
yellowbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 4);
yellowbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
yellowbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
yellowbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 4);
yellowbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 4);
yellowbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 4);
yellowbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 4);
yellowbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
yellowbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 4);
yellowbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
yellowbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
yellowbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"yellowbigbed"},{id:"yellowbigbed"}, Furniture.placeRotatableBlock(BlockID.yellowbigbed, yellowbigbedModel));

IDRegistry.genBlockID("limebigbed");
Block.createBlock("limebigbed", [
	{name: "limebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("limebigbed");
Item.createItem("limebigbed", "Lime Big Bed", {name: "limebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Lime Big Bed", {ru: "Лаймовая Большая Кровать"});
Recipes.addShaped({id: ItemID.limebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,5]);

var limebigbedModel = ModelAPI.newArray();
limebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
limebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
limebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
limebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
limebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
limebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
limebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
limebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
limebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 5);
limebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
limebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
limebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
limebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
limebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 5);
limebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 5);
limebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
limebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
limebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 5);
limebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 5);
limebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 5);
limebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 5);
limebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 5);
limebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
limebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
limebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 5);
limebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 5);
limebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
limebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
limebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 5);
limebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
limebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
limebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
limebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
limebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 5);
limebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 5);
limebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
limebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
limebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 5);
limebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 5);
limebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 5);
limebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 5);
limebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
limebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 5);
limebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
limebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
limebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"limebigbed"},{id:"limebigbed"}, Furniture.placeRotatableBlock(BlockID.limebigbed, limebigbedModel));

IDRegistry.genBlockID("greenbigbed");
Block.createBlock("greenbigbed", [
	{name: "greenbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greenbigbed");
Item.createItem("greenbigbed", "Green Big Bed", {name: "greenbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Green Big Bed", {ru: "Зеленая Большая Кровать"});
Recipes.addShaped({id: ItemID.greenbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,13]);

var greenbigbedModel = ModelAPI.newArray();
greenbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
greenbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
greenbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
greenbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
greenbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
greenbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
greenbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
greenbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
greenbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 13);
greenbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
greenbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
greenbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
greenbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
greenbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 13);
greenbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 13);
greenbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
greenbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
greenbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 13);
greenbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 13);
greenbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 13);
greenbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 13);
greenbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 13);
greenbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
greenbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
greenbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 13);
greenbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 13);
greenbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
greenbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
greenbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 13);
greenbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
greenbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
greenbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
greenbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
greenbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 13);
greenbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 13);
greenbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
greenbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
greenbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 13);
greenbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 13);
greenbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 13);
greenbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 13);
greenbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
greenbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 13);
greenbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
greenbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
greenbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"greenbigbed"},{id:"greenbigbed"}, Furniture.placeRotatableBlock(BlockID.greenbigbed, greenbigbedModel));

IDRegistry.genBlockID("cyanbigbed");
Block.createBlock("cyanbigbed", [
	{name: "cyanbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyanbigbed");
Item.createItem("cyanbigbed", "Cyan Big Bed", {name: "cyanbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Cyan Big Bed", {ru: "Бирюзовая Большая Кровать"});
Recipes.addShaped({id: ItemID.cyanbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,9]);

var cyanbigbedModel = ModelAPI.newArray();
cyanbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
cyanbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
cyanbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
cyanbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
cyanbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
cyanbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
cyanbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
cyanbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
cyanbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 9);
cyanbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
cyanbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
cyanbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
cyanbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
cyanbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 9);
cyanbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 9);
cyanbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
cyanbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
cyanbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 9);
cyanbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 9);
cyanbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 9);
cyanbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 9);
cyanbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 9);
cyanbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
cyanbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
cyanbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 9);
cyanbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 9);
cyanbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
cyanbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
cyanbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 9);
cyanbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
cyanbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
cyanbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
cyanbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
cyanbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 9);
cyanbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 9);
cyanbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
cyanbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
cyanbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 9);
cyanbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 9);
cyanbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 9);
cyanbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 9);
cyanbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
cyanbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 9);
cyanbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
cyanbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
cyanbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"cyanbigbed"},{id:"cyanbigbed"}, Furniture.placeRotatableBlock(BlockID.cyanbigbed, cyanbigbedModel));

IDRegistry.genBlockID("lightbluebigbed");
Block.createBlock("lightbluebigbed", [
	{name: "lightbluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightbluebigbed");
Item.createItem("lightbluebigbed", "Light Blue Big Bed", {name: "lightbluebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Light Blue Big Bed", {ru: "Голубая Большая Кровать"});
Recipes.addShaped({id: ItemID.lightbluebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,3]);

var lightbluebigbedModel = ModelAPI.newArray();
lightbluebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
lightbluebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
lightbluebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
lightbluebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
lightbluebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
lightbluebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
lightbluebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
lightbluebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
lightbluebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 3);
lightbluebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
lightbluebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
lightbluebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
lightbluebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
lightbluebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 3);
lightbluebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 3);
lightbluebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
lightbluebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
lightbluebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 3);
lightbluebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 3);
lightbluebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 3);
lightbluebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 3);
lightbluebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 3);
lightbluebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
lightbluebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
lightbluebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 3);
lightbluebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 3);
lightbluebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
lightbluebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
lightbluebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 3);
lightbluebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
lightbluebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
lightbluebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
lightbluebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
lightbluebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 3);
lightbluebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 3);
lightbluebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
lightbluebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
lightbluebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 3);
lightbluebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 3);
lightbluebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 3);
lightbluebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 3);
lightbluebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
lightbluebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 3);
lightbluebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
lightbluebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
lightbluebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"lightbluebigbed"},{id:"lightbluebigbed"}, Furniture.placeRotatableBlock(BlockID.lightbluebigbed, lightbluebigbedModel));

IDRegistry.genBlockID("bluebigbed");
Block.createBlock("bluebigbed", [
	{name: "bluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bluebigbed");
Item.createItem("bluebigbed", "Blue Big Bed", {name: "bluebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Blue Big Bed", {ru: "Синяя Большая Кровать"});
Recipes.addShaped({id: ItemID.bluebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,11]);

var bluebigbedModel = ModelAPI.newArray();
bluebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
bluebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
bluebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
bluebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
bluebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
bluebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
bluebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
bluebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
bluebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 11);
bluebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
bluebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
bluebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
bluebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
bluebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 11);
bluebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 11);
bluebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
bluebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
bluebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 11);
bluebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 11);
bluebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 11);
bluebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 11);
bluebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 11);
bluebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
bluebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
bluebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 11);
bluebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 11);
bluebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
bluebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
bluebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 11);
bluebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
bluebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
bluebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
bluebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
bluebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 11);
bluebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 11);
bluebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
bluebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
bluebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 11);
bluebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 11);
bluebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 11);
bluebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 11);
bluebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
bluebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 11);
bluebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
bluebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
bluebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"bluebigbed"},{id:"bluebigbed"}, Furniture.placeRotatableBlock(BlockID.bluebigbed, bluebigbedModel));

IDRegistry.genBlockID("purplebigbed");
Block.createBlock("purplebigbed", [
	{name: "purplebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purplebigbed");
Item.createItem("purplebigbed", "Purple Big Bed", {name: "purplebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Purple Big Bed", {ru: "Фиолетвая Большая Кровать"});
Recipes.addShaped({id: ItemID.purplebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,10]);

var purplebigbedModel = ModelAPI.newArray();
purplebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
purplebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
purplebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
purplebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
purplebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
purplebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
purplebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
purplebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
purplebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 10);
purplebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
purplebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
purplebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
purplebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
purplebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 10);
purplebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 10);
purplebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
purplebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
purplebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 10);
purplebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 10);
purplebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 10);
purplebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 10);
purplebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 10);
purplebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
purplebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
purplebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 10);
purplebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 10);
purplebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
purplebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
purplebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 10);
purplebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
purplebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
purplebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
purplebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
purplebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 10);
purplebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 10);
purplebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
purplebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
purplebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 10);
purplebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 10);
purplebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 10);
purplebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 10);
purplebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
purplebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 10);
purplebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
purplebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
purplebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"purplebigbed"},{id:"purplebigbed"}, Furniture.placeRotatableBlock(BlockID.purplebigbed, purplebigbedModel));

IDRegistry.genBlockID("magentabigbed");
Block.createBlock("magentabigbed", [
	{name: "magentabigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentabigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentabigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentabigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magentabigbed");
Item.createItem("magentabigbed", "Magenta Big Bed", {name: "magentabigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Magenta Big Bed", {ru: "Пурпурная Большая Кровать"});
Recipes.addShaped({id: ItemID.magentabigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,2]);

var magentabigbedModel = ModelAPI.newArray();
magentabigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
magentabigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
magentabigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
magentabigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
magentabigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
magentabigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
magentabigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
magentabigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
magentabigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 2);
magentabigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
magentabigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
magentabigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
magentabigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
magentabigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 2);
magentabigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 2);
magentabigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
magentabigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
magentabigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 2);
magentabigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 2);
magentabigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 2);
magentabigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 2);
magentabigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 2);
magentabigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
magentabigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
magentabigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 2);
magentabigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 2);
magentabigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
magentabigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
magentabigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 2);
magentabigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
magentabigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
magentabigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
magentabigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
magentabigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 2);
magentabigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 2);
magentabigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
magentabigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
magentabigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 2);
magentabigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 2);
magentabigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 2);
magentabigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 2);
magentabigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
magentabigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 2);
magentabigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
magentabigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
magentabigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"magentabigbed"},{id:"magentabigbed"}, Furniture.placeRotatableBlock(BlockID.magentabigbed, magentabigbedModel));

IDRegistry.genBlockID("pinkbigbed");
Block.createBlock("pinkbigbed", [
	{name: "pinkbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pinkbigbed");
Item.createItem("pinkbigbed", "Pink Big Bed", {name: "pinkbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Pink Big Bed", {ru: "Розовая Большая Кровать"});
Recipes.addShaped({id: ItemID.pinkbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,6]);

var pinkbigbedModel = ModelAPI.newArray();
pinkbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
pinkbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
pinkbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
pinkbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
pinkbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
pinkbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
pinkbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
pinkbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
pinkbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 6);
pinkbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
pinkbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
pinkbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
pinkbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
pinkbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 6);
pinkbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 6);
pinkbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
pinkbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
pinkbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 6);
pinkbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 6);
pinkbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 6);
pinkbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 6);
pinkbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 6);
pinkbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
pinkbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
pinkbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 6);
pinkbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 6);
pinkbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
pinkbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
pinkbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 6);
pinkbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
pinkbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
pinkbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
pinkbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
pinkbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 6);
pinkbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 6);
pinkbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
pinkbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
pinkbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 6);
pinkbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 6);
pinkbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 6);
pinkbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 6);
pinkbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
pinkbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 6);
pinkbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
pinkbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
pinkbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"pinkbigbed"},{id:"pinkbigbed"}, Furniture.placeRotatableBlock(BlockID.pinkbigbed, pinkbigbedModel));

Block.setShape(BlockID.whitebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.lightgreybigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.greybigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.blackbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.brownbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.redbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.orangebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.yellowbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.limebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.greenbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.cyanbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.lightbluebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.bluebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.purplebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.magentabigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.pinkbigbed,0,0,0,1,0.36,1);




// file: SOFA.js

IDRegistry.genBlockID("whitesofa");
Block.createBlock("whitesofa", [
	{name: "whitesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("whitesofa");
Item.createItem("whitesofa", "White Sofa", {name: "whitesofa", meta: 0}, {stack: 64});

Translation.addTranslation("White Sofa", {ru: "Белая Софа"});
Recipes.addShaped({id: ItemID.whitesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,0]);

var whitesofaModel = ModelAPI.newArray();
whitesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
whitesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
whitesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
whitesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
whitesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35);
whitesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35);
whitesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35);
whitesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35);
whitesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35);
whitesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35);
Furniture.addReplacementItem({id:"whitesofa"},{id:"whitesofa"}, Furniture.placeRotatableBlock(BlockID.whitesofa, whitesofaModel));

IDRegistry.genBlockID("lightgreysofa");
Block.createBlock("lightgreysofa", [
	{name: "lightgreysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightgreysofa");
Item.createItem("lightgreysofa", "Light Grey Sofa", {name: "lightgreysofa", meta: 0}, {stack: 64});

Translation.addTranslation("Light Grey Sofa", {ru: "Светло-серая Софа"});
Recipes.addShaped({id: ItemID.lightgreysofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,8]);

var lightgreysofaModel = ModelAPI.newArray();
lightgreysofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
lightgreysofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
lightgreysofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
lightgreysofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
lightgreysofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 8);
lightgreysofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 8);
lightgreysofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 8);
lightgreysofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 8);
lightgreysofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 8);
lightgreysofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 8);
Furniture.addReplacementItem({id:"lightgreysofa"},{id:"lightgreysofa"}, Furniture.placeRotatableBlock(BlockID.lightgreysofa, lightgreysofaModel));

IDRegistry.genBlockID("greysofa");
Block.createBlock("greysofa", [
	{name: "greysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greysofa");
Item.createItem("greysofa", "Grey Sofa", {name: "greysofa", meta: 0}, {stack: 64});

Translation.addTranslation("Grey Sofa", {ru: "Серая Софа"});
Recipes.addShaped({id: ItemID.greysofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,7]);

var greysofaModel = ModelAPI.newArray();
greysofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
greysofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
greysofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
greysofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
greysofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 7);
greysofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 7);
greysofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 7);
greysofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 7);
greysofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 7);
greysofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 7);
Furniture.addReplacementItem({id:"greysofa"},{id:"greysofa"}, Furniture.placeRotatableBlock(BlockID.greysofa, greysofaModel));

IDRegistry.genBlockID("blacksofa");
Block.createBlock("blacksofa", [
	{name: "blacksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blacksofa");
Item.createItem("blacksofa", "Black Sofa", {name: "blacksofa", meta: 0}, {stack: 64});

Translation.addTranslation("Black Sofa", {ru: "Черная Софа"});
Recipes.addShaped({id: ItemID.blacksofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,15]);

var blacksofaModel = ModelAPI.newArray();
blacksofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
blacksofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
blacksofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
blacksofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
blacksofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 15);
blacksofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 15);
blacksofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 15);
blacksofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 15);
blacksofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 15);
blacksofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 15);
Furniture.addReplacementItem({id:"blacksofa"},{id:"blacksofa"}, Furniture.placeRotatableBlock(BlockID.blacksofa, blacksofaModel));

IDRegistry.genBlockID("brownsofa");
Block.createBlock("brownsofa", [
	{name: "brownsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brownsofa");
Item.createItem("brownsofa", "Brown Sofa", {name: "brownsofa", meta: 0}, {stack: 64});

Translation.addTranslation("Brown Sofa", {ru: "Коричневая Софа"});
Recipes.addShaped({id: ItemID.brownsofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,12]);

var brownsofaModel = ModelAPI.newArray();
brownsofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
brownsofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
brownsofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
brownsofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
brownsofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 12);
brownsofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 12);
brownsofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 12);
brownsofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 12);
brownsofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 12);
brownsofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 12);
Furniture.addReplacementItem({id:"brownsofa"},{id:"brownsofa"}, Furniture.placeRotatableBlock(BlockID.brownsofa, brownsofaModel));

IDRegistry.genBlockID("redsofa");
Block.createBlock("redsofa", [
	{name: "redsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("redsofa");
Item.createItem("redsofa", "Red Sofa", {name: "redsofa", meta: 0}, {stack: 64});

Translation.addTranslation("Red Sofa", {ru: "Красная Софа"});
Recipes.addShaped({id: ItemID.redsofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,14]);

var redsofaModel = ModelAPI.newArray();
redsofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
redsofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
redsofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
redsofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
redsofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 14);
redsofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 14);
redsofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 14);
redsofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 14);
redsofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 14);
redsofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 14);
Furniture.addReplacementItem({id:"redsofa"},{id:"redsofa"}, Furniture.placeRotatableBlock(BlockID.redsofa, redsofaModel));

IDRegistry.genBlockID("orangesofa");
Block.createBlock("orangesofa", [
	{name: "orangesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orangesofa");
Item.createItem("orangesofa", "Orange Sofa", {name: "orangesofa", meta: 0}, {stack: 64});

Translation.addTranslation("Orange Sofa", {ru: "Оранжевая Софа"});
Recipes.addShaped({id: ItemID.orangesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,1]);

var orangesofaModel = ModelAPI.newArray();
orangesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
orangesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
orangesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
orangesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
orangesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 1);
orangesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 1);
orangesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 1);
orangesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 1);
orangesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 1);
orangesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 1);
Furniture.addReplacementItem({id:"orangesofa"},{id:"orangesofa"}, Furniture.placeRotatableBlock(BlockID.orangesofa, orangesofaModel));

IDRegistry.genBlockID("yellowsofa");
Block.createBlock("yellowsofa", [
	{name: "yellowsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellowsofa");
Item.createItem("yellowsofa", "Yellow Sofa", {name: "yellowsofa", meta: 0}, {stack: 64});

Translation.addTranslation("Yellow Sofa", {ru: "Желтая Софа"});
Recipes.addShaped({id: ItemID.yellowsofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,4]);

var yellowsofaModel = ModelAPI.newArray();
yellowsofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
yellowsofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
yellowsofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
yellowsofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
yellowsofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 4);
yellowsofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 4);
yellowsofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 4);
yellowsofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 4);
yellowsofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 4);
yellowsofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 4);
Furniture.addReplacementItem({id:"yellowsofa"},{id:"yellowsofa"}, Furniture.placeRotatableBlock(BlockID.yellowsofa, yellowsofaModel));

IDRegistry.genBlockID("limesofa");
Block.createBlock("limesofa", [
	{name: "limesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("limesofa");
Item.createItem("limesofa", "Lime Sofa", {name: "limesofa", meta: 0}, {stack: 64});

Translation.addTranslation("Lime Sofa", {ru: "Лаймовая Софа"});
Recipes.addShaped({id: ItemID.limesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,5]);

var limesofaModel = ModelAPI.newArray();
limesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
limesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
limesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
limesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
limesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 5);
limesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 5);
limesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 5);
limesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 5);
limesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 5);
limesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 5);
Furniture.addReplacementItem({id:"limesofa"},{id:"limesofa"}, Furniture.placeRotatableBlock(BlockID.limesofa, limesofaModel));

IDRegistry.genBlockID("greensofa");
Block.createBlock("greensofa", [
	{name: "greensofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greensofa");
Item.createItem("greensofa", "Green Sofa", {name: "greensofa", meta: 0}, {stack: 64});

Translation.addTranslation("Green Sofa", {ru: "Зеленая Софа"});
Recipes.addShaped({id: ItemID.greensofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,13]);

var greensofaModel = ModelAPI.newArray();
greensofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
greensofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
greensofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
greensofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
greensofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 13);
greensofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 13);
greensofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 13);
greensofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 13);
greensofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 13);
greensofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 13);
Furniture.addReplacementItem({id:"greensofa"},{id:"greensofa"}, Furniture.placeRotatableBlock(BlockID.greensofa, greensofaModel));

IDRegistry.genBlockID("cyansofa");
Block.createBlock("cyansofa", [
	{name: "cyansofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyansofa");
Item.createItem("cyansofa", "Cyan Sofa", {name: "cyansofa", meta: 0}, {stack: 64});

Translation.addTranslation("Cyan Sofa", {ru: "Бирюзовая Софа"});
Recipes.addShaped({id: ItemID.cyansofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,9]);

var cyansofaModel = ModelAPI.newArray();
cyansofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
cyansofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
cyansofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
cyansofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
cyansofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 9);
cyansofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 9);
cyansofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 9);
cyansofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 9);
cyansofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 9);
cyansofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 9);
Furniture.addReplacementItem({id:"cyansofa"},{id:"cyansofa"}, Furniture.placeRotatableBlock(BlockID.cyansofa, cyansofaModel));

IDRegistry.genBlockID("lightbluesofa");
Block.createBlock("lightbluesofa", [
	{name: "lightbluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightbluesofa");
Item.createItem("lightbluesofa", "Light Blue Sofa", {name: "lightbluesofa", meta: 0}, {stack: 64});

Translation.addTranslation("Light Blue Sofa", {ru: "Голубая Софа"});
Recipes.addShaped({id: ItemID.lightbluesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,3]);

var lightbluesofaModel = ModelAPI.newArray();
lightbluesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
lightbluesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
lightbluesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
lightbluesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
lightbluesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 3);
lightbluesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 3);
lightbluesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 3);
lightbluesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 3);
lightbluesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 3);
lightbluesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 3);
Furniture.addReplacementItem({id:"lightbluesofa"},{id:"lightbluesofa"}, Furniture.placeRotatableBlock(BlockID.lightbluesofa, lightbluesofaModel));

IDRegistry.genBlockID("bluesofa");
Block.createBlock("bluesofa", [
	{name: "bluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bluesofa");
Item.createItem("bluesofa", "Blue Sofa", {name: "bluesofa", meta: 0}, {stack: 64});

Translation.addTranslation("Blue Sofa", {ru: "Синяя Софа"});
Recipes.addShaped({id: ItemID.bluesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,11]);

var bluesofaModel = ModelAPI.newArray();
bluesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
bluesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
bluesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
bluesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
bluesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 11);
bluesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 11);
bluesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 11);
bluesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 11);
bluesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 11);
bluesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 11);
Furniture.addReplacementItem({id:"bluesofa"},{id:"bluesofa"}, Furniture.placeRotatableBlock(BlockID.bluesofa, bluesofaModel));

IDRegistry.genBlockID("purplesofa");
Block.createBlock("purplesofa", [
	{name: "purplesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purplesofa");
Item.createItem("purplesofa", "Purple Sofa", {name: "purplesofa", meta: 0}, {stack: 64});

Translation.addTranslation("Purple Sofa", {ru: "Фиолетвая Софа"});
Recipes.addShaped({id: ItemID.purplesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,10]);

var purplesofaModel = ModelAPI.newArray();
purplesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
purplesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
purplesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
purplesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
purplesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 10);
purplesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 10);
purplesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 10);
purplesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 10);
purplesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 10);
purplesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 10);
Furniture.addReplacementItem({id:"purplesofa"},{id:"purplesofa"}, Furniture.placeRotatableBlock(BlockID.purplesofa, purplesofaModel));

IDRegistry.genBlockID("magentasofa");
Block.createBlock("magentasofa", [
	{name: "magentasofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magentasofa");
Item.createItem("magentasofa", "Magenta Sofa", {name: "magentasofa", meta: 0}, {stack: 64});

Translation.addTranslation("Magenta Sofa", {ru: "Пурпурная Софа"});
Recipes.addShaped({id: ItemID.magentasofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,2]);

var magentasofaModel = ModelAPI.newArray();
magentasofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
magentasofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
magentasofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
magentasofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
magentasofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 2);
magentasofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 2);
magentasofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 2);
magentasofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 2);
magentasofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 2);
magentasofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 2);
Furniture.addReplacementItem({id:"magentasofa"},{id:"magentasofa"}, Furniture.placeRotatableBlock(BlockID.magentasofa, magentasofaModel));

IDRegistry.genBlockID("pinksofa");
Block.createBlock("pinksofa", [
	{name: "pinksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pinksofa");
Item.createItem("pinksofa", "Pink Sofa", {name: "pinksofa", meta: 0}, {stack: 64});

Translation.addTranslation("Pink Sofa", {ru: "Розовая Софа"});
Recipes.addShaped({id: ItemID.pinksofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,6]);

var pinksofaModel = ModelAPI.newArray();
pinksofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
pinksofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
pinksofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
pinksofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
pinksofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 6);
pinksofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 6);
pinksofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 6);
pinksofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 6);
pinksofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 6);
pinksofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 6);
Furniture.addReplacementItem({id:"pinksofa"},{id:"pinksofa"}, Furniture.placeRotatableBlock(BlockID.pinksofa, pinksofaModel));

Block.setShape(BlockID.whitesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.lightgreysofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.greysofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.blacksofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.brownsofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.redsofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.orangesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.yellowsofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.limesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.greensofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.cyansofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.lightbluesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.bluesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.purplesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.magentasofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.pinksofa,0,0,0,1,0.36,1);




// file: new_scarecrow.js

IDRegistry.genBlockID("whitesecurity");
Block.createBlock("whitesecurity", [
	{name: "whitesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("whitesecurity");
Item.createItem("whitesecurity", "White Scarecrow", {name: "whitesecurity", meta: 0}, {stack: 64});

var whitesecurityModel = ModelAPI.newArray();
whitesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
whitesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
whitesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
whitesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
whitesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
whitesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
whitesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
whitesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
whitesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
whitesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
whitesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35);
whitesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35);
whitesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35);
whitesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35);
whitesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35);
whitesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35);
whitesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35);
whitesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35);
whitesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
whitesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35);
whitesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35);
whitesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35);
whitesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
whitesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
whitesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
whitesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
whitesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
whitesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35);
whitesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35);
whitesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35);
whitesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35);
whitesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35);
whitesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35);
Furniture.addReplacementItem({id:"whitesecurity"},{id:"whitesecurity"}, Furniture.placeRotatableBlock(BlockID.whitesecurity, whitesecurityModel));

IDRegistry.genBlockID("lightgreysecurity");
Block.createBlock("lightgreysecurity", [
	{name: "lightgreysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightgreysecurity");
Item.createItem("lightgreysecurity", "Light Grey Scarecrow", {name: "lightgreysecurity", meta: 0}, {stack: 64});

var lightgreysecurityModel = ModelAPI.newArray();
lightgreysecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
lightgreysecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
lightgreysecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
lightgreysecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
lightgreysecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
lightgreysecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
lightgreysecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
lightgreysecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
lightgreysecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
lightgreysecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
lightgreysecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 8);
lightgreysecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 8);
lightgreysecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
lightgreysecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 8);
lightgreysecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
lightgreysecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
lightgreysecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
lightgreysecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
lightgreysecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
lightgreysecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 8);
lightgreysecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 8);
lightgreysecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 8);
lightgreysecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 8);
lightgreysecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 8);
Furniture.addReplacementItem({id:"lightgreysecurity"},{id:"lightgreysecurity"}, Furniture.placeRotatableBlock(BlockID.lightgreysecurity, lightgreysecurityModel));

IDRegistry.genBlockID("greysecurity");
Block.createBlock("greysecurity", [
	{name: "greysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greysecurity");
Item.createItem("greysecurity", "Grey Scarecrow", {name: "greysecurity", meta: 0}, {stack: 64});

var greysecurityModel = ModelAPI.newArray();
greysecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
greysecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
greysecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
greysecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
greysecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
greysecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
greysecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
greysecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
greysecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
greysecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
greysecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 8);
greysecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 8);
greysecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 8);
greysecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 8);
greysecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 8);
greysecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 8);
greysecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 8);
greysecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 8);
greysecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
greysecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 8);
greysecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 8);
greysecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 8);
greysecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
greysecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
greysecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
greysecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
greysecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
greysecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 8);
greysecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 8);
greysecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 8);
greysecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 8);
greysecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 8);
greysecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 8);
Furniture.addReplacementItem({id:"greysecurity"},{id:"greysecurity"}, Furniture.placeRotatableBlock(BlockID.greysecurity, greysecurityModel));

IDRegistry.genBlockID("blacksecurity");
Block.createBlock("blacksecurity", [
	{name: "blacksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blacksecurity");
Item.createItem("blacksecurity", "Black Scarecrow", {name: "blacksecurity", meta: 0}, {stack: 64});

var blacksecurityModel = ModelAPI.newArray();
blacksecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
blacksecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
blacksecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
blacksecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
blacksecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
blacksecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
blacksecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
blacksecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
blacksecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
blacksecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
blacksecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 15);
blacksecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 15);
blacksecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 15);
blacksecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 15);
blacksecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 15);
blacksecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 15);
blacksecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 15);
blacksecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 15);
blacksecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
blacksecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 15);
blacksecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 15);
blacksecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 15);
blacksecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
blacksecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
blacksecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
blacksecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
blacksecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
blacksecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 15);
blacksecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 15);
blacksecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 15);
blacksecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 15);
blacksecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 15);
blacksecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 15);
Furniture.addReplacementItem({id:"blacksecurity"},{id:"blacksecurity"}, Furniture.placeRotatableBlock(BlockID.blacksecurity, blacksecurityModel));

IDRegistry.genBlockID("brownsecurity");
Block.createBlock("brownsecurity", [
	{name: "brownsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brownsecurity");
Item.createItem("brownsecurity", "Brown Scarecrow", {name: "brownsecurity", meta: 0}, {stack: 64});

var brownsecurityModel = ModelAPI.newArray();
brownsecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
brownsecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
brownsecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
brownsecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
brownsecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
brownsecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
brownsecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
brownsecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
brownsecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
brownsecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
brownsecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 12);
brownsecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 12);
brownsecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 12);
brownsecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 12);
brownsecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 12);
brownsecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 12);
brownsecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 12);
brownsecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 12);
brownsecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
brownsecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 12);
brownsecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 12);
brownsecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 12);
brownsecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
brownsecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
brownsecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
brownsecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
brownsecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
brownsecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 12);
brownsecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 12);
brownsecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 12);
brownsecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 12);
brownsecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 12);
brownsecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 12);
Furniture.addReplacementItem({id:"brownsecurity"},{id:"brownsecurity"}, Furniture.placeRotatableBlock(BlockID.brownsecurity, brownsecurityModel));

IDRegistry.genBlockID("redsecurity");
Block.createBlock("redsecurity", [
	{name: "redsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("redsecurity");
Item.createItem("redsecurity", "Red Scarecrow", {name: "redsecurity", meta: 0}, {stack: 64});

var redsecurityModel = ModelAPI.newArray();
redsecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
redsecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
redsecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
redsecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
redsecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
redsecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
redsecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
redsecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
redsecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
redsecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
redsecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 14);
redsecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 14);
redsecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 14);
redsecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 14);
redsecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 14);
redsecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 14);
redsecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 14);
redsecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 14);
redsecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
redsecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 14);
redsecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 14);
redsecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 14);
redsecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
redsecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
redsecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
redsecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
redsecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
redsecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 14);
redsecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 14);
redsecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 14);
redsecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 14);
redsecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 14);
redsecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 14);
Furniture.addReplacementItem({id:"redsecurity"},{id:"redsecurity"}, Furniture.placeRotatableBlock(BlockID.redsecurity, redsecurityModel));

IDRegistry.genBlockID("orangesecurity");
Block.createBlock("orangesecurity", [
	{name: "orangesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orangesecurity");
Item.createItem("orangesecurity", "Orange Scarecrow", {name: "orangesecurity", meta: 0}, {stack: 64});

var orangesecurityModel = ModelAPI.newArray();
orangesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
orangesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
orangesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
orangesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
orangesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
orangesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
orangesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
orangesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
orangesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
orangesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
orangesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 1);
orangesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 1);
orangesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 1);
orangesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 1);
orangesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 1);
orangesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 1);
orangesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 1);
orangesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 1);
orangesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
orangesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 1);
orangesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 1);
orangesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 1);
orangesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
orangesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
orangesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
orangesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
orangesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
orangesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 1);
orangesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 1);
orangesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 1);
orangesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 1);
orangesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 1);
orangesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 1);
Furniture.addReplacementItem({id:"orangesecurity"},{id:"orangesecurity"}, Furniture.placeRotatableBlock(BlockID.orangesecurity, orangesecurityModel));

IDRegistry.genBlockID("yellowsecurity");
Block.createBlock("yellowsecurity", [
	{name: "yellowsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellowsecurity");
Item.createItem("yellowsecurity", "Yellow Scarecrow", {name: "yellowsecurity", meta: 0}, {stack: 64});

var yellowsecurityModel = ModelAPI.newArray();
yellowsecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
yellowsecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
yellowsecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
yellowsecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
yellowsecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
yellowsecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
yellowsecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
yellowsecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
yellowsecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
yellowsecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
yellowsecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 4);
yellowsecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 4);
yellowsecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 4);
yellowsecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 4);
yellowsecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 4);
yellowsecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 4);
yellowsecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 4);
yellowsecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 4);
yellowsecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
yellowsecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 4);
yellowsecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 4);
yellowsecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 4);
yellowsecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
yellowsecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
yellowsecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
yellowsecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
yellowsecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
yellowsecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 4);
yellowsecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 4);
yellowsecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 4);
yellowsecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 4);
yellowsecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 4);
yellowsecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 4);
Furniture.addReplacementItem({id:"yellowsecurity"},{id:"yellowsecurity"}, Furniture.placeRotatableBlock(BlockID.yellowsecurity, yellowsecurityModel));

IDRegistry.genBlockID("limesecurity");
Block.createBlock("limesecurity", [
	{name: "limesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("limesecurity");
Item.createItem("limesecurity", "Lime Scarecrow", {name: "limesecurity", meta: 0}, {stack: 64});

var limesecurityModel = ModelAPI.newArray();
limesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
limesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
limesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
limesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
limesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
limesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
limesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
limesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
limesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
limesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
limesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 5);
limesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 5);
limesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 5);
limesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 5);
limesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 5);
limesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 5);
limesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 5);
limesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 5);
limesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
limesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 5);
limesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 5);
limesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 5);
limesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
limesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
limesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
limesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
limesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
limesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 5);
limesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 5);
limesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 5);
limesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 5);
limesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 5);
limesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 5);
Furniture.addReplacementItem({id:"limesecurity"},{id:"limesecurity"}, Furniture.placeRotatableBlock(BlockID.limesecurity, limesecurityModel));

IDRegistry.genBlockID("greensecurity");
Block.createBlock("greensecurity", [
	{name: "greensecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greensecurity");
Item.createItem("greensecurity", "Green Scarecrow", {name: "greensecurity", meta: 0}, {stack: 64});

var greensecurityModel = ModelAPI.newArray();
greensecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
greensecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
greensecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
greensecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
greensecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
greensecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
greensecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
greensecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
greensecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
greensecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
greensecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 13);
greensecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 13);
greensecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 13);
greensecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 13);
greensecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 13);
greensecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 13);
greensecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 13);
greensecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 13);
greensecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
greensecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 13);
greensecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 13);
greensecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 13);
greensecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
greensecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
greensecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
greensecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
greensecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
greensecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 13);
greensecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 13);
greensecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 13);
greensecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 13);
greensecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 13);
greensecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 13);
Furniture.addReplacementItem({id:"greensecurity"},{id:"greensecurity"}, Furniture.placeRotatableBlock(BlockID.greensecurity, greensecurityModel));

IDRegistry.genBlockID("cyansecurity");
Block.createBlock("cyansecurity", [
	{name: "cyansecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyansecurity");
Item.createItem("cyansecurity", "Cyan Scarecrow", {name: "cyansecurity", meta: 0}, {stack: 64});

var cyansecurityModel = ModelAPI.newArray();
cyansecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
cyansecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
cyansecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
cyansecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
cyansecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
cyansecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
cyansecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
cyansecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
cyansecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
cyansecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
cyansecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 9);
cyansecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 9);
cyansecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 9);
cyansecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 9);
cyansecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 9);
cyansecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 9);
cyansecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 9);
cyansecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 9);
cyansecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
cyansecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 9);
cyansecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 9);
cyansecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 9);
cyansecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
cyansecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
cyansecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
cyansecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
cyansecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
cyansecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 9);
cyansecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 9);
cyansecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 9);
cyansecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 9);
cyansecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 9);
cyansecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 9);
Furniture.addReplacementItem({id:"cyansecurity"},{id:"cyansecurity"}, Furniture.placeRotatableBlock(BlockID.cyansecurity, cyansecurityModel));

IDRegistry.genBlockID("lightbluesecurity");
Block.createBlock("lightbluesecurity", [
	{name: "lightbluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightbluesecurity");
Item.createItem("lightbluesecurity", "Light Blue Scarecrow", {name: "lightbluesecurity", meta: 0}, {stack: 64});

var lightbluesecurityModel = ModelAPI.newArray();
lightbluesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
lightbluesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
lightbluesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
lightbluesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
lightbluesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
lightbluesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
lightbluesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
lightbluesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
lightbluesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
lightbluesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
lightbluesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 3);
lightbluesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 3);
lightbluesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
lightbluesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 3);
lightbluesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
lightbluesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
lightbluesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
lightbluesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
lightbluesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
lightbluesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 3);
lightbluesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 3);
lightbluesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 3);
lightbluesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 3);
lightbluesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 3);
Furniture.addReplacementItem({id:"lightbluesecurity"},{id:"lightbluesecurity"}, Furniture.placeRotatableBlock(BlockID.lightbluesecurity, lightbluesecurityModel));

IDRegistry.genBlockID("bluesecurity");
Block.createBlock("bluesecurity", [
	{name: "bluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bluesecurity");
Item.createItem("bluesecurity", "Blue Scarecrow", {name: "bluesecurity", meta: 0}, {stack: 64});

var bluesecurityModel = ModelAPI.newArray();
bluesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
bluesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
bluesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
bluesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
bluesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
bluesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
bluesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
bluesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
bluesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
bluesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
bluesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 11);
bluesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 11);
bluesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 11);
bluesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 11);
bluesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 11);
bluesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 11);
bluesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 11);
bluesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 11);
bluesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
bluesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 11);
bluesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 11);
bluesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 11);
bluesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
bluesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
bluesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
bluesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
bluesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
bluesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 11);
bluesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 11);
bluesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 11);
bluesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 11);
bluesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 11);
bluesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 11);
Furniture.addReplacementItem({id:"bluesecurity"},{id:"bluesecurity"}, Furniture.placeRotatableBlock(BlockID.bluesecurity, bluesecurityModel));

IDRegistry.genBlockID("purplesecurity");
Block.createBlock("purplesecurity", [
	{name: "purplesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purplesecurity");
Item.createItem("purplesecurity", "Purple Scarecrow", {name: "purplesecurity", meta: 0}, {stack: 64});

var purplesecurityModel = ModelAPI.newArray();
purplesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
purplesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
purplesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
purplesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
purplesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
purplesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
purplesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
purplesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
purplesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
purplesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
purplesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 10);
purplesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 10);
purplesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 10);
purplesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 10);
purplesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 10);
purplesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 10);
purplesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 10);
purplesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 10);
purplesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
purplesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 10);
purplesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 10);
purplesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 10);
purplesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
purplesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
purplesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
purplesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
purplesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
purplesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 10);
purplesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 10);
purplesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 10);
purplesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 10);
purplesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 10);
purplesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 10);
Furniture.addReplacementItem({id:"purplesecurity"},{id:"purplesecurity"}, Furniture.placeRotatableBlock(BlockID.purplesecurity, purplesecurityModel));

IDRegistry.genBlockID("magentasecurity");
Block.createBlock("magentasecurity", [
	{name: "magentasecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magentasecurity");
Item.createItem("magentasecurity", "Magenta Scarecrow", {name: "magentasecurity", meta: 0}, {stack: 64});

var magentasecurityModel = ModelAPI.newArray();
magentasecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
magentasecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
magentasecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
magentasecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
magentasecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
magentasecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
magentasecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
magentasecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
magentasecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
magentasecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
magentasecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 2);
magentasecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 2);
magentasecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 2);
magentasecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 2);
magentasecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 2);
magentasecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 2);
magentasecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 2);
magentasecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 2);
magentasecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
magentasecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 2);
magentasecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 2);
magentasecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 2);
magentasecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
magentasecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
magentasecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
magentasecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
magentasecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
magentasecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 2);
magentasecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 2);
magentasecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 2);
magentasecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 2);
magentasecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 2);
magentasecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 2);
Furniture.addReplacementItem({id:"magentasecurity"},{id:"magentasecurity"}, Furniture.placeRotatableBlock(BlockID.magentasecurity, magentasecurityModel));

IDRegistry.genBlockID("pinksecurity");
Block.createBlock("pinksecurity", [
	{name: "pinksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pinksecurity");
Item.createItem("pinksecurity", "Pink Scarecrow", {name: "pinksecurity", meta: 0}, {stack: 64});

var pinksecurityModel = ModelAPI.newArray();
pinksecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
pinksecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
pinksecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
pinksecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
pinksecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
pinksecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
pinksecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
pinksecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
pinksecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
pinksecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
pinksecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 6);
pinksecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 6);
pinksecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 6);
pinksecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 6);
pinksecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 6);
pinksecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 6);
pinksecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 6);
pinksecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 6);
pinksecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
pinksecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 6);
pinksecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 6);
pinksecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 6);
pinksecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
pinksecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
pinksecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
pinksecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
pinksecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
pinksecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 6);
pinksecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 6);
pinksecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 6);
pinksecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 6);
pinksecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 6);
pinksecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 6);
Furniture.addReplacementItem({id:"pinksecurity"},{id:"pinksecurity"}, Furniture.placeRotatableBlock(BlockID.pinksecurity, pinksecurityModel));

//shapes
Block.setShape(BlockID.whitesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.lightgreysecurity,0,0,0,1,3,1);
Block.setShape(BlockID.greysecurity,0,0,0,1,3,1);
Block.setShape(BlockID.blacksecurity,0,0,0,1,3,1);
Block.setShape(BlockID.brownsecurity,0,0,0,1,3,1);
Block.setShape(BlockID.redsecurity,0,0,0,1,3,1);
Block.setShape(BlockID.orangesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.yellowsecurity,0,0,0,1,3,1);
Block.setShape(BlockID.limesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.greensecurity,0,0,0,1,3,1);
Block.setShape(BlockID.cyansecurity,0,0,0,1,3,1);
Block.setShape(BlockID.lightbluesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.bluesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.purplesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.magentasecurity,0,0,0,1,3,1);
Block.setShape(BlockID.pinksecurity,0,0,0,1,3,1);

//recipes
Recipes.addShaped({id: ItemID.whitesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,0]);
Recipes.addShaped({id: ItemID.lightgreysecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,8]);
Recipes.addShaped({id: ItemID.greysecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,7]);
Recipes.addShaped({id: ItemID.blacksecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,15]);
Recipes.addShaped({id: ItemID.brownsecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,12]);
Recipes.addShaped({id: ItemID.redsecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,14]);
Recipes.addShaped({id: ItemID.orangesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,1]);
Recipes.addShaped({id: ItemID.yellowsecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,4]);
Recipes.addShaped({id: ItemID.limesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,5]);
Recipes.addShaped({id: ItemID.greensecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,13]);
Recipes.addShaped({id: ItemID.cyansecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,9]);
Recipes.addShaped({id: ItemID.lightbluesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,3]);
Recipes.addShaped({id: ItemID.bluesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,11]);
Recipes.addShaped({id: ItemID.purplesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,10]);
Recipes.addShaped({id: ItemID.magentasecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,2]);
Recipes.addShaped({id: ItemID.pinksecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,6]);

//translation
Translation.addTranslation("White Scarecrow", {ru: "Белая Пугало"});
Translation.addTranslation("Light Grey Scarecrow", {ru: "Светло-серая Пугало"});
Translation.addTranslation("Grey Scarecrow", {ru: "Серая Пугало"});
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

IDRegistry.genBlockID("whitelamp");
Block.createBlock("whitelamp", [
	{name: "White Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var whitelampModel = ModelAPI.newArray();
whitelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
whitelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
whitelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35);
whitelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
whitelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35);
whitelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35);
whitelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35);
whitelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35);
whitelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.whitelamp, whitelampModel);

IDRegistry.genBlockID("lightgreylamp");
Block.createBlock("lightgreylamp", [
	{name: "Light Grey Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var lightgreylampModel = ModelAPI.newArray();
lightgreylampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
lightgreylampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
lightgreylampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 8);
lightgreylampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
lightgreylampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 8);
lightgreylampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 8);
lightgreylampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 8);
lightgreylampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 8);
lightgreylampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.lightgreylamp, lightgreylampModel);

IDRegistry.genBlockID("greylamp");
Block.createBlock("greylamp", [
	{name: "Grey Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var greylampModel = ModelAPI.newArray();
greylampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
greylampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
greylampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 7);
greylampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
greylampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 7);
greylampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 7);
greylampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 7);
greylampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 7);
greylampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.greylamp, greylampModel);

IDRegistry.genBlockID("blacklamp");
Block.createBlock("blacklamp", [
	{name: "Black Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var blacklampModel = ModelAPI.newArray();
blacklampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
blacklampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
blacklampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 15);
blacklampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
blacklampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 15);
blacklampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 15);
blacklampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 15);
blacklampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 15);
blacklampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.blacklamp, blacklampModel);

IDRegistry.genBlockID("brownlamp");
Block.createBlock("brownlamp", [
	{name: "Brown Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var brownlampModel = ModelAPI.newArray();
brownlampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
brownlampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
brownlampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 12);
brownlampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
brownlampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 12);
brownlampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 12);
brownlampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 12);
brownlampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 12);
brownlampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.brownlamp, brownlampModel);

IDRegistry.genBlockID("redlamp");
Block.createBlock("redlamp", [
	{name: "Red Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var redlampModel = ModelAPI.newArray();
redlampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
redlampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
redlampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 14);
redlampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
redlampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 14);
redlampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 14);
redlampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 14);
redlampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 14);
redlampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.redlamp, redlampModel);

IDRegistry.genBlockID("orangelamp");
Block.createBlock("orangelamp", [
	{name: "Orange Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var orangelampModel = ModelAPI.newArray();
orangelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
orangelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
orangelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 1);
orangelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
orangelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 1);
orangelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 1);
orangelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 1);
orangelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 1);
orangelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.orangelamp, orangelampModel);

IDRegistry.genBlockID("yellowlamp");
Block.createBlock("yellowlamp", [
	{name: "Yellow Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var yellowlampModel = ModelAPI.newArray();
yellowlampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
yellowlampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
yellowlampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 4);
yellowlampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
yellowlampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 4);
yellowlampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 4);
yellowlampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 4);
yellowlampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 4);
yellowlampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.yellowlamp, yellowlampModel);

IDRegistry.genBlockID("limelamp");
Block.createBlock("limelamp", [
	{name: "Lime Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var limelampModel = ModelAPI.newArray();
limelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
limelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
limelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 5);
limelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
limelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 5);
limelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 5);
limelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 5);
limelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 5);
limelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.limelamp, limelampModel);

IDRegistry.genBlockID("greenlamp");
Block.createBlock("greenlamp", [
	{name: "Green Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var greenlampModel = ModelAPI.newArray();
greenlampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
greenlampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
greenlampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 13);
greenlampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
greenlampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 13);
greenlampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 13);
greenlampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 13);
greenlampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 13);
greenlampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.greenlamp, greenlampModel);

IDRegistry.genBlockID("cyanlamp");
Block.createBlock("cyanlamp", [
	{name: "Cyan Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var cyanlampModel = ModelAPI.newArray();
cyanlampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
cyanlampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
cyanlampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 9);
cyanlampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
cyanlampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 9);
cyanlampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 9);
cyanlampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 9);
cyanlampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 9);
cyanlampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.cyanlamp, cyanlampModel);

IDRegistry.genBlockID("lightbluelamp");
Block.createBlock("lightbluelamp", [
	{name: "Light Blue Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var lightbluelampModel = ModelAPI.newArray();
lightbluelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
lightbluelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
lightbluelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 3);
lightbluelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
lightbluelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 3);
lightbluelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 3);
lightbluelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 3);
lightbluelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 3);
lightbluelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.lightbluelamp, lightbluelampModel);

IDRegistry.genBlockID("bluelamp");
Block.createBlock("bluelamp", [
	{name: "Blue Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var bluelampModel = ModelAPI.newArray();
bluelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
bluelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
bluelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 11);
bluelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
bluelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 11);
bluelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 11);
bluelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 11);
bluelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 11);
bluelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.bluelamp, bluelampModel);

IDRegistry.genBlockID("purplelamp");
Block.createBlock("purplelamp", [
	{name: "Purple Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var purplelampModel = ModelAPI.newArray();
purplelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
purplelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
purplelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 10);
purplelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
purplelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 10);
purplelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 10);
purplelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 10);
purplelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 10);
purplelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.purplelamp, purplelampModel);

IDRegistry.genBlockID("magentalamp");
Block.createBlock("magentalamp", [
	{name: "Magenta Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var magentalampModel = ModelAPI.newArray();
magentalampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
magentalampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
magentalampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 2);
magentalampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
magentalampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 2);
magentalampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 2);
magentalampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 2);
magentalampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 2);
magentalampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.magentalamp, magentalampModel);

IDRegistry.genBlockID("pinklamp");
Block.createBlock("pinklamp", [
	{name: "Pink Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var pinklampModel = ModelAPI.newArray();
pinklampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
pinklampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
pinklampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 6);
pinklampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
pinklampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 6);
pinklampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 6);
pinklampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 6);
pinklampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 6);
pinklampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.pinklamp, pinklampModel);

//translation lamps
Translation.addTranslation("White Lamp", {ru: "Белая Лампа"});
Translation.addTranslation("Light Grey Lamp", {ru: "Светло-серая Лампа"});
Translation.addTranslation("Grey Lamp", {ru: "Серая Лампа"});
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
Recipes.addShaped({id: BlockID.whitelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,0, 'c', 85,0])
Recipes.addShaped({id: BlockID.lightgreylamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,8, 'c', 85,0])
Recipes.addShaped({id: BlockID.greylamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,7, 'c', 85,0])
Recipes.addShaped({id: BlockID.blacklamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,15, 'c', 85,0])
Recipes.addShaped({id: BlockID.brownlamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,12, 'c', 85,0])
Recipes.addShaped({id: BlockID.redlamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,14, 'c', 85,0])
Recipes.addShaped({id: BlockID.orangelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,1, 'c', 85,0])
Recipes.addShaped({id: BlockID.yellowlamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,4, 'c', 85,0])
Recipes.addShaped({id: BlockID.limelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,5, 'c', 85,0])
Recipes.addShaped({id: BlockID.greenlamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,13, 'c', 85,0])
Recipes.addShaped({id: BlockID.cyanlamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,9, 'c', 85,0])
Recipes.addShaped({id: BlockID.lightbluelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,3, 'c', 85,0])
Recipes.addShaped({id: BlockID.bluelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,11, 'c', 85,0])
Recipes.addShaped({id: BlockID.purplelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,10, 'c', 85,0])
Recipes.addShaped({id: BlockID.magentalamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,2, 'c', 85,0])
Recipes.addShaped({id: BlockID.pinklamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,6, 'c', 85,0])




// file: new_barrel.js

IDRegistry.genBlockID("barreloak");
Block.createBlock("barreloak", [
	{name: "Oak Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barreloakModel = ModelAPI.newArray();
barreloakModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5);
barreloakModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5);
barreloakModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5);
barreloakModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5);
barreloakModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5);
barreloakModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5);
barreloakModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5);
barreloakModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5);
barreloakModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5);
barreloakModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barreloakModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barreloakModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barreloakModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barreloakModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barreloakModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barreloakModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barreloakModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barreloakModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barreloakModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barreloakModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barreloakModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barreloakModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barreloakModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barreloakModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barreloakModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barreloakModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barreloakModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barreloakModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barreloakModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barreloakModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barreloakModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barreloakModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barreloakModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barreloakModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barreloakModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barreloakModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barreloakModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barreloakModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barreloakModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barreloakModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barreloakModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barreloakModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barreloak, barreloakModel);

IDRegistry.genBlockID("barrelspruce");
Block.createBlock("barrelspruce", [
	{name: "Spruce Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barrelspruceModel = ModelAPI.newArray();
barrelspruceModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 1);
barrelspruceModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 1);
barrelspruceModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 1);
barrelspruceModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 1);
barrelspruceModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 1);
barrelspruceModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 1);
barrelspruceModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 1);
barrelspruceModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 1);
barrelspruceModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 1);
barrelspruceModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barrelspruceModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barrelspruceModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barrelspruceModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barrelspruceModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barrelspruceModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barrelspruceModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barrelspruceModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barrelspruceModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barrelspruceModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barrelspruceModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barrelspruceModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barrelspruceModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barrelspruceModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barrelspruceModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barrelspruceModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barrelspruceModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barrelspruceModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barrelspruceModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barrelspruceModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barrelspruceModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barrelspruceModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barrelspruceModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barrelspruceModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barrelspruceModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barrelspruceModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barrelspruceModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barrelspruceModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barrelspruceModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barrelspruceModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barrelspruceModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barrelspruceModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barrelspruceModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barrelspruce, barrelspruceModel);

IDRegistry.genBlockID("barrelbrich");
Block.createBlock("barrelbrich", [
	{name: "Birch Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barrelbrichModel = ModelAPI.newArray();
barrelbrichModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 2);
barrelbrichModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 2);
barrelbrichModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 2);
barrelbrichModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 2);
barrelbrichModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 2);
barrelbrichModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 2);
barrelbrichModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 2);
barrelbrichModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 2);
barrelbrichModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 2);
barrelbrichModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barrelbrichModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barrelbrichModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barrelbrichModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barrelbrichModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barrelbrichModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barrelbrichModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barrelbrichModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barrelbrichModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barrelbrichModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barrelbrichModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barrelbrichModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barrelbrichModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barrelbrichModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barrelbrichModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barrelbrichModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barrelbrichModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barrelbrichModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barrelbrichModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barrelbrichModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barrelbrichModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barrelbrichModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barrelbrichModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barrelbrichModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barrelbrichModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barrelbrichModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barrelbrichModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barrelbrichModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barrelbrichModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barrelbrichModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barrelbrichModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barrelbrichModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barrelbrichModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barrelbrich, barrelbrichModel);

IDRegistry.genBlockID("barreljungle");
Block.createBlock("barreljungle", [
	{name: "Jungle Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barreljungleModel = ModelAPI.newArray();
barreljungleModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 3);
barreljungleModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 3);
barreljungleModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 3);
barreljungleModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 3);
barreljungleModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 3);
barreljungleModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 3);
barreljungleModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 3);
barreljungleModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 3);
barreljungleModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 3);
barreljungleModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barreljungleModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barreljungleModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barreljungleModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barreljungleModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barreljungleModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barreljungleModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barreljungleModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barreljungleModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barreljungleModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barreljungleModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barreljungleModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barreljungleModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barreljungleModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barreljungleModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barreljungleModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barreljungleModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barreljungleModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barreljungleModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barreljungleModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barreljungleModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barreljungleModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barreljungleModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barreljungleModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barreljungleModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barreljungleModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barreljungleModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barreljungleModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barreljungleModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barreljungleModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barreljungleModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barreljungleModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barreljungleModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barreljungle, barreljungleModel);

IDRegistry.genBlockID("barrelacacia");
Block.createBlock("barrelacacia", [
	{name: "Acacia Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barrelacaciaModel = ModelAPI.newArray();
barrelacaciaModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 4);
barrelacaciaModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 4);
barrelacaciaModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 4);
barrelacaciaModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 4);
barrelacaciaModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 4);
barrelacaciaModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 4);
barrelacaciaModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 4);
barrelacaciaModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 4);
barrelacaciaModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 4);
barrelacaciaModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barrelacaciaModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barrelacaciaModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barrelacaciaModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barrelacaciaModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barrelacaciaModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barrelacaciaModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barrelacaciaModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barrelacaciaModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barrelacaciaModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barrelacaciaModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barrelacaciaModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barrelacaciaModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barrelacaciaModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barrelacaciaModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barrelacaciaModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barrelacaciaModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barrelacaciaModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barrelacaciaModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barrelacaciaModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barrelacaciaModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barrelacaciaModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barrelacaciaModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barrelacaciaModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barrelacaciaModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barrelacaciaModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barrelacaciaModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barrelacacia, barrelacaciaModel);

IDRegistry.genBlockID("barrelbigoak");
Block.createBlock("barrelbigoak", [
	{name: "Dark Oak Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barrelbigoakModel = ModelAPI.newArray();
barrelbigoakModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 5);
barrelbigoakModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 5);
barrelbigoakModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 5);
barrelbigoakModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 5);
barrelbigoakModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 5);
barrelbigoakModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 5);
barrelbigoakModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 5);
barrelbigoakModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 5);
barrelbigoakModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 5);
barrelbigoakModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barrelbigoakModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barrelbigoakModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barrelbigoakModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barrelbigoakModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barrelbigoakModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barrelbigoakModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barrelbigoakModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barrelbigoakModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barrelbigoakModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barrelbigoakModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barrelbigoakModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barrelbigoakModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barrelbigoakModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barrelbigoakModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barrelbigoakModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barrelbigoakModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barrelbigoakModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barrelbigoakModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barrelbigoakModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barrelbigoakModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barrelbigoakModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barrelbigoakModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barrelbigoakModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barrelbigoakModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barrelbigoakModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barrelbigoakModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barrelbigoak, barrelbigoakModel);

//translation barrels
Translation.addTranslation("Oak Barrel", {ru: "Дубовая Бочка"});
Translation.addTranslation("Spruce Barrel", {ru: "Еловая Бочка"});
Translation.addTranslation("Birch Barrel", {ru: "Берёзовая Бочка"});
Translation.addTranslation("Jungle Barrel", {ru: "Джунглевая Бочка"});
Translation.addTranslation("Acacia Barrel", {ru: "Акациевая Бочка"});
Translation.addTranslation("Dark Oak Barrel", {ru: "Тёмно дубовая Бочка"});

//recipes barrels
Recipes.addShaped({id: BlockID.barreloak, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,0, 'x', 158,0])
Recipes.addShaped({id: BlockID.barrelspruce, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,1, 'x', 158,1])
Recipes.addShaped({id: BlockID.barrelbrich, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,2, 'x', 158,2])
Recipes.addShaped({id: BlockID.barreljungle, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,3, 'x', 158,3])
Recipes.addShaped({id: BlockID.barrelacacia, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,4, 'x', 158,4])
Recipes.addShaped({id: BlockID.barrelbigoak, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,5, 'x', 158,5])




// file: CHEST.js

IDRegistry.genBlockID("chestoak");
Block.createBlock("chestoak", [
	{name: "chestoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestoak");
Item.createItem("chestoak", "Big Chest", {name: "chestoak", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestoak, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,0, 'x', 158,0])

var chestoakModel = ModelAPI.newArray();
chestoakModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5);
chestoakModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5);
chestoakModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestoakModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestoakModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestoakModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestoakModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestoakModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestoakModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5);
chestoakModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5);
chestoakModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5);
chestoakModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5);
chestoakModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5);
chestoakModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5);
chestoakModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestoakModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestoakModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestoakModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestoakModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestoakModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestoakModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestoakModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestoakModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestoakModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestoakModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5);
chestoakModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5);
chestoakModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5);
chestoakModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5);
chestoakModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5);
chestoakModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5);
chestoakModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestoakModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestoakModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestoakModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestoakModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestoakModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestoakModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestoakModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestoakModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestoakModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestoakModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestoakModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestoakModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestoakModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestoakModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5);
chestoakModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5);
chestoakModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5);
chestoakModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5);
chestoakModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5);
chestoakModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5);
chestoakModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5);
chestoakModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5);
chestoakModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5);
chestoakModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5);
chestoakModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5);
chestoakModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5);
chestoakModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5);
chestoakModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5);
chestoakModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5);
chestoakModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5);
chestoakModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5);
chestoakModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5);
chestoakModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5);
chestoakModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5);
chestoakModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestoakModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestoak"},{id:"chestoak"}, Furniture.placeRotatableBlock(BlockID.chestoak, chestoakModel));

IDRegistry.genBlockID("chestspruce");
Block.createBlock("chestspruce", [
	{name: "chestspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestspruce");
Item.createItem("chestspruce", "Big Chest", {name: "chestspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestspruce, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,1, 'x', 158,1])

var chestspruceModel = ModelAPI.newArray();
chestspruceModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 1);
chestspruceModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 1);
chestspruceModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestspruceModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestspruceModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestspruceModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestspruceModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestspruceModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestspruceModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 1);
chestspruceModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 1);
chestspruceModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 1);
chestspruceModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 1);
chestspruceModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 1);
chestspruceModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 1);
chestspruceModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestspruceModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestspruceModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestspruceModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestspruceModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestspruceModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestspruceModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestspruceModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestspruceModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestspruceModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestspruceModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 1);
chestspruceModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 1);
chestspruceModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 1);
chestspruceModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 1);
chestspruceModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 1);
chestspruceModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 1);
chestspruceModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestspruceModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestspruceModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestspruceModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestspruceModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestspruceModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestspruceModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestspruceModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestspruceModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestspruceModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestspruceModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestspruceModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestspruceModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestspruceModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestspruceModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 1);
chestspruceModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 1);
chestspruceModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 1);
chestspruceModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 1);
chestspruceModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 1);
chestspruceModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 1);
chestspruceModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 1);
chestspruceModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 1);
chestspruceModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 1);
chestspruceModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 1);
chestspruceModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 1);
chestspruceModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 1);
chestspruceModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 1);
chestspruceModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 1);
chestspruceModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 1);
chestspruceModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 1);
chestspruceModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 1);
chestspruceModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 1);
chestspruceModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 1);
chestspruceModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 1);
chestspruceModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestspruceModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestspruce"},{id:"chestspruce"}, Furniture.placeRotatableBlock(BlockID.chestspruce, chestspruceModel));

IDRegistry.genBlockID("chestbrich");
Block.createBlock("chestbrich", [
	{name: "chestbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestbrich");
Item.createItem("chestbrich", "Big Chest", {name: "chestbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestbrich, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,1, 'x', 158,1])

var chestbrichModel = ModelAPI.newArray();
chestbrichModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 2);
chestbrichModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 2);
chestbrichModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestbrichModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestbrichModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestbrichModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestbrichModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestbrichModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestbrichModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 2);
chestbrichModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 2);
chestbrichModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 2);
chestbrichModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 2);
chestbrichModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 2);
chestbrichModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 2);
chestbrichModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestbrichModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestbrichModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestbrichModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestbrichModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestbrichModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestbrichModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestbrichModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestbrichModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestbrichModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestbrichModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 2);
chestbrichModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 2);
chestbrichModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 2);
chestbrichModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 2);
chestbrichModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 2);
chestbrichModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 2);
chestbrichModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestbrichModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestbrichModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestbrichModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestbrichModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestbrichModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestbrichModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestbrichModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestbrichModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestbrichModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestbrichModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestbrichModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestbrichModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestbrichModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestbrichModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 2);
chestbrichModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 2);
chestbrichModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 2);
chestbrichModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 2);
chestbrichModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 2);
chestbrichModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 2);
chestbrichModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 2);
chestbrichModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 2);
chestbrichModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 2);
chestbrichModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 2);
chestbrichModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 2);
chestbrichModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 2);
chestbrichModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 2);
chestbrichModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 2);
chestbrichModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 2);
chestbrichModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 2);
chestbrichModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 2);
chestbrichModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 2);
chestbrichModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 2);
chestbrichModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 2);
chestbrichModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestbrichModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestbrich"},{id:"chestbrich"}, Furniture.placeRotatableBlock(BlockID.chestbrich, chestbrichModel));

IDRegistry.genBlockID("chestjungle");
Block.createBlock("chestjungle", [
	{name: "chestjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestjungle");
Item.createItem("chestjungle", "Big Chest", {name: "chestjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestjungle, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,1, 'x', 158,1])

var chestjungleModel = ModelAPI.newArray();
chestjungleModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 3);
chestjungleModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 3);
chestjungleModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestjungleModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestjungleModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestjungleModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestjungleModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestjungleModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestjungleModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 3);
chestjungleModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 3);
chestjungleModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 3);
chestjungleModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 3);
chestjungleModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 3);
chestjungleModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 3);
chestjungleModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestjungleModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestjungleModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestjungleModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestjungleModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestjungleModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestjungleModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestjungleModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestjungleModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestjungleModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestjungleModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 3);
chestjungleModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 3);
chestjungleModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 3);
chestjungleModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 3);
chestjungleModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 3);
chestjungleModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 3);
chestjungleModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestjungleModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestjungleModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestjungleModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestjungleModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestjungleModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestjungleModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestjungleModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestjungleModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestjungleModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestjungleModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestjungleModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestjungleModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestjungleModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestjungleModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 3);
chestjungleModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 3);
chestjungleModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 3);
chestjungleModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 3);
chestjungleModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 3);
chestjungleModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 3);
chestjungleModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 3);
chestjungleModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 3);
chestjungleModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 3);
chestjungleModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 3);
chestjungleModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 3);
chestjungleModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 3);
chestjungleModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 3);
chestjungleModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 3);
chestjungleModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 3);
chestjungleModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 3);
chestjungleModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 3);
chestjungleModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 3);
chestjungleModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 3);
chestjungleModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 3);
chestjungleModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestjungleModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestjungle"},{id:"chestjungle"}, Furniture.placeRotatableBlock(BlockID.chestjungle, chestjungleModel));

IDRegistry.genBlockID("chestacacia");
Block.createBlock("chestacacia", [
	{name: "chestacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestacacia");
Item.createItem("chestacacia", "Big Chest", {name: "chestacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestacacia, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,1, 'x', 158,1])

var chestacaciaModel = ModelAPI.newArray();
chestacaciaModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 4);
chestacaciaModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 4);
chestacaciaModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestacaciaModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestacaciaModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestacaciaModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestacaciaModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestacaciaModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestacaciaModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 4);
chestacaciaModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 4);
chestacaciaModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 4);
chestacaciaModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 4);
chestacaciaModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 4);
chestacaciaModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 4);
chestacaciaModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestacaciaModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestacaciaModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestacaciaModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestacaciaModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestacaciaModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestacaciaModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestacaciaModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestacaciaModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestacaciaModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestacaciaModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 4);
chestacaciaModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 4);
chestacaciaModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 4);
chestacaciaModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 4);
chestacaciaModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 4);
chestacaciaModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 4);
chestacaciaModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestacaciaModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestacaciaModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestacaciaModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestacaciaModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestacaciaModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestacaciaModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestacaciaModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestacaciaModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestacaciaModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestacaciaModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestacaciaModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestacaciaModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestacaciaModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestacaciaModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 4);
chestacaciaModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 4);
chestacaciaModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 4);
chestacaciaModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 4);
chestacaciaModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 4);
chestacaciaModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 4);
chestacaciaModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 4);
chestacaciaModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 4);
chestacaciaModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 4);
chestacaciaModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 4);
chestacaciaModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 4);
chestacaciaModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 4);
chestacaciaModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 4);
chestacaciaModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 4);
chestacaciaModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 4);
chestacaciaModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 4);
chestacaciaModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 4);
chestacaciaModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 4);
chestacaciaModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 4);
chestacaciaModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 4);
chestacaciaModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestacaciaModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestacacia"},{id:"chestacacia"}, Furniture.placeRotatableBlock(BlockID.chestacacia, chestacaciaModel));

IDRegistry.genBlockID("chestbigoak");
Block.createBlock("chestbigoak", [
	{name: "chestbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestbigoak");
Item.createItem("chestbigoak", "Big Chest", {name: "chestbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestbigoak, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,1, 'x', 158,1])

var chestbigoakModel = ModelAPI.newArray();
chestbigoakModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 5);
chestbigoakModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 5);
chestbigoakModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestbigoakModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestbigoakModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestbigoakModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestbigoakModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestbigoakModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestbigoakModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 5);
chestbigoakModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 5);
chestbigoakModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 5);
chestbigoakModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 5);
chestbigoakModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 5);
chestbigoakModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 5);
chestbigoakModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestbigoakModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestbigoakModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestbigoakModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestbigoakModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestbigoakModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestbigoakModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestbigoakModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestbigoakModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestbigoakModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestbigoakModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 5);
chestbigoakModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 5);
chestbigoakModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 5);
chestbigoakModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 5);
chestbigoakModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 5);
chestbigoakModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 5);
chestbigoakModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestbigoakModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestbigoakModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestbigoakModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestbigoakModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestbigoakModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestbigoakModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestbigoakModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestbigoakModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestbigoakModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestbigoakModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestbigoakModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestbigoakModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestbigoakModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestbigoakModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 5);
chestbigoakModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 5);
chestbigoakModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 5);
chestbigoakModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 5);
chestbigoakModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 5);
chestbigoakModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 5);
chestbigoakModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 5);
chestbigoakModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 5);
chestbigoakModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 5);
chestbigoakModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 5);
chestbigoakModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 5);
chestbigoakModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 5);
chestbigoakModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 5);
chestbigoakModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 5);
chestbigoakModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 5);
chestbigoakModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 5);
chestbigoakModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 5);
chestbigoakModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 5);
chestbigoakModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 5);
chestbigoakModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 5);
chestbigoakModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestbigoakModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestbigoak"},{id:"chestbigoak"}, Furniture.placeRotatableBlock(BlockID.chestbigoak, chestbigoakModel));




// file: TROUGHFOOD.js

IDRegistry.genBlockID("troughfoodoak");
Block.createBlock("troughfoodoak", [
	{name: "troughfoodoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodoak");
Item.createItem("troughfoodoak", "Food Trough", {name: "troughfoodoak", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodoak, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,0])

var troughfoodoakModel = ModelAPI.newArray();
troughfoodoakModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5);
troughfoodoakModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5);
troughfoodoakModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodoakModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5);
troughfoodoakModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5);
troughfoodoakModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5);
troughfoodoakModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5);
troughfoodoakModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5);
troughfoodoakModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5);
troughfoodoakModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodoak"},{id:"troughfoodoak"}, Furniture.placeRotatableBlock(BlockID.troughfoodoak, troughfoodoakModel));

IDRegistry.genBlockID("troughfoodspruce");
Block.createBlock("troughfoodspruce", [
	{name: "troughfoodspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodspruce");
Item.createItem("troughfoodspruce", "Food Trough", {name: "troughfoodspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodspruce, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,1])

var troughfoodspruceModel = ModelAPI.newArray();
troughfoodspruceModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 1);
troughfoodspruceModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 1);
troughfoodspruceModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodspruceModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 1);
troughfoodspruceModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 1);
troughfoodspruceModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 1);
troughfoodspruceModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 1);
troughfoodspruceModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 1);
troughfoodspruceModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 1);
troughfoodspruceModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodspruce"},{id:"troughfoodspruce"}, Furniture.placeRotatableBlock(BlockID.troughfoodspruce, troughfoodspruceModel));

IDRegistry.genBlockID("troughfoodbrich");
Block.createBlock("troughfoodbrich", [
	{name: "troughfoodbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodbrich");
Item.createItem("troughfoodbrich", "Food Trough", {name: "troughfoodbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodbrich, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,2])

var troughfoodbrichModel = ModelAPI.newArray();
troughfoodbrichModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 2);
troughfoodbrichModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 2);
troughfoodbrichModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodbrichModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 2);
troughfoodbrichModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 2);
troughfoodbrichModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 2);
troughfoodbrichModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 2);
troughfoodbrichModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 2);
troughfoodbrichModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 2);
troughfoodbrichModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodbrich"},{id:"troughfoodbrich"}, Furniture.placeRotatableBlock(BlockID.troughfoodbrich, troughfoodbrichModel));

IDRegistry.genBlockID("troughfoodjungle");
Block.createBlock("troughfoodjungle", [
	{name: "troughfoodjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodjungle");
Item.createItem("troughfoodjungle", "Food Trough", {name: "troughfoodjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodjungle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,3])

var troughfoodjungleModel = ModelAPI.newArray();
troughfoodjungleModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 3);
troughfoodjungleModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 3);
troughfoodjungleModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodjungleModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 3);
troughfoodjungleModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 3);
troughfoodjungleModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 3);
troughfoodjungleModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 3);
troughfoodjungleModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 3);
troughfoodjungleModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 3);
troughfoodjungleModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodjungle"},{id:"troughfoodjungle"}, Furniture.placeRotatableBlock(BlockID.troughfoodjungle, troughfoodjungleModel));

IDRegistry.genBlockID("troughfoodacacia");
Block.createBlock("troughfoodacacia", [
	{name: "troughfoodacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodacacia");
Item.createItem("troughfoodacacia", "Food Trough", {name: "troughfoodacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodacacia, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,4])

var troughfoodacaciaModel = ModelAPI.newArray();
troughfoodacaciaModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 4);
troughfoodacaciaModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 4);
troughfoodacaciaModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodacaciaModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 4);
troughfoodacaciaModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 4);
troughfoodacaciaModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 4);
troughfoodacaciaModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 4);
troughfoodacaciaModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 4);
troughfoodacaciaModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 4);
troughfoodacaciaModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodacacia"},{id:"troughfoodacacia"}, Furniture.placeRotatableBlock(BlockID.troughfoodacacia, troughfoodacaciaModel));

IDRegistry.genBlockID("troughfoodbigoak");
Block.createBlock("troughfoodbigoak", [
	{name: "troughfoodbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodbigoak");
Item.createItem("troughfoodbigoak", "Food Trough", {name: "troughfoodbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodbigoak, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,5])

var troughfoodbigoakModel = ModelAPI.newArray();
troughfoodbigoakModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 5);
troughfoodbigoakModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 5);
troughfoodbigoakModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodbigoakModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 5);
troughfoodbigoakModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 5);
troughfoodbigoakModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 5);
troughfoodbigoakModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 5);
troughfoodbigoakModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 5);
troughfoodbigoakModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 5);
troughfoodbigoakModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodbigoak"},{id:"troughfoodbigoak"}, Furniture.placeRotatableBlock(BlockID.troughfoodbigoak, troughfoodbigoakModel));




// file: TROUGHWATER.js

IDRegistry.genBlockID("troughwateroak");
Block.createBlock("troughwateroak", [
	{name: "troughwateroak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateroak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateroak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateroak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwateroak");
Item.createItem("troughwateroak", "Food Trough", {name: "troughwateroak", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});
Recipes.addShaped({id: ItemID.troughwateroak, count: 1, data: 0}, ["aaa", "xxx"], ['a', 325,8, 'x', 5,0])

var troughwateroakModel = ModelAPI.newArray();
troughwateroakModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5);
troughwateroakModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5);
troughwateroakModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwateroakModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5);
troughwateroakModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5);
troughwateroakModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5);
troughwateroakModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5);
troughwateroakModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5);
troughwateroakModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5);
troughwateroakModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwateroak"},{id:"troughwateroak"}, Furniture.placeRotatableBlock(BlockID.troughwateroak, troughwateroakModel));

IDRegistry.genBlockID("troughwaterspruce");
Block.createBlock("troughwaterspruce", [
	{name: "troughwaterspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwaterspruce");
Item.createItem("troughwaterspruce", "Food Trough", {name: "troughwaterspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});
Recipes.addShaped({id: ItemID.troughwaterspruce, count: 1, data: 0}, ["aaa", "xxx"], ['a', 325,8, 'x', 5,1])

var troughwaterspruceModel = ModelAPI.newArray();
troughwaterspruceModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 1);
troughwaterspruceModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 1);
troughwaterspruceModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwaterspruceModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 1);
troughwaterspruceModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 1);
troughwaterspruceModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 1);
troughwaterspruceModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 1);
troughwaterspruceModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 1);
troughwaterspruceModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 1);
troughwaterspruceModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwaterspruce"},{id:"troughwaterspruce"}, Furniture.placeRotatableBlock(BlockID.troughwaterspruce, troughwaterspruceModel));

IDRegistry.genBlockID("troughwaterbrich");
Block.createBlock("troughwaterbrich", [
	{name: "troughwaterbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwaterbrich");
Item.createItem("troughwaterbrich", "Food Trough", {name: "troughwaterbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});
Recipes.addShaped({id: ItemID.troughwaterbrich, count: 1, data: 0}, ["aaa", "xxx"], ['a', 325,8, 'x', 5,2])

var troughwaterbrichModel = ModelAPI.newArray();
troughwaterbrichModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 2);
troughwaterbrichModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 2);
troughwaterbrichModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwaterbrichModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 2);
troughwaterbrichModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 2);
troughwaterbrichModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 2);
troughwaterbrichModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 2);
troughwaterbrichModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 2);
troughwaterbrichModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 2);
troughwaterbrichModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwaterbrich"},{id:"troughwaterbrich"}, Furniture.placeRotatableBlock(BlockID.troughwaterbrich, troughwaterbrichModel));

IDRegistry.genBlockID("troughwaterjungle");
Block.createBlock("troughwaterjungle", [
	{name: "troughwaterjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwaterjungle");
Item.createItem("troughwaterjungle", "Food Trough", {name: "troughwaterjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});
Recipes.addShaped({id: ItemID.troughwaterjungle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 325,8, 'x', 5,3])

var troughwaterjungleModel = ModelAPI.newArray();
troughwaterjungleModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 3);
troughwaterjungleModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 3);
troughwaterjungleModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwaterjungleModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 3);
troughwaterjungleModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 3);
troughwaterjungleModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 3);
troughwaterjungleModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 3);
troughwaterjungleModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 3);
troughwaterjungleModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 3);
troughwaterjungleModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwaterjungle"},{id:"troughwaterjungle"}, Furniture.placeRotatableBlock(BlockID.troughwaterjungle, troughwaterjungleModel));

IDRegistry.genBlockID("troughwateracacia");
Block.createBlock("troughwateracacia", [
	{name: "troughwateracacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateracacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateracacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateracacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwateracacia");
Item.createItem("troughwateracacia", "Food Trough", {name: "troughwateracacia", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});
Recipes.addShaped({id: ItemID.troughwateracacia, count: 1, data: 0}, ["aaa", "xxx"], ['a', 325,8, 'x', 5,4])

var troughwateracaciaModel = ModelAPI.newArray();
troughwateracaciaModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 4);
troughwateracaciaModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 4);
troughwateracaciaModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwateracaciaModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 4);
troughwateracaciaModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 4);
troughwateracaciaModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 4);
troughwateracaciaModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 4);
troughwateracaciaModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 4);
troughwateracaciaModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 4);
troughwateracaciaModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwateracacia"},{id:"troughwateracacia"}, Furniture.placeRotatableBlock(BlockID.troughwateracacia, troughwateracaciaModel));

IDRegistry.genBlockID("troughwaterbigoak");
Block.createBlock("troughwaterbigoak", [
	{name: "troughwaterbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwaterbigoak");
Item.createItem("troughwaterbigoak", "Food Trough", {name: "troughwaterbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});

var troughwaterbigoakModel = ModelAPI.newArray();
troughwaterbigoakModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 5);
troughwaterbigoakModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 5);
troughwaterbigoakModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwaterbigoakModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 5);
troughwaterbigoakModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 5);
troughwaterbigoakModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 5);
troughwaterbigoakModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 5);
troughwaterbigoakModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 5);
troughwaterbigoakModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 5);
troughwaterbigoakModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwaterbigoak"},{id:"troughwaterbigoak"}, Furniture.placeRotatableBlock(BlockID.troughwaterbigoak, troughwaterbigoakModel));

Recipes.addShapeless(
	{id: ItemID.troughwateroak, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 0}, {id: 5, data: 0}, {id: 5, data: 0}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.troughwaterspruce, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 1}, {id: 5, data: 1}, {id: 5, data: 1}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.troughwaterbrich, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 2}, {id: 5, data: 2}, {id: 5, data: 2}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.troughwaterjungle, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 3}, {id: 5, data: 3}, {id: 5, data: 3}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.troughwateracacia, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 4}, {id: 5, data: 4}, {id: 5, data: 4}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.troughwaterbigoak, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 5}, {id: 5, data: 5}, {id: 5, data: 5}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Block.setShape(BlockID.troughwateroak,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughwaterspruce,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughwaterbrich,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughwaterjungle,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughwateracacia,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughwaterbigoak,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodoak,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodspruce,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodbrich,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodjungle,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodacacia,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodbigoak,0,0,0,1,1/2,1);




// file: CRADLE.js

IDRegistry.genBlockID("cradleoak");
Block.createBlock("cradleoak", [
	{name: "cradleoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradleoak");
Item.createItem("cradleoak", "Cradle", {name: "cradleoak", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradleoak, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,0, 'x', 158,0])

var cradleoakModel = ModelAPI.newArray();
cradleoakModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5);
cradleoakModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5);
cradleoakModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35);
cradleoakModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5);
cradleoakModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5);
cradleoakModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5);
cradleoakModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5);
cradleoakModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5);
cradleoakModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5);
cradleoakModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5);
cradleoakModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5);
cradleoakModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5);
cradleoakModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5);
cradleoakModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5);
cradleoakModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5);
cradleoakModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5);
cradleoakModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5);
cradleoakModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5);
cradleoakModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5);
cradleoakModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5);
cradleoakModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5);
cradleoakModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5);
cradleoakModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5);
cradleoakModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5);
cradleoakModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5);
cradleoakModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5);
cradleoakModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5);
cradleoakModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5);
cradleoakModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5);
cradleoakModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5);
cradleoakModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5);
cradleoakModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35);
cradleoakModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5);
cradleoakModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5);
cradleoakModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5);
cradleoakModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5);
cradleoakModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5);
cradleoakModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
cradleoakModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
cradleoakModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"cradleoak"},{id:"cradleoak"}, Furniture.placeRotatableBlock(BlockID.cradleoak, cradleoakModel));

IDRegistry.genBlockID("cradlespruce");
Block.createBlock("cradlespruce", [
	{name: "cradlespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlespruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradlespruce");
Item.createItem("cradlespruce", "Cradle", {name: "cradlespruce", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradlespruce, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,1, 'x', 158,1])

var cradlespruceModel = ModelAPI.newArray();
cradlespruceModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 1);
cradlespruceModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 1);
cradlespruceModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 1);
cradlespruceModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 1);
cradlespruceModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 1);
cradlespruceModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 1);
cradlespruceModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 1);
cradlespruceModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 1);
cradlespruceModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 1);
cradlespruceModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 1);
cradlespruceModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 1);
cradlespruceModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 1);
cradlespruceModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 1);
cradlespruceModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 1);
cradlespruceModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 1);
cradlespruceModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 1);
cradlespruceModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 1);
cradlespruceModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 1);
cradlespruceModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 1);
cradlespruceModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 1);
cradlespruceModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 1);
cradlespruceModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 1);
cradlespruceModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 1);
cradlespruceModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 1);
cradlespruceModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 1);
cradlespruceModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 1);
cradlespruceModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 1);
cradlespruceModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 1);
cradlespruceModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 1);
cradlespruceModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 1);
cradlespruceModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
cradlespruceModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
cradlespruceModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"cradlespruce"},{id:"cradlespruce"}, Furniture.placeRotatableBlock(BlockID.cradlespruce, cradlespruceModel));

IDRegistry.genBlockID("cradlebrich");
Block.createBlock("cradlebrich", [
	{name: "cradlebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradlebrich");
Item.createItem("cradlebrich", "Cradle", {name: "cradlebrich", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradlebrich, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,2, 'x', 158,2])

var cradlebrichModel = ModelAPI.newArray();
cradlebrichModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 2);
cradlebrichModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 2);
cradlebrichModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 2);
cradlebrichModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 2);
cradlebrichModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 2);
cradlebrichModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 2);
cradlebrichModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 2);
cradlebrichModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 2);
cradlebrichModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 2);
cradlebrichModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 2);
cradlebrichModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 2);
cradlebrichModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 2);
cradlebrichModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 2);
cradlebrichModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 2);
cradlebrichModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 2);
cradlebrichModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 2);
cradlebrichModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 2);
cradlebrichModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 2);
cradlebrichModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 2);
cradlebrichModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 2);
cradlebrichModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 2);
cradlebrichModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 2);
cradlebrichModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 2);
cradlebrichModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 2);
cradlebrichModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 2);
cradlebrichModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 2);
cradlebrichModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 2);
cradlebrichModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 2);
cradlebrichModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 2);
cradlebrichModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 2);
cradlebrichModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
cradlebrichModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
cradlebrichModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"cradlebrich"},{id:"cradlebrich"}, Furniture.placeRotatableBlock(BlockID.cradlebrich, cradlebrichModel));

IDRegistry.genBlockID("cradlejungle");
Block.createBlock("cradlejungle", [
	{name: "cradlejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlejungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradlejungle");
Item.createItem("cradlejungle", "Cradle", {name: "cradlejungle", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradlejungle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,3, 'x', 158,3])

var cradlejungleModel = ModelAPI.newArray();
cradlejungleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 3);
cradlejungleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 3);
cradlejungleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 3);
cradlejungleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 3);
cradlejungleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 3);
cradlejungleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 3);
cradlejungleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 3);
cradlejungleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 3);
cradlejungleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 3);
cradlejungleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 3);
cradlejungleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 3);
cradlejungleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 3);
cradlejungleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 3);
cradlejungleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 3);
cradlejungleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 3);
cradlejungleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 3);
cradlejungleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 3);
cradlejungleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 3);
cradlejungleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 3);
cradlejungleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 3);
cradlejungleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 3);
cradlejungleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 3);
cradlejungleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 3);
cradlejungleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 3);
cradlejungleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 3);
cradlejungleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 3);
cradlejungleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 3);
cradlejungleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 3);
cradlejungleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 3);
cradlejungleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 3);
cradlejungleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
cradlejungleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
cradlejungleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"cradlejungle"},{id:"cradlejungle"}, Furniture.placeRotatableBlock(BlockID.cradlejungle, cradlejungleModel));

IDRegistry.genBlockID("cradleacacia");
Block.createBlock("cradleacacia", [
	{name: "cradleacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradleacacia");
Item.createItem("cradleacacia", "Cradle", {name: "cradleacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradleacacia, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,4, 'x', 158,4])

var cradleacaciaModel = ModelAPI.newArray();
cradleacaciaModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 4);
cradleacaciaModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 4);
cradleacaciaModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 4);
cradleacaciaModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 4);
cradleacaciaModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 4);
cradleacaciaModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 4);
cradleacaciaModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 4);
cradleacaciaModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 4);
cradleacaciaModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 4);
cradleacaciaModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 4);
cradleacaciaModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 4);
cradleacaciaModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 4);
cradleacaciaModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 4);
cradleacaciaModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 4);
cradleacaciaModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 4);
cradleacaciaModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 4);
cradleacaciaModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 4);
cradleacaciaModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 4);
cradleacaciaModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 4);
cradleacaciaModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 4);
cradleacaciaModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 4);
cradleacaciaModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 4);
cradleacaciaModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 4);
cradleacaciaModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 4);
cradleacaciaModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 4);
cradleacaciaModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 4);
cradleacaciaModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 4);
cradleacaciaModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 4);
cradleacaciaModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 4);
cradleacaciaModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 4);
cradleacaciaModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
cradleacaciaModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 5);
cradleacaciaModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 14);
Furniture.addReplacementItem({id:"cradleacacia"},{id:"cradleacacia"}, Furniture.placeRotatableBlock(BlockID.cradleacacia, cradleacaciaModel));

IDRegistry.genBlockID("cradlebigoak");
Block.createBlock("cradlebigoak", [
	{name: "cradlebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradlebigoak");
Item.createItem("cradlebigoak", "Cradle", {name: "cradlebigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradlebigoak, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,5, 'x', 158,5])

var cradlebigoakModel = ModelAPI.newArray();
cradlebigoakModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 5);
cradlebigoakModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 5);
cradlebigoakModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 5);
cradlebigoakModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 5);
cradlebigoakModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 5);
cradlebigoakModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 5);
cradlebigoakModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 5);
cradlebigoakModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 5);
cradlebigoakModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 5);
cradlebigoakModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 5);
cradlebigoakModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 5);
cradlebigoakModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 5);
cradlebigoakModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 5);
cradlebigoakModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 5);
cradlebigoakModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 5);
cradlebigoakModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 5);
cradlebigoakModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 5);
cradlebigoakModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 5);
cradlebigoakModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 5);
cradlebigoakModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 5);
cradlebigoakModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 5);
cradlebigoakModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 5);
cradlebigoakModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 5);
cradlebigoakModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 5);
cradlebigoakModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 5);
cradlebigoakModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 5);
cradlebigoakModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 5);
cradlebigoakModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 5);
cradlebigoakModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 5);
cradlebigoakModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 5);
cradlebigoakModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 5);
cradlebigoakModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
cradlebigoakModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 5);
Furniture.addReplacementItem({id:"cradlebigoak"},{id:"cradlebigoak"}, Furniture.placeRotatableBlock(BlockID.cradlebigoak, cradlebigoakModel));

Block.setShape(BlockID.cradleoak,0,0,0,1,0.20,1);
Block.setShape(BlockID.cradlespruce,0,0,0,1,0.20,1);
Block.setShape(BlockID.cradlebrich,0,0,0,1,0.20,1);
Block.setShape(BlockID.cradlejungle,0,0,0,1,0.20,1);
Block.setShape(BlockID.cradleacacia,0,0,0,1,0.20,1);
Block.setShape(BlockID.cradlebigoak,0,0,0,1,0.20,1);




// file: DESK.js

IDRegistry.genBlockID("deskoak");
Block.createBlock("deskoak", [
	{name: "deskoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskoak");
Item.createItem("deskoak", "Desk", {name: "deskoak", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskoak, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 0, 'c', 85, 0])

var deskoakModel = ModelAPI.newArray();
deskoakModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskoakModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5);
deskoakModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskoakModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskoakModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskoakModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskoakModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskoakModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskoakModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskoakModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5);
deskoakModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskoakModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskoakModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskoakModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskoakModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskoakModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskoakModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskoakModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskoak"},{id:"deskoak"}, Furniture.placeRotatableBlock(BlockID.deskoak, deskoakModel));

IDRegistry.genBlockID("deskspruce");
Block.createBlock("deskspruce", [
	{name: "deskspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskspruce");
Item.createItem("deskspruce", "Desk", {name: "deskspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskspruce, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 1, 'c', 85, 1])

var deskspruceModel = ModelAPI.newArray();
deskspruceModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskspruceModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 1);
deskspruceModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskspruceModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskspruceModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskspruceModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskspruceModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskspruceModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskspruceModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskspruceModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 1);
deskspruceModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskspruceModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskspruceModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskspruceModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskspruceModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskspruceModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskspruceModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskspruceModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskspruce"},{id:"deskspruce"}, Furniture.placeRotatableBlock(BlockID.deskspruce, deskspruceModel));

IDRegistry.genBlockID("deskbrich");
Block.createBlock("deskbrich", [
	{name: "deskbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskbrich");
Item.createItem("deskbrich", "Desk", {name: "deskbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskbrich, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 2, 'c', 85, 2])

var deskbrichModel = ModelAPI.newArray();
deskbrichModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskbrichModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 2);
deskbrichModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskbrichModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskbrichModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskbrichModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskbrichModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskbrichModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskbrichModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskbrichModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 2);
deskbrichModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskbrichModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskbrichModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskbrichModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskbrichModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskbrichModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskbrichModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskbrichModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskbrich"},{id:"deskbrich"}, Furniture.placeRotatableBlock(BlockID.deskbrich, deskbrichModel));

IDRegistry.genBlockID("deskjungle");
Block.createBlock("deskjungle", [
	{name: "deskjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskjungle");
Item.createItem("deskjungle", "Desk", {name: "deskjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskjungle, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 0, 'c', 85, 0])

var deskjungleModel = ModelAPI.newArray();
deskjungleModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskjungleModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 3);
deskjungleModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskjungleModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskjungleModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskjungleModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskjungleModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskjungleModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskjungleModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskjungleModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 3);
deskjungleModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskjungleModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskjungleModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskjungleModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskjungleModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskjungleModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskjungleModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskjungleModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskjungle"},{id:"deskjungle"}, Furniture.placeRotatableBlock(BlockID.deskjungle, deskjungleModel));

IDRegistry.genBlockID("deskacacia");
Block.createBlock("deskacacia", [
	{name: "deskacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskacacia");
Item.createItem("deskacacia", "Desk", {name: "deskacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskacacia, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 0, 'c', 85, 0])

var deskacaciaModel = ModelAPI.newArray();
deskacaciaModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskacaciaModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 4);
deskacaciaModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskacaciaModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskacaciaModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskacaciaModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskacaciaModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskacaciaModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskacaciaModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskacaciaModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 4);
deskacaciaModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskacaciaModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskacaciaModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskacaciaModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskacaciaModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskacaciaModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskacaciaModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskacaciaModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskacacia"},{id:"deskacacia"}, Furniture.placeRotatableBlock(BlockID.deskacacia, deskacaciaModel));

IDRegistry.genBlockID("deskbigoak");
Block.createBlock("deskbigoak", [
	{name: "deskbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskbigoak");
Item.createItem("deskbigoak", "Desk", {name: "deskbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskbigoak, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 0, 'c', 85, 0])

var deskbigoakModel = ModelAPI.newArray();
deskbigoakModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskbigoakModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 5);
deskbigoakModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskbigoakModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskbigoakModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskbigoakModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskbigoakModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskbigoakModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskbigoakModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskbigoakModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 5);
deskbigoakModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskbigoakModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskbigoakModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskbigoakModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskbigoakModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskbigoakModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskbigoakModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskbigoakModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskbigoak"},{id:"deskbigoak"}, Furniture.placeRotatableBlock(BlockID.deskbigoak, deskbigoakModel));




// file: BENCH.js

IDRegistry.genBlockID("benchoak");
Block.createBlock("benchoak", [
	{name: "benchoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchoak");
Item.createItem("benchoak", "Bench", {name: "benchoak", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchoak, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,0]);

var benchoakModel = ModelAPI.newArray();
benchoakModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchoakModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchoakModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchoakModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchoakModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchoakModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchoakModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchoakModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchoakModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchoakModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchoakModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5);
benchoakModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5);
benchoakModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5);
benchoakModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5);
benchoakModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5);
benchoakModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5);
benchoakModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5);
benchoakModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5);
benchoakModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchoakModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchoakModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchoakModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchoakModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5);
benchoakModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5);
benchoakModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5);
benchoakModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5);
Furniture.addReplacementItem({id:"benchoak"},{id:"benchoak"}, Furniture.placeRotatableBlock(BlockID.benchoak, benchoakModel));

IDRegistry.genBlockID("benchspruce");
Block.createBlock("benchspruce", [
	{name: "benchspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchspruce");
Item.createItem("benchspruce", "Bench", {name: "benchspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchspruce, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,1]);

var benchspruceModel = ModelAPI.newArray();
benchspruceModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchspruceModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchspruceModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchspruceModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchspruceModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchspruceModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchspruceModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchspruceModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchspruceModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchspruceModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchspruceModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 1);
benchspruceModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 1);
benchspruceModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 1);
benchspruceModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 1);
benchspruceModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 1);
benchspruceModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 1);
benchspruceModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 1);
benchspruceModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 1);
benchspruceModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchspruceModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchspruceModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchspruceModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchspruceModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 1);
benchspruceModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 1);
benchspruceModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 1);
benchspruceModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 1);
Furniture.addReplacementItem({id:"benchspruce"},{id:"benchspruce"}, Furniture.placeRotatableBlock(BlockID.benchspruce, benchspruceModel));

IDRegistry.genBlockID("benchbrich");
Block.createBlock("benchbrich", [
	{name: "benchbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchbrich");
Item.createItem("benchbrich", "Bench", {name: "benchbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchbrich, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,2]);

var benchbrichModel = ModelAPI.newArray();
benchbrichModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchbrichModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchbrichModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchbrichModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchbrichModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchbrichModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchbrichModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchbrichModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchbrichModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchbrichModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchbrichModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 2);
benchbrichModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 2);
benchbrichModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 2);
benchbrichModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 2);
benchbrichModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 2);
benchbrichModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 2);
benchbrichModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 2);
benchbrichModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 2);
benchbrichModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchbrichModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchbrichModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchbrichModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchbrichModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 2);
benchbrichModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 2);
benchbrichModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 2);
benchbrichModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 2);
Furniture.addReplacementItem({id:"benchbrich"},{id:"benchbrich"}, Furniture.placeRotatableBlock(BlockID.benchbrich, benchbrichModel));

IDRegistry.genBlockID("benchjungle");
Block.createBlock("benchjungle", [
	{name: "benchjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchjungle");
Item.createItem("benchjungle", "Bench", {name: "benchjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchjungle, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,3]);

var benchjungleModel = ModelAPI.newArray();
benchjungleModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchjungleModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchjungleModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchjungleModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchjungleModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchjungleModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchjungleModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchjungleModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchjungleModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchjungleModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchjungleModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 3);
benchjungleModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 3);
benchjungleModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 3);
benchjungleModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 3);
benchjungleModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 3);
benchjungleModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 3);
benchjungleModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 3);
benchjungleModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 3);
benchjungleModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchjungleModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchjungleModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchjungleModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchjungleModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 3);
benchjungleModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 3);
benchjungleModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 3);
benchjungleModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 3);
Furniture.addReplacementItem({id:"benchjungle"},{id:"benchjungle"}, Furniture.placeRotatableBlock(BlockID.benchjungle, benchjungleModel));

IDRegistry.genBlockID("benchacacia");
Block.createBlock("benchacacia", [
	{name: "benchacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchacacia");
Item.createItem("benchacacia", "Bench", {name: "benchacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchacacia, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,4]);

var benchacaciaModel = ModelAPI.newArray();
benchacaciaModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchacaciaModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchacaciaModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchacaciaModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchacaciaModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchacaciaModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchacaciaModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchacaciaModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchacaciaModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchacaciaModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchacaciaModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 4);
benchacaciaModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 4);
benchacaciaModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 4);
benchacaciaModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 4);
benchacaciaModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 4);
benchacaciaModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 4);
benchacaciaModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 4);
benchacaciaModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 4);
benchacaciaModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchacaciaModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchacaciaModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchacaciaModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchacaciaModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 4);
benchacaciaModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 4);
benchacaciaModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 4);
benchacaciaModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 4);
Furniture.addReplacementItem({id:"benchacacia"},{id:"benchacacia"}, Furniture.placeRotatableBlock(BlockID.benchacacia, benchacaciaModel));

IDRegistry.genBlockID("benchbigoak");
Block.createBlock("benchbigoak", [
	{name: "benchbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchbigoak");
Item.createItem("benchbigoak", "Bench", {name: "benchbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchbigoak, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,5]);

var benchbigoakModel = ModelAPI.newArray();
benchbigoakModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchbigoakModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchbigoakModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchbigoakModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchbigoakModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchbigoakModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchbigoakModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchbigoakModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchbigoakModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchbigoakModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchbigoakModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 5);
benchbigoakModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 5);
benchbigoakModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 5);
benchbigoakModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 5);
benchbigoakModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 5);
benchbigoakModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 5);
benchbigoakModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 5);
benchbigoakModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 5);
benchbigoakModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchbigoakModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchbigoakModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchbigoakModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchbigoakModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 5);
benchbigoakModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 5);
benchbigoakModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 5);
benchbigoakModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 5);
Furniture.addReplacementItem({id:"benchbigoak"},{id:"benchbigoak"}, Furniture.placeRotatableBlock(BlockID.benchbigoak, benchbigoakModel));

Block.setShape(BlockID.benchoak,0,0,0,1,0.36,1);
Block.setShape(BlockID.benchspruce,0,0,0,1,0.36,1);
Block.setShape(BlockID.benchbrich,0,0,0,1,0.36,1);
Block.setShape(BlockID.benchjungle,0,0,0,1,0.36,1);
Block.setShape(BlockID.benchacacia,0,0,0,1,0.36,1);
Block.setShape(BlockID.benchbigoak,0,0,0,1,0.36,1);




// file: BOARD.js

IDRegistry.genBlockID("boardoak");
Block.createBlock("boardoak", [
	{name: "boardoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardoak");
Item.createItem("boardoak", "Board", {name: "boardoak", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardoak, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,0, 'x', 85,0, 's', 351,2])

var boardoakModel = ModelAPI.newArray();
boardoakModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5);
boardoakModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5);
boardoakModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5);
boardoakModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5);
boardoakModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5);
boardoakModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardoakModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5);
boardoakModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5);
boardoakModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5);
boardoakModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5);
boardoakModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5);
boardoakModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5);
boardoakModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5);
boardoakModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5);
boardoakModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5);
boardoakModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5);
boardoakModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5);
Furniture.addReplacementItem({id:"boardoak"},{id:"boardoak"}, Furniture.placeRotatableBlock(BlockID.boardoak, boardoakModel));

IDRegistry.genBlockID("boardspruce");
Block.createBlock("boardspruce", [
	{name: "boardspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardspruce");
Item.createItem("boardspruce", "Board", {name: "boardspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardspruce, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,1, 'x', 85,1, 's', 351,2])

var boardspruceModel = ModelAPI.newArray();
boardspruceModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 1);
boardspruceModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 1);
boardspruceModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 1);
boardspruceModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 1);
boardspruceModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 1);
boardspruceModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardspruceModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 1);
boardspruceModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 1);
boardspruceModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 1);
boardspruceModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 1);
boardspruceModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 1);
boardspruceModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 1);
boardspruceModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 1);
boardspruceModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 1);
boardspruceModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 1);
boardspruceModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 1);
boardspruceModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 1);
Furniture.addReplacementItem({id:"boardspruce"},{id:"boardspruce"}, Furniture.placeRotatableBlock(BlockID.boardspruce, boardspruceModel));

IDRegistry.genBlockID("boardbrich");
Block.createBlock("boardbrich", [
	{name: "boardbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardbrich");
Item.createItem("boardbrich", "Board", {name: "boardbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardbrich, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,2, 'x', 85,2, 's', 351,2])

var boardbrichModel = ModelAPI.newArray();
boardbrichModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 2);
boardbrichModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 2);
boardbrichModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 2);
boardbrichModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 2);
boardbrichModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 2);
boardbrichModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardbrichModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 2);
boardbrichModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 2);
boardbrichModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 2);
boardbrichModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 2);
boardbrichModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 2);
boardbrichModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 2);
boardbrichModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 2);
boardbrichModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 2);
boardbrichModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 2);
boardbrichModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 2);
boardbrichModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 2);
Furniture.addReplacementItem({id:"boardbrich"},{id:"boardbrich"}, Furniture.placeRotatableBlock(BlockID.boardbrich, boardbrichModel));

IDRegistry.genBlockID("boardjungle");
Block.createBlock("boardjungle", [
	{name: "boardjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardjungle");
Item.createItem("boardjungle", "Board", {name: "boardjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardjungle, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,3, 'x', 85,3, 's', 351,2])

var boardjungleModel = ModelAPI.newArray();
boardjungleModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 3);
boardjungleModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 3);
boardjungleModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 3);
boardjungleModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 3);
boardjungleModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 3);
boardjungleModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardjungleModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 3);
boardjungleModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 3);
boardjungleModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 3);
boardjungleModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 3);
boardjungleModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 3);
boardjungleModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 3);
boardjungleModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 3);
boardjungleModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 3);
boardjungleModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 3);
boardjungleModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 3);
boardjungleModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 3);
Furniture.addReplacementItem({id:"boardjungle"},{id:"boardjungle"}, Furniture.placeRotatableBlock(BlockID.boardjungle, boardjungleModel));

IDRegistry.genBlockID("boardacacia");
Block.createBlock("boardacacia", [
	{name: "boardacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardacacia");
Item.createItem("boardacacia", "Board", {name: "boardacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardacacia, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,4, 'x', 85,4, 's', 351,2])

var boardacaciaModel = ModelAPI.newArray();
boardacaciaModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 4);
boardacaciaModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 4);
boardacaciaModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 4);
boardacaciaModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 4);
boardacaciaModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 4);
boardacaciaModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardacaciaModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 4);
boardacaciaModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 4);
boardacaciaModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 4);
boardacaciaModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 4);
boardacaciaModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 4);
boardacaciaModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 4);
boardacaciaModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 4);
boardacaciaModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 4);
boardacaciaModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 4);
boardacaciaModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 4);
boardacaciaModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 4);
Furniture.addReplacementItem({id:"boardacacia"},{id:"boardacacia"}, Furniture.placeRotatableBlock(BlockID.boardacacia, boardacaciaModel));

IDRegistry.genBlockID("boardbigoak");
Block.createBlock("boardbigoak", [
	{name: "boardbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardbigoak");
Item.createItem("boardbigoak", "Board", {name: "boardbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardbigoak, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,5, 'x', 85,5, 's', 351,2])

var boardbigoakModel = ModelAPI.newArray();
boardbigoakModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 5);
boardbigoakModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 5);
boardbigoakModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 5);
boardbigoakModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 5);
boardbigoakModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 5);
boardbigoakModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardbigoakModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 5);
boardbigoakModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 5);
boardbigoakModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 5);
boardbigoakModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 5);
boardbigoakModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 5);
boardbigoakModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 5);
boardbigoakModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 5);
boardbigoakModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 5);
boardbigoakModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 5);
boardbigoakModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 5);
boardbigoakModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 5);
Furniture.addReplacementItem({id:"boardbigoak"},{id:"boardbigoak"}, Furniture.placeRotatableBlock(BlockID.boardbigoak, boardbigoakModel));

Block.setShape(BlockID.boardoak,0,0,1,1,1,1);
Block.setShape(BlockID.boardspruce,0,0,1,1,1,1);
Block.setShape(BlockID.boardbrich,0,0,1,1,1,1);
Block.setShape(BlockID.boardjungle,0,0,1,1,1,1);
Block.setShape(BlockID.boardacacia,0,0,1,1,1,1);
Block.setShape(BlockID.boardbigoak,0,0,1,1,1,1);




// file: BOOKSHELF.js

IDRegistry.genBlockID("bookshelfoak");
Block.createBlock("bookshelfoak", [
	{name: "bookshelfoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfoak");
Item.createItem("bookshelfoak", "Bookshelf", {name: "bookshelfoak", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfoak, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,0, 'x', 340,0, 's', 81,0])

var bookshelfoakModel = ModelAPI.newArray();
bookshelfoakModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5);
bookshelfoakModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5);
bookshelfoakModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5);
bookshelfoakModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5);
bookshelfoakModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfoakModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfoakModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfoakModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfoakModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfoakModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5);
bookshelfoakModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5);
bookshelfoakModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5);
bookshelfoakModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5);
bookshelfoakModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5);
bookshelfoakModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5);
bookshelfoakModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5);
bookshelfoakModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5);
bookshelfoakModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5);
bookshelfoakModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5);
bookshelfoakModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5);
bookshelfoakModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5);
bookshelfoakModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5);
bookshelfoakModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5);
bookshelfoakModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfoakModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfoakModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfoakModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfoak"},{id:"bookshelfoak"}, Furniture.placeRotatableBlock(BlockID.bookshelfoak, bookshelfoakModel));

IDRegistry.genBlockID("bookshelfspruce");
Block.createBlock("bookshelfspruce", [
	{name: "bookshelfspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfspruce");
Item.createItem("bookshelfspruce", "Bookshelf", {name: "bookshelfspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfspruce, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,1, 'x', 340,0, 's', 81,0])

var bookshelfspruceModel = ModelAPI.newArray();
bookshelfspruceModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 1);
bookshelfspruceModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfspruceModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfspruceModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfspruceModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfspruceModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfspruceModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 1);
bookshelfspruceModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 1);
bookshelfspruceModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 1);
bookshelfspruceModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 1);
bookshelfspruceModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 1);
bookshelfspruceModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfspruceModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfspruceModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfspruceModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfspruce"},{id:"bookshelfspruce"}, Furniture.placeRotatableBlock(BlockID.bookshelfspruce, bookshelfspruceModel));

IDRegistry.genBlockID("bookshelfbrich");
Block.createBlock("bookshelfbrich", [
	{name: "bookshelfbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfbrich");
Item.createItem("bookshelfbrich", "Bookshelf", {name: "bookshelfbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfbrich, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,2, 'x', 340,0, 's', 81,0])

var bookshelfbrichModel = ModelAPI.newArray();
bookshelfbrichModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 2);
bookshelfbrichModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfbrichModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfbrichModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfbrichModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfbrichModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfbrichModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 2);
bookshelfbrichModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 2);
bookshelfbrichModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 2);
bookshelfbrichModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 2);
bookshelfbrichModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 2);
bookshelfbrichModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfbrichModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfbrichModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfbrichModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfbrich"},{id:"bookshelfbrich"}, Furniture.placeRotatableBlock(BlockID.bookshelfbrich, bookshelfbrichModel));

IDRegistry.genBlockID("bookshelfjungle");
Block.createBlock("bookshelfjungle", [
	{name: "bookshelfjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfjungle");
Item.createItem("bookshelfjungle", "Bookshelf", {name: "bookshelfjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfjungle, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,3, 'x', 340,0, 's', 81,0])

var bookshelfjungleModel = ModelAPI.newArray();
bookshelfjungleModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 3);
bookshelfjungleModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfjungleModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfjungleModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfjungleModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfjungleModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfjungleModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 3);
bookshelfjungleModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 3);
bookshelfjungleModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 3);
bookshelfjungleModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 3);
bookshelfjungleModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 3);
bookshelfjungleModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfjungleModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfjungleModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfjungleModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfjungle"},{id:"bookshelfjungle"}, Furniture.placeRotatableBlock(BlockID.bookshelfjungle, bookshelfjungleModel));

IDRegistry.genBlockID("bookshelfacacia");
Block.createBlock("bookshelfacacia", [
	{name: "bookshelfacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfacacia");
Item.createItem("bookshelfacacia", "Bookshelf", {name: "bookshelfacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfacacia, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,4, 'x', 340,0, 's', 81,0])

var bookshelfacaciaModel = ModelAPI.newArray();
bookshelfacaciaModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 4);
bookshelfacaciaModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfacaciaModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfacaciaModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfacaciaModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfacaciaModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfacaciaModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 4);
bookshelfacaciaModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 4);
bookshelfacaciaModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 4);
bookshelfacaciaModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 4);
bookshelfacaciaModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 4);
bookshelfacaciaModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfacaciaModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfacaciaModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfacaciaModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfacacia"},{id:"bookshelfacacia"}, Furniture.placeRotatableBlock(BlockID.bookshelfacacia, bookshelfacaciaModel));

IDRegistry.genBlockID("bookshelfbigoak");
Block.createBlock("bookshelfbigoak", [
	{name: "bookshelfbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfbigoak");
Item.createItem("bookshelfbigoak", "Bookshelf", {name: "bookshelfbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfbigoak, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,5, 'x', 340,0, 's', 81,0])

var bookshelfbigoakModel = ModelAPI.newArray();
bookshelfbigoakModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 5);
bookshelfbigoakModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfbigoakModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfbigoakModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfbigoakModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfbigoakModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfbigoakModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 5);
bookshelfbigoakModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 5);
bookshelfbigoakModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 5);
bookshelfbigoakModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 5);
bookshelfbigoakModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 5);
bookshelfbigoakModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfbigoakModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfbigoakModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfbigoakModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfbigoak"},{id:"bookshelfbigoak"}, Furniture.placeRotatableBlock(BlockID.bookshelfbigoak, bookshelfbigoakModel));

Block.setShape(BlockID.bookshelfoak,0,0,0,1,3,1);
Block.setShape(BlockID.bookshelfspruce,0,0,0,1,3,1);
Block.setShape(BlockID.bookshelfbrich,0,0,0,1,3,1);
Block.setShape(BlockID.bookshelfjungle,0,0,0,1,3,1);
Block.setShape(BlockID.bookshelfacacia,0,0,0,1,3,1);
Block.setShape(BlockID.bookshelfbigoak,0,0,0,1,3,1);




// file: CUISINE.js

IDRegistry.genBlockID("cuisineoak");
Block.createBlock("cuisineoak", [
	{name: "cuisineoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisineoak");
Item.createItem("cuisineoak", "Cuisine", {name: "cuisineoak", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisineoak, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,0, 'x', 158,0])

var cuisineoakModel = ModelAPI.newArray();
cuisineoakModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5);
cuisineoakModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5);
cuisineoakModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisineoakModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisineoakModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5);
cuisineoakModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5);
cuisineoakModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5);
cuisineoakModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisineoakModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisineoakModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisineoakModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisineoakModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisineoakModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisineoakModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5);
cuisineoakModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5);
cuisineoakModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5);
Furniture.addReplacementItem({id:"cuisineoak"},{id:"cuisineoak"}, Furniture.placeRotatableBlock(BlockID.cuisineoak, cuisineoakModel));

IDRegistry.genBlockID("cuisinespruce");
Block.createBlock("cuisinespruce", [
	{name: "cuisinespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinespruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisinespruce");
Item.createItem("cuisinespruce", "Cuisine", {name: "cuisinespruce", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisinespruce, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,1, 'x', 158,1])

var cuisinespruceModel = ModelAPI.newArray();
cuisinespruceModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 1);
cuisinespruceModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 1);
cuisinespruceModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisinespruceModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisinespruceModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 1);
cuisinespruceModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 1);
cuisinespruceModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 1);
cuisinespruceModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisinespruceModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisinespruceModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisinespruceModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisinespruceModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisinespruceModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisinespruceModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 1);
cuisinespruceModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 1);
cuisinespruceModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 1);
Furniture.addReplacementItem({id:"cuisinespruce"},{id:"cuisinespruce"}, Furniture.placeRotatableBlock(BlockID.cuisinespruce, cuisinespruceModel));

IDRegistry.genBlockID("cuisinebrich");
Block.createBlock("cuisinebrich", [
	{name: "cuisinebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisinebrich");
Item.createItem("cuisinebrich", "Cuisine", {name: "cuisinebrich", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisinebrich, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,2, 'x', 158,2])

var cuisinebrichModel = ModelAPI.newArray();
cuisinebrichModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 2);
cuisinebrichModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 2);
cuisinebrichModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisinebrichModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisinebrichModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 2);
cuisinebrichModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 2);
cuisinebrichModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 2);
cuisinebrichModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisinebrichModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisinebrichModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisinebrichModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisinebrichModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisinebrichModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisinebrichModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 2);
cuisinebrichModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 2);
cuisinebrichModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 2);
Furniture.addReplacementItem({id:"cuisinebrich"},{id:"cuisinebrich"}, Furniture.placeRotatableBlock(BlockID.cuisinebrich, cuisinebrichModel));

IDRegistry.genBlockID("cuisinejungle");
Block.createBlock("cuisinejungle", [
	{name: "cuisinejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinejungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisinejungle");
Item.createItem("cuisinejungle", "Cuisine", {name: "cuisinejungle", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisinejungle, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,3, 'x', 158,3])

var cuisinejungleModel = ModelAPI.newArray();
cuisinejungleModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 3);
cuisinejungleModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 3);
cuisinejungleModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisinejungleModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisinejungleModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 3);
cuisinejungleModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 3);
cuisinejungleModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 3);
cuisinejungleModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisinejungleModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisinejungleModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisinejungleModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisinejungleModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisinejungleModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisinejungleModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 3);
cuisinejungleModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 3);
cuisinejungleModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 3);
Furniture.addReplacementItem({id:"cuisinejungle"},{id:"cuisinejungle"}, Furniture.placeRotatableBlock(BlockID.cuisinejungle, cuisinejungleModel));

IDRegistry.genBlockID("cuisineacacia");
Block.createBlock("cuisineacacia", [
	{name: "cuisineacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisineacacia");
Item.createItem("cuisineacacia", "Cuisine", {name: "cuisineacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisineacacia, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,4, 'x', 158,4])

var cuisineacaciaModel = ModelAPI.newArray();
cuisineacaciaModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 4);
cuisineacaciaModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 4);
cuisineacaciaModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisineacaciaModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisineacaciaModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 4);
cuisineacaciaModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 4);
cuisineacaciaModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 4);
cuisineacaciaModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisineacaciaModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisineacaciaModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisineacaciaModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisineacaciaModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisineacaciaModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisineacaciaModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 4);
cuisineacaciaModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 4);
cuisineacaciaModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 4);
Furniture.addReplacementItem({id:"cuisineacacia"},{id:"cuisineacacia"}, Furniture.placeRotatableBlock(BlockID.cuisineacacia, cuisineacaciaModel));

IDRegistry.genBlockID("cuisinebigoak");
Block.createBlock("cuisinebigoak", [
	{name: "cuisinebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisinebigoak");
Item.createItem("cuisinebigoak", "Cuisine", {name: "cuisinebigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisinebigoak, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,5, 'x', 158,5])

var cuisinebigoakModel = ModelAPI.newArray();
cuisinebigoakModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 5);
cuisinebigoakModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 5);
cuisinebigoakModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisinebigoakModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisinebigoakModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 5);
cuisinebigoakModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 5);
cuisinebigoakModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 5);
cuisinebigoakModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisinebigoakModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisinebigoakModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisinebigoakModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisinebigoakModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisinebigoakModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisinebigoakModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 5);
cuisinebigoakModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 5);
cuisinebigoakModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 5);
Furniture.addReplacementItem({id:"cuisinebigoak"},{id:"cuisinebigoak"}, Furniture.placeRotatableBlock(BlockID.cuisinebigoak, cuisinebigoakModel));




// file: new_bedside_table.js

IDRegistry.genBlockID("nightstandoak");
Block.createBlockWithRotation("nightstandoak", [
	{name: "nightstandoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandoak");
Item.createItem("nightstandoak", "Oak Bedside Table", {name: "nightstandoak", meta: 0}, {stack: 64});

var nightstandoakModel = ModelAPI.newArray();
nightstandoakModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5);
nightstandoakModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandoakModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandoakModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5);
nightstandoakModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandoakModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandoakModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5);
nightstandoakModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5);
nightstandoakModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5);
nightstandoakModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5);
nightstandoakModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5);
nightstandoakModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandoakModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandoakModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandoakModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandoakModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandoak"},{id:"nightstandoak"}, Furniture.placeRotatableBlock(BlockID.nightstandoak, nightstandoakModel));

IDRegistry.genBlockID("nightstandspruce");
Block.createBlock("nightstandspruce", [
	{name: "nightstandspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandspruce");
Item.createItem("nightstandspruce", "Spruce Bedside Table", {name: "nightstandspruce", meta: 0}, {stack: 64});

var nightstandspruceModel = ModelAPI.newArray();
nightstandspruceModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 1);
nightstandspruceModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandspruceModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandspruceModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 1);
nightstandspruceModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandspruceModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandspruceModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 1);
nightstandspruceModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 1);
nightstandspruceModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 1);
nightstandspruceModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 1);
nightstandspruceModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 1);
nightstandspruceModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandspruceModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandspruceModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandspruceModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandspruceModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandspruce"},{id:"nightstandspruce"}, Furniture.placeRotatableBlock(BlockID.nightstandspruce, nightstandspruceModel));

IDRegistry.genBlockID("nightstandbrich");
Block.createBlock("nightstandbrich", [
	{name: "nightstandbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandbrich");
Item.createItem("nightstandbrich", "Birch Bedside Table", {name: "nightstandbrich", meta: 0}, {stack: 64});

var nightstandbrichModel = ModelAPI.newArray();
nightstandbrichModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 2);
nightstandbrichModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandbrichModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandbrichModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 2);
nightstandbrichModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandbrichModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandbrichModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 2);
nightstandbrichModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 2);
nightstandbrichModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 2);
nightstandbrichModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 2);
nightstandbrichModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 2);
nightstandbrichModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandbrichModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandbrichModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandbrichModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandbrichModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandbrich"},{id:"nightstandbrich"}, Furniture.placeRotatableBlock(BlockID.nightstandbrich, nightstandbrichModel));

IDRegistry.genBlockID("nightstandjungle");
Block.createBlock("nightstandjungle", [
	{name: "nightstandjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandjungle");
Item.createItem("nightstandjungle", "Jungle Bedside Table", {name: "nightstandjungle", meta: 0}, {stack: 64});

var nightstandjungleModel = ModelAPI.newArray();
nightstandjungleModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 3);
nightstandjungleModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandjungleModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandjungleModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 3);
nightstandjungleModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandjungleModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandjungleModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 3);
nightstandjungleModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 3);
nightstandjungleModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 3);
nightstandjungleModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 3);
nightstandjungleModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 3);
nightstandjungleModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandjungleModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandjungleModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandjungleModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandjungleModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandjungle"},{id:"nightstandjungle"}, Furniture.placeRotatableBlock(BlockID.nightstandjungle, nightstandjungleModel));

IDRegistry.genBlockID("nightstandacacia");
Block.createBlock("nightstandacacia", [
	{name: "nightstandacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandacacia");
Item.createItem("nightstandacacia", "Acacia Bedside Table", {name: "nightstandacacia", meta: 0}, {stack: 64});

var nightstandacaciaModel = ModelAPI.newArray();
nightstandacaciaModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 4);
nightstandacaciaModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandacaciaModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandacaciaModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 4);
nightstandacaciaModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandacaciaModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandacaciaModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 4);
nightstandacaciaModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 4);
nightstandacaciaModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 4);
nightstandacaciaModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 4);
nightstandacaciaModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 4);
nightstandacaciaModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandacaciaModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandacaciaModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandacaciaModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandacaciaModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandacacia"},{id:"nightstandacacia"}, Furniture.placeRotatableBlock(BlockID.nightstandacacia, nightstandacaciaModel));

IDRegistry.genBlockID("nightstandbigoak");
Block.createBlock("nightstandbigoak", [
	{name: "nightstandbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandbigoak");
Item.createItem("nightstandbigoak", "Dark oak Bedside Table", {name: "nightstandbigoak", meta: 0}, {stack: 64});

var nightstandbigoakModel = ModelAPI.newArray();
nightstandbigoakModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 5);
nightstandbigoakModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandbigoakModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandbigoakModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 5);
nightstandbigoakModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandbigoakModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandbigoakModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 5);
nightstandbigoakModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 5);
nightstandbigoakModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 5);
nightstandbigoakModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 5);
nightstandbigoakModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 5);
nightstandbigoakModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandbigoakModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandbigoakModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandbigoakModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandbigoakModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandbigoak"},{id:"nightstandbigoak"}, Furniture.placeRotatableBlock(BlockID.nightstandbigoak, nightstandbigoakModel));

//translation night stands
Translation.addTranslation("Oak Bedside Table", {ru: "Дубовая Прикроватная тумбочка"});
Translation.addTranslation("Spruce Bedside Table", {ru: "Еловая Прикроватная тумбочка"});
Translation.addTranslation("Birch Bedside Table", {ru: "Берёзовая Прикроватная тумбочка "});
Translation.addTranslation("Jungle Bedside Table", {ru: "Джунглевая Прикроватная тумбочка"});
Translation.addTranslation("Acacia Bedside Table", {ru: "Акациевая Прикроватная тумбочка"});
Translation.addTranslation("Dark oak Bedside Table", {ru: "Тёмно дубовая Прикроватная тумбочка"});

//recipes night stands
Recipes.addShaped({id: ItemID.nightstandoak, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,0, 'x', 85,0, 'c', 54,0])
Recipes.addShaped({id: ItemID.nightstandspruce, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,1, 'x', 85,1, 'c', 54,0])
Recipes.addShaped({id: ItemID.nightstandbrich, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,2, 'x', 85,2, 'c', 54,0])
Recipes.addShaped({id: ItemID.nightstandjungle, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,3, 'x', 85,3, 'c', 54,0])
Recipes.addShaped({id: ItemID.nightstandacacia, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,4, 'x', 85,4, 'c', 54,0])
Recipes.addShaped({id: ItemID.nightstandbigoak, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,5, 'x', 85,5, 'c', 54,0])




// file: WORKTOP.js

IDRegistry.genBlockID("worktopoak");
Block.createBlock("worktopoak", [
	{name: "worktopoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopoak");
Item.createItem("worktopoak", "Worktop", {name: "worktopoak", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopoak, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,0, 'z', 158,0])

var worktopoakModel = ModelAPI.newArray();
worktopoakModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5);
worktopoakModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopoakModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopoakModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopoakModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5);
worktopoakModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5);
worktopoakModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopoakModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopoakModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopoakModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5);
worktopoakModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5);
worktopoakModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5);
worktopoakModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5);
worktopoakModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5);
worktopoakModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5);
worktopoakModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5);
worktopoakModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopoakModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopoakModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopoakModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopoakModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopoak"},{id:"worktopoak"}, Furniture.placeRotatableBlock(BlockID.worktopoak, worktopoakModel));

IDRegistry.genBlockID("worktopspruce");
Block.createBlock("worktopspruce", [
	{name: "worktopspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopspruce");
Item.createItem("worktopspruce", "Worktop", {name: "worktopspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopspruce, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,1, 'z', 158,1])

var worktopspruceModel = ModelAPI.newArray();
worktopspruceModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 1);
worktopspruceModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopspruceModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopspruceModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopspruceModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 1);
worktopspruceModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 1);
worktopspruceModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopspruceModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopspruceModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopspruceModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 1);
worktopspruceModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 1);
worktopspruceModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 1);
worktopspruceModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 1);
worktopspruceModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 1);
worktopspruceModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 1);
worktopspruceModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 1);
worktopspruceModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopspruceModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopspruceModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopspruceModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopspruceModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopspruce"},{id:"worktopspruce"}, Furniture.placeRotatableBlock(BlockID.worktopspruce, worktopspruceModel));

IDRegistry.genBlockID("worktopbrich");
Block.createBlock("worktopbrich", [
	{name: "worktopbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopbrich");
Item.createItem("worktopbrich", "Worktop", {name: "worktopbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopbrich, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,2, 'z', 158,2])

var worktopbrichModel = ModelAPI.newArray();
worktopbrichModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 2);
worktopbrichModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopbrichModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopbrichModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopbrichModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 2);
worktopbrichModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 2);
worktopbrichModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopbrichModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopbrichModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopbrichModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 2);
worktopbrichModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 2);
worktopbrichModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 2);
worktopbrichModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 2);
worktopbrichModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 2);
worktopbrichModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 2);
worktopbrichModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 2);
worktopbrichModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopbrichModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopbrichModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopbrichModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopbrichModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopbrich"},{id:"worktopbrich"}, Furniture.placeRotatableBlock(BlockID.worktopbrich, worktopbrichModel));

IDRegistry.genBlockID("worktopjungle");
Block.createBlock("worktopjungle", [
	{name: "worktopjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopjungle");
Item.createItem("worktopjungle", "Worktop", {name: "worktopjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopjungle, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,3, 'z', 158,3])

var worktopjungleModel = ModelAPI.newArray();
worktopjungleModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 3);
worktopjungleModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopjungleModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopjungleModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopjungleModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 3);
worktopjungleModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 3);
worktopjungleModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopjungleModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopjungleModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopjungleModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 3);
worktopjungleModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 3);
worktopjungleModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 3);
worktopjungleModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 3);
worktopjungleModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 3);
worktopjungleModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 3);
worktopjungleModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 3);
worktopjungleModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopjungleModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopjungleModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopjungleModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopjungleModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopjungle"},{id:"worktopjungle"}, Furniture.placeRotatableBlock(BlockID.worktopjungle, worktopjungleModel));

IDRegistry.genBlockID("worktopacacia");
Block.createBlock("worktopacacia", [
	{name: "worktopacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopacacia");
Item.createItem("worktopacacia", "Worktop", {name: "worktopacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopacacia, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,4, 'z', 158,4])

var worktopacaciaModel = ModelAPI.newArray();
worktopacaciaModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 4);
worktopacaciaModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopacaciaModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopacaciaModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopacaciaModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 4);
worktopacaciaModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 4);
worktopacaciaModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopacaciaModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopacaciaModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopacaciaModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 4);
worktopacaciaModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 4);
worktopacaciaModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 4);
worktopacaciaModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 4);
worktopacaciaModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 4);
worktopacaciaModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 4);
worktopacaciaModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 4);
worktopacaciaModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopacaciaModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopacaciaModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopacaciaModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopacaciaModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopacacia"},{id:"worktopacacia"}, Furniture.placeRotatableBlock(BlockID.worktopacacia, worktopacaciaModel));

IDRegistry.genBlockID("worktopbigoak");
Block.createBlock("worktopbigoak", [
	{name: "worktopbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopbigoak");
Item.createItem("worktopbigoak", "Worktop", {name: "worktopbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopbigoak, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,5, 'z', 158,5])

var worktopbigoakModel = ModelAPI.newArray();
worktopbigoakModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 5);
worktopbigoakModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopbigoakModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopbigoakModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopbigoakModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 5);
worktopbigoakModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 5);
worktopbigoakModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopbigoakModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopbigoakModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopbigoakModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 5);
worktopbigoakModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 5);
worktopbigoakModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 5);
worktopbigoakModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 5);
worktopbigoakModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 5);
worktopbigoakModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 5);
worktopbigoakModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 5);
worktopbigoakModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopbigoakModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopbigoakModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopbigoakModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopbigoakModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopbigoak"},{id:"worktopbigoak"}, Furniture.placeRotatableBlock(BlockID.worktopbigoak, worktopbigoakModel));




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
TileEntity.registerPrototype(BlockID.barreloak,{getGuiScreen:function(){return barreloakUI}});

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
TileEntity.registerPrototype(BlockID.barrelspruce,{getGuiScreen:function(){return barrelspruceUI}});

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
TileEntity.registerPrototype(BlockID.barrelbrich,{getGuiScreen:function(){return barrelbrichUI}});

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
TileEntity.registerPrototype(BlockID.barreljungle,{getGuiScreen:function(){return barreljungleUI}});

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
TileEntity.registerPrototype(BlockID.barrelacacia,{getGuiScreen:function(){return barrelacaciaUI}});

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
TileEntity.registerPrototype(BlockID.barrelbigoak,{getGuiScreen:function(){return barrelbigoakUI}});




// file: CHESTUI.js

var chestoakUI=new UI.StandartWindow({standart:{header:{text:{text:"BIG CHEST"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
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
TileEntity.registerPrototype(BlockID.chestoak,{getGuiScreen:function(){return chestoakUI}});

var chestspruceUI=new UI.StandartWindow({standart:{header:{text:{text:"BIG CHEST"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
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
TileEntity.registerPrototype(BlockID.chestspruce,{getGuiScreen:function(){return chestspruceUI}});

var chestbrichUI=new UI.StandartWindow({standart:{header:{text:{text:"BIG CHEST"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
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
TileEntity.registerPrototype(BlockID.chestbrich,{getGuiScreen:function(){return chestbrichUI}});

var chestjungleUI=new UI.StandartWindow({standart:{header:{text:{text:"BIG CHEST"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
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
TileEntity.registerPrototype(BlockID.chestjungle,{getGuiScreen:function(){return chestjungleUI}});

var chestacaciaUI=new UI.StandartWindow({standart:{header:{text:{text:"BIG CHEST"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
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
TileEntity.registerPrototype(BlockID.chestacacia,{getGuiScreen:function(){return chestacaciaUI}});

var chestbigoakUI=new UI.StandartWindow({standart:{header:{text:{text:"BIG CHEST"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},
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
TileEntity.registerPrototype(BlockID.chestbigoak,{getGuiScreen:function(){return chestbigoakUI}});




// file: new_bedside_table_gui.js

var nightstandoakUI=new UI.StandartWindow({standart:{header:{text:{text:"NIGHTSTAND"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot13:{type:"slot",x:600,y:40,size:100},
slot14:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.nightstandoak,{getGuiScreen:function(){return nightstandoakUI}});

var nightstandspruceUI=new UI.StandartWindow({standart:{header:{text:{text:"NIGHTSTAND"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot13:{type:"slot",x:600,y:40,size:100},
slot14:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.nightstandspruce,{getGuiScreen:function(){return nightstandspruceUI}});

var nightstandbrichUI=new UI.StandartWindow({standart:{header:{text:{text:"NIGHTSTAND"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot13:{type:"slot",x:600,y:40,size:100},
slot14:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.nightstandbrich,{getGuiScreen:function(){return nightstandbrichUI}});

var nightstandjungleUI=new UI.StandartWindow({standart:{header:{text:{text:"NIGHTSTAND"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot13:{type:"slot",x:600,y:40,size:100},
slot14:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.nightstandjungle,{getGuiScreen:function(){return nightstandjungleUI}});

var nightstandacaciaUI=new UI.StandartWindow({standart:{header:{text:{text:"NIGHTSTAND"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot13:{type:"slot",x:600,y:40,size:100},
slot14:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.nightstandacacia,{getGuiScreen:function(){return nightstandacaciaUI}});

var nightstandbigoakUI=new UI.StandartWindow({standart:{header:{text:{text:"NIGHTSTAND"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot13:{type:"slot",x:600,y:40,size:100},
slot14:{type:"slot",x:700,y:40,size:100}}});
TileEntity.registerPrototype(BlockID.nightstandbigoak,{getGuiScreen:function(){return nightstandbigoakUI}});




// file: WORKTOPUI.js

var worktopoakUI=new UI.StandartWindow({standart:{header:{text:{text:"WORKTOP"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.worktopoak,{getGuiScreen:function(){return worktopoakUI}});

var worktopspruceUI=new UI.StandartWindow({standart:{header:{text:{text:"WORKTOP"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.worktopspruce,{getGuiScreen:function(){return worktopspruceUI}});

var worktopbrichUI=new UI.StandartWindow({standart:{header:{text:{text:"WORKTOP"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.worktopbrich,{getGuiScreen:function(){return worktopbrichUI}});

var worktopjungleUI=new UI.StandartWindow({standart:{header:{text:{text:"WORKTOP"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.worktopjungle,{getGuiScreen:function(){return worktopjungleUI}});

var worktopacaciaUI=new UI.StandartWindow({standart:{header:{text:{text:"WORKTOP"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.worktopacacia,{getGuiScreen:function(){return worktopacaciaUI}});

var worktopbigoakUI=new UI.StandartWindow({standart:{header:{text:{text:"WORKTOP"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot1:{type:"slot",x:500,y:40,size:100},
slot2:{type:"slot",x:600,y:40,size:100},
slot3:{type:"slot",x:700,y:40,size:100},
slot4:{type:"slot",x:500,y:140,size:100},
slot5:{type:"slot",x:600,y:140,size:100},
slot6:{type:"slot",x:700,y:140,size:100}}});
TileEntity.registerPrototype(BlockID.worktopbigoak,{getGuiScreen:function(){return worktopbigoakUI}});




// file: new_carpets.js

//Material carpets
ToolAPI.registerBlockMaterial(BlockID.chesslightgrey, "stone");
ToolAPI.registerBlockMaterial(BlockID.chessgrey, "stone");
ToolAPI.registerBlockMaterial(BlockID.chessblack, "stone");
ToolAPI.registerBlockMaterial(BlockID.chessbrown, "stone");
ToolAPI.registerBlockMaterial(BlockID.chessred, "stone");
ToolAPI.registerBlockMaterial(BlockID.chessorange, "stone");
ToolAPI.registerBlockMaterial(BlockID.chessyellow, "stone");
ToolAPI.registerBlockMaterial(BlockID.chesslime, "stone");
ToolAPI.registerBlockMaterial(BlockID.chessgreen, "stone");
ToolAPI.registerBlockMaterial(BlockID.chesscyan, "stone");
ToolAPI.registerBlockMaterial(BlockID.chesslightblue, "stone");
ToolAPI.registerBlockMaterial(BlockID.chessblue, "stone");
ToolAPI.registerBlockMaterial(BlockID.chesspurple, "stone");
ToolAPI.registerBlockMaterial(BlockID.chessmagenta, "stone");
ToolAPI.registerBlockMaterial(BlockID.chesspink, "stone");
ToolAPI.registerBlockMaterial(BlockID.greylightgrey, "stone");
ToolAPI.registerBlockMaterial(BlockID.brownlightgrey, "stone");
ToolAPI.registerBlockMaterial(BlockID.redorange, "stone");
ToolAPI.registerBlockMaterial(BlockID.orangeyellow, "stone");
ToolAPI.registerBlockMaterial(BlockID.limeyellow, "stone");
ToolAPI.registerBlockMaterial(BlockID.greenlime, "stone");
ToolAPI.registerBlockMaterial(BlockID.bluelightblue, "stone");
ToolAPI.registerBlockMaterial(BlockID.purplelightgrey, "stone");
ToolAPI.registerBlockMaterial(BlockID.magentalightgrey, "stone");
ToolAPI.registerBlockMaterial(BlockID.magentapink, "stone");
ToolAPI.registerBlockMaterial(BlockID.greylightgreyplus, "stone");
ToolAPI.registerBlockMaterial(BlockID.brownlightgreyplus, "stone");
ToolAPI.registerBlockMaterial(BlockID.redorangeplus, "stone");
ToolAPI.registerBlockMaterial(BlockID.orangeyellowplus, "stone");
ToolAPI.registerBlockMaterial(BlockID.limeyellowplus, "stone");
ToolAPI.registerBlockMaterial(BlockID.greenlimeplus, "stone");
ToolAPI.registerBlockMaterial(BlockID.bluelightblueplus, "stone");
ToolAPI.registerBlockMaterial(BlockID.purplelightgreyplus, "stone");
ToolAPI.registerBlockMaterial(BlockID.magentalightgreyplus, "stone");
ToolAPI.registerBlockMaterial(BlockID.magentapinkplus, "stone");
ToolAPI.registerBlockMaterial(BlockID.carpet1, "stone");
ToolAPI.registerBlockMaterial(BlockID.carpet2, "stone");
ToolAPI.registerBlockMaterial(BlockID.carpet3, "stone");
ToolAPI.registerBlockMaterial(BlockID.carpet4, "stone");
ToolAPI.registerBlockMaterial(BlockID.carpet5, "stone");
ToolAPI.registerBlockMaterial(BlockID.carpet6, "stone");
ToolAPI.registerBlockMaterial(BlockID.carpet7, "stone");
ToolAPI.registerBlockMaterial(BlockID.carpet8, "stone");
ToolAPI.registerBlockMaterial(BlockID.carpet9, "stone");
ToolAPI.registerBlockMaterial(BlockID.carpet10, "stone");

//carpets
IDRegistry.genBlockID("chesslightgrey");
Block.createBlock("chesslightgrey", [
    {name: "Chess Light Grey", texture: [["chesslightgrey", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chessgrey");
Block.createBlock("chessgrey", [
    {name: "Chess Grey", texture: [["chessgrey", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chessblack");
Block.createBlock("chessblack", [
    {name: "Chess Black", texture: [["chessblack", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chessbrown");
Block.createBlock("chessbrown", [
    {name: "Chess Brown", texture: [["chessbrown", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chessred");
Block.createBlock("chessred", [
    {name: "Chess Red", texture: [["chessred", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chessorange");
Block.createBlock("chessorange", [
    {name: "Chess Orange", texture: [["chessorange", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chessyellow");
Block.createBlock("chessyellow", [
    {name: "Chess Yellow", texture: [["chessyellow", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chesslime");
Block.createBlock("chesslime", [
    {name: "Chess Lime", texture: [["chesslime", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chessgreen");
Block.createBlock("chessgreen", [
    {name: "Chess Green", texture: [["chessgreen", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chesscyan");
Block.createBlock("chesscyan", [
    {name: "Chess Cyan", texture: [["chesscyan", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chesslightblue");
Block.createBlock("chesslightblue", [
    {name: "Chess Light Blue", texture: [["chesslightblue", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chessblue");
Block.createBlock("chessblue", [
    {name: "Chess Blue", texture: [["chessblue", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chesspurple");
Block.createBlock("chesspurple", [
    {name: "Chess Purple", texture: [["chesspurple", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chessmagenta");
Block.createBlock("chessmagenta", [
    {name: "Chess Magenta", texture: [["chessmagenta", 0]], inCreative: true}
]);
IDRegistry.genBlockID("chesspink");
Block.createBlock("chesspink", [
    {name: "Chess Pink", texture: [["chesspink", 0]], inCreative: true}
]);
IDRegistry.genBlockID("greylightgrey");
Block.createBlock("greylightgrey", [
    {name: "Chess Grey-Light Grey", texture: [["greylightgrey", 0]], inCreative: true}
]);
IDRegistry.genBlockID("brownlightgrey");
Block.createBlock("brownlightgrey", [
    {name: "Chess Brown-Light Grey", texture: [["brownlightgrey", 0]], inCreative: true}
]);
IDRegistry.genBlockID("redorange");
Block.createBlock("redorange", [
    {name: "Chess Red-Orange", texture: [["redorange", 0]], inCreative: true}
]);
IDRegistry.genBlockID("orangeyellow");
Block.createBlock("orangeyellow", [
    {name: "Chess Orange-Yellow", texture: [["orangeyellow", 0]], inCreative: true}
]);
IDRegistry.genBlockID("limeyellow");
Block.createBlock("limeyellow", [
    {name: "Chess Yellow-Lime", texture: [["limeyellow", 0]], inCreative: true}
]);
IDRegistry.genBlockID("greenlime");
Block.createBlock("greenlime", [
    {name: "Chess Green-Lime", texture: [["greenlime", 0]], inCreative: true}
]);
IDRegistry.genBlockID("bluelightblue");
Block.createBlock("bluelightblue", [
    {name: "Chess Blue-Light Blue", texture: [["bluelightblue", 0]], inCreative: true}
]);
IDRegistry.genBlockID("purplelightgrey");
Block.createBlock("purplelightgrey", [
    {name: "Chess Purple-Light Grey", texture: [["purplelightgrey", 0]], inCreative: true}
]);
IDRegistry.genBlockID("magentalightgrey");
Block.createBlock("magentalightgrey", [
    {name: "Chess Magenta-Light Grey", texture: [["magentalightgrey", 0]], inCreative: true}
]);
IDRegistry.genBlockID("magentapink");
Block.createBlock("magentapink", [
    {name: "Chess Magenta-Pink", texture: [["magentapink", 0]], inCreative: true}
]);
IDRegistry.genBlockID("greylightgreyplus");
Block.createBlock("greylightgreyplus", [
    {name: "Chess Grey-Light Grey plus", texture: [["cub1", 0]], inCreative: true}
]);
IDRegistry.genBlockID("brownlightgreyplus");
Block.createBlock("brownlightgreyplus", [
    {name: "Chess Brown-Light Grey plus", texture: [["cub2", 0]], inCreative: true}
]);
IDRegistry.genBlockID("redorangeplus");
Block.createBlock("redorangeplus", [
    {name: "Chess Red-Orange plus", texture: [["cub3", 0]], inCreative: true}
]);
IDRegistry.genBlockID("orangeyellowplus");
Block.createBlock("orangeyellowplus", [
    {name: "Chess Orange-Yellow plus", texture: [["cub4", 0]], inCreative: true}
]);
IDRegistry.genBlockID("limeyellowplus");
Block.createBlock("limeyellowplus", [
    {name: "Chess Yellow-Lime plus", texture: [["cub5", 0]], inCreative: true}
]);
IDRegistry.genBlockID("greenlimeplus");
Block.createBlock("greenlimeplus", [
    {name: "Chess Green-Lime plus", texture: [["cub6", 0]], inCreative: true}
]);
IDRegistry.genBlockID("bluelightblueplus");
Block.createBlock("bluelightblueplus", [
    {name: "Chess Blue-Light Blue plus", texture: [["cub7", 0]], inCreative: true}
]);
IDRegistry.genBlockID("purplelightgreyplus");
Block.createBlock("purplelightgreyplus", [
    {name: "Chess Purple-Light Grey plus", texture: [["cub8", 0]], inCreative: true}
]);
IDRegistry.genBlockID("magentalightgreyplus");
Block.createBlock("magentalightgreyplus", [
    {name: "Chess Magenta-Light Grey plus", texture: [["cub9", 0]], inCreative: true}
]);
IDRegistry.genBlockID("magentapinkplus");
Block.createBlock("magentapinkplus", [
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

//destroy level carpets
Block.setDestroyLevel("chesslightgrey", 2);
Block.setDestroyLevel("chessgrey", 2);
Block.setDestroyLevel("chessblack", 2);
Block.setDestroyLevel("chessbrown", 2);
Block.setDestroyLevel("chessred", 2);
Block.setDestroyLevel("chessorange", 2);
Block.setDestroyLevel("chessyellow", 2);
Block.setDestroyLevel("chesslime", 2);
Block.setDestroyLevel("chessgreen", 2);
Block.setDestroyLevel("chesscyan", 2);
Block.setDestroyLevel("chesslightblue", 2);
Block.setDestroyLevel("chessblue", 2);
Block.setDestroyLevel("chesspurple", 2);
Block.setDestroyLevel("chessmagenta", 2);
Block.setDestroyLevel("chesspink", 2);
Block.setDestroyLevel("greylightgrey", 2);
Block.setDestroyLevel("brownlightgrey", 2);
Block.setDestroyLevel("redorange", 2);
Block.setDestroyLevel("orangeyellow", 2);
Block.setDestroyLevel("limeyellow", 2);
Block.setDestroyLevel("greenlime", 2);
Block.setDestroyLevel("bluelightblue", 2);
Block.setDestroyLevel("purplelightgrey", 2);
Block.setDestroyLevel("magentalightgrey", 2);
Block.setDestroyLevel("magentapink", 2);
Block.setDestroyLevel("greylightgreyplus", 2);
Block.setDestroyLevel("brownlightgreyplus", 2);
Block.setDestroyLevel("redorangeplus", 2);
Block.setDestroyLevel("orangeyellowplus", 2);
Block.setDestroyLevel("limeyellowplus", 2);
Block.setDestroyLevel("greenlimeplus", 2);
Block.setDestroyLevel("bluelightblueplus", 2);
Block.setDestroyLevel("purplelightgreyplus", 2);
Block.setDestroyLevel("magentalightgreyplus", 2);
Block.setDestroyLevel("magentapinkplus", 2);
Block.setDestroyLevel("carpet1", 2);
Block.setDestroyLevel("carpet2", 2);
Block.setDestroyLevel("carpet3", 2);
Block.setDestroyLevel("carpet4", 2);
Block.setDestroyLevel("carpet5", 2);
Block.setDestroyLevel("carpet6", 2);
Block.setDestroyLevel("carpet7", 2);
Block.setDestroyLevel("carpet8", 2);
Block.setDestroyLevel("carpet9", 2);
Block.setDestroyLevel("carpet10", 2);

//translation carpets
Translation.addTranslation("Chess Light Grey", {ru: "Светло-серая ковер"});
Translation.addTranslation("Chess Grey", {ru: "Серая ковер"});
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
Translation.addTranslation("Chess Grey-Light Grey", {ru: "Светло-серый-Серая ковер"});
Translation.addTranslation("Chess Brown-Light Grey", {ru: "Коричневая-Серая ковер"});
Translation.addTranslation("Chess Red-Orange", {ru: "Красная-Оранжевая ковер"});
Translation.addTranslation("Chess Orange-Yellow", {ru: "Оранжевая-Желтая ковер"});
Translation.addTranslation("Chess Yellow-Lime", {ru: "Желтая-Лаймовая ковер"});
Translation.addTranslation("Chess Green-Lime", {ru: "Зеленая-Лаймовая ковер"});
Translation.addTranslation("Chess Blue-Light Blue", {ru: "Синяя-Голубая ковер"});
Translation.addTranslation("Chess Purple-Light Grey", {ru: "Фиолетвая-Светло-серая ковер"});
Translation.addTranslation("Chess Magenta-Light Grey", {ru: "Пурпурная-Светло-серая ковер"});
Translation.addTranslation("Chess Magenta-Pink", {ru: "Пурпурная-Розовая ковер"});
Translation.addTranslation("Chess Grey-Light Grey Plus", {ru: "Светло-серый-Серая ковер plus"});
Translation.addTranslation("Chess Brown-Light Grey plus", {ru: "Коричневая-Серая ковер plus"});
Translation.addTranslation("Chess Red-Orange plus", {ru: "Красная-Оранжевая ковер plus"});
Translation.addTranslation("Chess Orange-Yellow plus", {ru: "Оранжевая-Желтая ковер plus"});
Translation.addTranslation("Chess Yellow-Lime plus", {ru: "Желтая-Лаймовая ковер plus"});
Translation.addTranslation("Chess Green-Lime plus", {ru: "Зеленая-Лаймовая ковер plus"});
Translation.addTranslation("Chess Blue-Light Blue plus", {ru: "Синяя-Голубая ковер plus"});
Translation.addTranslation("Chess Purple-Light Grey plus", {ru: "Фиолетвая-Светло-серая ковер plus"});
Translation.addTranslation("Chess Magenta-Light Grey plus", {ru: "Пурпурная-Светло-серая ковер plus"});
Translation.addTranslation("Chess Magenta-Pink plus", {ru: "Пурпурная-Розовая ковер plus"});
Translation.addTranslation("Carpet", {ru: "Ковер"});

//recipes carpets
Recipes.addShaped({id: BlockID.chesslightgrey, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,8]);
Recipes.addShaped({id: BlockID.chessgrey, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,7]);
Recipes.addShaped({id: BlockID.chessblack, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,15]);
Recipes.addShaped({id: BlockID.chessbrown, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,12]);
Recipes.addShaped({id: BlockID.chessred, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,14]);
Recipes.addShaped({id: BlockID.chessorange, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,1]);
Recipes.addShaped({id: BlockID.chessyellow, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,4]);
Recipes.addShaped({id: BlockID.chesslime, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,5]);
Recipes.addShaped({id: BlockID.chessgreen, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,13]);
Recipes.addShaped({id: BlockID.chesscyan, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,9]);
Recipes.addShaped({id: BlockID.chesslightblue, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,3]);
Recipes.addShaped({id: BlockID.chessblue, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,11]);
Recipes.addShaped({id: BlockID.chesspurple, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,10]);
Recipes.addShaped({id: BlockID.chessmagenta, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,2]);
Recipes.addShaped({id: BlockID.chesspink, count: 4, data: 0}, ["xa ", "ax "], ["x",35,0, "a", 35,6]);
Recipes.addShaped({id: BlockID.greylightgrey, count: 4, data: 0}, ["xa ", "ax "], ["x",35,8, "a", 35,7]);
Recipes.addShaped({id: BlockID.brownlightgrey, count: 4, data: 0}, ["xa ", "ax "], ["x",35,12, "a", 35,7]);
Recipes.addShaped({id: BlockID.redorange, count: 4, data: 0}, ["xa ", "ax "], ["x",35,14, "a", 35,1]);
Recipes.addShaped({id: BlockID.orangeyellow, count: 4, data: 0}, ["xa ", "ax "], ["x",35,1, "a", 35,4]);
Recipes.addShaped({id: BlockID.limeyellow, count: 4, data: 0}, ["xa ", "ax "], ["x",35,4, "a", 35,5]);
Recipes.addShaped({id: BlockID.greenlime, count: 4, data: 0}, ["xa ", "ax "], ["x",35,13, "a", 35,5]);
Recipes.addShaped({id: BlockID.bluelightblue, count: 4, data: 0}, ["xa ", "ax "], ["x",35,11, "a", 35,3]);
Recipes.addShaped({id: BlockID.purplelightgrey, count: 4, data: 0}, ["xa ", "ax "], ["x",35,10, "a", 35,8]);
Recipes.addShaped({id: BlockID.magentalightgrey, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,8]);
Recipes.addShaped({id: BlockID.magentapink, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
Recipes.addShaped({id: BlockID.greylightgreyplus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,8, "a", 35,7]);
Recipes.addShaped({id: BlockID.brownlightgreyplus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,12, "a", 35,7]);
Recipes.addShaped({id: BlockID.redorangeplus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,14, "a", 35,1]);
Recipes.addShaped({id: BlockID.orangeyellowplus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,1, "a", 35,4]);
Recipes.addShaped({id: BlockID.limeyellowplus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,4, "a", 35,5]);
Recipes.addShaped({id: BlockID.greenlimeplus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,13, "a", 35,5]);
Recipes.addShaped({id: BlockID.bluelightblueplus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,11, "a", 35,3]);
Recipes.addShaped({id: BlockID.purplelightgreyplus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,10, "a", 35,8]);
Recipes.addShaped({id: BlockID.magentalightgreyplus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,8]);
Recipes.addShaped({id: BlockID.magentapinkplus, count: 4, data: 0}, ["xa ", "ax "], ["x",35,2, "a", 35,6]);
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
Block.setShape(BlockID.chesslightgrey,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chessgrey,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chessblack,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chessbrown,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chessred,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chessorange,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chessyellow,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chesslime,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chessgreen,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chesscyan,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chesslightblue,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chessblue,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chesspurple,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chessmagenta,0,0,0,1,0.0625,1);
Block.setShape(BlockID.chesspink,0,0,0,1,0.0625,1);
Block.setShape(BlockID.greylightgrey,0,0,0,1,0.0625,1);
Block.setShape(BlockID.brownlightgrey,0,0,0,1,0.0625,1);
Block.setShape(BlockID.redorange,0,0,0,1,0.0625,1);
Block.setShape(BlockID.orangeyellow,0,0,0,1,0.0625,1);
Block.setShape(BlockID.limeyellow,0,0,0,1,0.0625,1);
Block.setShape(BlockID.greenlime,0,0,0,1,0.0625,1);
Block.setShape(BlockID.bluelightblue,0,0,0,1,0.0625,1);
Block.setShape(BlockID.purplelightgrey,0,0,0,1,0.0625,1);
Block.setShape(BlockID.magentalightgrey,0,0,0,1,0.0625,1);
Block.setShape(BlockID.magentapink,0,0,0,1,0.0625,1);
Block.setShape(BlockID.greylightgreyplus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.brownlightgreyplus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.redorangeplus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.orangeyellowplus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.limeyellowplus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.greenlimeplus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.bluelightblueplus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.purplelightgreyplus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.magentalightgreyplus,0,0,0,1,0.0625,1);
Block.setShape(BlockID.magentapinkplus,0,0,0,1,0.0625,1);
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




// file: JALOUSIE.js

IDRegistry.genBlockID("jalousieoak");
Block.createBlock("jalousieoak", [
	{name: "jalousieoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieoak1", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieoak2", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieoak3", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousieoak");
Item.createItem("jalousieoak", "Jalousie", {name: "jalousieoak", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousieoak, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,0]);

var jalousieoakModel = ModelAPI.newArray();
jalousieoakModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treeoak", 0]]);
jalousieoakModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousieoak"},{id:"jalousieoak"}, Furniture.placeRotatableBlock(BlockID.jalousieoak, jalousieoakModel));

IDRegistry.genBlockID("jalousiespruce");
Block.createBlock("jalousiespruce", [
	{name: "jalousiespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiespruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousiespruce");
Item.createItem("jalousiespruce", "Jalousie", {name: "jalousiespruce", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousiespruce, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,1]);

var jalousiespruceModel = ModelAPI.newArray();
jalousiespruceModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treespruce", 0]]);
jalousiespruceModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousiespruce"},{id:"jalousiespruce"}, Furniture.placeRotatableBlock(BlockID.jalousiespruce, jalousiespruceModel));

IDRegistry.genBlockID("jalousiebrich");
Block.createBlock("jalousiebrich", [
	{name: "jalousiebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousiebrich");
Item.createItem("jalousiebrich", "Jalousie", {name: "jalousiebrich", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousiebrich, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,2]);

var jalousiebrichModel = ModelAPI.newArray();
jalousiebrichModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treebrich", 0]]);
jalousiebrichModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousiebrich"},{id:"jalousiebrich"}, Furniture.placeRotatableBlock(BlockID.jalousiebrich, jalousiebrichModel));

IDRegistry.genBlockID("jalousiejungle");
Block.createBlock("jalousiejungle", [
	{name: "jalousiejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiejungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousiejungle");
Item.createItem("jalousiejungle", "Jalousie", {name: "jalousiejungle", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousiejungle, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,3]);

var jalousiejungleModel = ModelAPI.newArray();
jalousiejungleModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treejungle", 0]]);
jalousiejungleModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousiejungle"},{id:"jalousiejungle"}, Furniture.placeRotatableBlock(BlockID.jalousiejungle, jalousiejungleModel));

IDRegistry.genBlockID("jalousieacacia");
Block.createBlock("jalousieacacia", [
	{name: "jalousieacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousieacacia");
Item.createItem("jalousieacacia", "Jalousie", {name: "jalousieacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousieacacia, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 162,0]);

var jalousieacaciaModel = ModelAPI.newArray();
jalousieacaciaModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treeacacia", 0]]);
jalousieacaciaModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousieacacia"},{id:"jalousieacacia"}, Furniture.placeRotatableBlock(BlockID.jalousieacacia, jalousieacaciaModel));

IDRegistry.genBlockID("jalousiebigoak");
Block.createBlock("jalousiebigoak", [
	{name: "jalousiebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousiebigoak");
Item.createItem("jalousiebigoak", "Jalousie", {name: "jalousiebigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousiebigoak, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 162,1]);

var jalousiebigoakModel = ModelAPI.newArray();
jalousiebigoakModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treebigoak", 0]]);
jalousiebigoakModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousiebigoak"},{id:"jalousiebigoak"}, Furniture.placeRotatableBlock(BlockID.jalousiebigoak, jalousiebigoakModel));

Block.setShape(BlockID.jalousieoak,0,0,1,1,1,1);
Block.setShape(BlockID.jalousiespruce,0,0,1,1,1,1);
Block.setShape(BlockID.jalousiebrich,0,0,1,1,1,1);
Block.setShape(BlockID.jalousiejungle,0,0,1,1,1,1);
Block.setShape(BlockID.jalousieacacia,0,0,1,1,1,1);
Block.setShape(BlockID.jalousiebigoak,0,0,1,1,1,1);




// file: new_fan.js

IDRegistry.genBlockID("fan");
Block.createBlock("fan", [
	{name: "fan", texture: [["quartz_block", 0]], inCreative: false},
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("fan");
Item.createItem("fan", "Fan", {name: "fan", meta: 0}, {stack: 64});

Translation.addTranslation("Fan", {ru: "Вентилятор"});
Recipes.addShaped({id: ItemID.fan, count: 1, data: 0}, [" a ", " s ", "xzx"], ["x",265,0, "a", 98,0, "s",152,0, "z",98,3]);

var fanModel = ModelAPI.newArray();
fanModel.addBoxByID("1", 0.375,0.875,0.375,0.625,1,0.625, 236, 7);
fanModel.addBoxByID("2", 0.4375,0.625,0.4375,0.5625,0.875,0.5625, 236);
fanModel.addBoxByID("3", 0.375,0.625,-0.625,0.625,0.6875,0.375, 236);
fanModel.addBoxByID("4", 0.3125,0.5625,0.3125,0.6875,0.625,0.6875, 236, 7);
fanModel.addBoxByID("5", 0.375,0.5,0.375,0.625,0.5625,0.625, 236, 8);
fanModel.addBoxByID("6", -0.625,0.625,0.375,0.375,0.6875,0.625, 236);
fanModel.addBoxByID("7", 0.375,0.625,0.625,0.625,0.6875,1.625, 236);
fanModel.addBoxByID("8", 0.625,0.625,0.375,1.625,0.6875,0.625, 236);
Furniture.addReplacementItem({id:"fan"},{id:"fan"}, Furniture.placeRotatableBlock(BlockID.fan, fanModel));




// file: new_various.js

IDRegistry.genBlockID("pottedfoliage");
Block.createBlock("pottedfoliage", [
	{name: "Potted Foliage", texture: [["quartz_block", 0]], inCreative: true}
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
	{name: "Lamp", texture: [["quartz_block", 0]], inCreative: true}
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
	{name: "tv", texture: [["quartz_block", 0]], inCreative: false},
	{name: "tv", texture: [["quartz_block", 0]], inCreative: false},
	{name: "tv", texture: [["quartz_block", 0]], inCreative: false},
	{name: "tv", texture: [["quartz_block", 0]], inCreative: false}
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
	{name: "Big Cake", texture: [["quartz_block", 0]], inCreative: true}
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




// file: group.js

Item.addCreativeGroup("carpets", Translation.translate("Carpets"), [
BlockID.chesslightgrey,
BlockID.chessgrey,
BlockID.chessblack,
BlockID.chessbrown,
BlockID.chessred,
BlockID.chessorange,
BlockID.chessyellow,
BlockID.chesslime,
BlockID.chessgreen,
BlockID.chesscyan,
BlockID.chesslightblue,
BlockID.chessblue,
BlockID.chesspurple,
BlockID.chessmagenta,
BlockID.chesspink,
BlockID.greylightgrey,
BlockID.brownlightgrey,
BlockID.redorange,
BlockID.orangeyellow,
BlockID.limeyellow,
BlockID.greenlime,
BlockID.bluelightblue,
BlockID.purplelightgrey,
BlockID.magentalightgrey,
BlockID.magentapink,
BlockID.greylightgreyplus,
BlockID.brownlightgreyplus,
BlockID.redorangeplus,
BlockID.orangeyellowplus,
BlockID.limeyellowplus,
BlockID.greenlimeplus,
BlockID.bluelightblueplus,
BlockID.purplelightgreyplus,
BlockID.magentalightgreyplus,
BlockID.magentapinkplus,
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
BlockID.whitelamp,
BlockID.lightgreylamp,
BlockID.greylamp,
BlockID.blacklamp,
BlockID.brownlamp,
BlockID.redlamp,
BlockID.orangelamp,
BlockID.yellowlamp,
BlockID.limelamp,
BlockID.greenlamp,
BlockID.cyanlamp,
BlockID.lightbluelamp,
BlockID.bluelamp,
BlockID.purplelamp,
BlockID.magentalamp,
BlockID.pinklamp
]);

Item.addCreativeGroup("security", Translation.translate("Security"), [
ItemID.whitesecurity,
ItemID.lightgreysecurity,
ItemID.greysecurity,
ItemID.blacksecurity,
ItemID.brownsecurity,
ItemID.redsecurity,
ItemID.orangesecurity,
ItemID.yellowsecurity,
ItemID.limesecurity,
ItemID.greensecurity,
ItemID.cyansecurity,
ItemID.lightbluesecurity,
ItemID.bluesecurity,
ItemID.purplesecurity,
ItemID.magentasecurity,
ItemID.pinksecurity
]);




