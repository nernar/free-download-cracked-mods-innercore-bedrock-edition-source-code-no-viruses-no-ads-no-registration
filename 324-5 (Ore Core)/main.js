/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 15
*/



// file: BlockType.js

var BLOCK_TYPE_WOOD = Block.createSpecialType({
	base: 5,
	opaque: true
});

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");

var BLOCK_TYPE_LOW_LIGHT = Block.createSpecialType({ // блок этого типа будет абсолютно прозрачен для света и сам будет слабо светиться
   lightlevel: 15,
   destroytime: 1
 });
 
 var BLOCK_TYPE_STAND = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");

var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	base: 5,
	opaque: true,
	lightlevel:15
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




// file: ores.js

IDRegistry.genBlockID("compressed_coal_ore");
Block.createBlock("compressed_coal_ore", [
	{name: "Плотная Угольная Руда", texture: [["compressed_coal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_coal_ore, "stone", 1, true);

Block.registerDropFunction("compressed_coal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_diamond_ore");
Block.createBlock("compressed_diamond_ore", [
	{name: "Плотная Алмазная Руда", texture: [["compressed_diamond_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_diamond_ore, "stone", 3, true);

Block.registerDropFunction("compressed_diamond_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_emerald_ore");
Block.createBlock("compressed_emerald_ore", [
	{name: "Плотная Изумрудная Руда", texture: [["compressed_emerald_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_emerald_ore, "stone", 3, true);

Block.registerDropFunction("compressed_emerald_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_gold_ore");
Block.createBlock("compressed_gold_ore", [
	{name: "Плотная Золотая Руда", texture: [["compressed_gold_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_gold_ore, "stone", 3, true);

Block.registerDropFunction("compressed_gold_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_iron_ore");
Block.createBlock("compressed_iron_ore", [
	{name: "Плотная Железная Руда", texture: [["compressed_iron_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_iron_ore, "stone", 3, true);

Block.registerDropFunction("compressed_iron_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[15, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_lapis_ore");
Block.createBlock("compressed_lapis_ore", [
	{name: "Плотная Лазуритовая Руда", texture: [["compressed_lapis_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_lapis_ore, "stone", 3, true);

Block.registerDropFunction("compressed_lapis_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 8, 4]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_coal_ore");
Block.createBlock("compressed_nether_coal_ore", [
	{name: "Адская Угольная Руда", texture: [["compressed_nether_coal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_coal_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_coal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_diamond_ore");
Block.createBlock("compressed_nether_diamond_ore", [
	{name: "Адская Алмазная Руда", texture: [["compressed_nether_diamond_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_diamond_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_diamond_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_emerald_ore");
Block.createBlock("compressed_nether_emerald_ore", [
	{name: "Адская Изумрудная Руда", texture: [["compressed_nether_emerald_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_emerald_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_emerald_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_glowstone_ore");
Block.createBlock("compressed_nether_glowstone_ore", [
	{name: "Адская Светопыльная Руда", texture: [["compressed_nether_glowstone_ore", 0], ["compressed_nether_glowstone_ore", 0], ["compressed_nether_glowstone_ore", 0], ["compressed_nether_glowstone_ore", 0], ["compressed_nether_glowstone_ore", 0], ["compressed_nether_glowstone_ore", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_glowstone_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_glowstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[348, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_gold_ore");
Block.createBlock("compressed_nether_gold_ore", [
	{name: "Адская Золотая Руда", texture: [["compressed_nether_gold_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_gold_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_gold_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_iron_ore");
Block.createBlock("compressed_nether_iron_ore", [
	{name: "Адская Железная Руда", texture: [["compressed_nether_iron_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_iron_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_iron_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[15, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_lapis_ore");
Block.createBlock("compressed_nether_lapis_ore", [
	{name: "Адская Лазуритовая Руда", texture: [["compressed_nether_lapis_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_lapis_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_lapis_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 8, 4]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_quartz_ore");
Block.createBlock("compressed_nether_quartz_ore", [
	{name: "Адская Кварцевая Руда", texture: [["compressed_nether_quartz_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_quartz_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_quartz_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[406, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_redstone_ore");
Block.createBlock("compressed_nether_redstone_ore", [
	{name: "Адская руда Красной пыли", texture: [["compressed_nether_redstone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_redstone_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_redstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_quartz_ore");
Block.createBlock("compressed_quartz_ore", [
	{name: "Плотная Кварцевая Руда", texture: [["compressed_quartz_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_quartz_ore, "stone", 3, true);

Block.registerDropFunction("compressed_quartz_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[406, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_redstone_ore");
Block.createBlock("compressed_redstone_ore", [
	{name: "Плотная руда Красной", texture: [["compressed_redstone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_redstone_ore, "stone", 3, true);

Block.registerDropFunction("compressed_redstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_bone_ore");
Block.createBlock("end_bone_ore", [
	{name: "Кости края", texture: [["end_bone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_bone_ore, "stone", 3, true);

Block.registerDropFunction("end_bone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.end_bone_ore, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_coal_ore");
Block.createBlock("end_coal_ore", [
	{name: "Угольная руда края", texture: [["end_coal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_coal_ore, "stone", 3, true);

Block.registerDropFunction("end_coal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_diamond_ore");
Block.createBlock("end_diamond_ore", [
	{name: "Алмазная руда края", texture: [["end_diamond_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_diamond_ore, "stone", 3, true);

Block.registerDropFunction("end_diamond_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_emerald_ore");
Block.createBlock("end_emerald_ore", [
	{name: "Изумрудная руда края", texture: [["end_emerald_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_emerald_ore, "stone", 3, true);

Block.registerDropFunction("end_emerald_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore");
Block.createBlock("end_fossil_ore", [
	{name: "Ископаемое края", texture: [["end_fossil_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore1");
Block.createBlock("end_fossil_ore1", [
	{name: "Ископаемое края", texture: [["end_fossil_ore1", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore1, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore1", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil1, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore2");
Block.createBlock("end_fossil_ore2", [
	{name: "Ископаемое края", texture: [["end_fossil_ore2", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore2, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore2", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil2, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore3");
Block.createBlock("end_fossil_ore3", [
	{name: "Ископаемое края", texture: [["end_fossil_ore3", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore3, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore3", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil3, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore4");
Block.createBlock("end_fossil_ore4", [
	{name: "Ископаемое края", texture: [["end_fossil_ore4", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore4, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore4", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil4, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore5");
Block.createBlock("end_fossil_ore5", [
	{name: "Ископаемое края", texture: [["end_fossil_ore5", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore5, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore5", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil5, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore6");
Block.createBlock("end_fossil_ore6", [
	{name: "Ископаемое края", texture: [["end_fossil_ore6", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore6, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore6", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil6, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_glowstone_ore");
Block.createBlock("end_glowstone_ore", [
	{name: "Светопыльная руда края", texture: [["end_glowstone_ore", 0], ["end_glowstone_ore", 0], ["end_glowstone_ore", 0], ["end_glowstone_ore", 0], ["end_glowstone_ore", 0], ["end_glowstone_ore", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.end_glowstone_ore, "stone", 3, true);

Block.registerDropFunction("end_glowstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[348, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_gold_ore");
Block.createBlock("end_gold_ore", [
	{name: "Золотая руда края", texture: [["end_gold_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_gold_ore, "stone", 3, true);

Block.registerDropFunction("end_gold_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_iron_ore");
Block.createBlock("end_iron_ore", [
	{name: "Железная руда края", texture: [["end_iron_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_iron_ore, "stone", 3, true);

Block.registerDropFunction("end_iron_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[15, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_lapis_ore");
Block.createBlock("end_lapis_ore", [
	{name: "Лазуритовая руда края", texture: [["end_lapis_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_lapis_ore, "stone", 3, true);

Block.registerDropFunction("end_lapis_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 8, 4]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_redstone_ore");
Block.createBlock("end_redstone_ore", [
	{name: "Руда красной пыли края", texture: [["end_redstone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_redstone_ore, "stone", 3, true);

Block.registerDropFunction("end_redstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore");
Block.createBlock("fossil_ore", [
	{name: "Ископаемое", texture: [["fossil_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore, "stone", 3, true);

Block.registerDropFunction("fossil_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore1");
Block.createBlock("fossil_ore1", [
	{name: "Ископаемое", texture: [["fossil_ore1", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore1, "stone", 3, true);

Block.registerDropFunction("fossil_ore1", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil1, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore2");
Block.createBlock("fossil_ore2", [
	{name: "Ископаемое", texture: [["fossil_ore2", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore2, "stone", 3, true);

Block.registerDropFunction("fossil_ore2", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil2, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore3");
Block.createBlock("fossil_ore3", [
	{name: "Ископаемое", texture: [["fossil_ore3", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore3, "stone", 3, true);

Block.registerDropFunction("fossil_ore3", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil3, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore4");
Block.createBlock("fossil_ore4", [
	{name: "Ископаемое", texture: [["fossil_ore4", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore4, "stone", 3, true);

Block.registerDropFunction("fossil_ore4", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil4, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore5");
Block.createBlock("fossil_ore5", [
	{name: "Ископаемое", texture: [["fossil_ore5", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore5, "stone", 3, true);

Block.registerDropFunction("fossil_ore5", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil5, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore6");
Block.createBlock("fossil_ore6", [
	{name: "Ископаемое", texture: [["fossil_ore6", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore6, "stone", 3, true);

Block.registerDropFunction("fossil_ore6", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil5, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("gold_gravel_ore");
Block.createBlock("gold_gravel_ore", [
	{name: "Золотая Гравиевая Руда", texture: [["gold_gravel_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.gold_gravel_ore, "stone", 3, true);

Block.registerDropFunction("gold_gravel_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[371, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("iron_gravel_ore");
Block.createBlock("iron_gravel_ore", [
	{name: "Железная Гравиевая Руда", texture: [["iron_gravel_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.iron_gravel_ore, "stone", 3, true);

Block.registerDropFunction("iron_gravel_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.iron_gravel_ore, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("lava_crystal_ore");
Block.createBlock("lava_crystal_ore", [
	{name: "Рудный кристалл лавы", texture: [["lava_crystal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.lava_crystal_ore, "stone", 3, true);

Block.registerDropFunction("lava_crystal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.lava_crystal, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_coal_ore");
Block.createBlock("nether_coal_ore", [
	{name: "Адская Угольная Руда", texture: [["nether_coal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_coal_ore, "stone", 3, true);

Block.registerDropFunction("nether_coal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_diamond_ore");
Block.createBlock("nether_diamond_ore", [
	{name: "Адская Алмазная Руда", texture: [["nether_diamond_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_diamond_ore, "stone", 3, true);

Block.registerDropFunction("nether_diamond_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_emerald_ore");
Block.createBlock("nether_emerald_ore", [
	{name: "Адская Изумрудная Руда", texture: [["nether_emerald_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_emerald_ore, "stone", 3, true);

Block.registerDropFunction("nether_emerald_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore");
Block.createBlock("nether_fossil_ore", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore1");
Block.createBlock("nether_fossil_ore1", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore1", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore1, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore1", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil1, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore2");
Block.createBlock("nether_fossil_ore2", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore2", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore2, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore2", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil2, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore3");
Block.createBlock("nether_fossil_ore3", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore3", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore3, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore3", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil3, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore4");
Block.createBlock("nether_fossil_ore4", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore4", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore4, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore4", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil4, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore5");
Block.createBlock("nether_fossil_ore5", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore5", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore5, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore5", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil5, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore6");
Block.createBlock("nether_fossil_ore6", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore6", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore6, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore6", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil6, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_glowstone_ore");
Block.createBlock("nether_glowstone_ore", [
	{name: "Адская Светопыльная Руда", texture: [["nether_glowstone_ore", 0], ["nether_glowstone_ore", 0], ["nether_glowstone_ore", 0], ["nether_glowstone_ore", 0], ["nether_glowstone_ore", 0], ["nether_glowstone_ore", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.nether_glowstone_ore, "stone", 3, true);

Block.registerDropFunction("nether_glowstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[348, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_goold_ore");
Block.createBlock("nether_goold_ore", [
	{name: "Адская Золотая Руда", texture: [["nether_goold_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_goold_ore, "stone", 3, true);

Block.registerDropFunction("nether_goold_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_iron_ore");
Block.createBlock("nether_iron_ore", [
	{name: "Адская Железная Руда", texture: [["nether_iron_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_iron_ore, "stone", 3, true);

Block.registerDropFunction("nether_iron_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[15, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_lapis_ore");
Block.createBlock("nether_lapis_ore", [
	{name: "Адская Лазуритовая Руда", texture: [["nether_lapis_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_lapis_ore, "stone", 3, true);

Block.registerDropFunction("nether_lapis_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 8, 4]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_redstone_ore");
Block.createBlock("nether_redstone_ore", [
	{name: "Адская руда Красной пыли", texture: [["nether_redstone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_redstone_ore, "stone", 3, true);

Block.registerDropFunction("nether_redstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 8, 0]]
	}
	return [];
}, 3);




// file: ic2ores.js

var ICore = false; 
ModAPI.addAPICallback("ICore", function(api){ 
ICore = api; 
});

IDRegistry.genBlockID("end_copper_ore");
Block.createBlock("end_copper_ore", [
	{name: "Края Медная Руда", texture: [["end_copper_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_copper_ore, "stone", 3, true);

Block.registerDropFunction("end_copper_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreCopper, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_copper_ore");
Block.createBlock("nether_copper_ore", [
	{name: "Адская Медная Руда", texture: [["nether_copper_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_copper_ore, "stone", 3, true);

Block.registerDropFunction("nether_copper_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreCopper, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_copper_ore");
Block.createBlock("compressed_copper_ore", [
	{name: "Плотная Медная Руда", texture: [["compressed_copper_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_copper_ore, "stone", 3, true);

Block.registerDropFunction("compressed_copper_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreCopper, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_iridium_ore");
Block.createBlock("compressed_iridium_ore", [
	{name: "Плотная Иридиумная Руда", texture: [["compressed_iridium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_iridium_ore, "stone", 3, true);

Block.registerDropFunction("compressed_iridium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreIridium, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_iridium_ore");
Block.createBlock("end_iridium_ore", [
	{name: "Края Иридиумная Руда", texture: [["end_iridium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_iridium_ore, "stone", 3, true);

Block.registerDropFunction("end_iridium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreIridium, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_iridium_ore");
Block.createBlock("nether_iridium_ore", [
	{name: "Адская Иридиумная Руда", texture: [["nether_iridium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_iridium_ore, "stone", 3, true);

Block.registerDropFunction("nether_iridium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreIridium, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_lead_ore");
Block.createBlock("nether_lead_ore", [
	{name: "Адская Свинцовая Руда", texture: [["nether_lead_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_lead_ore, "stone", 3, true);

Block.registerDropFunction("nether_lead_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreLead, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_lead_ore");
Block.createBlock("compressed_lead_ore", [
	{name: "Плотная Свинцовая Руда", texture: [["compressed_lead_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_lead_ore, "stone", 3, true);

Block.registerDropFunction("compressed_lead_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreLead, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_lead_ore");
Block.createBlock("end_lead_ore", [
	{name: "Края Свинцовая Руда", texture: [["end_lead_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_lead_ore, "stone", 3, true);

Block.registerDropFunction("end_lead_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreLead, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_tin_ore");
Block.createBlock("end_tin_ore", [
	{name: "Края Оловянная Руда", texture: [["end_tin_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_tin_ore, "stone", 3, true);

Block.registerDropFunction("end_tin_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreTin, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_tin_ore");
Block.createBlock("nether_tin_ore", [
	{name: "Адская Оловянная Руда", texture: [["nether_tin_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_tin_ore, "stone", 3, true);

Block.registerDropFunction("nether_tin_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreTin, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_tin_ore");
Block.createBlock("compressed_tin_ore", [
	{name: "Плотная Оловянная Руда", texture: [["compressed_tin_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_tin_ore, "stone", 3, true);

Block.registerDropFunction("compressed_tin_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreTin, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_uranium_ore");
Block.createBlock("end_uranium_ore", [
	{name: "Края Урановая Руда", texture: [["end_uranium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_uranium_ore, "stone", 3, true);

Block.registerDropFunction("end_uranium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreUranium, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_uranium_ore");
Block.createBlock("nether_uranium_ore", [
	{name: "Адская Урановая Руда", texture: [["nether_uranium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_uranium_ore, "stone", 3, true);

Block.registerDropFunction("nether_uranium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreUranium, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_uranium_ore");
Block.createBlock("compressed_uranium_ore", [
	{name: "Плотная Урановая Руда", texture: [["compressed_uranium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_uranium_ore, "stone", 3, true);

Block.registerDropFunction("compressed_uranium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreUranium, 2, 0]]
	}
	return [];
}, 3);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 70);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.compressed_copper_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_copper_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_copper_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_iridium_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.compressed_iridium_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_iridium_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_lead_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.compressed_lead_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_lead_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_tin_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_tin_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.compressed_tin_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.compressed_uranium_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_uranium_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_uranium_ore, 0, 3);
    }
}
)




// file: mixedore.js

IDRegistry.genBlockID("mixed_ore");
Block.createBlock("mixed_ore", [
	{name: "Смешенная Руда", texture: [["mixed_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.mixed_ore, "stone", 3, true);

Block.registerDropFunction("mixed_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 1, 0]]
}
	return [];
}, 3);

Block.registerDropFunctionForID(BlockID.mixed_ore, function(coords, id, data, diggingLevel, toolLevel){
     return [[15, 1, 0], [16, 1, 0], [14, 1, 0], [56, 1, 0]]; 
});




// file: marble_basalt.js

//basalt
IDRegistry.genBlockID("basalt_ore");
Block.createBlock("basalt_ore", [
	{name: "Базальт", texture: [["basalt_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.basalt_ore, "stone", 1, true);

IDRegistry.genBlockID("basalt_block");
Block.createBlock("basalt_block", [
	{name: "Блок Базальта", texture: [["basalt_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.basalt_block, "stone", 1, true);

//marble
IDRegistry.genBlockID("marmor_ore");
Block.createBlock("marmor_ore", [
	{name: "Мрамор", texture: [["marmor_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.marmor_ore, "stone", 1, true);

IDRegistry.genBlockID("marmor_block");
Block.createBlock("marmor_block", [
	{name: "Блок Мрамора", texture: [["marmor_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.marmor_block, "stone", 1, true);

//loam
IDRegistry.genBlockID("loam_block");
Block.createBlock("loam_block", [
	{name: "Суглинок", texture: [["loam_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.loam_block, "stone", 1, true);

IDRegistry.genBlockID("loam_brick_block");
Block.createBlock("loam_brick_block", [
	{name: "Глинистый блок Кирпича", texture: [["loam_brick_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.loam_brick_block, "stone", 1, true);

Block.registerDropFunctionForID(BlockID.loam_block, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.loam_ball, 4, 0]]; 
});

//slate
IDRegistry.genBlockID("slate_ore");
Block.createBlock("slate_ore", [
	{name: "Сланцевая руда", texture: [["slate_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.slate_ore, "stone", 1, true);

IDRegistry.genBlockID("oil_slate_ore");
Block.createBlock("oil_slate_ore", [
	{name: "Нефтяная Сланцевая руда", texture: [["oil_slate_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oil_slate_ore, "stone", 1, true);

IDRegistry.genBlockID("slate_block");
Block.createBlock("slate_block", [
	{name: "Сланцевая блок", texture: [["slate_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.slate_block, "stone", 1, true);

Block.registerDropFunctionForID(BlockID.loil_slate_ore, function(coords, id, data, diggingLevel, toolLevel){
     return [[BlockID.slate_ore, 1, 0, ItemID.oil_paste, 1, 0]]; 
});




// file: spawn_block.js

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 60, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.basalt_ore, 0, 12, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 60, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.marmor_ore, 0, 12, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 60, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.loam_block, 0, 12, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 60, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.oil_slate_ore, 0, 12, true, seed)
}
});




// file: xp_ore.js

IDRegistry.genBlockID("xp_ore");
Block.createBlock("xp_ore", [
	{name: "Xp ore", texture: [["xp_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.xp_ore, "stone", 3, true);

Block.registerDropFunction("xp_ore", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.xp_ore, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[0, 0, 0]]
 }
 return [];
}, 3);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.xp_ore, 0, 6);
    }
}
)

IDRegistry.genBlockID("nether_xp_ore");
Block.createBlock("nether_xp_ore", [
	{name: "Nether xp ore", texture: [["nether_xp_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_xp_ore, "stone", 3, true);

Block.registerDropFunction("nether_xp_ore", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.nether_xp_ore, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[0, 0, 0]]
 }
 return [];
}, 3);

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 121);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_xp_ore, 0, 6);
    }
}
)

IDRegistry.genBlockID("end_xp_ore");
Block.createBlock("end_xp_ore", [
	{name: "End xp ore", texture: [["end_xp_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_xp_ore, "stone", 3, true);

Block.registerDropFunction("end_xp_ore", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.end_xp_ore, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[0, 0, 0]]
 }
 return [];
}, 3);

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 14, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_xp_ore, 0, 6);
    }
}
)




// file: orespawn.js

//spawn bone ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.bone_ore, 0, 3, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_bone_ore, 0, 3, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_bone_ore, 0, 3, true, seed)
}
});

//spawn coal ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 132, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_coal_ore, 0, 6, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_coal_ore, 0, 6, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_coal_ore, 0, 6, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_coal_ore, 0, 6, true, seed)
}
});

//spawn iron ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 68, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_iron_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_iron_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_iron_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==13)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.iron_gravel_ore, 0, 3, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_iron_ore, 0, 4, true, seed)
}
});

//spawn gold ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_gold_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_gold_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_gold_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==13)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.gold_gravel_ore, 0, 3, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_goold_ore, 0, 4, true, seed)
}
});

//spawn diamond ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 1, 16, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_diamond_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_diamond_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_diamond_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_diamond_ore, 0, 4, true, seed)
}
});

//spawn emerald ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 33, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_emerald_ore, 0, 1, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_emerald_ore, 0, 1, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_emerald_ore, 0, 1, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_emerald_ore, 0, 1, true, seed)
}
});

//spawn lapis ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 34, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_lapis_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_lapis_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_lapis_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_lapis_ore, 0, 4, true, seed)
}
});

//spawn glowstone
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_glowstone_ore, 0, 8, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_glowstone_ore, 0, 8, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_glowstone_ore, 0, 8, true, seed)
}
});

//spawn quartz
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_quartz_ore, 0, 5, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 15, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_quartz_ore, 0, 5, true, seed)
}
});

//spawn redstone ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_redstone_ore, 0, 5, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 33, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_redstone_ore, 0, 5, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_redstone_ore, 0, 5, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_redstone_ore, 0, 5, true, seed)
}
});

//spawn fossil ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore1, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore2, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore3, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore4, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore5, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore6, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore1, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore2, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore3, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore4, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore5, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore6, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore1, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore2, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore3, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore4, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore5, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore6, 0, 2, true, seed)
}
});

//spawn more ores
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.lava_crystal_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.mixed_ore, 0, 1, true, seed)
}
});




// file: armor.js

IDRegistry.genItemID("bone_helmet");
IDRegistry.genItemID("bone_chestplate");
IDRegistry.genItemID("bone_leggings");
IDRegistry.genItemID("bone_boots");

Item.createArmorItem("bone_helmet", "Костянной Шлем", {name: "bone_helmet"}, {type: "helmet", armor: 4, durability: 1100, texture: "armor/bone_layer_1.png"});
Item.createArmorItem("bone_chestplate", "Костяной Нагрудник", {name: "bone_chestplate"}, {type: "chestplate", armor: 6, durability: 1100, texture: "armor/bone_layer_1.png"});
Item.createArmorItem("bone_leggings", "Костянные Штаны", {name: "bone_leggins"}, {type: "leggings", armor: 5, durability: 1100, texture: "armor/bone_layer_2.png"});
Item.createArmorItem("bone_boots", "Костянные Ботинки", {name: "bone_boots"}, {type: "boots", armor: 5, durability: 1100, texture: "armor/bone_layer_1.png"});

Recipes.addShaped({id: ItemID.bone_helmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.bone_helmet, count: 1, data: 0}, [
	"   ",
	"xax",
	"   "
], ['x', 352, 0, 'a', ItemID.fossil4, 0]);

Recipes.addShaped({id: ItemID.bone_chestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.bone_chestplate, count: 1, data: 0}, [
	"x x",
	"xax"
], ['x', 352, 0, 'a', ItemID.fossil5, 0]);

Recipes.addShaped({id: ItemID.bone_leggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.bone_leggings, count: 1, data: 0}, [
	"xax",
	"x x"
], ['x', 352, 0, 'a', ItemID.fossil6, 0]);

Recipes.addShaped({id: ItemID.bone_boots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.bone_boots, count: 1, data: 0}, [
	" a ",
	"x x"
], ['x', 352, 0, 'a', ItemID.fossil2, 0]);

IDRegistry.genItemID("emerald_helmet");
IDRegistry.genItemID("emerald_chestplate");
IDRegistry.genItemID("emerald_leggings");
IDRegistry.genItemID("emerald_boots");

Item.createArmorItem("emerald_helmet", "Изумрудный Шлем", {name: "emerald_helmet"}, {type: "helmet", armor: 4, durability: 1100, texture: "armor/emerald_layer_1.png"});
Item.createArmorItem("emerald_chestplate", "Изумрудный Нагрудник", {name: "emerald_chestplate"}, {type: "chestplate", armor: 6, durability: 1100, texture: "armor/emerald_layer_1.png"});
Item.createArmorItem("emerald_leggings", "Изумрудный Штаны", {name: "emerald_leggins"}, {type: "leggings", armor: 5, durability: 1100, texture: "armor/emerald_layer_2.png"});
Item.createArmorItem("emerald_boots", "Изумрудный Ботинки", {name: "emerald_boots"}, {type: "boots", armor: 5, durability: 1100, texture: "armor/emerald_layer_1.png"});

Recipes.addShaped({id: ItemID.emerald_helmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', 388, 0]);

Recipes.addShaped({id: ItemID.emerald_chestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', 388, 0]);

Recipes.addShaped({id: ItemID.emerald_leggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', 388, 0]);

Recipes.addShaped({id: ItemID.emerald_boots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', 388, 0]);

IDRegistry.genItemID("lavacrystal_helmet");
IDRegistry.genItemID("lavacrystal_chestplate");
IDRegistry.genItemID("lavacrystal_leggings");
IDRegistry.genItemID("lavacrystal_boots");

Item.createArmorItem("lavacrystal_helmet", "Лава Кристальной Шлем", {name: "lavacrystal_helmet"}, {type: "helmet", armor: 4, durability: 1100, texture: "armor/lavacrystal_layer_1.png"});
Item.createArmorItem("lavacrystal_chestplate", "Лава Кристальной Нагрудник", {name: "lavacrystal_chestplate"}, {type: "chestplate", armor: 6, durability: 1100, texture: "armor/lavacrystal_layer_1.png"});
Item.createArmorItem("lavacrystal_leggings", "Лава Кристальной Штаны", {name: "lavacrystal_leggins"}, {type: "leggings", armor: 5, durability: 1100, texture: "armor/lavacrystal_layer_2.png"});
Item.createArmorItem("lavacrystal_boots", "Лава Кристальной Ботинки", {name: "lavacrystal_boots"}, {type: "boots", armor: 5, durability: 1100, texture: "armor/lavacrystal_layer_1.png"});

Recipes.addShaped({id: ItemID.lavacrystal_helmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.lava_crystal, 0]);

Recipes.addShaped({id: ItemID.lavacrystal_chestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.lava_crystal, 0]);

Recipes.addShaped({id: ItemID.lavacrystal_leggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.lava_crystal, 0]);

Recipes.addShaped({id: ItemID.lavacrystal_boots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.lava_crystal, 0]);

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.lavacrystal_helmet && chest.id == ItemID.lavacrystal_chestplate && legs.id == ItemID.lavacrystal_leggings && boots.id == ItemID.lavacrystal_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 25, 3);
   }
});




// file: tools.js

importLib("TOOLTYype", "*");
IDRegistry.genItemID("EmeraldSword");
IDRegistry.genItemID("EmeraldShovel");
IDRegistry.genItemID("EmeraldPickaxe");
IDRegistry.genItemID("EmeraldAxe");
IDRegistry.genItemID("EmeraldHoe");

Item.createItem("EmeraldSword", "Emerald Sword", {name: "emerald_sword", meta: 0}, {stack: 1});
Item.createItem("EmeraldShovel", "Emerald Shovel", {name: "emerald_shovel", meta: 0}, {stack: 1});
Item.createItem("EmeraldPickaxe", "Emerald Pickaxe", {name: "emerald_pickaxe", meta: 0}, {stack: 1});
Item.createItem("EmeraldAxe", "Emerald Axe", {name: "emerald_axe", meta: 0}, {stack: 1});
Item.createItem("EmeraldHoe", "Emerald Hoe", {name: "emerald_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("emerald", {durability: 500, level: 3, efficiency: 6, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.EmeraldSword, "emerald", ToolType.sword);
ToolAPI.setTool(ItemID.EmeraldShovel, "emerald", ToolType.shovel);
ToolAPI.setTool(ItemID.EmeraldPickaxe, "emerald", ToolType.pickaxe);
ToolAPI.setTool(ItemID.EmeraldAxe, "emerald", ToolType.axe);
ToolAPI.setTool(ItemID.EmeraldHoe, "emerald", ToolType.hoe);

Recipes.addShaped({id: ItemID.EmeraldSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 388, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.EmeraldShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 388, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.EmeraldPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 388, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.EmeraldAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 388, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.EmeraldHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 388, 0, 'b', 280, 0]);

///////

IDRegistry.genItemID("LavacrystalSword");
IDRegistry.genItemID("LavacrystalShovel");
IDRegistry.genItemID("LavacrystalPickaxe");
IDRegistry.genItemID("LavacrystalAxe");
IDRegistry.genItemID("LavacrystalHoe");

Item.createItem("LavacrystalSword", "Lava Crystal Sword", {name: "lavacrystal_sword", meta: 0}, {stack: 1});
Item.createItem("LavacrystalShovel", "Lava Crystal Shovel", {name: "lavacrystal_shovel", meta: 0}, {stack: 1});
Item.createItem("LavacrystalPickaxe", "Lava Crystal Pickaxe", {name: "lavacrystal_pickaxe", meta: 0}, {stack: 1});
Item.createItem("LavacrystalAxe", "Lava Crystal Axe", {name: "lavacrystal_axe", meta: 0}, {stack: 1});
Item.createItem("LavacrystalHoe", "Lava Crystal Hoe", {name: "lavacrystal_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("LavaCrystal", {durability: 1000, level: 4, efficiency: 15, damage: 9, enchantability: 18});
ToolAPI.setTool(ItemID.LavacrystalSword, "LavaCrystal", ToolType.sword);
ToolAPI.setTool(ItemID.LavacrystalShovel, "LavaCrystal", ToolType.shovel);
ToolAPI.setTool(ItemID.LavacrystalPickaxe, "LavaCrystal", ToolType.pickaxe);
ToolAPI.setTool(ItemID.LavacrystalAxe, "LavaCrystal", ToolType.axe);
ToolAPI.setTool(ItemID.LavacrystalHoe, "LavaCrystal", ToolType.hoe);

Recipes.addShaped({id: ItemID.LavacrystalSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.lava_crystal, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.LavacrystalShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.lava_crystal, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.LavacrystalPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.lava_crystal, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.LavacrystalAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.lava_crystal, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.LavacrystalHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.lava_crystal, 0, 'b', 369, 0]);




// file: fossil_stand.js

//fossil stand
IDRegistry.genBlockID("fossil_stand");
Block.createBlock("fossil_stand", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand, "stone", 1, true);

var fossilstandModel = ModelAPI.newArray();
fossilstandModel.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstandModel.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstandModel.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstandModel.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstandModel.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand, fossilstandModel);

//fossil stand
IDRegistry.genBlockID("fossil_stand1");
Block.createBlock("fossil_stand1", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand1, "stone", 1, true);

var fossilstand1Model = ModelAPI.newArray();
fossilstand1Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand1Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand1Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand1Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand1Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand1Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand1Model.addBoxByTextures("7", 0.5625,1.25,0.3125,0.8125,1.3125,0.375,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("8", 0.1875,1.0625,0.6875,0.375,1.125,0.75,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("9", 0.25,1.125,0.625,0.4375,1.15625,0.6875,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("10", 0.3125,1.125,0.5625,0.5,1.1875,0.625,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("11", 0.375,1.1875,0.5,0.5625,1.21875,0.5625,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("12", 0.625,1.3125,0.1875,0.6875,1.375,0.25,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("13", 0.5,1.25,0.375,0.75,1.28125,0.4375,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("14", 0.4375,1.1875,0.4375,0.625,1.25,0.5,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("15", 0.5625,1.3125,0.25,0.75,1.34375,0.3125,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand1, fossilstand1Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand2");
Block.createBlock("fossil_stand2", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand2, "stone", 1, true);

var fossilstand2Model = ModelAPI.newArray();
fossilstand2Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand2Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand2Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand2Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand2Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand2Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand2Model.addBoxByTextures("7", 0.375,1.0625,0.6875,0.5,1.125,0.8125,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("8", 0.3125,1.0625,0.8125,0.4375,1.125,0.875,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("9", 0.3125,1.0625,0.625,0.4375,1.125,0.6875,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("10", 0.25,1.0625,0.4375,0.625,1.125,0.5625,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("11", 0.6875,1.0625,0.3125,0.8125,1.125,0.375,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("12", 0.1875,1.0625,0.25,0.25,1.125,0.5,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("13", 0.4375,1.0625,0.3125,0.6875,1.125,0.4375,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("14", 0.5625,1.0625,0.5625,0.6875,1.125,0.75,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("15", 0.25,1.0625,0.3125,0.3125,1.125,0.4375,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("16", 0.5625,1.0625,0.75,0.625,1.125,0.8125,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("17", 0.125,1.0625,0.25,0.1875,1.125,0.375,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("18", 0.0625,1.0625,0.25,0.125,1.125,0.3125,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("19", 0.625,1.0625,0.5,0.6875,1.125,0.5625,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("20", 0.125,1.0625,0.625,0.25,1.125,0.6875,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("21", 0.6875,1.0625,0.4375,0.8125,1.125,0.5,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("22", 0.75,1.0625,0.375,0.875,1.125,0.4375,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("23", 0.1875,1.0625,0.5625,0.375,1.125,0.625,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("24", 0.375,1.0625,0.25,0.5625,1.125,0.3125,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("25", 0.3125,1.0625,0.1875,0.5,1.125,0.25,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("26", 0.5625,1.0625,0.1875,0.9375,1.125,0.25,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("27", 0.625,1.0625,0.25,0.875,1.125,0.3125,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand2, fossilstand2Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand3");
Block.createBlock("fossil_stand3", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand3, "stone", 1, true);

var fossilstand3Model = ModelAPI.newArray();
fossilstand3Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand3Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand3Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand3Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand3Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand3Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand3Model.addBoxByTextures("7", 0.3125,1.1875,0.3125,0.375,1.21875,0.5625,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("8", 0.5,1.0625,0.75,0.5625,1.125,0.875,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("9", 0.6875,1.125,0.5625,0.75,1.15625,0.75,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("10", 0.625,1.125,0.4375,0.6875,1.1875,0.625,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("11", 0.4375,1.125,0.625,0.5,1.15625,0.8125,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("12", 0.375,1.125,0.5,0.4375,1.1875,0.6875,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("13", 0.75,1.0625,0.6875,0.8125,1.125,0.8125,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("14", 0.5,1.1875,0.25,0.5625,1.25,0.375,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("15", 0.5625,1.1875,0.375,0.625,1.21875,0.4375,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("16", 0.125,1.125,0.625,0.1875,1.1875,0.6875,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("17", 0.25,1.0625,0.8125,0.3125,1.125,0.875,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("18", 0.1875,1.125,0.6875,0.25,1.15625,0.8125,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand3, fossilstand3Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand4");
Block.createBlock("fossil_stand4", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand4, "stone", 1, true);

var fossilstand4Model = ModelAPI.newArray();
fossilstand4Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand4Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand4Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand4Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand4Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand4Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand4Model.addBoxByTextures("7", 0.75,1.125,0.5,0.875,1.15625,0.5625,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("8", 0.6875,1.0625,0.75,0.8125,1.125,0.8125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("9", 0.25,1.0625,0.1875,0.4375,1.125,0.25,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("10", 0.3125,1.0625,0.25,0.5,1.125,0.3125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("11", 0.375,1.0625,0.4375,0.4375,1.125,0.5,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("12", 0.4375,1.0625,0.3125,0.625,1.125,0.375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("13", 0.5625,1.0625,0.6875,0.75,1.125,0.75,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("14", 0.625,1.0625,0.625,0.6875,1.125,0.6875,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("15", 0.5625,1.0625,0.5,0.625,1.125,0.5625,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("16", 0.5,1.0625,0.4375,0.6875,1.125,0.5,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("17", 0.4375,1.0625,0.375,0.5625,1.125,0.4375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("18", 0.1875,1.0625,0.0625,0.25,1.09375,0.125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("19", 0.75,1.0625,0.8125,0.8125,1.09375,0.875,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("20", 0.5625,1.125,0.75,0.625,1.15625,0.8125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("21", 0.6875,1.125,0.375,0.75,1.15625,0.4375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("22", 0.8125,1.125,0.4375,0.875,1.15625,0.5,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("23", 0.4375,1.125,0.125,0.5,1.15625,0.1875,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("24", 0.5,1.125,0.0625,0.5625,1.15625,0.125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("25", 0.625,1.125,0.1875,0.6875,1.15625,0.25,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("26", 0.3125,1.125,0.3125,0.375,1.15625,0.375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("27", 0.25,1.125,0.375,0.3125,1.15625,0.4375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("28", 0.3125,1.125,0.5625,0.375,1.15625,0.625,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("29", 0.375,1.125,0.5,0.4375,1.15625,0.5625,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("30", 0.4375,1.125,0.625,0.5625,1.15625,0.6875,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("31", 0.5,1.0625,0.5625,0.8125,1.125,0.625,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("32", 0.1875,1.0625,0.125,0.3125,1.125,0.1875,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("33", 0.5625,1.0625,0.25,0.6875,1.125,0.3125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("34", 0.25,1.0625,0.3125,0.3125,1.125,0.375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("35", 0.3125,1.0625,0.5,0.375,1.125,0.5625,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand4, fossilstand4Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand5");
Block.createBlock("fossil_stand5", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand5, "stone", 1, true);

var fossilstand5Model = ModelAPI.newArray();
fossilstand5Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand5Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand5Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand5Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand5Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand5Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand5Model.addBoxByTextures("7", 0.75,1.0625,0.625,0.8125,1.125,0.8125,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("8", 0.8125,1.0625,0.5,0.875,1.125,0.75,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("9", 0.25,1.0625,0.625,0.5,1.125,0.6875,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("10", 0.75,1.0625,0.125,0.8125,1.125,0.3125,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("11", 0.6875,1.0625,0.25,0.75,1.125,0.4375,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("12", 0.625,1.0625,0.3125,0.6875,1.125,0.5,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("13", 0.1875,1.0625,0.3125,0.25,1.125,0.5,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("14", 0.25,1.0625,0.3125,0.3125,1.125,0.4375,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("15", 0.3125,1.0625,0.375,0.375,1.125,0.5,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("16", 0.6875,1.0625,0.8125,0.75,1.125,0.9375,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("17", 0.5,1.0625,0.5,0.625,1.125,0.5625,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("18", 0.4375,1.0625,0.5625,0.5625,1.125,0.625,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("19", 0.0625,1.0625,0.4375,0.1875,1.125,0.5,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("20", 0.3125,1.0625,0.1875,0.4375,1.125,0.25,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("21", 0.25,1.0625,0.125,0.3125,1.125,0.1875,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("22", 0.5625,1.0625,0.4375,0.625,1.125,0.5,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("23", 0.625,1.0625,0.875,0.6875,1.125,0.9375,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("24", 0.375,1.0625,0.25,0.5625,1.125,0.3125,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("25", 0.1875,1.0625,0.6875,0.375,1.125,0.75,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("26", 0.0625,1.0625,0.75,0.25,1.125,0.8125,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand5, fossilstand5Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand6");
Block.createBlock("fossil_stand6", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand6, "stone", 1, true);

var fossilstand6Model = ModelAPI.newArray();
fossilstand6Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand6Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand6Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand6Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand6Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand6Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand6Model.addBoxByTextures("7", 0.25,1.0625,0.4375,0.4375,1.09375,0.5,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("8", 0.4375,1.0625,0.125,0.5625,1.125,0.875,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("9", 0.3125,1.0625,0.625,0.4375,1.125,0.75,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("10", 0.5625,1.0625,0.75,0.625,1.125,0.8125,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("11", 0.375,1.0625,0.75,0.4375,1.125,0.8125,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("12", 0.25,1.0625,0.5625,0.4375,1.09375,0.625,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("13", 0.5625,1.0625,0.5625,0.75,1.09375,0.625,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("14", 0.5625,1.0625,0.4375,0.75,1.09375,0.5,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("15", 0.5625,1.0625,0.3125,0.75,1.09375,0.375,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("16", 0.5625,1.0625,0.1875,0.75,1.09375,0.25,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("17", 0.1875,1.0625,0.125,0.25,1.125,0.1875,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("18", 0.25,1.0625,0.3125,0.4375,1.09375,0.375,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("19", 0.5625,1.0625,0.625,0.6875,1.125,0.75,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("20", 0.25,1.0625,0.1875,0.4375,1.09375,0.25,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("21", 0.375,1.0625,0.0625,0.4375,1.09375,0.125,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("22", 0.5625,1.0625,0.0625,0.625,1.09375,0.125,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("23", 0.75,1.0625,0.125,0.8125,1.125,0.1875,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("24", 0.75,1.0625,0.25,0.8125,1.125,0.3125,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("25", 0.75,1.0625,0.375,0.8125,1.125,0.4375,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("26", 0.1875,1.0625,0.375,0.25,1.125,0.4375,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("27", 0.1875,1.0625,0.25,0.25,1.125,0.3125,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand6, fossilstand6Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand7");
Block.createBlock("fossil_stand7", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand7, "stone", 1, true);

var fossilstand7Model = ModelAPI.newArray();
fossilstand7Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand7Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand7Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand7Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand7Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand7Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand7Model.addBoxByTextures("7", 0.375,1.0625,0.5625,0.5,1.125,0.625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("8", 0.5625,1.0625,0.625,0.625,1.09375,0.75,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("9", 0.5,1.0625,0.3125,0.5625,1.125,0.8125,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("10", 0.3125,1.0625,0.375,0.375,1.125,0.4375,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("11", 0.6875,1.0625,0.625,0.75,1.125,0.6875,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("12", 0.5625,1.0625,0.5625,0.6875,1.125,0.625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("13", 0.75,1.0625,0.6875,0.8125,1.125,0.75,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("14", 0.3125,1.0625,0.625,0.375,1.125,0.6875,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("15", 0.25,1.0625,0.6875,0.3125,1.125,0.75,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("16", 0.4375,1.0625,0.4375,0.5,1.125,0.5,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("17", 0.5625,1.0625,0.4375,0.625,1.125,0.5,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("18", 0.6875,1.0625,0.375,0.75,1.125,0.4375,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("19", 0.25,1.0625,0.75,0.3125,1.09375,0.8125,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("20", 0.3125,1.0625,0.6875,0.375,1.09375,0.75,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("21", 0.375,1.0625,0.625,0.4375,1.09375,0.6875,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("22", 0.5,1.0625,0.8125,0.5625,1.09375,0.875,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("23", 0.625,1.0625,0.625,0.6875,1.09375,0.6875,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("24", 0.6875,1.0625,0.6875,0.75,1.09375,0.75,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("25", 0.75,1.0625,0.75,0.8125,1.09375,0.8125,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("26", 0.6875,1.0625,0.5625,0.75,1.09375,0.625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("27", 0.75,1.0625,0.375,0.8125,1.09375,0.4375,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("28", 0.25,1.0625,0.375,0.3125,1.09375,0.4375,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("29", 0.3125,1.0625,0.5625,0.375,1.09375,0.625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("30", 0.375,1.0625,0.5,0.5,1.09375,0.5625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("31", 0.3125,1.0625,0.4375,0.4375,1.09375,0.5,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("32", 0.625,1.0625,0.4375,0.75,1.09375,0.5,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("33", 0.5625,1.0625,0.5,0.6875,1.09375,0.5625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("34", 0.4375,1.0625,0.1875,0.5,1.09375,0.3125,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("35", 0.4375,1.0625,0.625,0.5,1.09375,0.75,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand7, fossilstand7Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand8");
Block.createBlock("fossil_stand8", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand8, "stone", 1, true);

var fossilstand8Model = ModelAPI.newArray();
fossilstand8Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand8Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand8Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand8Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand8Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand8Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand8Model.addBoxByTextures("7", 0.125,1.1875,0.5625,0.15625,1.25,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("8", 0.1875,1.0625,0.375,0.625,1.125,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("9", 0.125,1.125,0.3125,0.75,1.1875,0.6875,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("10", 0.1875,1.3125,0.375,0.3125,1.375,0.34375,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("11", 0.4375,1.25,0.625,0.5,1.3125,0.65625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("12", 0.1875,1.1875,0.5,0.21875,1.25,0.5625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("13", 0.25,1.1875,0.3125,0.8125,1.25,0.6875,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("14", 0.125,1.1875,0.375,0.15625,1.25,0.4375,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("15", 0.375,1.25,0.375,0.4375,1.3125,0.34375,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("16", 0.25,1.25,0.375,0.3125,1.3125,0.34375,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("17", 0.3125,1.3125,0.5625,0.375,1.375,0.59375,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("18", 0.5625,1.25,0.3125,0.875,1.3125,0.6875,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("19", 0.4375,1.5625,0.375,0.625,1.625,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("20", 0.1875,1.3125,0.375,0.3125,1.375,0.65625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("21", 0.3125,1.25,0.625,0.375,1.3125,0.65625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("22", 0.5,1.3125,0.375,0.875,1.375,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("23", 0.25,1.375,0.3125,0.875,1.4375,0.6875,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("24", 0.125,1.375,0.375,0.1875,1.4375,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("25", 0.125,1.4375,0.375,0.3125,1.5,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("26", 0.375,1.4375,0.4375,0.4375,1.5,0.5625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("27", 0.625,1.4375,0.3125,0.75,1.5,0.6875,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("28", 0.25,1.5,0.375,0.5,1.5625,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("29", 0.5625,1.5,0.375,0.6875,1.5625,0.65625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("30", 0.5625,1.5,0.375,0.6875,1.5625,0.34375,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand8, fossilstand8Model);




// file: items.js

//items
IDRegistry.genItemID("lava_crystal");
Item.createItem("lava_crystal", "Кристалл лавы", {name: "lava_crystal"});

IDRegistry.genItemID("ashe");
Item.createItem("ashe", "Эш", {name: "ashe"});

IDRegistry.genItemID("loam_ball");
Item.createItem("loam_ball", "Суглинистый шар", {name: "loam_ball"});

IDRegistry.genItemID("loam_brick");
Item.createItem("loam_brick", "Суглинистый Кирпич", {name: "loam_brick"});

IDRegistry.genItemID("oil_bucket");
Item.createItem("oil_bucket", "Ведро с маслом", {name: "oil_bucket"});

IDRegistry.genItemID("oil_paste");
Item.createItem("oil_paste", "Масляная паста", {name: "oil_paste"});

IDRegistry.genItemID("fossil");
Item.createItem("fossil", "Ископаемое", {name: "fossil"});

IDRegistry.genItemID("fossil1");
Item.createItem("fossil1", "Ископаемое", {name: "fossil1"});

IDRegistry.genItemID("fossil2");
Item.createItem("fossil2", "Ископаемое", {name: "fossil2"});

IDRegistry.genItemID("fossil3");
Item.createItem("fossil3", "Ископаемое", {name: "fossil3"});

IDRegistry.genItemID("fossil4");
Item.createItem("fossil4", "Ископаемое", {name: "fossil4"});

IDRegistry.genItemID("fossil5");
Item.createItem("fossil5", "Ископаемое", {name: "fossil5"});

IDRegistry.genItemID("fossil6");
Item.createItem("fossil6", "Ископаемое", {name: "fossil6"});

//recipes
Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil1, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil2, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil3, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil4, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil5, 0]);

Recipes.addShaped({id: 352, count: 4, data: 0}, ["x"
], ['x', ItemID.fossil6, 0]);

Recipes.addShaped({id: ItemID.oil_bucket, count: 1, data: 0}, ["axx", "xx ",
], ['x', ItemID.oil_paste, 0, 'a', 325, 8]);

Recipes.addShaped({id: BlockID.loam_brick_block, count: 4, data: 0}, ["xx", "xx ",
], ['x', ItemID.loam_brick, 0]);

Recipes.addShaped({id: BlockID.basalt_block, count: 4, data: 0}, ["xx", "xx ",
], ['x', BlockID.basalt_ore, 0]);

Recipes.addShaped({id: BlockID.marmor_block, count: 4, data: 0}, ["xx", "xx ",
], ['x', BlockID.marmor_ore, 0]);

Recipes.addShaped({id: BlockID.fossil_stand, count: 1, data: 0}, ["xxx", "xxx", "xxx"
], ['x', BlockID.basalt_block, 0]);

Recipes.addShaped({id: BlockID.fossil_stand1, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', 352, 0]);

Recipes.addShaped({id: BlockID.fossil_stand2, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil, 0]);

Recipes.addShaped({id: BlockID.fossil_stand3, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil1, 0]);

Recipes.addShaped({id: BlockID.fossil_stand4, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil2, 0]);

Recipes.addShaped({id: BlockID.fossil_stand5, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil3, 0]);

Recipes.addShaped({id: BlockID.fossil_stand6, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil5, 0]);

Recipes.addShaped({id: BlockID.fossil_stand7, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil6, 0]);

Recipes.addShaped({id: BlockID.fossil_stand8, count: 1, data: 0}, ["xa"
], ['x', BlockID.fossil_stand, 0, 'a', ItemID.fossil4, 0]);

//recipes furnace
Recipes.addFurnaceFuel(ItemID.oil_paste, 0, 300);
Recipes.addFurnaceFuel(ItemID.lava_crystal, 0, 1000);
Recipes.addFurnaceFuel(ItemID.oil_bucket, 0, 2000);
Recipes.addFurnace(ItemID.loam_ball, ItemID.loam_brick, 1);




// file: translation.js

Translation.addTranslation("Emerald Sword", { ru: "Изумрудная Меч" });
Translation.addTranslation("Emerald Shovel", { ru: "Изумрудная Лопата" });
Translation.addTranslation("Emerald Pickaxe", { ru: "Изумрудная Кирка" });
Translation.addTranslation("Emerald Axe", { ru: "Изумрудная Тапор" });
Translation.addTranslation("Emerald Hoe", { ru: "Изумрудная Мотыга" })

Translation.addTranslation("Lava Crystal Sword", { ru: "Лава Кристальная Меч" });
Translation.addTranslation("Lava Crystal Shovel", { ru: "Лава Кристальная Лопата" });
Translation.addTranslation("Lava Crystal Pickaxe", { ru: "Лава Кристальная Кирка" });
Translation.addTranslation("Lava Crystal Axe", { ru: "Лава Кристальная Тапор" });
Translation.addTranslation("Lava Crystal Hoe", { ru: "Лава Кристальная Мотыга" });




