/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 41
*/



// file: типы_блоков.js

var primal_core = null
ModAPI.addAPICallback("primal_api", function(api){
  primal_core = api;
});
var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 42,
	destroytime: 3,
	opaque: true
});
var RYDA = Block.createSpecialType({
	base: 15,
	solid: true,
	destroytime: 4,
	opaque: true
});
var RYD = Block.createSpecialType({
	base: 16,
	solid: true,
	destroytime: 3.3,
	opaque: true
});
var BLOCK_TYPE_STAL = Block.createSpecialType({
	base: 42,
	destroytime: 4,
	opaque: true
});
var BLOCK_TYPE_RYBU = Block.createSpecialType({
	base: 42,
	destroytime: 15,
	opaque: true
});
var BLOCK_TYPE_RYB = Block.createSpecialType({
	base: 42,
	destroytime: 12,
	opaque: true
});
var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	base: 5,
	opaque: true,
	lightlevel:15
});
var BLOCK_TYPE_WOOD = Block.createSpecialType({
	base: 5,
	destroytime: 2,
	opaque: true
});
var BLOCK_TYPE_LISTVA = Block.createSpecialType({
	base: 18,
	destroytime: 0.2,
	opaque: true
});
var BLOCK_TYPE_SAZHENETC = Block.createSpecialType({
	base: 6,
	destroytime: 0.1,
	rendertype: 0,
	opaque: true
});
var BLOCK_TYPE_KOKOS = Block.createSpecialType({
	base: 5,
	destroytime: 0.45,
	opaque: true
});
var BLOCK_TYPE_KAMEN = Block.createSpecialType({
	destroytime: 0.1,
	rendertype: 0,
	opaque: true
});
var BLOCK_TYPE_ZOLA = Block.createSpecialType({
	destroytime: 0.5,
	opaque: true
});




// file: виды_блоков.js

//этот код не дает особую нагрузки поэтому просто про него забудь
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
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
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
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createFurnitureStal(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_STAL);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {});

Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
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
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createCherry(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_SAZHENETC);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createSazhenetc(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_SAZHENETC);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createKamen(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_KAMEN);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createFurnitureWoo(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createKame(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_KAMEN);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}
function createKam(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_KAMEN);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {isTech: true});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
}
});
}




// file: блоки_руд.js

//блоки из руд
IDRegistry.genBlockID("blockSteel");
Block.createBlock("blockSteel", [{name: "Стальной блок", texture: [["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0]], inCreative: true}], BLOCK_TYPE_STAL);
IDRegistry.genBlockID("rybinovii_block");
Block.createBlock("rybinovii_block", [{name: "Рубиновый блок", texture: [["рубиновый_блок", 0], ["рубиновый_блок", 0], ["рубиновый_блок", 0], ["рубиновый_блок", 0], ["рубиновый_блок", 0], ["рубиновый_блок", 0]], inCreative: true}], BLOCK_TYPE_RYBU);
IDRegistry.genBlockID("meteoritovii_block");
Block.createBlock("meteoritovii_block", [{name: "Метеоритовый блок", texture: [["метеоритовый_блок", 0], ["метеоритовый_блок", 0], ["метеоритовый_блок", 0], ["метеоритовый_блок", 0], ["метеоритовый_блок", 0], ["метеоритовый_блок", 0]], inCreative: true}], BLOCK_TYPE_STAL);
//блоки из прочих предметов
IDRegistry.genBlockID("block_zoli");
Block.createBlock("block_zoli", [{name: "Блок пепла", texture: [["блок_золы", 0], ["блок_золы", 0], ["блок_золы", 0], ["блок_золы", 0], ["блок_золы", 0], ["блок_золы", 0]], inCreative: true}], BLOCK_TYPE_ZOLA);




// file: штука_важная.js

//Кирилл я не крыса и поэтому это старая версия модельАПИ
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
	compile:function(model){
		for(var i in this.box){
			var m= this.box[i];
			if(m.idBox!=undefined){
			if(m.type=="block"){
				model.addBox(m.x1, m.y1, m.z1, m.x2, m.y2, m.z2, m.id, m.data);
				
			}else if(m.type=="texture"){
				model.addBox(m.x1, m.y1, m.z1, m.x2, m.y2, m.z2, m.textureName, m.index);
			}else if(m.type=="textureArray"){
				model.addBox(m.x1, m.y1, m.z1, m.x2, m.y2, m.z2, m.textureArray);
			}
		}
		}
	},
	box:[]
		};
	}
};







// file: конфиг.js

var Config = {

    /* ----- ORE GEN ----- */
    genRuby: __config__.getBool("gen.ruby"),
    genAnthracite: __config__.getBool("gen.anthracite"),
    genSulfur: __config__.getBool("gen.sulfur"),
    genMeteoriteOre: __config__.getBool("gen.meteorite ore"),
    genMagmaCrystal: __config__.getBool("gen.magma crystal"),

    /* ----- OTHER ----- */
    fallingMeteorites: __config__.getBool("falling meteorites"),
    realism: __config__.getBool("realism"),
    TexturesQuality: __config__.getBool("high-quality textures(64×64 pixels)"),
};




// file: лавовый_кристалл.js

var RYDA = Block.createSpecialType({
	base: 87,
	solid: true,
	destroytime: 1.4,
	opaque: true
});
IDRegistry.genBlockID("lavacristall");
Block.createBlock("lavacristall", [{name: "Руда кристалла магмы", texture: [["лавовый_кристалл", 0], ["лавовый_кристалл", 0], ["лавовый_кристалл", 0], ["лавовый_кристалл", 0], ["лавовый_кристалл", 0], ["лавовый_кристалл", 0]], inCreative: true}]);
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 300);
if(World.getBlockID(coords.x, coords.y+1, coords.z)==11)
{
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lavacristall, 0, 10);
}
}});
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
    if (Config.genMagmaCrystal) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 300);
if(World.getBlockID(coords.x, coords.y, coords.z)==87)
{
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lavacristall, 0, 5);
}
}
}
});
IDRegistry.genItemID("lavaCrysta");
Item.createItem("lavaCrysta", "Кристалл магмы:заряженность-100(мин.)", {name: "лавовый_кристалл", meta: 5}, {});
IDRegistry.genItemID("lavaCryst");
Item.createItem("lavaCryst", "Кристалл магмы:заряженность-400", {name: "лавовый_кристалл", meta: 4}, {isTech: true});
IDRegistry.genItemID("lavaCrys");
Item.createItem("lavaCrys", "Кристалл магмы:заряженность-700", {name: "лавовый_кристалл", meta: 3}, {isTech: true});
IDRegistry.genItemID("lavaCry");
Item.createItem("lavaCry", "Кристалл магмы:заряженность-1000", {name: "лавовый_кристалл", meta: 2}, {isTech: true});
IDRegistry.genItemID("lavaCr");
Item.createItem("lavaCr", "Кристалл магмы:заряженность-1300", {name: "лавовый_кристалл", meta: 1}, {isTech: true});
IDRegistry.genItemID("lavaC");
Item.createItem("lavaC", "Кристалл магмы:заряженность-1600(сред.)", {name: "лавовый_кристалл", meta: 0}, {});
IDRegistry.genItemID("lavaa");
Item.createItem("lavaa", "Кристалл магмы:заряженность-1900", {name: "лавовый_кристалл", meta: 6}, {isTech: true});
IDRegistry.genItemID("lav");
Item.createItem("lav", "Кристалл магмы:заряженность-2200", {name: "лавовый_кристалл", meta: 7}, {isTech: true});
IDRegistry.genItemID("lavv");
Item.createItem("lavv", "Кристалл магмы:заряженность-2500", {name: "лавовый_кристалл", meta: 8}, {isTech: true});
IDRegistry.genItemID("la");
Item.createItem("la", "Кристалл магмы:заряженность-2800", {name: "лавовый_кристалл", meta: 9}, {isTech: true});
IDRegistry.genItemID("laa");
Item.createItem("laa", "Кристалл магмы:заряженность-3100(макс.)", {name: "лавовый_кристалл", meta: 10}, {});




// file: руды.js

//руды премдеты
IDRegistry.genItemID("rybin");
Item.createItem("rybin", "Рубин", {name: "рубин", meta: 0}, {});
IDRegistry.genItemID("sera");
Item.createItem("sera", "Сера", {name: "сера", meta: 0}, {});
IDRegistry.genItemID("pepel");
Item.createItem("pepel", "Пепел", {name: "зола", meta: 0}, {});
IDRegistry.genItemID("nitrat_kaliia");
Item.createItem("nitrat_kaliia", "Калиевая селитра", {name: "нитрат_калия", meta: 0}, {});
//руды блоки
IDRegistry.genBlockID("antratcit");
Block.createBlock("antratcit", [{name: "Антрацитовая руда", texture: [["руда_антрацита", 0], ["руда_антрацита", 0], ["руда_антрацита", 0], ["руда_антрацита", 0], ["руда_антрацита", 0], ["руда_антрацита", 0]], inCreative: true}], RYD);
IDRegistry.genBlockID("sernaia_ryda");
Block.createBlock("sernaia_ryda", [{name: "Серная руда", texture: [["серная_руда", 0], ["серная_руда", 0], ["серная_руда", 0], ["серная_руда", 0], ["серная_руда", 0], ["серная_руда", 0]], inCreative: true}], RYDA);
IDRegistry.genBlockID("rybinovaia_ryda");
Block.createBlock("rybinovaia_ryda", [{name: "Рубиновая руда", texture: [["рубиновая_руда", 0], ["рубиновая_руда", 0], ["рубиновая_руда", 0], ["рубиновая_руда", 0], ["рубиновая_руда", 0], ["рубиновая_руда", 0]], inCreative: true}], BLOCK_TYPE_RYB);
IDRegistry.genBlockID("meteoritovaia_ryyda");
Block.createBlock("meteoritovaia_ryyda", [{name: "Метеоритовая руда", texture: [["метеоритовая_руда", 0], ["метеоритовая_руда", 0], ["метеоритовая_руда", 0], ["метеоритовая_руда", 0], ["метеоритовая_руда", 0], ["метеоритовая_руда", 0]], inCreative: true}], BLOCK_TYPE_STAL);
//генерация руд
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
    if (Config.genAnthracite) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 50);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.antratcit, 0, 3);
}
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
    if (Config.genSulfur) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.sernaia_ryda, 0, 3);
}
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
    if (Config.genRuby) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rybinovaia_ryda, 0, 2);
}
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
    if (Config.genMeteoriteOre) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 50, 150); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.meteoritovaia_ryyda, 0, 2);
}
}});




// file: метательные_топоры_beta4.js





// file: разное.js

//загрузка доп. материалов
Recipes.addCraftToolRecipeItem = function(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
	   for(var i in field){
			   if(field[i].id==tool){
				    field[i].data++;
				    if(field[i].data>=Item.getMaxDamage(tool)){
					     field[i].id = field[i].count = field[i].data = 0;
				    }
			   }
			   else {
				    api.decreaseFieldSlot(i);
			   }
		  }
	 });
};
ModAPI.registerAPI("MTM_api",{
});
var MachineRegistry = {
    machines: {},

    register: function (id, prototype) {
        this.machines[id] = prototype;

        if (prototype.defaultValues) {
            prototype.defaultValues.energy = 0;
        } else {
            prototype.defaultValues = {
                energy: 0
            };
        }

        if (!prototype.getEnergyStorage) {
            prototype.getEnergyStorage = function () {
                return 0;
            }
        }

        if (!prototype.energyTick) {
            prototype.energyTick = function (type, src) {
                this.data.energy += src.get(Math.min(this.getEnergyStorage() - this.data.energy, this.getMaxEnergyReceive ? this.getMaxEnergyReceive() : 200));
            };
        }


        ICRender.getGroup("rf-wire").add(id, -1);
        ToolAPI.registerBlockMaterial(id, "stone");
        TileEntity.registerPrototype(id, prototype);
        EnergyTileRegistry.addEnergyTypeForId(id, RF)
    },

    calcEnergy: function (tile, basePower) {
        let maxPowerLevel = 9 * (basePower * 1000) / 10;
        let energy = tile.data.energy;
        if(energy > maxPowerLevel){
            return basePower;
        }
        if(energy < maxPowerLevel / 10){
            return Math.min(basePower / 10, energy);
        }

        return energy / (maxPowerLevel / basePower);
    }

};
importLib("PlantModel", "*");
importLib("SoundAPI","*");
importLib("ToolType", "*");
importLib("Random", "*");
importLib("Multi_Core", "*");
importLib("energylib", "*");
const RF = EnergyTypeRegistry.assureEnergyType("RF", 1/4);
//предметы
IDRegistry.genItemID("otsilka");
Item.createItem("otsilka", "???100010111001111000101111???", {name: "вззыздыдыдчлщыщдылыл", meta: 0}, {isTech: true});
IDRegistry.genItemID("antratcit");
Item.createItem("antratcit", "Антрацитовый уголь", {name: "антрацит", meta: 0}, {});
IDRegistry.genItemID("antratcitch");
Item.createItem("antratcitch", "Антрацитовый уголь от Ныкыты Черненького", {name: "антрацит", meta: 0}, {isTech: true});
IDRegistry.genItemID("meteoritovii_slitok");
Item.createItem("meteoritovii_slitok", "Метеоритовый слиток", {name: "метеоритовый_слиток", meta: 0}, {});
IDRegistry.genItemID("adskii_slitok");
Item.createItem("adskii_slitok", "Адский слиток", {name: "адский_слиток", meta: 0}, {});
IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel", "Стальной слиток", {name: "слиток_стали", meta: 0}, {});
IDRegistry.genItemID("obichnii_metallalom");
Item.createItem("obichnii_metallalom", "Металлалом", {name: "обычный_металлалом", meta: 0}, {});
IDRegistry.genItemID("stalnoi_metallalom");
Item.createItem("stalnoi_metallalom", "Стальной металлалом", {name: "стальной_металлалом", meta: 0}, {});
IDRegistry.genItemID("cvetnoi_metallalom");
Item.createItem("cvetnoi_metallalom", "Цветной металлалом", {name: "цветной_металлалом", meta: 0}, {});
IDRegistry.genItemID("adskii_metallalom");
Item.createItem("adskii_metallalom", "Адский металлалом", {name: "адский_металлалом", meta: 0}, {});
if(primal_core){
IDRegistry.genItemID("stalnaia_plastina");
Item.createItem("stalnaia_plastina", "Стальная пластина", {name: "стальная_пластина", meta: 0}, {isTech: true});
}
IDRegistry.genItemID("slomannaia_palka");
Item.createItem("slomannaia_palka", "Сломанная палка", {name: "сломанная_палка", meta: 0}, {});
IDRegistry.genItemID("slomannaia_strela");
Item.createItem("slomannaia_strela", "Сломанная стрела", {name: "сломанная_стрела", meta: 0}, {});
IDRegistry.genItemID("kyski_bymagi");
Item.createItem("kyski_bymagi", "Порванная бумага", {name: "порванная_бумага", meta: 0}, {});
IDRegistry.genItemID("nuggetIron");
Item.createItem("nuggetIron", "Железный самородок", {name: "железный_самородок", meta: 0}, {});
IDRegistry.genItemID("stalnoi_samorodok");
Item.createItem("stalnoi_samorodok", "Стальной самородок", {name: "стальной_самородок", meta: 0}, {});
IDRegistry.genItemID("izymrydnii_samorodok");
Item.createItem("izymrydnii_samorodok", "Изумрудный самородок", {name: "изумрудный_самородок", meta: 0}, {});
IDRegistry.genItemID("almaznii_samorodok");
Item.createItem("almaznii_samorodok", "Алмазный самородок", {name: "алмазный_самородок", meta: 0}, {});
IDRegistry.genItemID("meteoritovii_samorodok");
Item.createItem("meteoritovii_samorodok", "Метеоритовый самородок", {name: "метеоритовый_самородок", meta: 0}, {});
IDRegistry.genItemID("adskii_samorodok");
Item.createItem("adskii_samorodok", "Адский самородок", {name: "адский_самородок", meta: 0}, {});
IDRegistry.genItemID("chastitca_yglia");
Item.createItem("chastitca_yglia", "Частица угля", {name: "частица_угля", meta: 0}, {});
IDRegistry.genItemID("oscolok_cremnia");
Item.createItem("oscolok_cremnia", "Осколок кремния", {name: "осколок_кремния", meta: 0}, {});
IDRegistry.genItemID("oscolok_rybina");
Item.createItem("oscolok_rybina", "Осколок рубина", {name: "осколок_рубина", meta: 0}, {});
IDRegistry.genItemID("mezhgalakticheskaia_valuta");
Item.createItem("mezhgalakticheskaia_valuta", "Межгалактическая валюта", {name: "межгалактическая_валюта", meta: 0}, {});
IDRegistry.genItemID("ndsm");
Item.createItem("ndsm", "Набор для создания микрочипов", {name: "набор_для_создания_микрочипов", meta: 0}, {});
IDRegistry.genItemID("chip");
Item.createItem("chip", "Микрочип", {name: "микрочип", meta: 0}, {});
IDRegistry.genItemID("chip_ysk_1");
Item.createItem("chip_ysk_1", "Микрочип ускорения", {name: "микрочип_ускорения", meta: 0}, {});
IDRegistry.genItemID("chip_ysk_2");
Item.createItem("chip_ysk_2", "Продвинутый микрочип ускорения", {name: "микрочип_ускорения_2", meta: 0}, {isTech: true});
IDRegistry.genItemID("chip_ysk_3");
Item.createItem("chip_ysk_3", "Передовой микрочип ускорения", {name: "микрочип_ускорения_3", meta: 0}, {isTech: true});
IDRegistry.genItemID("rakyshkaa");
Item.createItem("rakyshkaa", "Ракушка", {name: "ракушка_0", meta: 0}, {});
IDRegistry.genItemID("rakyshkab");
Item.createItem("rakyshkab", "Ракушка", {name: "ракушка_1", meta: 0}, {});
IDRegistry.genItemID("rock_stone");
Item.createThrowableItem("rock_stone", "Камень", {name: "камень", meta: 0}, {});
IDRegistry.genItemID("kokos");
Item.createThrowableItem("kokos", "Кокос", {name: "кокос", meta: 0}, {});
IDRegistry.genItemID("serdce_drakona");
Item.createItem("serdce_drakona", "Сердце дракона края", {name: "сердце_дракона", meta: 0}, {isTech: true});
IDRegistry.genItemID("cheshyia_drakona_kraia");
Item.createItem("cheshyia_drakona_kraia", "Чешуя дракона края", {name: "чешуя_дракона_края", meta: 0}, {});
IDRegistry.genItemID("kolchyzhnoe_koltco");
Item.createItem("kolchyzhnoe_koltco", "Кольчужное кольцо", {name: "кольчужное_кольцо", meta: 0}, {});
IDRegistry.genItemID("zheleznaia_banka");
Item.createItem("zheleznaia_banka", "Железная банка", {name: "железная_банка", meta: 0}, {});
IDRegistry.genItemID("gorst_graviia");
Item.createItem("gorst_graviia", "Горсть гравия", {name: "горсть_гравия", meta: 0}, {});
IDRegistry.genItemID("gorst_zemli");
Item.createItem("gorst_zemli", "Горсть земли", {name: "горсть_земли", meta: 0}, {});
IDRegistry.genItemID("gorst_peska");
Item.createItem("gorst_peska", "Горсть песка", {name: "горсть_песка", meta: 0}, {});
IDRegistry.genItemID("gnilaia_kost");
Item.createItem("gnilaia_kost", "Гнилая кость", {name: "гнилая_кость", meta: 0}, {});
IDRegistry.genItemID("trava");
Item.createItem("trava", "Трава", {name: "трава", meta: 0}, {});
IDRegistry.genItemID("travianaia_nit");
Item.createItem("travianaia_nit", "Травяная нить", {name: "травяная_нить", meta: 0}, {});
IDRegistry.genItemID("gnilaia_nit");
Item.createItem("gnilaia_nit", "Гнилая нить", {name: "гнилая_нить", meta: 0}, {});
IDRegistry.genItemID("loza");
Item.createItem("loza", "Лоза", {name: "лоза", meta: 0}, {});
IDRegistry.genItemID("travianaia_verevka");
Item.createItem("travianaia_verevka", "Травяная веревка", {name: "травяная_верёвка", meta: 0}, {});
IDRegistry.genItemID("obichnaia_verevka");
Item.createItem("obichnaia_verevka", "Обыкновенная веревка", {name: "обычная_верёвка", meta: 0}, {});
IDRegistry.genItemID("katyshka_s_travianimi_nitkami");
Item.createItem("katyshka_s_travianimi_nitkami", "Катушка с травяными нитями", {name: "катушка_с_травяными_нитками", meta: 0}, {});
Item.setMaxDamage(ItemID.katyshka_s_travianimi_nitkami, 5);
IDRegistry.genItemID("katyshka_s_nitkami");
Item.createItem("katyshka_s_nitkami", "Катушка с нитями", {name: "катушка_с_нитками", meta: 0}, {});
Item.setMaxDamage(ItemID.katyshka_s_nitkami, 8);
IDRegistry.genItemID("igla");
Item.createItem("igla", "Игла", {name: "игла", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.igla, 10);
IDRegistry.genItemID("gnilaia_tkan");
Item.createItem("gnilaia_tkan", "Старая ткань", {name: "гнилая_ткань", meta: 0}, {});
IDRegistry.genItemID("prochnaia_tkan");
Item.createItem("prochnaia_tkan", "Прочная ткань", {name: "прочная_ткань", meta: 0}, {});
IDRegistry.genItemID("yglerodnoe_volokno");
Item.createItem("yglerodnoe_volokno", "Углеродное волокно", {name: "углеродное_волокно", meta: 0}, {});
IDRegistry.genItemID("medvezhia_shkyra");
Item.createItem("medvezhia_shkyra", "Медвежья шкура", {name: "медвежья_шкура", meta: 0}, {isTech: true});
IDRegistry.genItemID("shgt");
Item.createItem("shgt", "это бесполезная штука выкинь", {name: "ш_плюха", meta: 0}, {isTech: true});
IDRegistry.genItemID("shgtt");
Item.createItem("shgtt", "это бесполезная штука выкинь", {name: "ш_плюха_2", meta: 0}, {isTech: true});
IDRegistry.genItemID("spalnii_nabor");
Item.createItem("spalnii_nabor", "Спальный набор", {name: "спальный_набор", meta: 0}, {});
IDRegistry.genItemID("zyb_payka");
Item.createItem("zyb_payka", "Зуб паука", {name: "зуб_паука", meta: 0}, {});
IDRegistry.genItemID("otravlennii_zyb_payka");
Item.createItem("otravlennii_zyb_payka", "Ядовитый зуб паука", {name: "отравленный_зуб_паука", meta: 0}, {});
IDRegistry.genItemID("knopka_youtube");
IDRegistry.genItemID("ship_drevnego_strazha");
Item.createItem("ship_drevnego_strazha", "Шип древнего стража", {name: "шип_древнего_стража", meta: 0}, {});
IDRegistry.genItemID("ship_strazha");
Item.createItem("ship_strazha", "Шип стража", {name: "шип_стража", meta: 0}, {});
Item.createItem("knopka_youtube", "Кнопка ютуб", {name: "кнопка_ютуб", meta: 0}, {isTech: true});
IDRegistry.genItemID("vodianoi_filtr");
Item.createItem("vodianoi_filtr", "Водяной фильтр", {name: "водяной_фильтр", meta: 0}, {});
IDRegistry.genItemID("ballon_s_vozdyhom");
Item.createItem("ballon_s_vozdyhom", "Баллон с воздухом", {name: "баллон_с_воздухом", meta: 0}, {});
IDRegistry.genItemID("setka_dlia_sita");
Item.createItem("setka_dlia_sita", "Сетка от просеивателя", {name: "сетка_от_просеивателя", meta: 0}, {});
IDRegistry.genItemID("reshetka_dlia_pechki_visokoi_teroystoichivosti");
Item.createItem("reshetka_dlia_pechki_visokoi_teroystoichivosti", "Решётка для термоустойчивой печи", {name: "решётка_для_печки_высокой_термоустойчивости", meta: 0}, {isTech: true});
IDRegistry.genItemID("sozdat_ytky");
Item.createItem("sozdat_ytky", "Создать утку", {name: "создать_утку", meta: 0}, {isTech: true});
IDRegistry.genItemID("sozdka");
Item.createItem("sozdka", "Создать кабана", {name: "создать_кабана", meta: 0}, {});
IDRegistry.genItemID("sozdmz");
Item.createItem("sozdmz", "Создать зараженного монстра", {name: "создать_зараженного_монстра", meta: 0}, {});
IDRegistry.genItemID("sozdm");
Item.createItem("sozdm", "Создать мумию", {name: "создать_мумию", meta: 0}, {});
//еда
IDRegistry.genItemID("sir");
Item.createFoodItem("sir", "Сыр", {name: "сыр", meta: 0}, {food: 3, isTech: true});
IDRegistry.genItemID("semechki");
Item.createFoodItem("semechki", "Семечки", {name: "семечки", meta: 0}, {food: 4});
IDRegistry.genItemID("shocoladnaia_plitka");
Item.createFoodItem("shocoladnaia_plitka", "Шоколадная плитка", {name: "шоколадная_плитка", meta: 0}, {food: 7});
IDRegistry.genItemID("vishnia");
Item.createFoodItem("vishnia", "Вишенка", {name: "вишня", meta: 0}, {Food: 1});
IDRegistry.genItemID("ochishennii_kokos");
Item.createFoodItem("ochishennii_kokos", "Очищенный кокос", {name: "очищенный_кокос", meta: 0}, {Food: 1});
IDRegistry.genItemID("myka");
Item.createFoodItem("myka", "Мука", {name: "мука", meta: 0}, {food: 2});
IDRegistry.genItemID("testo");
Item.createFoodItem("testo", "Тесто", {name: "тесто", meta: 0}, {food: 4});
IDRegistry.genItemID("byterbrod");
Item.createFoodItem("byterbrod", "Бутерброд", {name: "бутерброд", meta: 0}, {food: 16});
IDRegistry.genItemID("siroi_iablochnii_pirog");
Item.createFoodItem("siroi_iablochnii_pirog", "Сырой яблочный пирог", {name: "сырой_яблочный_пирог", meta: 0}, {food: 12});
IDRegistry.genItemID("prigotovlennii_iablochnii_pirog");
Item.createFoodItem("prigotovlennii_iablochnii_pirog", "Приготовленный яблочный пирог", {name: "сырой_яблочный_пирог", meta: 0}, {food: 15});
IDRegistry.genItemID("siroi_vishnevii_pirog");
Item.createFoodItem("siroi_vishnevii_pirog", "Сырой вишневый пирог", {name: "сырой_вишневый_пирог", meta: 0}, {food: 6});
IDRegistry.genItemID("prigotovlennii_vishnevii_pirog");
Item.createFoodItem("prigotovlennii_vishnevii_pirog", "Приготовленный вишневый пирог", {name: "сырой_вишневый_пирог", meta: 0}, {food: 8});
IDRegistry.genItemID("siraia_pitca");
Item.createFoodItem("siraia_pitca", "Сырая пицца", {name: "сырая_пица", meta: 0}, {food: 12});
IDRegistry.genItemID("prigotovlennaia_pitca");
Item.createFoodItem("prigotovlennaia_pitca", "Приготовленная пицца", {name: "приготовленная_пица", meta: 0}, {food: 15});
IDRegistry.genItemID("iaichnitca");
Item.createFoodItem("iaichnitca", "Яичница", {name: "яичница", meta: 0}, {food: 3});
IDRegistry.genItemID("roli");
Item.createFoodItem("roli", "Роллы", {name: "ролы", meta: 0}, {food: 8, isTech: true});
IDRegistry.genItemID("kolbasa");
Item.createFoodItem("kolbasa", "Колбаса", {name: "колбаса", meta: 0}, {food: 5});
IDRegistry.genItemID("siroe_miaso_kraia");
Item.createFoodItem("siroe_miaso_kraia", "Сырое мясо края", {name: "сырое_мясо_края", meta: 0}, {food: 5});
IDRegistry.genItemID("prigotovlennoe_miaso_kraia");
Item.createFoodItem("prigotovlennoe_miaso_kraia", "Приготовленное мясо края", {name: "приготовленное_мясо_края", meta: 0}, {food: 8});
IDRegistry.genItemID("ocishennaia_siraia_riba");
Item.createFoodItem("ocishennaia_siraia_riba", "Сырое мясо рыбы", {name: "очищенная_сырая_рыба", meta: 0}, {food: 4});
IDRegistry.genItemID("ochishennaia_prigotovlennaia_riba");
Item.createFoodItem("ochishennaia_prigotovlennaia_riba", "Приготовленное мясо рыбы", {name: "очищенная_приготовленная_рыба", meta: 0}, {food: 6});
IDRegistry.genItemID("ocishennii_siroi_losos");
Item.createFoodItem("ocishennii_siroi_losos", "Сырое мясо лосося", {name: "очищенный_сырой_лосось", meta: 0}, {food: 4});
IDRegistry.genItemID("ocishennii_prigotovlennii_losos");
Item.createFoodItem("ocishennii_prigotovlennii_losos", "Приготовленное мясо лосося", {name: "очищенный_приготовленный_лосось", meta: 0}, {food: 6});
IDRegistry.genItemID("bezopasnoe_miaso_pibi_fygy");
Item.createFoodItem("bezopasnoe_miaso_pibi_fygy", "Мясо рыбы фугу", {name: "безопасное_мясо_рыбы_фугу", meta: 0}, {food: 4});
IDRegistry.genItemID("prigotovlennoe_miaso_pibi_fygy");
Item.createFoodItem("prigotovlennoe_miaso_pibi_fygy", "Безопасное мясо рыбы фугу", {name: "приготовленное_мясо_рыбы_фугу", meta: 0}, {food: 6});
IDRegistry.genItemID("miska_s_kokosovim_molokom"); 
Item.createFoodItem("miska_s_kokosovim_molokom", "Миска с кокосовым молоком", {name: "миска_с_кокосовым_молоком", meta: 0},{stack: 1,food: 2});
IDRegistry.genItemID("pyzirek_s_molokom"); 
Item.createFoodItem("pyzirek_s_molokom", "Пузырек с молоком", {name: "пузырёк_с_молоком", meta: 0},{stack: 1,food: 0});
IDRegistry.genItemID("pyzirek_s_rasplavlennim_sirom");
Item.createFoodItem("pyzirek_s_rasplavlennim_sirom", "Пузырек с расплавленным сыром", {name: "расплавленный_сыр", meta: 0}, {stack: 1,food: 3});
IDRegistry.genItemID("energetik");
Item.createFoodItem("energetik", "Энергетический напиток", {name: "энергетик", meta: 0}, {food: 1});
const ValidFunc = {

	result: function(){
		return false;
	}

};
//особые функции еды
Callback.addCallback("FoodEaten",function(heal, satRatio)
{
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if(Player.getCarriedItem().id==ItemID.pyzirek_s_molokom)
{
Entity.clearEffects(Player.get());
Player.addItemToInventory (374, 1, 0);
Game.prevent();
}
if(Player.getCarriedItem().id==ItemID.bezopasnoe_miaso_pibi_fygy)
{
Entity.addEffect(Player.get(), 19, 1, 1200)
Entity.addEffect(Player.get(), 9, 2, 800)
Entity.addEffect(Player.get(), 18, 1, 1200)
}
if(Player.getCarriedItem().id==ItemID.pyzirek_s_rasplavlennim_sirom)
{
Player.addItemToInventory (374, 1, 0);
}
if(Player.getCarriedItem().id==ItemID.energetik)
{
Player.addItemToInventory (ItemID.zheleznaia_banka, 1, 0);
Entity.addEffect(Player.get(), 5, 0, 240)
Entity.addEffect(Player.get(), 9, 2, 40)
Entity.addEffect(Player.get(), 8, 0, 320)
Entity.addEffect(Player.get(), 1, 0, 400)
}
if(Player.getCarriedItem().id==ItemID.miska_s_kokosovim_molokom)
{
Player.addItemToInventory (281, 1, 0);
}
if(Player.getCarriedItem().id==ItemID.siroe_miaso_kraia)
{
if(Math.random() < .95){
var pos = Player.getPosition();
Entity.addEffect(Player.get(), 19, 1, 300)
Entity.addEffect(Player.get(), 18, 0, 200)
Player.setPosition(pos.x, pos.y+10, pos.z);
}
}
if(Player.getCarriedItem().id==ItemID.prigotovlennoe_miaso_kraia)
{
if(Math.random() < .8){
var pos = Player.getPosition();
Entity.addEffect(Player.get(), 19, 0, 200)
Entity.addEffect(Player.get(), 18, 0, 100)
Player.setPosition(pos.x, pos.y+5, pos.z);
}
}
if(Player.getCarriedItem().id==ItemID.ocishennaia_siraia_riba)
{
if(Math.random() < .8){
var pos = Player.getPosition();
Entity.addEffect(Player.get(), 19, 0, 200)
}
}
if(Player.getCarriedItem().id==ItemID.ocishennii_siroi_losos)
{
if(Math.random() < .8){
var pos = Player.getPosition();
Entity.addEffect(Player.get(), 19, 0, 200)
}
}
if(Player.getCarriedItem().id==432)
{
if (helmet.id == ItemID.kapushon_drakona_kraia && chest.id == ItemID.kirasa_drakona_kraia && legs.id == ItemID.ponozhi_drakona_kraia && boots.id == ItemID.botinki_drakona_kraia){
    Entity.addEffect(Player.get(),1, 0, 200);
    Entity.addEffect(Player.get(),5, 0, 300);
    Entity.addEffect(Player.get(),10, 1, 100);
    Entity.addEffect(Player.get(),22, 0, 300);
    Entity.addEffect(Player.get(),21, 1, 300);
}
}
});
//функция тапа по мобу
Callback.addCallback("PlayerAttack", function (player, victim)
{
if(Player.getCarriedItem().id==374)
{
if(Entity.getType(victim) == 11)
{
Player.decreaseCarriedItem (1)
Player.addItemToInventory (ItemID.pyzirek_s_molokom, 1, 0);
Game.prevent();
}
}
});




// file: метательные_ножи.js

if(!primal_core){
IDRegistry.genItemID("dereviannii_metatelnii_nozh");
Item.createThrowableItem("dereviannii_metatelnii_nozh", "Деревянный метательный нож", {name: "деревянный_метательный_нож", meta: 0}, {});
}
if(!primal_core){
IDRegistry.genItemID("kamennii_metatelnii_nozh");
Item.createThrowableItem("kamennii_metatelnii_nozh", "Каменный метательный нож", {name: "каменный_метательный_нож", meta: 0}, {});
}
if(primal_core){
IDRegistry.genItemID("dereviannii_metatelnii_nozh");
Item.createThrowableItem("dereviannii_metatelnii_nozh", "Деревянный метательный нож", {name: "деревянный_метательный_нож", meta: 0}, {isTech: true});
}
if(primal_core){
IDRegistry.genItemID("kamennii_metatelnii_nozh");
Item.createThrowableItem("kamennii_metatelnii_nozh", "Каменный метательный нож", {name: "каменный_метательный_нож", meta: 0}, {isTech: true});
}
if(primal_core){
IDRegistry.genItemID("kremnievii_metatelnii_nozh");
Item.createThrowableItem("kremnievii_metatelnii_nozh", "Кремниевый метательный нож", {name: "кремниевый_метательный_нож", meta: 0}, {});
}
if(primal_core){
IDRegistry.genItemID("kostianoi_metatelnii_nozh");
Item.createThrowableItem("kostianoi_metatelnii_nozh", "Костяной метательный нож", {name: "костяной_метательный_нож", meta: 0}, {});
}
IDRegistry.genItemID("zheleznii_metatelnii_nozh");
Item.createThrowableItem("zheleznii_metatelnii_nozh", "Железный метательный нож", {name: "железный_метательный_нож", meta: 0}, {});
IDRegistry.genItemID("stalnoi_metatelnii_nozh");
Item.createThrowableItem("stalnoi_metatelnii_nozh", "Стальной метательный нож", {name: "стальной_метательный_нож", meta: 0}, {});
if(!primal_core){
IDRegistry.genItemID("zolotoi_metatelnii_nozh");
Item.createThrowableItem("zolotoi_metatelnii_nozh", "Золотой метательный нож", {name: "золотой_метательный_нож", meta: 0}, {});
}
if(primal_core){
IDRegistry.genItemID("zolotoi_metatelnii_nozh");
Item.createThrowableItem("zolotoi_metatelnii_nozh", "Золотой метательный нож", {name: "золотой_метательный_нож", meta: 0}, {isTech: true});
}
IDRegistry.genItemID("almaznii_metatelnii_nozh");
Item.createThrowableItem("almaznii_metatelnii_nozh", "Алмазный метательный нож", {name: "алмазный_метательный_нож", meta: 0}, {});
if(primal_core){
IDRegistry.genItemID("obsidianovii_metatelnii_nozh");
Item.createThrowableItem("obsidianovii_metatelnii_nozh", "Обсидиановый метательный нож", {name: "обсидиановый_метательный_нож", meta: 0}, {});
}
if(primal_core){
IDRegistry.genItemID("izymrydnii_metatelnii_nozh");
Item.createThrowableItem("izymrydnii_metatelnii_nozh", "Изумрудный метательный нож", {name: "изумрудный_метательный_нож", meta: 0}, {});
}




// file: мобы.js

var ngo
var mz
var ms
var mc
var m
var o
var s
Item.registerUseFunctionForID(264, function(coords, item, entity){  
var coords = coords.relative;
 s= Entity.spawn(coords.x+0.5, coords.y, coords.z+0.5, 63);
 Entity.setRender(s, 3)
Entity.setSkin(s, "mob/кабан.png")
Entity.setMaxHealth (s, 1)
Entity.setHealth (s, 1)
});
Item.registerUseFunction("sozdmz", function(coords, item, entity){  
var coords = coords.relative;
var lol = parseInt(Math.random() * 3);
if(lol == 0)
{
 mz = Entity.spawn(coords.x+.5, coords.y, coords.z+.5, 32);
Entity.setSkin(mz, "mob/мзомби.png")
Entity.setMaxHealth (mz, 100)
Entity.setHealth (mz, 100)
}
if(lol == 1)
{
 mc = Entity.spawn(coords.x+.5, coords.y, coords.z+.5, 33);
Entity.setSkin(mc, "mob/мкрипер.png")
Entity.setMaxHealth (mc, 100)
Entity.setHealth (mc, 100)
}
if(lol == 2)
{
 ms = Entity.spawn(coords.x+.5, coords.y, coords.z+.5, 34);
Entity.setSkin(ms, "mob/мскелет.png")
Entity.setMaxHealth (ms, 100)
Entity.setHealth (ms, 100)
}
});
Item.registerUseFunction("sozdka", function(coords, item, entity){  
var coords = coords.relative;
 ngo= Entity.spawn(coords.x+0.5, coords.y, coords.z+0.5, 12);
Entity.setSkin(ngo, "mob/кабан.png")
Entity.setMaxHealth (ngo, 34)
Entity.setHealth (ngo, 34)
});
Item.registerUseFunction("otsilka", function(coords, item, entity){  
var coords = coords.relative;
 o= Entity.spawn(coords.x+0.5, coords.y, coords.z+0.5, 33);
Entity.setSkin(o, "mob/крипер(отсылка).png")
Entity.setMaxHealth (o, 999)
Entity.setHealth (o, 999)
});
Item.registerUseFunction("sozdm", function(coords, item, entity){  
var coords = coords.relative;
 m= Entity.spawn(coords.x+0.5, coords.y, coords.z+0.5, 47);
Entity.setSkin(m, "mob/мумия.png")
Entity.setMaxHealth (m, 40)
Entity.setHealth (m, 40)
});
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var ran = parseInt(Math.random() * 61);
    var ra = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+ran, pos.y, pos.z-30,5+ra);
			if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(Math.random() < .0001){
 ngo= Entity.spawn(pos.x, pos.y+1, pos.z, 12);
        Entity.setRender (ngo, 8)
Entity.setSkin(ngo, "mob/кабан.png")
Entity.setMaxHealth (ngo, 34)
Entity.setHealth (ngo, 34)
}
}
});
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var ran = parseInt(Math.random() * 61);
    var ra = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+ran, pos.y, pos.z-30,5+ra);
			if((World.getBlockID(pos.x, pos.y, pos.z) == 12)&&(World.getBlockID(pos.x, pos.y+1, pos.z) == 0)&&(World.getBlockID(pos.x, pos.y+2, pos.z) == 0)&&(World.getBlockData(pos.x, pos.y, pos.z) == 0)){
	if(Math.random() < .0004){
 m= Entity.spawn(pos.x, pos.y+1, pos.z, 47);
Entity.setSkin(m, "mob/мумия.png")
Entity.setMaxHealth (m, 40)
Entity.setHealth (m, 40)
}
}
});
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var ran = parseInt(Math.random() * 61);
    var ra = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+ran, pos.y, pos.z-30,5+ra);
			if(World.getBlockID(pos.x, pos.y, pos.z) == 243){
	if(Math.random() < .0002){
 ngo= Entity.spawn(pos.x, pos.y+1, pos.z, 12);
        Entity.setRender (ngo, 8)
Entity.setSkin(ngo, "mob/кабан.png")
Entity.setMaxHealth (ngo, 40)
Entity.setHealth (ngo, 40)
}
}
});
var drope = null;
ModAPI.addAPICallback("primal_api", function(api){
  drope = api;
});
Callback.addCallback("EntityDeath", function (ent) {
if(ent==ngo)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 2);
        
if (!drope)
{
     World.drop(coords.x, coords.y, coords.z, 334, 1+soul);
}
if (drope)
{
     World.drop(coords.x, coords.y, coords.z, ItemID.pelt_animal, 1+soul);
}
}
if(ent==o)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 64);
        
     World.drop(coords.x, coords.y, coords.z, 264, 1+soul);
}
if(ent==m)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 2);
     var sou = parseInt(Math.random() * 3);
        
    Game.prevent();
     World.drop(coords.x, coords.y, coords.z, 352, 1+soul);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, 1+sou);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_kost, 1+sou);
}
if(ent==mz)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 5);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.meteoritovii_samorodok, 1+soul);
}
if(ent==ms)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 5);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.meteoritovii_samorodok, 1+soul);
}
if(ent==mc)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 5);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.meteoritovii_samorodok, 1+soul);
}
});
var vishnia = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.01){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 200);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in vishnia ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)){
 ngo= Entity.spawn(coords.x, coords.y+1, coords.z, 12);
        Entity.setRender (ngo, 8)
Entity.setSkin(ngo, "mob/кабан.png")
Entity.setMaxHealth (ngo, 34)
Entity.setHealth (ngo, 34)
			}
		}
	}
});
var vishnia = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.025){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 200);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in vishnia ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)){
 ngo= Entity.spawn(coords.x, coords.y+1, coords.z, 12);
        Entity.setRender (ngo, 8)
Entity.setSkin(ngo, "mob/кабан.png")
Entity.setMaxHealth (ngo, 34)
Entity.setHealth (ngo, 34)
			}
		}
	}
});
var vishnia = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.03){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 200);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in vishnia ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)&&(World.getBlockID(coords.x, coords.y+2, coords.z) == 0)){
 m= Entity.spawn(coords.x, coords.y+1, coords.z, 47);
Entity.setSkin(m, "mob/мумия.png")
Entity.setMaxHealth (m, 40)
Entity.setHealth (m, 40)
			}
		}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.06){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 200);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in vishnia ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 24)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)&&(World.getBlockID(coords.x, coords.y+2, coords.z) == 0)){
 m= Entity.spawn(coords.x, coords.y+1, coords.z, 47);
Entity.setSkin(m, "mob/мумия.png")
Entity.setMaxHealth (m, 40)
Entity.setHealth (m, 40)
			}
		}
	}
});




// file: инструменты.js

//материалы
ToolAPI.addToolMaterial("Oshipovannaia_dybina", {durability: 200, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("Ashipovannaia_dybina", {durability: 200, level: 3, efficiency: 6, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("stal", {durability: 351, level: 3, efficiency: 6, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("Oshipovannii_nozh", {durability: 300, level: 3, efficiency: 6, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("Dshipovannii_nozh", {durability: 500, level: 4, efficiency: 6, damage: 5, enchantability: 14});
//инструменты и оружие
//шипованные дубины
IDRegistry.genItemID("shipovannaia_dybina");
Item.createItem("shipovannaia_dybina", "Шипованная дубина", {name: "шипованная_дубина", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.shipovannaia_dybina, true);
ToolAPI.setTool(ItemID.shipovannaia_dybina, "Oshipovannaia_dybina", ToolType.sword);
IDRegistry.genItemID("otravlennaia_shipovannaia_dybina");
Item.createItem("otravlennaia_shipovannaia_dybina", "Ядовитая шипованная дубина", {name: "отравленная_шипованная_дубина", meta: 0}, {stack: 1});//к сожаление покачто мобов не отравляет(а вот теперь отравляет)
Item.setToolRender(ItemID.otravlennaia_shipovannaia_dybina, true);
ToolAPI.setTool(ItemID.otravlennaia_shipovannaia_dybina, "Ashipovannaia_dybina", ToolType.sword);
//ножи с шипами стражей
IDRegistry.genItemID("nozh_s_shipom_drevnego_strazha");
Item.createItem("nozh_s_shipom_drevnego_strazha", "Нож с шипом древнего стража", {name: "нож_с_шипом_древнего_стража", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.nozh_s_shipom_drevnego_strazha, true);
ToolAPI.setTool(ItemID.nozh_s_shipom_drevnego_strazha, "Dshipovannii_nozh", ToolType.sword);
IDRegistry.genItemID("nozh_s_shipom_strazha");
Item.createItem("nozh_s_shipom_strazha", "Нож с шипом стража", {name: "нож_с_шипом_стража", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.nozh_s_shipom_strazha, true);
ToolAPI.setTool(ItemID.nozh_s_shipom_strazha, "Oshipovannii_nozh", ToolType.sword);
IDRegistry.genItemID("tnozh_s_shipom_drevnego_strazha");
Item.createItem("tnozh_s_shipom_drevnego_strazha", "Нож с шипом древнего стража", {name: "т_нож_с_шипом_древнего_стража", meta: 0}, {stack: 1, isTech: true});//аналог обычного ножа но с травяным принтом
Item.setToolRender(ItemID.tnozh_s_shipom_drevnego_strazha, true);
ToolAPI.setTool(ItemID.tnozh_s_shipom_drevnego_strazha, "Dshipovannii_nozh", ToolType.sword);
IDRegistry.genItemID("tnozh_s_shipom_strazha");
Item.createItem("tnozh_s_shipom_strazha", "Нож с шипом стража", {name: "т_нож_с_шипом_стража", meta: 0}, {stack: 1, isTech: true});//аналог обычного ножа но с травяным принтом
Item.setToolRender(ItemID.tnozh_s_shipom_strazha, true);
ToolAPI.setTool(ItemID.tnozh_s_shipom_strazha, "Oshipovannii_nozh", ToolType.sword);
//стальные интрументы
if(!primal_core){
IDRegistry.genItemID("stalnoi_mech");
Item.createItem("stalnoi_mech", "Стальной меч", {name: "стальной_меч", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.stalnoi_mech, true);
ToolAPI.setTool(ItemID.stalnoi_mech, "stal", ToolType.sword);
}
IDRegistry.genItemID("stalnaia_motiga");
Item.createItem("stalnaia_motiga", "Стальная мотыга", {name: "стальная_мотыга", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.stalnaia_motiga, true);
ToolAPI.setTool(ItemID.stalnaia_motiga, "stal", ToolType.hoe);
IDRegistry.genItemID("stalnaia_lopata");
Item.createItem("stalnaia_lopata", "Стальная лопата", {name: "стальная_лопата", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.stalnaia_lopata, true);
ToolAPI.setTool(ItemID.stalnaia_lopata, "stal", ToolType.shovel);
IDRegistry.genItemID("stalnaia_kircka");
Item.createItem("stalnaia_kircka", "Стальная кирка", {name: "стальная_кирка", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.stalnaia_kircka, true);
ToolAPI.setTool(ItemID.stalnaia_kircka, "stal", ToolType.pickaxe);
IDRegistry.genItemID("stalnoi_topor");
Item.createItem("stalnoi_topor", "Стальной топор", {name: "стальной_топор", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.stalnoi_topor, true);
ToolAPI.setTool(ItemID.stalnoi_topor, "stal", ToolType.axe);
//эффекты оружия
Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.otravlennaia_shipovannaia_dybina){ 
Entity.addEffect(victim, 19, 0, 100, false,false); 
 } 
else if(Entity.getType(victim) == 28){
var coords = Entity.getPosition(victim);
if(World.getBlockID(coords.x,coords.y,coords.z)!==0)
{
    Entity.addEffect(victim, 13, 0, 99999999999999)
    Game.prevent();
   }
if(World.getBlockID(coords.x,coords.y,coords.z)==0)
{
PlayBlockSound();
}
 } 
});




// file: броня.js

IDRegistry.genItemID("gniloi_tkanevii_shlem");
Item.createArmorItem("gniloi_tkanevii_shlem", "Ветхий капюшон", {name: "гнилой_тканевый_шлем"}, {type:"helmet", armor: 1, durability: 35, texture: "armor/гнилая_тканевая_броня_0.png"});
IDRegistry.genItemID("gnilaia_tkanevaia_kyrtka");
Item.createArmorItem("gnilaia_tkanevaia_kyrtka", "Ветхая накидка", {name: "гнилая_тканевая_куртка"}, {type:"chestplate", armor: 3, durability: 50, texture: "armor/гнилая_тканевая_броня_0.png"});
IDRegistry.genItemID("tgnilaia_tkanevaia_kyrtka");
Item.createArmorItem("tgnilaia_tkanevaia_kyrtka", "Ветхая накидка", {name: "т_гнилая_тканевая_куртка"}, {type:"chestplate", armor: 3, durability: 50, texture: "armor/т_гнилая_тканевая_броня_0.png", isTech: true});
IDRegistry.genItemID("gnilie_tkanevie_ponozhi");
Item.createArmorItem("gnilie_tkanevie_ponozhi", "Ветхие поножи", {name: "гнилые_тканевые_поножи"}, {type:"leggings", armor: 2, durability: 45, texture: "armor/гнилая_тканевая_броня_1.png"});
IDRegistry.genItemID("gnilie_tkanevie_botinki");
Item.createArmorItem("gnilie_tkanevie_botinki", "Ветхие ботинки", {name: "гнилые_тканевые_ботинки"}, {type:"boots", armor: 1, durability: 30, texture: "armor/гнилая_тканевая_броня_0.png"});
IDRegistry.genItemID("mehovoi_kapushon");
Item.createArmorItem("mehovoi_kapushon", "Меховой капюшон", {name: "меховой_капюшон"}, {type:"helmet", armor: 1, durability: 55, texture: "armor/меховая_броня_0.png"});
IDRegistry.genItemID("mehovaia_kyrtka");
Item.createArmorItem("mehovaia_kyrtka", "Меховая куртка", {name: "меховая_куртка"}, {type:"chestplate", armor: 3, durability: 80, texture: "armor/меховая_броня_0.png"});
IDRegistry.genItemID("mehovie_ponozhi");
Item.createArmorItem("mehovie_ponozhi", "Меховые поножи", {name: "меховые_поножи"}, {type:"leggings", armor: 2, durability: 75, texture: "armor/меховая_броня_1.png"});
IDRegistry.genItemID("mehovie_botinki");
Item.createArmorItem("mehovie_botinki", "Меховые ботинки", {name: "меховые_ботинки"}, {type:"boots", armor: 1, durability: 65, texture: "armor/меховая_броня_0.png"});
IDRegistry.genItemID("prochnii_tkanevii_shlem");
Item.createArmorItem("prochnii_tkanevii_shlem", "Прочный тканевый капюшон", {name: "прочный_тканевый_шлем"}, {type:"helmet", armor: 2, durability: 100, texture: "armor/прочная_тканевая_броня_0.png"});
IDRegistry.genItemID("prochnaia_tkanevaia_kyrtka");
Item.createArmorItem("prochnaia_tkanevaia_kyrtka", "Прочная тканевая куртка", {name: "прочная_тканевая_куртка"}, {type:"chestplate", armor: 5, durability: 160, texture: "armor/прочная_тканевая_броня_0.png"});
IDRegistry.genItemID("prochnie_tkanevie_ponozhi");
Item.createArmorItem("prochnie_tkanevie_ponozhi", "Прочные тканевые поножи", {name: "прочные_тканевые_поножи"}, {type:"leggings", armor: 4, durability: 140, texture: "armor/прочная_тканевая_броня_1.png"});
IDRegistry.genItemID("prochnie_tkanevie_botinki");
Item.createArmorItem("prochnie_tkanevie_botinki", "Прочные тканевые ботинки", {name: "прочные_тканевые_ботинки"}, {type:"boots", armor: 1, durability: 90, texture: "armor/прочная_тканевая_броня_0.png"});
IDRegistry.genItemID("adskii_shlem");
Item.createArmorItem("adskii_shlem", "Адский шлем", {name: "адский_шлем"}, {type:"helmet", armor: 2, durability: 150, texture: "armor/адская_броня_0.png"});
IDRegistry.genItemID("adskaia_kirasa");
Item.createArmorItem("adskaia_kirasa", "Адская кираса", {name: "адская_кираса"}, {type:"chestplate", armor: 6, durability: 220, texture: "armor/адская_броня_0.png"});
IDRegistry.genItemID("adskie_ponozhi");
Item.createArmorItem("adskie_ponozhi", "Адские поножи", {name: "адские_поножи"}, {type:"leggings", armor: 5, durability: 210, texture: "armor/адская_броня_1.png"});
IDRegistry.genItemID("adskie_botinki");
Item.createArmorItem("adskie_botinki", "Адские ботинки", {name: "адские_ботинки"}, {type:"boots", armor: 2, durability: 180, texture: "armor/адская_броня_0.png"});
IDRegistry.genItemID("stalnoi_shlem");
Item.createArmorItem("stalnoi_shlem", "Стальной шлем", {name: "стальной_шлем"}, {type:"helmet", armor: 2, durability: 270, texture: "armor/стальная_броня_0.png"});
IDRegistry.genItemID("stalnaia_kirasa");
Item.createArmorItem("stalnaia_kirasa", "Стальная кираса", {name: "стальная_кираса"}, {type:"chestplate", armor: 6, durability: 320, texture: "armor/стальная_броня_0.png"});
IDRegistry.genItemID("stalnie_ponozhi");
Item.createArmorItem("stalnie_ponozhi", "Стальные поножи", {name: "стальные_поножи"}, {type:"leggings", armor: 5, durability: 300, texture: "armor/стальная_броня_1.png"});
IDRegistry.genItemID("stalnie_botinki");
Item.createArmorItem("stalnie_botinki", "Стальные ботинки", {name: "стальные_ботинки"}, {type:"boots", armor: 2, durability: 270, texture: "armor/стальная_броня_0.png"});
IDRegistry.genItemID("kapushon_drakona_kraia");
Item.createArmorItem("kapushon_drakona_kraia", "Капюшон дракона края", {name: "капюшон_дракона_края"}, {type:"helmet", armor: 6, durability: 400, texture: "armor/броня_дракона_края_0.png"});
IDRegistry.genItemID("kirasa_drakona_kraia");
Item.createArmorItem("kirasa_drakona_kraia", "Кираса дракона края", {name: "кираса_дракона_края"}, {type:"chestplate", armor: 5, durability: 560, texture: "armor/броня_дракона_края_0.png"});
IDRegistry.genItemID("ponozhi_drakona_kraia");
Item.createArmorItem("ponozhi_drakona_kraia", "Поножи дракона края", {name: "поножи_дракона_края"}, {type:"leggings", armor: 6, durability: 525, texture: "armor/броня_дракона_края_1.png"});
IDRegistry.genItemID("botinki_drakona_kraia");
Item.createArmorItem("botinki_drakona_kraia", "Ботинки дракона края", {name: "ботинки_дракона_края"}, {type:"boots", armor: 3, durability: 470, texture: "armor/броня_дракона_края_0.png"});
IDRegistry.genItemID("vodolasnii_shlem");
Item.createArmorItem("vodolasnii_shlem", "Дайверский шлем", {name: "водолазный_шлем"}, {type:"helmet", armor: 2, durability: 250, texture: "armor/броня_дайвера_0.png"});
IDRegistry.genItemID("balloni_s_vozdyhom");
Item.createArmorItem("balloni_s_vozdyhom", "Дайверская куртка", {name: "дайверская_куртка"}, {type:"chestplate", armor: 5, durability: 380, texture: "armor/броня_дайвера_0.png"});
IDRegistry.genItemID("daiverskie_ponozshi");
Item.createArmorItem("daiverskie_ponozshi", "Дайверские поножи", {name: "дайверские_поножи"}, {type:"leggings", armor: 4, durability: 355, texture: "armor/броня_дайвера_1.png"});
IDRegistry.genItemID("stalnie_lasti");
Item.createArmorItem("stalnie_lasti", "Стальные ласты", {name: "стальные_ласты"}, {type:"boots", armor: 2, durability: 300, texture: "armor/броня_дайвера_0.png"});
IDRegistry.genItemID("almaznie_lasti");
Item.createArmorItem("almaznie_lasti", "Алмазные ласты", {name: "алмазные_ласты"}, {type:"boots", armor: 3, durability: 400, texture: "armor/броня_дайвера_2.png"});
//особые функции брони
Callback.addCallback("tick", function(){		if (World.getThreadTime() % 20 == 0){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if(World.getBlockID(pos.x,pos.y,pos.z)!==8)
{
if(World.getBlockID(pos.x,pos.y,pos.z)!==9)
{
if (helmet.id == ItemID.vodolasnii_shlem && chest.id == ItemID.balloni_s_vozdyhom && legs.id == ItemID.daiverskie_ponozshi && boots.id == ItemID.stalnie_lasti){
    Entity.addEffect(Player.get(), 13, 0, 1810)
   }
if (helmet.id == ItemID.vodolasnii_shlem && chest.id == ItemID.balloni_s_vozdyhom && legs.id == ItemID.daiverskie_ponozshi && boots.id == ItemID.almaznie_lasti){
    Entity.addEffect(Player.get(), 13, 0, 1810)
   }
}
}
if(World.getBlockID(pos.x,pos.y-1,pos.z)!==8)
{
if(World.getBlockID(pos.x,pos.y-1,pos.z)!==9)
{
if (boots.id == ItemID.stalnie_lasti){
    Entity.addEffect(Player.get(), 2, 0, 25)
}
if (boots.id == ItemID.almaznie_lasti){
    Entity.addEffect(Player.get(), 2, 0, 25)
}
}
}
if(World.getBlockID(pos.x,pos.y-1,pos.z)==(8))
{
if (boots.id == ItemID.stalnie_lasti){
    Entity.addEffect(Player.get(), 1, 0, 25)
}
if (boots.id == ItemID.almaznie_lasti){
    Entity.addEffect(Player.get(), 1, 1, 25)
}
}
if(World.getBlockID(pos.x,pos.y-1,pos.z)==(9))
{
if (boots.id == ItemID.stalnie_lasti){
    Entity.addEffect(Player.get(), 1, 0, 25)
}
if (boots.id == ItemID.almaznie_lasti){
    Entity.addEffect(Player.get(), 1, 1, 25)
}
}
if(World.getBlockID(pos.x,pos.y-1,pos.z)==0)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==6)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==26)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==27)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==32)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==31)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==30)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==28)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==34)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==37)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==38)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==39)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==44)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==40)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==59)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==55)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==51)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==50)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==63)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==64)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==65)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==66)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==67)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==68)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==69)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==70)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==71)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==72)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==75)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==76)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==77)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==78)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==83)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==84)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==85)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==90)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==92)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==93)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==94)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==95)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==96)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==101)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==102)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==104)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==105)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==106)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==107)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==108)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==109)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==111)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==113)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==114)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==115)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==116)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==117)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==118)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==119)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==120)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==126)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==127)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==128)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==131)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==132)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==134)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==135)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==136)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==137)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==138)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==139)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==140)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==141)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==142)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==143)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==144)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==145)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==146)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==147)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==148)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==149)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==150)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==151)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==154)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==156)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==158)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==163)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==164)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==167)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==171)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==166)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==175)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==176)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==177)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==178)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==180)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==182)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==183)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==184)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==185)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==186)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==187)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==193)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==194)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==195)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==196)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==197)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==199)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==244)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==250)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==BlockID.pal)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==BlockID.kamni)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==BlockID.kamn)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==BlockID.kam)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==BlockID.avishnia)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==BlockID.kokos)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==BlockID.drevesina_vishni)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==BlockID.sazhenetc_vishni)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
if(World.getBlockID(pos.x,pos.y-1,pos.z)==BlockID.sazhenetc_palmi)
{
if (helmet.id == ItemID.adskii_shlem && chest.id == ItemID.adskaia_kirasa && legs.id == ItemID.adskie_ponozhi && boots.id == ItemID.adskie_botinki){
    Entity.addEffect(Player.get(),12, 0, 910);
   }
   }
}
});
Callback.addCallback("tick", function()
{
		if (World.getThreadTime() % 20 == 0){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
for(var xx = -2; xx <= 2; xx++)
{
for(var yy = -2; yy <= 2; yy++)
{
for(var zz = -2; zz <= 2; zz++)
{
if(World.getBlockID(pos.x+xx, pos.y+yy, pos.z+zz) == 9)
{
if (helmet.id == ItemID.kapushon_drakona_kraia && chest.id == ItemID.kirasa_drakona_kraia && legs.id == ItemID.ponozhi_drakona_kraia && boots.id == ItemID.botinki_drakona_kraia)
{
    Entity.addEffect(Player.get(), 18, 0, 100)
    Entity.addEffect(Player.get(), 9, 1, 100)
    Entity.addEffect(Player.get(), 2, 0, 100)
   }
}
}
}
}
}
});




// file: сито.js

//тип сита
var SITO = Block.createSpecialType({
	base: 5,
	solid: true,
	destroytime: 2,
	renderlayer: 6,
	opaque: true
});
//блок сита
function createSitoRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 0, 0, 2/16, 14/16, 2/16,  idMaterial, dataMaterial);
model.addBox (14/16, 0, 0, 1, 14/16, 2/16,  idMaterial, dataMaterial);
model.addBox (0, 0, 14/16, 2/16, 14/16, 1,  idMaterial, dataMaterial);
model.addBox (14/16, 0, 14/16, 1, 14/16, 1,  idMaterial, dataMaterial);
model.addBox (0, 14/16, 0, 2/16, 1, 1,  idMaterial, dataMaterial);
model.addBox (14/16, 14/16, 0, 1, 1, 1,  idMaterial, dataMaterial);
model.addBox (2/16, 14/16, 0, 14/16, 1, 2/16,  idMaterial, dataMaterial);
model.addBox (2/16, 14/16, 14/16, 14/16, 1, 1,  idMaterial, dataMaterial);//1/16=6.25
model.addBox (2/16, 0.93, 2/16, 14/16, 0.929, 14/16,  BlockID.sito1,0);
render.addEntry(model);
}
IDRegistry.genBlockID("sito1");
Block.createBlock("sito1", [{name: "Просеиватель из дубовых досок", texture: [["сито_из_дубовых_досок", 0], ["сито_из_дубовых_досок", 0], ["сито_из_дубовых_досок", 0], ["сито_из_дубовых_досок", 0], ["сито_из_дубовых_досок", 0], ["сито_из_дубовых_досок", 0]], inCreative: false}], SITO);
createFurnitureWood("sito","сито_из_дубовых_досок","planks",0, "Просеиватель из дуба", ItemID.sito, BlockID.sito,0);
createFurnitureWood("sit","просеиватель_из_сосны","planks",0, "Просеиватель из сосны", ItemID.sit, BlockID.sit,0);
createFurnitureWood("si","просеиватель_из_берёзы","planks",0, "Просеиватель из березы", ItemID.si, BlockID.si,0);
createFurnitureWood("s","просеиватель_из_тропического_дерева","planks",0, "Просеиватель из тропического дерева", ItemID.s, BlockID.s,0);
createFurnitureWood("i","просеиватель_из_акации","planks",0, "Просеиватель из акации", ItemID.i, BlockID.i,0);
createFurnitureWood("t","просеиватель_из_тёмного_дуба","planks",0, "Просеиватель из темного дуба", ItemID.t, BlockID.t,0);
createSitoRender(BlockID.sito, 5, 0);
createSitoRender(BlockID.sit, 5, 1);
createSitoRender(BlockID.si, 5, 2);
createSitoRender(BlockID.s, 5, 3);
createSitoRender(BlockID.i, 5, 4);
createSitoRender(BlockID.t, 5, 5);
Item.registerUseFunction("sit", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.sit);
Player.decreaseCarriedItem (1)
}
});
Item.registerUseFunction("sito", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.sito);
Player.decreaseCarriedItem (1)
}
});
Item.registerUseFunction("si", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.si);
Player.decreaseCarriedItem (1)
}
});
Item.registerUseFunction("s", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.s);
Player.decreaseCarriedItem (1)
}
});
Item.registerUseFunction("i", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.i);
Player.decreaseCarriedItem (1)
}
});
Item.registerUseFunction("t", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.t);
Player.decreaseCarriedItem (1)
}
});
var guiSou = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Просеиватель(Sifter)"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 510, y: 150, bitmap: "furnace_bar_backgroun", scale: 3.2},
		{type: "bitmap", x: 440, y: 235, bitmap: "furnace_bar_backgroun", scale: 3.2},
          {type: "bitmap", x: 520, y: 200, bitmap: "water_0", scale: 3.2},
          {type: "bitmap", x: 492, y: 137, bitmap: "bur_0", scale: 3.2},
	],
	
	elements: {
          "scaleBurn": {type: "scale", x: 490, y: 135, direction: 1, value: 0, bitmap: "bur_1", scale: 3.2},
		"progressScale": {type: "scale", x: 510, y: 150, direction: 0, value: 0.5, bitmap: "просеивание", scale: 3.2},
		"progresScale": {type: "scale", x: 440, y: 235, direction: 0, value: 0.5, bitmap: "вада", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 146, bitmap: "Gorst"},
          "slotFuel": {type: "slot", x: 371, y: 230},
          "scalewater": {type: "scale", x: 2000, y: 200, direction: 1, value: 0, bitmap: "water_1", scale: 3.2},
          "scalekapli": {type: "scale", x: 515, y: 110, direction: 1, value: 0, bitmap: "капли_1", scale: 3.2},
	}
});
const regSito=function(id){
TileEntity.registerPrototype(BlockID[id], {
	init:function(){
	this.animationDo = new Animation.Item(this.x+.5, this.y+1, this.z+.5);
	this.animationD = new Animation.Item(this.x+.5, this.y+1/32, this.z+.5);
      this.liquidStorage.setLimit("water", 4);
	},
	
	defaultValues: {
      max: 0,
      burn: 0,
      progress: 0
	},
	
	getGuiScreen: function(){
		return guiSou;
	},
	
    addTransportedItem: function(self, item){
      let add = 0;
      const s = this.container.getSlot("slotSource"+n);
      const f = this.container.getSlot("slotFuel"+n);
      if(Recipes.getFuelBurnDuration(item.id, item.data)){
        if(this.checkUp(f, item)){
          add = Math.min(item.count, 64-f.count);
          f.id = item.id;
          f.data = item.data;
          f.count += add;
          item.count -= add;
          if(!item.count)return;
        }
      }
      else if(this.checkUp(s, item)){
        add = Math.min(item.count, 64-s.count);
        s.id = item.id;
        s.data = item.data;
        s.count += add;
        item.count -= add;
        if(!item.count)return;
      }
    },
tick:function(){
      const scare = this.data.burn/this.data.max;
      this.container.setScale("scaleBurn", isNaN(scare)?0:scare);
      this.container.setScale("scalewater", this.liquidStorage.getAmount("water")/4);
      const s1 = this.container.getSlot("slotSource");
      const f1 = this.container.getSlot("slotFuel");
      const content = this.container.getGuiContent();
      const liquid = this.container.getSlot("slotFuel");
      if(content){
        content.drawing[4].x = content.elements.scalewater.x = liquid?520:2000;        
      }
      let empty;
      if(liquid){
		this.container.setScale("progresScale", this.data.progres / 10);
        if(LiquidRegistry.getItemLiquid(f1.id, f1.data) == "water" && this.liquidStorage.getAmount("water") <= 3){
	if(this.data.progres++ >= 10)
{
          empty=LiquidRegistry.getEmptyItem(f1.id, f1.data);
          this.liquidStorage.addLiquid("water", 1);
          this.data.progres = 0;
          f1.id = empty.id;
          f1.data = empty.data;
          this.container.validateAll();
        }
			}
		else {
			this.data.progres = 0;
}
      }
      else this.liquidStorage.setAmount("water", 0);

      if(this.data.burn > 0)this.data.burn -= speed;
      else{
        if(this.data.max){
          this.data.max = 0;
          BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
        }
var eggId = this.container.getSlot("slotSource");
			if(eggId.id!=0){
				this.animationDo.describeItem({
			id: eggId.id,
			count: 1,
			data: eggId.data,
			size: .75,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDo.load();
			}else {
				this.animationDo.destroy();
			}
var eggI = this.container.getSlot("slotFuel");
			if(eggI.id!=0){
				this.animationD.describeItem({
			id: eggI.id,
			count: 1,
			data: eggI.data,
			size: .75,
			rotation:[3.14/2, 0, 0]
		});
		this.animationD.load();
			}else {
				this.animationD.destroy();
			}
		if((eggId.id !== ItemID.gorst_peska) && (eggId.id !== ItemID.gorst_graviia) && (eggId.id !== ItemID.gorst_zemli))
		{
this.data.progress = 0;
}
var vezenie = parseInt(Math.random() * 2);
	if(this.liquidStorage.getAmount("water") >= 0.1)
{
		if((eggId.id == ItemID.gorst_peska) && this.data.progress++ >= 20)
		{
var ran = parseInt(Math.random() * 2);
if(ran == 0)
{
eggId.count--;
}
if(ran == 1)
{
var random = parseInt(Math.random() * 15);
if(random == 0)
{
eggId.count--;
}
if(random == 1)
{
eggId.count--;
}
if(random == 2)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 367, 1, 0);
}
if(random == 3)
{
eggId.count--;
}
if(random == 4)
{
eggId.count--;
}
if(random == 5)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_tkan, 1, 0);
}
if(random == 6)
{
eggId.count--;
}
if(random == 7)
{
eggId.count--;
}
if(random == 8)
{
eggId.count--;
}
if(random == 9)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_nit, 1, 0);
}
if(random == 10)
{
eggId.count--;
}
if(random == 11)
{
eggId.count--;
}
if(random == 12)
{
eggId.count--;
}
if(random == 13)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_kost, 1, 0);
}
if(random == 14)
{
var vesh = parseInt(Math.random() * 33);
if(vesh == 0)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 287, 1, 0);
}
if(vesh == 1)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(vesh == 2)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 288, 1, 0);
}
if(vesh == 3)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 339, 1, 0);
}
if(vesh == 4)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 295, 1, 0);
}
if(vesh == 5)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 361, vezenie, 0);
}
if(vesh == 6)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 458, vezenie, 0);
}
if(vesh == 7)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 362, vezenie, 0);
}
if(vesh == 8)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 371, 1, 0);
}
if(vesh == 9)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 295, 1, 0);
}
if(vesh == 10)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 352, vezenie, 0);
}
if(vesh == 11)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 262, vezenie, 0);
}
if(vesh == 12)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 367, 1, 0);
}
if(vesh == 13)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.kamni, 1, 0);
}
if(vesh == 14)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.almaznii_samorodok, vezenie, 0);
}
if(vesh == 15)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.slomannaia_palka, 1, 0);
}
if(vesh == 16)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.kyski_bymagi, 1, 0);
}
if(vesh == 17)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.slomannaia_strela, 1, 0);
}
if(vesh == 18)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.zheleznii_samorodok, 1, 0);
}
if(vesh == 19)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.izymrydnii_samorodok, vezenie, 0);
}
if(vesh == 20)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.oscolok_cremnia, vezenie, 0);
}
if(vesh == 21)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.kolchyzhnoe_koltco, vezenie, 0);
}
if(vesh == 22)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.igla, vezenie, 0);
}
if(vesh == 23)
{
eggId.count--;
}
if(vesh == 24)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_tkan, 1, 0);
}
if(vesh == 25)
{
eggId.count--;
}
if(vesh == 26)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.verevka, vezenie, 0);
}
if(vesh == 27)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.zyb_payka, vezenie, 0);
}
if(vesh == 28)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_nit, 1, 0);
}
if(vesh == 29)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_kost, 1, 0);
}
if(vesh == 30)
{
eggId.count--;
}
if(vesh == 31)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.chastitca_yglia, 1, 0);
}
if(vesh == 32)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.meteoritovii_samorodok, vezenie, 0);
}
}
}
this.liquidStorage.getLiquid("water", .1);
this.container.validateAll();
this.data.progress = 0;
			}
		if((eggId.id == ItemID.gorst_zemli) && this.data.progress++ >= 20)
		{
var ran = parseInt(Math.random() * 2);
if(ran == 0)
{
eggId.count--;
}
if(ran == 1)
{
var random = parseInt(Math.random() * 15);
if(random == 0)
{
eggId.count--;
}
if(random == 1)
{
eggId.count--;
}
if(random == 2)
{
eggId.count--;
}
if(random == 3)
{
eggId.count--;
}
if(random == 4)
{
eggId.count--;
}
if(random == 5)
{
eggId.count--;
}
if(random == 6)
{
eggId.count--;
}
if(random == 7)
{
eggId.count--;
}
if(random == 8)
{
eggId.count--;
}
if(random == 9)
{
eggId.count--;
}
if(random == 10)
{
eggId.count--;
}
if(random == 11)
{
eggId.count--;
}
if(random == 12)
{
eggId.count--;
}
if(random == 13)
{
eggId.count--;
}
if(random == 14)
{
var vesh = parseInt(Math.random() * 33);
if(vesh == 0)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 287, 1, 0);
}
if(vesh == 1)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(vesh == 2)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 288, 1, 0);
}
if(vesh == 3)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 339, 1, 0);
}
if(vesh == 4)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 295, 1, 0);
}
if(vesh == 5)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 361, vezenie, 0);
}
if(vesh == 6)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 458, vezenie, 0);
}
if(vesh == 7)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 362, vezenie, 0);
}
if(vesh == 8)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 371, 1, 0);
}
if(vesh == 9)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 295, 1, 0);
}
if(vesh == 10)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 352, vezenie, 0);
}
if(vesh == 11)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 262, vezenie, 0);
}
if(vesh == 12)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 367, 1, 0);
}
if(vesh == 13)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.kamni, 1, 0);
}
if(vesh == 14)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.almaznii_samorodok, vezenie, 0);
}
if(vesh == 15)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.slomannaia_palka, 1, 0);
}
if(vesh == 16)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.kyski_bymagi, 1, 0);
}
if(vesh == 17)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.slomannaia_strela, 1, 0);
}
if(vesh == 18)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.zheleznii_samorodok, 1, 0);
}
if(vesh == 19)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.izymrydnii_samorodok, vezenie, 0);
}
if(vesh == 20)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.oscolok_cremnia, vezenie, 0);
}
if(vesh == 21)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.kolchyzhnoe_koltco, vezenie, 0);
}
if(vesh == 22)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.igla, vezenie, 0);
}
if(vesh == 23)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.vodianoi_filtr, vezenie, 0);
}
if(vesh == 24)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_tkan, 1, 0);
}
if(vesh == 25)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.trava, 1, 0);
}
if(vesh == 26)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.verevka, vezenie, 0);
}
if(vesh == 27)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.zyb_payka, vezenie, 0);
}
if(vesh == 28)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_nit, 1, 0);
}
if(vesh == 29)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_kost, 1, 0);
}
if(vesh == 30)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.travianaia_nit, 1, 0);
}
if(vesh == 31)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.chastitca_yglia, 1, 0);
}
if(vesh == 32)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.meteoritovii_samorodok, vezenie, 0);
}
}
}
this.liquidStorage.getLiquid("water", .1);
this.container.validateAll();
this.data.progress = 0;
			}
		if((eggId.id == ItemID.trava) && this.data.progress++ >= 20)
		{
var ran = parseInt(Math.random() * 2);
if(ran == 0)
{
eggId.count--;
}
if(ran == 1)
{
var random = parseInt(Math.random() * 10);
if(random == 0)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 295, 1, 0);
}
if(random == 1)
{
eggId.count--;
}
if(random == 2)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 361, vezenie, 0);
}
if(random == 3)
{
eggId.count--;
}
if(random == 4)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 362, vezenie, 0);
}
if(random == 5)
{
eggId.count--;
}
if(random == 6)
{
eggId.count--;
}
if(random == 7)
{
eggId.count--;
}
if(random == 8)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 458, vezenie, 0);
}
if(random == 9)
{
eggId.count--;
}
}
this.liquidStorage.getLiquid("water", .1);
this.container.validateAll();
this.data.progress = 0;
			}
		if((eggId.id == ItemID.gorst_graviia) && this.data.progress++ >= 20)
		{
var ran = parseInt(Math.random() * 2);
if(ran == 0)
{
eggId.count--;
}
if(ran == 1)
{
var random = parseInt(Math.random() * 15);
if(random == 0)
{
eggId.count--;
}
if(random == 1)
{
eggId.count--;
}
if(random == 2)
{
eggId.count--;
}
if(random == 3)
{
eggId.count--;
}
if(random == 4)
{
eggId.count--;
}
if(random == 5)
{
eggId.count--;
}
if(random == 6)
{
eggId.count--;
}
if(random == 7)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.oscolok_cremnia, 1, 0);
}
if(random == 8)
{
eggId.count--;
}
if(random == 9)
{
eggId.count--;
}
if(random == 10)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.oscolok_cremnia, 1, 0);
}
if(random == 11)
{
eggId.count--;
}
if(random == 12)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.oscolok_cremnia, 1, 0);
}
if(random == 13)
{
eggId.count--;
}
if(random == 14)
{
var vesh = parseInt(Math.random() * 33);
if(vesh == 0)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 287, 1, 0);
}
if(vesh == 1)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(vesh == 2)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 288, 1, 0);
}
if(vesh == 3)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 339, 1, 0);
}
if(vesh == 4)
{
eggId.count--;
}
if(vesh == 5)
{
eggId.count--;
}
if(vesh == 6)
{
eggId.count--;
}
if(vesh == 7)
{
eggId.count--;
}
if(vesh == 8)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 371, 1, 0);
}
if(vesh == 9)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 295, vezenie, 0);
}
if(vesh == 10)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 352, 1, 0);
}
if(vesh == 11)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 262, vezenie, 0);
}
if(vesh == 12)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 367, 1, 0);
}
if(vesh == 13)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.kamni, 1, 0);
}
if(vesh == 14)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.almaznii_samorodok, 1, 0);
}
if(vesh == 15)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.slomannaia_palka, 1, 0);
}
if(vesh == 16)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.kyski_bymagi, 1, 0);
}
if(vesh == 17)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.slomannaia_strela, 1, 0);
}
if(vesh == 18)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.zheleznii_samorodok, 1, 0);
}
if(vesh == 19)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.izymrydnii_samorodok, 1, 0);
}
if(vesh == 20)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.oscolok_cremnia, vezenie, 0);
}
if(vesh == 21)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.kolchyzhnoe_koltco, vezenie, 0);
}
if(vesh == 22)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.igla, vezenie, 0);
}
if(vesh == 23)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.vodianoi_filtr, vezenie, 0);
}
if(vesh == 24)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_tkan, 1, 0);
}
if(vesh == 25)
{
eggId.count--;
}
if(vesh == 26)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.verevka, vezenie, 0);
}
if(vesh == 27)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.zyb_payka, vezenie, 0);
}
if(vesh == 28)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_nit, 1, 0);
}
if(vesh == 29)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.gnilaia_kost, 1, 0);
}
if(vesh == 30)
{
eggId.count--;
}
if(vesh == 31)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.chastitca_yglia, 1, 0);
}
if(vesh == 32)
{
eggId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, ItemID.meteoritovii_samorodok, vezenie, 0);
}
}
}
this.liquidStorage.getLiquid("water", .1);
this.container.validateAll();
this.data.progress = 0;
			}
			}
		else {
			this.data.progress = 0;
}
		this.container.setScale("progressScale", this.data.progress / 20);
}
}
});
};
regSito("sito");
regSito("sit");
regSito("si");
regSito("s");
regSito("i");
regSito("t");




// file: ткацкий_станок.js

var start = 0;
createFurnitureWood("tk","ткацкий_станок_из_дуба","planks",0, "Ткацкий станок из дуба", ItemID.tk, BlockID.tk,0);
createFurnitureWood("tks","ткацкий_станок_из_сосны","planks",0, "Ткацкий станок из сосны", ItemID.tks, BlockID.tks,0);
createFurnitureWood("tkb","ткацкий_станок_из_берёзы","planks",0, "Ткацкий станок из березы", ItemID.tkb, BlockID.tkb,0);
createFurnitureWood("tktr","ткацкий_станок_из_тропического_дерева","planks",0, "Ткацкий станок из тропического дерева", ItemID.tktr, BlockID.tktr,0);
createFurnitureWood("tka","ткацкий_станок_из_акации","planks",0, "Ткацкий станок из акации", ItemID.tka, BlockID.tka,0);
createFurnitureWood("tktd","ткацкий_станок_из_тёмного_дуба","planks",0, "Ткацкий станок из темного дуба", ItemID.tktd, BlockID.tktd,0);
function createTkRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 0, 0, 1, 9/16, 1/16,  idMaterial, dataMaterial);
model.addBox (1/16, 0, 1/16, 15/16, 8/16, 15/16,  idMaterial, dataMaterial);
model.addBox (0, 0, 15/16, 1, 9/16, 1,  idMaterial, dataMaterial);
model.addBox (0, 0, 1/16, 1/16, 10/16, 15/16,  idMaterial, dataMaterial);
model.addBox (15/16, 0, 1/16, 1, 10/16, 15/16,  idMaterial, dataMaterial);
model.addBox (3/16, 8/16, 14/16, 5/16, 9/16, 15/16,  idMaterial, dataMaterial);
model.addBox (3/16, 8/16, 11/16, 5/16, 9/16, 12/16,  idMaterial, dataMaterial);
model.addBox (3/16, 8/16, 8/16, 5/16, 9/16, 9/16,  idMaterial, dataMaterial);
model.addBox (3/16, 8/16, 5/16, 5/16, 9/16, 6/16,  idMaterial, dataMaterial);
model.addBox (3/16, 8/16, 2/16, 5/16, 9/16, 3/16,  idMaterial, dataMaterial);
model.addBox (7/16, 8/16, 14/16, 9/16, 9/16, 15/16,  idMaterial, dataMaterial);
model.addBox (7/16, 8/16, 11/16, 9/16, 9/16, 12/16,  idMaterial, dataMaterial);
model.addBox (7/16, 8/16, 8/16, 9/16, 9/16, 9/16,  idMaterial, dataMaterial);
model.addBox (7/16, 8/16, 5/16, 9/16, 9/16, 6/16,  idMaterial, dataMaterial);
model.addBox (7/16, 8/16, 2/16, 9/16, 9/16, 3/16,  idMaterial, dataMaterial);
model.addBox (11/16, 8/16, 14/16, 13/16, 9/16, 15/16,  idMaterial, dataMaterial);
model.addBox (11/16, 8/16, 11/16, 13/16, 9/16, 12/16,  idMaterial, dataMaterial);
model.addBox (11/16, 8/16, 8/16, 13/16, 9/16, 9/16,  idMaterial, dataMaterial);
model.addBox (11/16, 8/16, 5/16, 13/16, 9/16, 6/16,  idMaterial, dataMaterial);
model.addBox (11/16, 8/16, 2/16, 13/16, 9/16, 3/16,  idMaterial, dataMaterial);
model.addBox (1/16, 17/32, 1/16, 3/16, 9/16, 15/16,  35, 0);
model.addBox (5/16, 17/32, 1/16, 7/16, 9/16, 15/16,  35, 0);
model.addBox (9/16, 17/32, 1/16, 11/16, 9/16, 15/16,  35, 0);
model.addBox (13/16, 17/32, 1/16, 15/16, 9/16, 15/16,  35, 0);
render.addEntry(model);
}
createTkRender(BlockID.tk, 5, 0);
createTkRender(BlockID.tkb, 5, 2);
createTkRender(BlockID.tka, 5, 4);
createTkRender(BlockID.tks, 5, 1);
createTkRender(BlockID.tktd, 5, 5);
createTkRender(BlockID.tktr, 5, 3);
Item.registerUseFunction("tk", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.tk);
Player.decreaseCarriedItem (1)
}
});
Item.registerUseFunction("tks", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.tks);
Player.decreaseCarriedItem (1)
}
});
Item.registerUseFunction("tkb", function(coords, item, block){
	if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.tkb);
Player.decreaseCarriedItem (1)
	}
});
Item.registerUseFunction("tka", function(coords, item, block){
	if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.tka);
Player.decreaseCarriedItem (1)
	}
});
Item.registerUseFunction("tktr", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.tktr);
Player.decreaseCarriedItem (1)
}
});
Item.registerUseFunction("tktd", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.tktd);
Player.decreaseCarriedItem (1)
}
});
var guiTk = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Ткацкий станок(Loom)"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 90, bitmap: "игла_off", scale: 3.2},
		{type: "bitmap", x: 530, y: 210, bitmap: "нить_off", scale: 3.2},
		{type: "bitmap", x: 800, y: 150, bitmap: "furnace_bar_backgroun", scale: 3.2},
	],
	
	elements: {
		"progressScale": {type: "scale", x: 800, y: 150, direction: 0, value: 0.5, bitmap: "шитьё", scale: 3.2},
		"progressScaleNT": {type: "scale", x: 530, y: 210, direction: 0, value: 0.5, bitmap: "нить_on_t", scale: 3.2},
		"progressScaleNO": {type: "scale", x: 530, y: 210, direction: 0, value: 0.5, bitmap: "нить_on_o", scale: 3.2},
		"progressScaleI": {type: "scale", x: 530, y: 90, direction: 0, value: 0.5, bitmap: "игла_on", scale: 3.2},
		"slotN": {type: "slot", x: 460, y: 86, bitmap: "Igl"},
		"slotI": {type: "slot", x: 460, y: 206, bitmap: "Nitk"},
		"slotT0": {type: "slot", x: 610, y: 86},
		"slotT1": {type: "slot", x: 610, y: 146},
		"slotT2": {type: "slot", x: 610, y: 206},
		"slotT3": {type: "slot", x: 670, y: 86},
		"slotT4": {type: "slot", x: 670, y: 146},
		"slotT5": {type: "slot", x: 670, y: 206},
		"slotT6": {type: "slot", x: 730, y: 86},
		"slotT7": {type: "slot", x: 730, y: 146},
		"slotT8": {type: "slot", x: 730, y: 206},
		"slotIT": {type: "slot", x: 880, y: 146, isValid: ValidFunc.result},
	}
});
const regStan=function(id){
TileEntity.registerPrototype(BlockID[id], {
	defaultValues: {
		size: 0,
		progress: 0
	},
	
	getGuiScreen: function(){
		return guiTk;
	},
	
	init: function(){
	this.animationT0 = new Animation.Item(this.x+.6, this.y+73/128, this.z+.6);
	this.animationT3 = new Animation.Item(this.x+.4, this.y+73/128, this.z+.6);
	this.animationT6 = new Animation.Item(this.x+.2, this.y+73/128, this.z+.6);
	this.animationT1 = new Animation.Item(this.x+.6, this.y+73/128, this.z+.4);
	this.animationT4 = new Animation.Item(this.x+.4, this.y+73/128, this.z+.4);
	this.animationT7 = new Animation.Item(this.x+.2, this.y+73/128, this.z+.4);
	this.animationT2 = new Animation.Item(this.x+.6, this.y+73/128, this.z+.2);
	this.animationT5 = new Animation.Item(this.x+.4, this.y+73/128, this.z+.2);
	this.animationT8 = new Animation.Item(this.x+.2, this.y+73/128, this.z+.2);
	this.animationI = new Animation.Item(this.x+.8, this.y+73/128, this.z+.6);
	this.animationIT = new Animation.Item(this.x+.8, this.y+73/128, this.z+.4);
	this.animationN = new Animation.Item(this.x+.8, this.y+73/128, this.z+.2);
	},
tick:function(){
var N = this.container.getSlot("slotI");
var T0 = this.container.getSlot("slotT0");
var T1 = this.container.getSlot("slotT1");
var T2 = this.container.getSlot("slotT2");
var I = this.container.getSlot("slotN");
var T3 = this.container.getSlot("slotT3");
var IT = this.container.getSlot("slotIT");
var T4 = this.container.getSlot("slotT4");
var T5 = this.container.getSlot("slotT5");
var T6 = this.container.getSlot("slotT6");
var T7 = this.container.getSlot("slotT7");
var T8 = this.container.getSlot("slotT8");
    const content = this.container.getGuiContent();
        if(World.getThreadTime() % 4 === 0){
if (start == 0)
{
this.data.progress = 0;
}
  if(I.data >= Item.getMaxDamage(ItemID.igla)){
I.id = 0;
I.count = 0;
  }
  if(N.data >= Item.getMaxDamage(N.id)){
      if(N.count == 1)
      {
N.id = 0;
N.count = 0;
  }
      if(N.count >= 2)
      {
N.count--;
N.data = 0;
  }
}
}
var breakItemI = function(){
  if(I.data<=Item.getMaxDamage(ItemID.igla)){
I.data++;
  }
}
var breakItemN = function(){
  if(N.data<=Item.getMaxDamage(N.id)){
N.data++;
  }
}
    if(content){
start = 0;
if(N.count == 0)
{
N.id = 0;
}
if(I.count == 0)
{
I.id = 0;
}
if(N.id !== ItemID.katyshka_s_travianimi_nitkami)
{
if(N.id !== ItemID.katyshka_s_nitkami)
{
this.data.progresso = 0;
this.data.progresst = 0;
this.data.progress = 0;
}
}
if(N.id == ItemID.katyshka_s_travianimi_nitkami)
{
this.data.progresst = 1;
}
if(N.id == ItemID.katyshka_s_nitkami)
{
this.data.progresso = 1;
}
if(I.id == ItemID.igla)
{
this.data.progressi = 1;
}
if(I.id !== ItemID.igla)
{
this.data.progressi = 0;
this.data.progress = 0;
}
if(I.id == ItemID.igla)
{
if((N.id == ItemID.katyshka_s_nitkami) || (N.id == ItemID.katyshka_s_travianimi_nitkami))
{
if(IT.count == 0)
{
if(T0.id == ItemID.gnilaia_tkan && T1.id == ItemID.gnilaia_tkan && T2.id == ItemID.gnilaia_tkan && T3.id == ItemID.gnilaia_tkan && T7.id == ItemID.gnilaia_tkan && T6.id == ItemID.gnilaia_tkan && T8.id == ItemID.gnilaia_tkan && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T0.count--;
T1.count--;
T2.count--;
T3.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.gnilie_tkanevie_ponozhi, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.gnilaia_tkan && T1.id == ItemID.gnilaia_tkan && T3.id == 0 && T7.id == ItemID.gnilaia_tkan && T6.id == ItemID.gnilaia_tkan && T2.id == ItemID.gnilaia_tkan && T8.id == ItemID.gnilaia_tkan && T5.id == ItemID.gnilaia_tkan && T4.id == ItemID.gnilaia_tkan)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T2.count--;
T4.count--;
T5.count--;
T8.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", ItemID.gnilaia_tkanevaia_kyrtka, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 334 && T1.id == 334 && T3.id == 35 && T7.id == 334 && T6.id == 334 && T2.id == 334 && T8.id == 334 && T5.id == 35 && T4.id == 35)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T2.count--;
T3.count--;
T4.count--;
T5.count--;
T8.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", ItemID.mehovaia_kyrtka, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T2.id == ItemID.gnilaia_tkan && T1.id == ItemID.gnilaia_tkan && T8.id == ItemID.gnilaia_tkan && T7.id == ItemID.gnilaia_tkan && T0.id == 0 && T3.id == 0 && T6.id == 0 && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T2.count--;
T1.count--;
T8.count--;
T7.count--;
this.container.setSlot("slotIT", ItemID.gnilie_tkanevie_botinki, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.yglerodnoe_volokno && T1.id == ItemID.yglerodnoe_volokno && T3.id == 102 && T7.id == ItemID.yglerodnoe_volokno && T6.id == ItemID.yglerodnoe_volokno && T2.id == ItemID.ingotSteel && T8.id == ItemID.ingotSteel && T5.id == ItemID.vodianoi_filtr && T4.id == ItemID.mehovoi_kapushon)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T2.count--;
T5.count--;
T8.count--;
T4.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", ItemID.vodolasnii_shlem, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.yglerodnoe_volokno && T1.id == ItemID.ballon_s_vozdyhom && T3.id == ItemID.ingotSteel && T7.id == ItemID.ballon_s_vozdyhom && T6.id == ItemID.yglerodnoe_volokno && T2.id == ItemID.yglerodnoe_volokno && T8.id == ItemID.yglerodnoe_volokno && T5.id == ItemID.ingotSteel && T4.id == ItemID.mehovaia_kyrtka)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T2.count--;
T5.count--;
T8.count--;
T4.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", ItemID.balloni_s_vozdyhom, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == ItemID.yglerodnoe_volokno && T3.id == 0 && T7.id == ItemID.yglerodnoe_volokno && T6.id == 0 && T2.id == ItemID.ingotSteel && T8.id == ItemID.ingotSteel && T5.id == ItemID.ingotSteel && T4.id == ItemID.mehovie_botinki)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T2.count--;
T5.count--;
T8.count--;
T4.count--;
T7.count--;
this.container.setSlot("slotIT", ItemID.stalnie_lasti, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == ItemID.yglerodnoe_volokno && T3.id == 0 && T7.id == ItemID.yglerodnoe_volokno && T6.id == 0 && T2.id == 264 && T8.id == 264 && T5.id == 264 && T4.id == ItemID.mehovie_botinki)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T2.count--;
T5.count--;
T8.count--;
T4.count--;
T7.count--;
this.container.setSlot("slotIT", ItemID.almaznie_lasti, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.yglerodnoe_volokno && T1.id == ItemID.yglerodnoe_volokno && T3.id == 0 && T7.id == ItemID.yglerodnoe_volokno && T6.id == ItemID.yglerodnoe_volokno && T2.id == ItemID.yglerodnoe_volokno && T8.id == ItemID.yglerodnoe_volokno && T5.id == 0 && T4.id == ItemID.mehovie_ponozhi)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T2.count--;
T8.count--;
T4.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", ItemID.daiverskie_ponozshi, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.gnilaia_tkan && T1.id == ItemID.gnilaia_tkan && T3.id == ItemID.gnilaia_tkan && T7.id == ItemID.gnilaia_tkan && T6.id == ItemID.gnilaia_tkan && T2.id == 0 && T8.id == 0 && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", ItemID.gniloi_tkanevii_shlem, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 334 && T1.id == 334 && T3.id == 35 && T7.id == 334 && T6.id == 334 && T2.id == 0 && T8.id == 0 && T5.id == 0 && T4.id == 35)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", ItemID.mehovoi_kapushon, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 334 && T1.id == 334 && T2.id == 334 && T3.id == 35 && T7.id == 334 && T6.id == 334 && T8.id == 334 && T5.id == 0 && T4.id == 35)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T0.count--;
T1.count--;
T2.count--;
T3.count--;
T4.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.mehovie_ponozhi, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T2.id == 334 && T1.id == 334 && T8.id == 334 && T7.id == 334 && T0.id == 35 && T3.id == 0 && T6.id == 35 && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T2.count--;
T1.count--;
T0.count--;
T6.count--;
T8.count--;
T7.count--;
this.container.setSlot("slotIT", ItemID.mehovie_botinki, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.cheshyia_drakona_kraia && T1.id == ItemID.cheshyia_drakona_kraia && T3.id == ItemID.cheshyia_drakona_kraia && T7.id == ItemID.cheshyia_drakona_kraia && T6.id == ItemID.cheshyia_drakona_kraia && T2.id == ItemID.cheshyia_drakona_kraia && T8.id == ItemID.cheshyia_drakona_kraia && T4.id == ItemID.prochnii_tkanevii_shlem && T5.id == ItemID.cheshyia_drakona_kraia)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T2.count--;
T3.count--;
T4.count--;
T5.count--;
T7.count--;
T8.count--;
T6.count--;
this.container.setSlot("slotIT", ItemID.kapushon_drakona_kraia, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.cheshyia_drakona_kraia && T1.id == ItemID.cheshyia_drakona_kraia && T3.id == ItemID.prochnaia_tkanevaia_kyrtka && T7.id == ItemID.cheshyia_drakona_kraia && T6.id == ItemID.cheshyia_drakona_kraia && T2.id == ItemID.cheshyia_drakona_kraia && T8.id == ItemID.cheshyia_drakona_kraia && T5.id == ItemID.cheshyia_drakona_kraia && T4.id == ItemID.cheshyia_drakona_kraia)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T2.count--;
T4.count--;
T5.count--;
T8.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", ItemID.kirasa_drakona_kraia, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.cheshyia_drakona_kraia && T1.id == ItemID.cheshyia_drakona_kraia && T2.id == ItemID.cheshyia_drakona_kraia && T3.id == ItemID.cheshyia_drakona_kraia && T7.id == ItemID.cheshyia_drakona_kraia && T6.id == ItemID.cheshyia_drakona_kraia && T8.id == ItemID.cheshyia_drakona_kraia && T4.id == ItemID.cheshyia_drakona_kraia && T5.id == ItemID.prochnie_tkanevie_ponozhi)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T0.count--;
T1.count--;
T2.count--;
T3.count--;
T4.count--;
T5.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.ponozhi_drakona_kraia, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T2.id == ItemID.cheshyia_drakona_kraia && T1.id == ItemID.cheshyia_drakona_kraia && T8.id == ItemID.cheshyia_drakona_kraia && T7.id == ItemID.cheshyia_drakona_kraia && T0.id == 0 && T3.id == 0 && T6.id == 0 && T4.id == 0 && T5.id == ItemID.prochnie_tkanevie_botinki)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T2.count--;
T1.count--;
T5.count--;
T8.count--;
T7.count--;
this.container.setSlot("slotIT", ItemID.botinki_drakona_kraia, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.prochnaia_tkan && T1.id == ItemID.prochnaia_tkan && T2.id == ItemID.prochnaia_tkan && T3.id == ItemID.prochnaia_tkan && T7.id == ItemID.prochnaia_tkan && T6.id == ItemID.prochnaia_tkan && T8.id == ItemID.prochnaia_tkan && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T0.count--;
T1.count--;
T2.count--;
T3.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.prochnie_tkanevie_ponozhi, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.prochnaia_tkan && T1.id == ItemID.prochnaia_tkan && T3.id == ItemID.prochnaia_tkan && T7.id == ItemID.prochnaia_tkan && T6.id == ItemID.prochnaia_tkan && T2.id == 0 && T8.id == 0 && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", ItemID.prochnii_tkanevii_shlem, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T2.id == ItemID.prochnaia_tkan && T1.id == ItemID.prochnaia_tkan && T8.id == ItemID.prochnaia_tkan && T7.id == ItemID.prochnaia_tkan && T0.id == 0 && T3.id == 0 && T6.id == 0 && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T2.count--;
T1.count--;
T8.count--;
T7.count--;
this.container.setSlot("slotIT", ItemID.prochnie_tkanevie_botinki, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.prochnaia_tkan && T1.id == ItemID.prochnaia_tkan && T3.id == 0 && T7.id == ItemID.prochnaia_tkan && T6.id == ItemID.prochnaia_tkan && T2.id == ItemID.prochnaia_tkan && T8.id == ItemID.prochnaia_tkan && T5.id == ItemID.prochnaia_tkan && T4.id == ItemID.prochnaia_tkan)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T2.count--;
T4.count--;
T5.count--;
T8.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", ItemID.prochnaia_tkanevaia_kyrtka, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 334 && T1.id == 334 && T2.id == 334 && T3.id == 334 && T7.id == 334 && T6.id == 334 && T8.id == 334 && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T0.count--;
T1.count--;
T2.count--;
T3.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", 300, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 334 && T1.id == 334 && T3.id == 334 && T7.id == 334 && T6.id == 334 && T2.id == 0 && T8.id == 0 && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", 298, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T2.id == 334 && T1.id == 334 && T8.id == 334 && T7.id == 334 && T0.id == 0 && T3.id == 0 && T6.id == 0 && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T2.count--;
T1.count--;
T8.count--;
T7.count--;
this.container.setSlot("slotIT", 301, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 334 && T1.id == 334 && T3.id == 0 && T7.id == 334 && T6.id == 334 && T2.id == 334 && T8.id == 334 && T5.id == 334 && T4.id == 334)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T2.count--;
T4.count--;
T5.count--;
T8.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", 299, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 334 && T1.id == 334 && T3.id == 0 && T7.id == 334 && T6.id == 334 && T2.id == 334 && T8.id == 334 && T5.id == 0 && T4.id == 334)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T2.count--;
T4.count--;
T8.count--;
T7.count--;
T6.count--;
this.container.setSlot("slotIT", 416, 0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
}
if(IT.id == 0)
{
if(IT.count <= 63)
{
if(T0.id == 35 && T1.id == 0 && T3.id == 0 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T0.count--;
this.container.setSlot("slotIT", 171, IT.count+0, T0.data)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 339 && T1.id == 334 && T3.id == 339 && T7.id == 0 && T6.id == 339 && T2.id == 0 && T8.id == 0 && T4.id == 0 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T6.count--;
this.container.setSlot("slotIT", 340, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 415 && T1.id == 415 && T3.id == 415 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 415 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
this.container.setSlot("slotIT", 334, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 287 && T1.id == 287 && T3.id == 287 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 287 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
this.container.setSlot("slotIT", 35, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.travianaia_nit && T1.id == ItemID.travianaia_nit && T3.id == ItemID.travianaia_nit && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == ItemID.travianaia_nit && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
this.container.setSlot("slotIT", 35, IT.count+0, 5)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 287 && T1.id == 287 && T3.id == 287 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 287 && T4.id == 341 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T8.count--;
this.container.setSlot("slotIT", 420, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.travianaia_nit && T1.id == ItemID.travianaia_nit && T3.id == ItemID.travianaia_nit && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == ItemID.travianaia_nit && T4.id == 341 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T8.count--;
this.container.setSlot("slotIT", 420, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 280 && T1.id == 280 && T3.id == 280 && T7.id == 280 && T6.id == 280 && T2.id == 280 && T8.id == 280 && T4.id == 171 && T5.id == 280)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T2.count--;
T5.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", 321, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 280 && T1.id == 280 && T3.id == 280 && T7.id == 280 && T6.id == 280 && T2.id == 280 && T8.id == 280 && T4.id == 334 && T5.id == 280)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T2.count--;
T5.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", 389, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 280 && T1.id == 280 && T3.id == 280 && T7.id == 280 && T6.id == 280 && T2.id == 280 && T8.id == 280 && T4.id == ItemID.katyshka_s_nitkami && T5.id == 280)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T2.count--;
T5.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.setka_dlia_sita, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 280 && T1.id == 280 && T3.id == 280 && T7.id == 280 && T6.id == 280 && T2.id == 280 && T8.id == 280 && T4.id == ItemID.katyshka_s_travianimi_nitkami && T5.id == 280)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T2.count--;
T5.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.setka_dlia_sita, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == 0 && T3.id == ItemID.travianaia_nit && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == ItemID.travianaia_nit && T5.id == ItemID.travianaia_nit)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T5.count--;
this.container.setSlot("slotIT", ItemID.travianaia_verevka, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == 0 && T3.id == 287 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 287 && T5.id == 287)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T5.count--;
this.container.setSlot("slotIT", ItemID.obichnaia_verevka, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == 0 && T3.id == 0 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == ItemID.trava && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T4.count--;
this.container.setSlot("slotIT", ItemID.travianaia_nit, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == 287 && T3.id == 158 && T7.id == 287 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 287 && T5.id == 158)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T1.count--;
T7.count--;
T5.count--;
this.container.setSlot("slotIT", ItemID.katyshka_s_nitkami, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == ItemID.travianaia_nit && T3.id == 158 && T7.id == ItemID.travianaia_nit && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == ItemID.travianaia_nit && T5.id == 158)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T1.count--;
T7.count--;
T5.count--;
this.container.setSlot("slotIT", ItemID.katyshka_s_travianimi_nitkami, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == 35 && T3.id == 0 && T7.id == 35 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 35 && T5.id == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T4.count--;
T1.count--;
T7.count--;
this.container.setSlot("slotIT", ItemID.spalnii_nabor, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
}
if(IT.count <= 55)
{
if(T0.id == ItemID.katyshka_s_travianimi_nitkami && T1.id == ItemID.katyshka_s_travianimi_nitkami && T3.id == ItemID.katyshka_s_travianimi_nitkami && T7.id == ItemID.katyshka_s_travianimi_nitkami && T6.id == ItemID.katyshka_s_travianimi_nitkami && T2.id == ItemID.katyshka_s_travianimi_nitkami && T8.id == ItemID.katyshka_s_travianimi_nitkami && T4.id == ItemID.katyshka_s_travianimi_nitkami && T5.id == ItemID.katyshka_s_travianimi_nitkami)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T1.count--;
T7.count--;
T5.count--;
T0.count--;
T2.count--;
T6.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.prochnaia_tkan, IT.count+0, 0)
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.katyshka_s_nitkami && T1.id == ItemID.katyshka_s_nitkami && T3.id == ItemID.katyshka_s_nitkami && T7.id == ItemID.katyshka_s_nitkami && T6.id == ItemID.katyshka_s_nitkami && T2.id == ItemID.katyshka_s_nitkami && T8.id == ItemID.katyshka_s_nitkami && T4.id == ItemID.katyshka_s_nitkami && T5.id == ItemID.katyshka_s_nitkami)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T1.count--;
T7.count--;
T5.count--;
T0.count--;
T2.count--;
T6.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.prochnaia_tkan, IT.count+0, 0)
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
}
}
if(IT.count <= 63)
{
if(T0.id == 35 && T1.id == 0 && T3.id == 0 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 0 && T5.id == 0 && IT.id == 171 && IT.data == T0.data)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T0.count--;
this.container.setSlot("slotIT", 171, IT.count+0, T0.data)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 339 && T1.id == 334 && T3.id == 339 && T7.id == 0 && T6.id == 339 && T2.id == 0 && T8.id == 0 && T4.id == 0 && T5.id == 0 && IT.id == 340)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T6.count--;
this.container.setSlot("slotIT", 340, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 415 && T1.id == 415 && T3.id == 415 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 415 && T5.id == 0 && IT.id == 334)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
this.container.setSlot("slotIT", 334, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 287 && T1.id == 287 && T3.id == 287 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 287 && T5.id == 0 && IT.id == 35 && IT.data == 0)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
this.container.setSlot("slotIT", 35, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.travianaia_nit && T1.id == ItemID.travianaia_nit && T3.id == ItemID.travianaia_nit && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == ItemID.travianaia_nit && T5.id == 0 && IT.id == 35 && IT.data == 5)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
this.container.setSlot("slotIT", 35, IT.count+0, 5)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 287 && T1.id == 287 && T3.id == 287 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 287 && T4.id == 341 && T5.id == 0 && IT.id == 420)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T8.count--;
this.container.setSlot("slotIT", 420, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.travianaia_nit && T1.id == ItemID.travianaia_nit && T3.id == ItemID.travianaia_nit && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == ItemID.travianaia_nit && T4.id == 341 && T5.id == 0 && IT.id == 420)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T8.count--;
this.container.setSlot("slotIT", 420, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 280 && T1.id == 280 && T3.id == 280 && T7.id == 280 && T6.id == 280 && T2.id == 280 && T8.id == 280 && T4.id == 171 && T5.id == 280 && IT.id == 321)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T2.count--;
T5.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", 321, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 280 && T1.id == 280 && T3.id == 280 && T7.id == 280 && T6.id == 280 && T2.id == 280 && T8.id == 280 && T4.id == 334 && T5.id == 280 && IT.id == 389)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T2.count--;
T5.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", 389, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 280 && T1.id == 280 && T3.id == 280 && T7.id == 280 && T6.id == 280 && T2.id == 280 && T8.id == 280 && T4.id == ItemID.katyshka_s_nitkami && T5.id == 280 && IT.id == ItemID.setka_dlia_sita)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T2.count--;
T5.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.setka_dlia_sita, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 280 && T1.id == 280 && T3.id == 280 && T7.id == 280 && T6.id == 280 && T2.id == 280 && T8.id == 280 && T4.id == ItemID.katyshka_s_travianimi_nitkami && T5.id == 280 && IT.id == ItemID.setka_dlia_sita)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T1.count--;
T0.count--;
T3.count--;
T4.count--;
T2.count--;
T5.count--;
T6.count--;
T7.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.setka_dlia_sita, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == 0 && T3.id == ItemID.travianaia_nit && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == ItemID.travianaia_nit && T5.id == ItemID.travianaia_nit && IT.id == ItemID.travianaia_verevka)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T5.count--;
this.container.setSlot("slotIT", ItemID.travianaia_verevka, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == 0 && T3.id == 287 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 287 && T5.id == 287 && IT.id == ItemID.obichnaia_verevka)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T5.count--;
this.container.setSlot("slotIT", ItemID.obichnaia_verevka, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == 0 && T3.id == 0 && T7.id == 0 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == ItemID.trava && T5.id == 0 && IT.id == ItemID.travianaia_nit)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T4.count--;
this.container.setSlot("slotIT", ItemID.travianaia_nit, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == 287 && T3.id == 158 && T7.id == 287 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 287 && T5.id == 158 && IT.id == ItemID.katyshka_s_nitkami)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T1.count--;
T7.count--;
T5.count--;
this.container.setSlot("slotIT", ItemID.katyshka_s_nitkami, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == ItemID.travianaia_nit && T3.id == 158 && T7.id == ItemID.travianaia_nit && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == ItemID.travianaia_nit && T5.id == 158 && IT.id == ItemID.katyshka_s_travianimi_nitkami)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T1.count--;
T7.count--;
T5.count--;
this.container.setSlot("slotIT", ItemID.katyshka_s_travianimi_nitkami, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == 0 && T1.id == 35 && T3.id == 0 && T7.id == 35 && T6.id == 0 && T2.id == 0 && T8.id == 0 && T4.id == 35 && T5.id == 0 && IT.id == ItemID.spalnii_nabor)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T4.count--;
T1.count--;
T7.count--;
this.container.setSlot("slotIT", ItemID.spalnii_nabor, IT.count+0, 0)
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
}
if(IT.count <= 55)
{
if(T0.id == ItemID.katyshka_s_travianimi_nitkami && T1.id == ItemID.katyshka_s_travianimi_nitkami && T3.id == ItemID.katyshka_s_travianimi_nitkami && T7.id == ItemID.katyshka_s_travianimi_nitkami && T6.id == ItemID.katyshka_s_travianimi_nitkami && T2.id == ItemID.katyshka_s_travianimi_nitkami && T8.id == ItemID.katyshka_s_travianimi_nitkami && T4.id == ItemID.katyshka_s_travianimi_nitkami && T5.id == ItemID.katyshka_s_travianimi_nitkami && IT.id == ItemID.prochnaia_tkan)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T1.count--;
T7.count--;
T5.count--;
T0.count--;
T2.count--;
T6.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.prochnaia_tkan, IT.count+0, 0)
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
if(T0.id == ItemID.katyshka_s_nitkami && T1.id == ItemID.katyshka_s_nitkami && T3.id == ItemID.katyshka_s_nitkami && T7.id == ItemID.katyshka_s_nitkami && T6.id == ItemID.katyshka_s_nitkami && T2.id == ItemID.katyshka_s_nitkami && T8.id == ItemID.katyshka_s_nitkami && T4.id == ItemID.katyshka_s_nitkami && T5.id == ItemID.katyshka_s_nitkami && IT.id == ItemID.prochnaia_tkan)
{
start = 1;
if(this.data.progress++ >= 120)
{
			
T3.count--;
T4.count--;
T1.count--;
T7.count--;
T5.count--;
T0.count--;
T2.count--;
T6.count--;
T8.count--;
this.container.setSlot("slotIT", ItemID.prochnaia_tkan, IT.count+0, 0)
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
IT.count++;
this.container.validateAll();
this.data.progress = 0;
breakItemN();
breakItemI();
}
}
}
}
}
		else {
			this.data.progress = 0;
		}
		this.container.setScale("progressScale", this.data.progress / 120);
		this.container.setScale("progressScaleNT", this.data.progresst / 1);
		this.container.setScale("progressScaleNO", this.data.progresso / 1);
		this.container.setScale("progressScaleI", this.data.progressi / 1);
		}
				if(T0.id!=0){
				this.animationT0.describeItem({
			id: T0.id,
			count: 1,
			data: T0.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationT0.load();
			}else {
				this.animationT0.destroy();
			}
				if(T1.id!=0){
				this.animationT1.describeItem({
			id: T1.id,
			count: 1,
			data: T1.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationT1.load();
			}else {
				this.animationT1.destroy();
			}
				if(T2.id!=0){
				this.animationT2.describeItem({
			id: T2.id,
			count: 1,
			data: T2.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationT2.load();
			}else {
				this.animationT2.destroy();
			}
				if(T3.id!=0){
				this.animationT3.describeItem({
			id: T3.id,
			count: 1,
			data: T3.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationT3.load();
			}else {
				this.animationT3.destroy();
			}
				if(T4.id!=0){
				this.animationT4.describeItem({
			id: T4.id,
			count: 1,
			data: T4.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationT4.load();
			}else {
				this.animationT4.destroy();
			}
				if(T5.id!=0){
				this.animationT5.describeItem({
			id: T5.id,
			count: 1,
			data: T5.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationT5.load();
			}else {
				this.animationT5.destroy();
			}
				if(T6.id!=0){
				this.animationT6.describeItem({
			id: T6.id,
			count: 1,
			data: T6.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationT6.load();
			}else {
				this.animationT6.destroy();
			}
				if(T7.id!=0){
				this.animationT7.describeItem({
			id: T7.id,
			count: 1,
			data: T7.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationT7.load();
			}else {
				this.animationT7.destroy();
			}
				if(T8.id!=0){
				this.animationT8.describeItem({
			id: T8.id,
			count: 1,
			data: T8.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationT8.load();
			}else {
				this.animationT8.destroy();
			}
				if(I.id!=0){
				this.animationI.describeItem({
			id: I.id,
			count: 1,
			data: I.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationI.load();
			}else {
				this.animationI.destroy();
			}
				if(IT.id!=0){
				this.animationIT.describeItem({
			id: IT.id,
			count: 1,
			data: IT.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationIT.load();
			}else {
				this.animationIT.destroy();
			}
				if(N.id!=0){
				this.animationN.describeItem({
			id: N.id,
			count: 1,
			data: N.data,
			size: .19,
			rotation:[3.14/2, 0, 0]
		});
		this.animationN.load();
			}else {
				this.animationN.destroy();
			}
		}
});
};
regStan("tktd");
regStan("tktr");
regStan("tka");
regStan("tkb");
regStan("tks");
regStan("tk");




// file: фабрика_схем.js

function createAerRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 0, 0, 1, 2/16, 1,  BlockID.blockSteel, 0);
model.addBox (0, 2/16, 12/16, 15/16, 3/16, 1,  BlockID.blockSteel, 0);
model.addBox (12/16, 2/16, 0, 1, 3/16, 1,  BlockID.blockSteel, 0);
model.addBox (0, 2/16, 4/16, 1/16, 3/16, 12/16,  20, 0);
model.addBox (0, 2/16, 0, 15/16, 3/16, 4/16,  BlockID.blockSteel, 0);
model.addBox (0, 3/16, 0, 1, 5/16, 1,  BlockID.blockSteel, 0);
model.addBox (7/16, 5/16, 7/16, 9/16, 6/16, 9/16,  42, 0);
model.addBox (0, 12/16, 0, 1, 1, 1,  BlockID.blockSteel, 0);
model.addBox (1/16, 5/16, 1/16, 15/16, 12/16, 15/16,  20, 0);
model.addBox (14/16, 5/16, 14/16, 1, 12/16, 1,  42, 0);
model.addBox (0, 5/16, 0, 2/16, 12/16, 2/16,  42, 0);
model.addBox (14/16, 5/16, 0, 1, 12/16, 2/16,  42, 0);
model.addBox (0, 5/16, 14/16, 2/16, 12/16, 1,  42, 0);
model.addBox (9/16, 8/16, 9/16, 10/16, 12/16, 10/16,  BlockID.blockSteel, 0);
model.addBox (37/64, 7/16, 37/64, 39/64, 8/16, 39/64,  152, 0);
model.addBox (6/16, 10/16, 6/16, 7/16, 12/16, 7/16,  BlockID.blockSteel, 0);
model.addBox (6/16, 9/16, 6/16, 9/16, 10/16, 7/16,  BlockID.blockSteel, 0);
model.addBox (33/64, 8/16, 25/64, 35/64, 9/16, 27/64,  152, 0);
model.addBox (6/16, 9/16, 9/16, 7/16, 12/16, 10/16,  BlockID.blockSteel, 0);
model.addBox (7/16, 37/64, 37/64, 8/16, 39/64, 39/64,  152, 0);
render.addEntry(model);
}
createFurnitureStal("fabrshem","фабрика_схем","iron_block",0, "Фабрика чипов", ItemID.fabrshem, BlockID.fabrshem);
createAerRender(BlockID.fabrshem, 2, 0)
Item.registerUseFunction("fabrshem", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.fabrshem);
	World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
Player.decreaseCarriedItem (1)
}
});
const guiShem = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Фабрика чипов(chip factory)"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2}
    ],

    elements: {
        "progressScale": {type: "scale", x: 530, y: 146, direction: 0, bitmap: "furnace_bar_scale", scale: 3.2},
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},

        "slotSource": {type: "slot", x: 441, y: 142},
        "slotSource2": {type: "slot", x: 930, y: 60, bitmap: "Chip"},
        "slotResult": {type: "slot", x: 625, y: 142, isValid: ValidFunc.result},
		"textInfo1": {type: "text", x: 350, y: 252, width: 300, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 350, y: 282, width: 300, height: 30, text: "10000"}
    }
});
const ShemRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj) return;

        this.recipes[obj.input.id + ":" + obj.input.data] = obj;
    },

    getResult: function (id, data) {
        return this.recipes[id + ":" + data];
    }

};
ShemRecipes.add({
    input: {id: ItemID.ndsm, data: 0},
    result: {id: ItemID.chip, data: 0, count: 1}
});
ShemRecipes.add({
    input: {id: ItemID.chip, data: 0},
    result: {id: ItemID.chip_ysk_1, data: 0, count: 1}
});
MachineRegistry.register(BlockID.fabrshem, {
    ENERGY_CONSUME: 10,
    DOP_ENERGY_CONSUME: 18,
    PROGRESS_MAX: 500,

    defaultValues: {
        progress: 0
    },

	init:function(){
	this.animationDo = new Animation.Item(this.x+.5, this.y+.4, this.z+.5);
	this.animationD = new Animation.Item(this.x+.5, this.y+5/32, this.z+.5);
	this.animationDD = new Animation.Item(this.x+.5, this.y+65/64, this.z+.5);
	},

    getGuiScreen: function () {
        return guiShem;
    },

    getTransportSlots: function () {
        return {input: ["slotSource"], output: ["slotResult"]};
    },

    tick: function () {
        let slotSource = this.container.getSlot("slotSource");
        let slotResult = this.container.getSlot("slotResult");
        var slotSource2 = this.container.getSlot("slotSource2");
			if(slotSource.id!=0){
				this.animationDo.describeItem({
			id: slotSource.id,
			count: 1,
			data: slotSource.data,
			size: .55,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDo.load();
			}else {
				this.animationDo.destroy();
			}
			if(slotSource2.id!=0){
				this.animationDD.describeItem({
			id: slotSource2.id,
			count: 1,
			data: slotSource2.data,
			size: .3,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDD.load();
			}else {
				this.animationDD.destroy();
			}
			if(slotResult.id!=0){
				this.animationD.describeItem({
			id: slotResult.id,
			count: 1,
			data: slotResult.data,
			size: .5,
			rotation:[3.14/2, 0, 0]
		});
		this.animationD.load();
			}else {
				this.animationD.destroy();
			}
        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                return;
            }

            if (this.data.energy < this.ENERGY_CONSUME) return;
			if(slotSource2.id!==ItemID.chip_ysk_1){
            this.data.energy -= this.ENERGY_CONSUME;
}
			if(slotSource2.id==ItemID.chip_ysk_1){
            this.data.energy -= (this.ENERGY_CONSUME+this.DOP_ENERGY_CONSUME);
}
            if (this.data.progress >= this.PROGRESS_MAX) {
                var r = ShemRecipes.getResult(slotSource.id, slotSource.data);
                var result = r.result;

                if (slotResult.id === 0 || (slotResult.id === result.id && slotResult.data === result.data && slotResult.count + result.count <= Item.getMaxStack(slotResult.id))) {
                        slotResult.count = !slotResult.id ? result.count : slotResult.count + result.count;
                        slotResult.id = result.id;
                        slotResult.data = result.data;


                    slotSource.count -= 1;
                    this.data.progress = 0;
            
                }
                } else {
                    			if(slotSource2.id!==ItemID.chip_ysk_1){
this.data.progress++;
}
			if(slotSource2.id==ItemID.chip_ysk_1){
this.data.progress++;
this.data.progress++;
}
            }
        } else if (slotSource.id && ShemRecipes.getResult(slotSource.id, slotSource.data)) {
            this.data.progress = 1;
        }

        this.container.setScale("progressScale", this.data.progress / this.PROGRESS_MAX);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        this.container.validateAll();
		this.container.setText("textInfo1", this.data.energy + "/");
},
    getEnergyStorage: function () {
        return 10000;
    }
});




// file: прессы.js

IDRegistry.genBlockID("stee");
Block.createBlock("stee", [{name: "Стальной блок", texture: [["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0], ["стальной_блок", 0]], inCreative: false}], BLOCK_TYPE_STAL);
    if (Config.TexturesQuality) {
createFurnitureStal("mini_pres","мини_пресс","iron_block",0, "Мини пресс", ItemID.mini_pres, BlockID.mini_pres);
}
    if (!Config.TexturesQuality) {
createFurnitureStal("mini_pres","ммини_пресс","iron_block",0, "Мини пресс", ItemID.mini_pres, BlockID.mini_pres);
}
function createMPRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (11/16, 0, 11/16, 15/16, 4/16, 15/16,  4, 0);
model.addBox (10/16, 0, 11/16, 11/16, 4/16, 15/16,  4, 0);
model.addBox (11/16, 0, 10/16, 15/16, 4/16, 11/16,  4, 0);
model.addBox (1/16, 0, 11/16, 5/16, 4/16, 15/16,  4, 0);
model.addBox (5/16, 0, 11/16, 6/16, 4/16, 15/16,  4, 0);
model.addBox (11/16, 0, 5/16, 15/16, 4/16, 6/16,  4, 0);
model.addBox (11/16, 0, 1/16, 15/16, 4/16, 5/16,  4, 0);
model.addBox (10/16, 0, 1/16, 11/16, 4/16, 5/16,  4, 0);
model.addBox (1/16, 0, 10/16, 5/16, 4/16, 11/16,  4, 0);
model.addBox (1/16, 0, 1/16, 5/16, 4/16, 5/16,  4, 0);
model.addBox (5/16, 0, 1/16, 6/16, 4/16, 5/16,  4, 0);
model.addBox (1/16, 0, 5/16, 5/16, 4/16, 6/16,  4, 0);
model.addBox (7/16, 1/16, 1/16, 9/16, 2/16, 15/16,  4, 0);
model.addBox (1/16, 1/16, 7/16, 15/16, 2/16, 9/16,  4, 0);
model.addBox (6/16, 2/16, 1/16, 7/16, 4/16, 6/16,  4, 0);
model.addBox (6/16, 2/16, 10/16, 7/16, 4/16, 15/16,  4, 0);
model.addBox (9/16, 2/16, 1/16, 10/16, 4/16, 6/16,  4, 0);
model.addBox (9/16, 2/16, 10/16, 10/16, 4/16, 15/16,  4, 0);
model.addBox (1/16, 2/16, 6/16, 6/16, 4/16, 7/16,  4, 0);
model.addBox (10/16, 2/16, 6/16, 15/16, 4/16, 7/16,  4, 0);
model.addBox (1/16, 2/16, 9/16, 6/16, 4/16, 10/16,  4, 0);
model.addBox (10/16, 2/16, 9/16, 15/16, 4/16, 10/16,  4, 0);
model.addBox (4/16, 4/16, 3/16, 7/16, 5/16, 4/16,  4, 0);
model.addBox (9/16, 4/16, 3/16, 12/16, 5/16, 4/16,  4, 0);
model.addBox (4/16, 4/16, 12/16, 7/16, 5/16, 13/16,  4, 0);
model.addBox (9/16, 4/16, 12/16, 12/16, 5/16, 13/16,  4, 0);
model.addBox (3/16, 4/16, 4/16, 4/16, 5/16, 7/16,  4, 0);
model.addBox (3/16, 4/16, 9/16, 4/16, 5/16, 12/16,  4, 0);
model.addBox (12/16, 4/16, 4/16, 13/16, 5/16, 7/16,  4, 0);
model.addBox (12/16, 4/16, 9/16, 13/16, 5/16, 12/16,  4, 0);
model.addBox (5/16, 0, 5/16, 11/16, 1/16, 11/16,  4, 0);
model.addBox (6/16, 1/16, 1/16, 7/16, 2/16, 15/16,  BlockID.stee, 0);
model.addBox (9/16, 1/16, 1/16, 10/16, 2/16, 15/16,  BlockID.stee, 0);
model.addBox (1/16, 1/16, 6/16, 15/16, 2/16, 7/16,  BlockID.stee, 0);
model.addBox (1/16, 1/16, 9/16, 15/16, 2/16, 10/16,  BlockID.stee, 0);
model.addBox (7/16, 3/16, 7/16, 9/16, 4/16, 9/16,  BlockID.stee, 0);
model.addBox (6/16, 2/16, 9/16, 7/16, 3/16, 10/16,  BlockID.stee, 0);
model.addBox (9/16, 2/16, 9/16, 10/16, 3/16, 10/16,  BlockID.stee, 0);
model.addBox (9/16, 2/16, 6/16, 10/16, 3/16, 7/16,  BlockID.stee, 0);
model.addBox (6/16, 2/16, 6/16, 7/16, 3/16, 7/16,  BlockID.stee, 0);
model.addBox (5/16, 3/16, 10/16, 6/16, 4/16, 11/16,  BlockID.stee, 0);
model.addBox (10/16, 3/16, 10/16, 11/16, 4/16, 11/16,  BlockID.stee, 0);
model.addBox (10/16, 3/16, 5/16, 11/16, 4/16, 6/16,  BlockID.stee, 0);
model.addBox (5/16, 3/16, 5/16, 6/16, 4/16, 6/16,  BlockID.stee, 0);
model.addBox (14/16, 5/16, 14/16, 15/16, 6/16, 15/16,  BlockID.stee, 0);
model.addBox (1/16, 5/16, 1/16, 2/16, 6/16, 2/16,  BlockID.stee, 0);
model.addBox (1/16, 5/16, 14/16, 2/16, 6/16, 15/16,  BlockID.stee, 0);
model.addBox (14/16, 5/16, 1/16, 15/16, 6/16, 2/16,  BlockID.stee, 0);
model.addBox (2/16, 5/16, 2/16, 3/16, 14/16, 3/16,  BlockID.stee, 0);
model.addBox (13/16, 5/16, 13/16, 14/16, 14/16, 14/16,  BlockID.stee, 0);
model.addBox (2/16, 5/16, 13/16, 3/16, 14/16, 14/16,  BlockID.stee, 0);
model.addBox (13/16, 5/16, 2/16, 14/16, 14/16, 3/16,  BlockID.stee, 0);
model.addBox (2/16, 11/16, 1/16, 3/16, 12/16, 15/16,  BlockID.stee, 0);
model.addBox (13/16, 11/16, 1/16, 14/16, 12/16, 15/16,  BlockID.stee, 0);
model.addBox (1/16, 11/16, 2/16, 15/16, 12/16, 3/16,  BlockID.stee, 0);
model.addBox (1/16, 11/16, 13/16, 15/16, 12/16, 14/16,  BlockID.stee, 0);
model.addBox (3/16, 13/16, 3/16, 4/16, 1, 4/16,  BlockID.stee, 0);
model.addBox (12/16, 13/16, 12/16, 13/16, 1, 13/16,  BlockID.stee, 0);
model.addBox (3/16, 13/16, 12/16, 4/16, 1, 13/16,  BlockID.stee, 0);
model.addBox (12/16, 13/16, 3/16, 13/16, 1, 4/16,  BlockID.stee, 0);
model.addBox (4/16, 15/16, 4/16, 5/16, 1, 5/16,  BlockID.stee, 0);
model.addBox (11/16, 15/16, 11/16, 12/16, 1, 12/16,  BlockID.stee, 0);
model.addBox (4/16, 15/16, 11/16, 5/16, 1, 12/16,  BlockID.stee, 0);
model.addBox (11/16, 15/16, 4/16, 12/16, 1, 5/16,  BlockID.stee, 0);
model.addBox (5/16, 15/16, 5/16, 6/16, 1, 6/16,  BlockID.stee, 0);
model.addBox (10/16, 15/16, 10/16, 11/16, 1, 11/16,  BlockID.stee, 0);
model.addBox (5/16, 15/16, 10/16, 6/16, 1, 11/16,  BlockID.stee, 0);
model.addBox (10/16, 15/16, 5/16, 11/16, 1, 6/16,  BlockID.stee, 0);
model.addBox (6/16, 15/16, 6/16, 7/16, 31/32, 7/16,  BlockID.stee, 0);
model.addBox (9/16, 15/16, 9/16, 10/16, 31/32, 10/16,  BlockID.stee, 0);
model.addBox (6/16, 15/16, 9/16, 7/16, 31/32, 10/16,  BlockID.stee, 0);
model.addBox (9/16, 15/16, 6/16, 10/16, 31/32, 7/16,  BlockID.stee, 0);
model.addBox (7/16, 8/16, 7/16, 9/16, 15/16, 9/16,  BlockID.stee, 0);
model.addBox (6/16, 8/16, 7/16, 10/16, 10/16, 9/16,  BlockID.stee, 0);
model.addBox (7/16, 8/16, 6/16, 9/16, 10/16, 10/16,  BlockID.stee, 0);
model.addBox (6/16, 7/16, 6/16, 7/16, 9/16, 7/16,  BlockID.stee, 0);
model.addBox (9/16, 7/16, 9/16, 10/16, 9/16, 10/16,  BlockID.stee, 0);
model.addBox (9/16, 7/16, 6/16, 10/16, 9/16, 7/16,  BlockID.stee, 0);
model.addBox (6/16, 7/16, 9/16, 7/16, 9/16, 10/16,  BlockID.stee, 0);
model.addBox (9/16, 2/16, 7/16, 15/16, 4/16, 9/16,  42, 0);
model.addBox (7/16, 2/16, 9/16, 9/16, 4/16, 15/16,  42, 0);
model.addBox (1/16, 2/16, 7/16, 7/16, 4/16, 9/16,  42, 0);
model.addBox (7/16, 2/16, 1/16, 9/16, 4/16, 7/16,  42, 0);
model.addBox (0, 0, 1/16, 1/16, 5/16, 3/16,  42, 0);
model.addBox (1/16, 0, 0, 3/16, 5/16, 1/16,  42, 0);
model.addBox (15/16, 0, 1/16, 1, 5/16, 3/16,  42, 0);
model.addBox (13/16, 0, 0, 15/16, 5/16, 1/16,  42, 0);
model.addBox (0, 0, 13/16, 1/16, 5/16, 15/16,  42, 0);
model.addBox (1/16, 0, 15/16, 3/16, 5/16, 1,  42, 0);
model.addBox (15/16, 0, 13/16, 1, 5/16, 15/16,  42, 0);
model.addBox (13/16, 0, 15/16, 15/16, 5/16, 1,  42, 0);
model.addBox (15/16, 1/16, 15/16, 1, 4/16, 1,  42, 0);
model.addBox (0, 1/16, 0, 1/16, 4/16, 1/16,  42, 0);
model.addBox (15/16, 1/16, 0, 1, 4/16, 1/16,  42, 0);
model.addBox (0, 1/16, 15/16, 1/16, 4/16, 1,  42, 0);
model.addBox (12/16, 4/16, 12/16, 15/16, 5/16, 15/16,  42, 0);
model.addBox (1/16, 4/16, 1/16, 4/16, 5/16, 4/16,  42, 0);
model.addBox (1/16, 4/16, 12/16, 4/16, 5/16, 15/16,  42, 0);
model.addBox (12/16, 4/16, 1/16, 15/16, 5/16, 4/16,  42, 0);
model.addBox (12/16, 5/16, 13/16, 15/16, 6/16, 14/16,  42, 0);
model.addBox (13/16, 5/16, 12/16, 14/16, 6/16, 15/16,  42, 0);
model.addBox (2/16, 5/16, 1/16, 3/16, 6/16, 4/16,  42, 0);
model.addBox (1/16, 5/16, 2/16, 4/16, 6/16, 3/16,  42, 0);
model.addBox (2/16, 5/16, 12/16, 3/16, 6/16, 15/16,  42, 0);
model.addBox (1/16, 5/16, 13/16, 4/16, 6/16, 14/16,  42, 0);
model.addBox (12/16, 5/16, 2/16, 15/16, 6/16, 3/16,  42, 0);
model.addBox (13/16, 5/16, 1/16, 14/16, 6/16, 4/16,  42, 0);
model.addBox (11/16, 4/16, 11/16, 12/16, 5/16, 12/16,  42, 0);
model.addBox (4/16, 4/16, 4/16, 5/16, 5/16, 5/16,  42, 0);
model.addBox (4/16, 4/16, 11/16, 5/16, 5/16, 12/16,  42, 0);
model.addBox (11/16, 4/16, 4/16, 12/16, 5/16, 5/16,  42, 0);
model.addBox (3/16, 4/16, 7/16, 4/16, 5/16, 9/16,  42, 0);
model.addBox (12/16, 4/16, 7/16, 13/16, 5/16, 9/16,  42, 0);
model.addBox (7/16, 4/16, 3/16, 9/16, 5/16, 4/16,  42, 0);
model.addBox (7/16, 4/16, 12/16, 9/16, 5/16, 13/16,  42, 0);
model.addBox (2/16, 4/16, 4/16, 3/16, 5/16, 12/16,  42, 0);
model.addBox (13/16, 4/16, 4/16, 14/16, 5/16, 12/16,  42, 0);
model.addBox (4/16, 4/16, 2/16, 12/16, 5/16, 3/16,  42, 0);
model.addBox (4/16, 4/16, 13/16, 12/16, 5/16, 14/16,  42, 0);
model.addBox (0, 1/16, 3/16, 1/16, 3/16, 4/16,  42, 0);
model.addBox (0, 1/16, 12/16, 1/16, 3/16, 13/16,  42, 0);
model.addBox (15/16, 1/16, 3/16, 1, 3/16, 4/16,  42, 0);
model.addBox (15/16, 1/16, 12/16, 1, 3/16, 13/16,  42, 0);
model.addBox (3/16, 1/16, 0, 4/16, 3/16, 1/16,  42, 0);
model.addBox (12/16, 1/16, 0, 13/16, 3/16, 1/16,  42, 0);
model.addBox (3/16, 1/16, 15/16, 4/16, 3/16, 1,  42, 0);
model.addBox (12/16, 1/16, 15/16, 13/16, 3/16, 1,  42, 0);
model.addBox (3/16, 5/16, 3/16, 4/16, 12/16, 4/16,  42, 0);
model.addBox (12/16, 5/16, 12/16, 13/16, 12/16, 13/16,  42, 0);
model.addBox (3/16, 5/16, 12/16, 4/16, 12/16, 13/16,  42, 0);
model.addBox (12/16, 5/16, 3/16, 13/16, 12/16, 4/16,  42, 0);
model.addBox (1/16, 10/16, 2/16, 4/16, 11/16, 3/16,  42, 0);
model.addBox (2/16, 10/16, 1/16, 3/16, 11/16, 4/16,  42, 0);
model.addBox (13/16, 10/16, 12/16, 14/16, 11/16, 15/16,  42, 0);
model.addBox (12/16, 10/16, 13/16, 15/16, 11/16, 14/16,  42, 0);
model.addBox (2/16, 10/16, 12/16, 3/16, 11/16, 15/16,  42, 0);
model.addBox (12/16, 10/16, 2/16, 15/16, 11/16, 3/16,  42, 0);
model.addBox (13/16, 10/16, 1/16, 14/16, 11/16, 4/16,  42, 0);
model.addBox (1/16, 10/16, 13/16, 4/16, 11/16, 14/16,  42, 0);
model.addBox (1/16, 12/16, 2/16, 4/16, 13/16, 3/16,  42, 0);
model.addBox (2/16, 12/16, 1/16, 3/16, 13/16, 4/16,  42, 0);
model.addBox (13/16, 12/16, 12/16, 14/16, 13/16, 15/16,  42, 0);
model.addBox (12/16, 12/16, 13/16, 15/16, 13/16, 14/16,  42, 0);
model.addBox (2/16, 12/16, 12/16, 3/16, 13/16, 15/16,  42, 0);
model.addBox (12/16, 12/16, 2/16, 15/16, 13/16, 3/16,  42, 0);
model.addBox (13/16, 12/16, 1/16, 14/16, 13/16, 4/16,  42, 0);
model.addBox (1/16, 12/16, 13/16, 4/16, 13/16, 14/16,  42, 0);
model.addBox (1/16, 11/16, 1/16, 2/16, 12/16, 2/16,  42, 0);
model.addBox (14/16, 11/16, 14/16, 15/16, 12/16, 15/16,  42, 0);
model.addBox (14/16, 11/16, 1/16, 15/16, 12/16, 2/16,  42, 0);
model.addBox (1/16, 11/16, 14/16, 2/16, 12/16, 15/16,  42, 0);
model.addBox (1/16, 11/16, 3/16, 2/16, 12/16, 4/16,  42, 0);
model.addBox (14/16, 11/16, 3/16, 15/16, 12/16, 4/16,  42, 0);
model.addBox (1/16, 11/16, 12/16, 2/16, 12/16, 13/16,  42, 0);
model.addBox (14/16, 11/16, 12/16, 15/16, 12/16, 13/16,  42, 0);
model.addBox (3/16, 11/16, 1/16, 4/16, 12/16, 2/16,  42, 0);
model.addBox (12/16, 11/16, 1/16, 13/16, 12/16, 2/16,  42, 0);
model.addBox (3/16, 11/16, 14/16, 4/16, 12/16, 15/16,  42, 0);
model.addBox (12/16, 11/16, 14/16, 13/16, 12/16, 15/16,  42, 0);
model.addBox (2/16, 13/16, 3/16, 3/16, 15/16, 4/16,  42, 0);
model.addBox (2/16, 13/16, 12/16, 3/16, 15/16, 13/16,  42, 0);
model.addBox (13/16, 13/16, 3/16, 14/16, 15/16, 4/16,  42, 0);
model.addBox (13/16, 13/16, 12/16, 14/16, 15/16, 13/16,  42, 0);
model.addBox (3/16, 13/16, 2/16, 4/16, 15/16, 3/16,  42, 0);
model.addBox (12/16, 13/16, 2/16, 13/16, 15/16, 3/16,  42, 0);
model.addBox (3/16, 13/16, 13/16, 4/16, 15/16, 14/16,  42, 0);
model.addBox (12/16, 13/16, 13/16, 13/16, 15/16, 14/16,  42, 0);
model.addBox (3/16, 14/16, 3/16, 5/16, 15/16, 13/16,  42, 0);
model.addBox (11/16, 14/16, 3/16, 13/16, 15/16, 13/16,  42, 0);
model.addBox (5/16, 14/16, 3/16, 11/16, 15/16, 5/16,  42, 0);
model.addBox (5/16, 14/16, 11/16, 11/16, 15/16, 13/16,  42, 0);
model.addBox (5/16, 14/16, 5/16, 6/16, 15/16, 6/16,  42, 0);
model.addBox (10/16, 14/16, 10/16, 11/16, 15/16, 11/16,  42, 0);
model.addBox (10/16, 14/16, 5/16, 11/16, 15/16, 6/16,  42, 0);
model.addBox (5/16, 14/16, 10/16, 6/16, 15/16, 11/16,  42, 0);
model.addBox (3/16, 13/16, 7/16, 4/16, 14/16, 9/16,  42, 0);
model.addBox (12/16, 13/16, 7/16, 13/16, 14/16, 9/16,  42, 0);
model.addBox (7/16, 13/16, 3/16, 9/16, 14/16, 4/16,  42, 0);
model.addBox (7/16, 13/16, 12/16, 9/16, 14/16, 13/16,  42, 0);
model.addBox (7/16, 11/16, 6/16, 9/16, 15/16, 7/16,  42, 0);
model.addBox (7/16, 11/16, 9/16, 9/16, 15/16, 10/16,  42, 0);
model.addBox (6/16, 11/16, 7/16, 7/16, 15/16, 9/16,  42, 0);
model.addBox (9/16, 11/16, 7/16, 10/16, 15/16, 9/16,  42, 0);
render.addEntry(model);
}
createMPRender(BlockID.mini_pres, 4, 0);
Item.registerUseFunction("mini_pres", function(coords, item, block){
if(block.id !== 199)
{
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.mini_pres);
	World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
Player.decreaseCarriedItem (1)
}
});
const guiMPress = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Мини пресс(mini press)"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2}
    ],

    elements: {
        "progressScale": {type: "scale", x: 530, y: 146, direction: 0, bitmap: "furnace_bar_scale", scale: 3.2},
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},

        "slotSource": {type: "slot", x: 441, y: 142},
        "slotSource2": {type: "slot", x: 930, y: 60, bitmap: "Chip"},
        "slotResult": {type: "slot", x: 625, y: 142, isValid: ValidFunc.result},
		"textInfo1": {type: "text", x: 350, y: 252, width: 300, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 350, y: 282, width: 300, height: 30, text: "10000"}
    }
});
const PressmRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj) return;

        this.recipes[obj.input.id + ":" + obj.input.data] = obj;
    },

    getResult: function (id, data) {
        return this.recipes[id + ":" + data];
    }

};
PressmRecipes.add({
    input: {id: 256, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: ItemID.meteoritovii_slitok, data: 0},
    result: {id: ItemID.mezhgalakticheskaia_valuta, data: 0, count: 3}
});
PressmRecipes.add({
    input: {id: 257, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 258, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 259, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 267, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 302, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 305, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 306, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 309, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 325, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 404, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 356, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 345, data: 0},
    result: {id: ItemID.obichnii_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 283, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 284, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 285, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 286, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 294, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 314, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 322, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 3}
});
PressmRecipes.add({
    input: {id: 466, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 3}
});
PressmRecipes.add({
    input: {id: 347, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
PressmRecipes.add({
    input: {id: 317, data: 0},
    result: {id: ItemID.cvetnoi_metallalom, data: 0, count: 1}
});
MachineRegistry.register(BlockID.mini_pres, {
    ENERGY_CONSUME: 12.5,
    DOP_ENERGY_CONSUME: 22.5,
    PROGRESS_MAX: 400,

    defaultValues: {
        progress: 0
    },

	init:function(){
	this.animationDo = new Animation.Item(this.x+.5, this.y+.4, this.z+.5);
	this.animationD = new Animation.Item(this.x+.5, this.y+.3, this.z+.5);
	this.animationDD = new Animation.Item(this.x+.5, this.y+61/64, this.z+.5);
	},

    getGuiScreen: function () {
        return guiMPress;
    },

    getTransportSlots: function () {
        return {input: ["slotSource"], output: ["slotResult"]};
    },

    tick: function () {
        let slotSource = this.container.getSlot("slotSource");
        let slotResult = this.container.getSlot("slotResult");
        var slotSource2 = this.container.getSlot("slotSource2");
			if(slotSource.id!=0){
				this.animationDo.describeItem({
			id: slotSource.id,
			count: 1,
			data: slotSource.data,
			size: .55,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDo.load();
			}else {
				this.animationDo.destroy();
			}
			if(slotResult.id!=0){
				this.animationD.describeItem({
			id: slotResult.id,
			count: 1,
			data: slotResult.data,
			size: .4,
			rotation:[3.14/2, 0, 0]
		});
		this.animationD.load();
			}else {
				this.animationD.destroy();
			}
			if(slotSource2.id!=0){
				this.animationDD.describeItem({
			id: slotSource2.id,
			count: 1,
			data: slotSource2.data,
			size: .3,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDD.load();
			}else {
				this.animationDD.destroy();
			}
        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                return;
            }

            if (this.data.energy < this.ENERGY_CONSUME) return;
			if(slotSource2.id!==ItemID.chip_ysk_1){
            this.data.energy -= this.ENERGY_CONSUME;
}
			if(slotSource2.id==ItemID.chip_ysk_1){
            this.data.energy -= (this.ENERGY_CONSUME+this.DOP_ENERGY_CONSUME);
}
            if (this.data.progress >= this.PROGRESS_MAX) {
                var r = PressmRecipes.getResult(slotSource.id, slotSource.data);
                var result = r.result;

                if (slotResult.id === 0 || (slotResult.id === result.id && slotResult.data === result.data && slotResult.count + result.count <= Item.getMaxStack(slotResult.id))) {
                        slotResult.count = !slotResult.id ? result.count : slotResult.count + result.count;
                        slotResult.id = result.id;
                        slotResult.data = result.data;


                    slotSource.count -= 1;
                    this.data.progress = 0;
            
                }
                } else {
                    			if(slotSource2.id!==ItemID.chip_ysk_1){
this.data.progress++;
}
			if(slotSource2.id==ItemID.chip_ysk_1){
this.data.progress++;
this.data.progress++;
}
            }
        } else if (slotSource.id && PressmRecipes.getResult(slotSource.id, slotSource.data)) {
            this.data.progress = 1;
        }

        this.container.setScale("progressScale", this.data.progress / this.PROGRESS_MAX);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        this.container.validateAll();
		this.container.setText("textInfo1", this.data.energy + "/");
},
    getEnergyStorage: function () {
        return 10000;
    }
});




// file: печка_высокой_термоустойчивости.js

createFurnitureStone("oker","Термоустойчивая_печь","iron_block",0, "термоустойчивая печь", ItemID.oker, BlockID.oker);
IDRegistry.genBlockID("reshetka");
Block.createBlock("reshetka", [{name: "сито из дубовых досок", texture: [["решётка_для_печки_высокой_термоустойчивости", 0], ["решётка_для_печки_высокой_термоустойчивости", 0], ["решётка_для_печки_высокой_термоустойчивости", 0], ["решётка_для_печки_высокой_термоустойчивости", 0], ["решётка_для_печки_высокой_термоустойчивости", 0], ["решётка_для_печки_высокой_термоустойчивости", 0]], inCreative: false}]);
Item.registerUseFunction("oker", function(coords, item, block){
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.oker);
	World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
});
var render = new ICRender.Model();
var render1 = new ICRender.Model();
var render2 = new ICRender.Model();
var render3 = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.oker, 0, render);
var model = BlockRenderer.createModel();
var model1 = BlockRenderer.createModel();
var model2 = BlockRenderer.createModel();
var model3 = BlockRenderer.createModel();

var modelArray=ModelAPI.newArray();
modelArray.addBoxByID("mainBlock1", 0, 0, 0, 1, 2/16, 1, BlockID.stalnoi_block);
modelArray.addBoxByID("mainBlock2", 0, 13/16, 0, 1, 1, 1, BlockID.stalnoi_block);
modelArray.addBoxByID("mainBlock3", 0, 2/16, 0, 1, 13/16, 3/16, BlockID.stalnoi_block);
modelArray.addBoxByID("mainBlock4", 0, 2/16, 13/16, 1, 13/16, 1, BlockID.stalnoi_block);
modelArray.addBoxByID("mainBlock5", 14/16, 2/16, 3/16, 1, 13/16, 13/16, BlockID.stalnoi_block);

modelArray.addBoxByID("resheto", 0, 2/16, 3/16, 15/16, 13/16, 13/16, BlockID.reshetka);

for(var i = 3; i<14; i+=2){
	modelArray.addBoxByID("rod"+i, i/16, 5/16, 3/16, (i+1)/16, 5.3/16, 13/16, BlockID.stalnoi_block);
}

modelArray.compile(model);
modelArray.rotation("all", "y",90,{x:.5, y:.5, z:.5});
modelArray.compile(model1);
modelArray.rotation("all", "y",180,{x:.5, y:.5, z:.5});
modelArray.compile(model2);
modelArray.rotation("all", "y",90,{x:.5, y:.5, z:.5});
modelArray.compile(model3);
render.addEntry(model);
render1.addEntry(model1);
render2.addEntry(model2);
render3.addEntry(model3);
BlockRenderer.enableCoordMapping (BlockID.oker, -1, render);
var GUI_BAR_STANDART_SCALE=3.2;
var guiCooker = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Термоустойчивая печь(Heat-resistant furnace)"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_backgroun", scale: GUI_BAR_STANDART_SCALE},
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


TileEntity.registerPrototype(BlockID.oker, {
	init:function(){
		this.animationDown = new Animation.Item(this.x+.5, this.y+.18, this.z+.5);
		this.animationUp = new Animation.Item(this.x+.5, this.y+.36, this.z+.5);
		if(this.data.orientation==1){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, render);
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
		burnMax: 0,
		isActive: false
	},
	
	getGuiScreen: function(){
		return guiCooker;
	},
	
	
	addTransportedItem: function(self, item, direction){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(Recipes.getFuelBurnDuration(item.id, item.data) && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
			var add = Math.min(item.count, 64 - slotFuel.count);
			item.count -= add;
			fuelSlot.id = item.id;
			fuelSlot.data = item.data;
			fuelSlot.count += add;
			if(!item.count){return;}
		}
		
		var sourceSlot = this.container.getSlot("slotSource");
		if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
			var add = Math.min(item.count, 64 - sourceSlot.count);
			item.count -= add;
			sourceSlot.id = item.id;
			sourceSlot.data = item.data;
			sourceSlot.count += add;
			if(!item.count){return;}
		}
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotFuel"], output: ["slotResult"]};
	},
	
	tick:function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var resultSlot = this.container.getSlot("slotResult");
		if(World.getWorldTime()%2==0){
			if(sourceSlot.id!=0){
				this.animationDown.describeItem({
			id: sourceSlot.id,
			count: 1,
			data: sourceSlot.data,
			size: .27,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDown.load();
			}else {
				this.animationDown.destroy();
			}
			if(resultSlot.id!=0){
				this.animationUp.describeItem({
			id: resultSlot.id,
			count: 1,
			data: resultSlot.data,
			size: .3,
			rotation:[3.14/2, 0, 0]
		});
		this.animationUp.load();
			}else{
				this.animationUp.destroy();
			}
		}
	
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		if(this.data.burn==0 && result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		if(result && this.data.burn > 0){
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 17){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 17);
	},
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
			if(burn){
				if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
					var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
					fuelSlot.id = empty.id;
					fuelSlot.data = empty.data;
					return burn;
				}
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
});




// file: палки.js

IDRegistry.genBlockID("kap");
Block.createBlock("kap", [
{name: "ящик", texture: [["kap", 0], ["kap", 0], ["kap", 0],["kap", 0], ["kap", 0], ["kap", 0]], inCreative: false}]);
IDRegistry.genBlockID("kb");
Block.createBlock("kb", [
{name: "ящик", texture: [["kb", 0], ["kb", 0], ["kb", 0],["kb", 0], ["kb", 0], ["kb", 0]], inCreative: false}]);
IDRegistry.genBlockID("kc");
Block.createBlock("kc", [
{name: "ящик", texture: [["kc", 0], ["kc", 0], ["kc", 0],["kc", 0], ["kc", 0], ["kc", 0]], inCreative: false}]);
IDRegistry.genBlockID("kd");
Block.createBlock("kd", [
{name: "ящик", texture: [["kd", 0], ["kd", 0], ["kd", 0],["kd", 0], ["kd", 0], ["kd", 0]], inCreative: false}]);
function createPalRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (4/16, 0, 11/16, 5/16, 1/16, 12/16,  BlockID.kc, 0);
model.addBox (4/16, 0, 12/16, 5/16, 1/16, 13/16,  BlockID.kb, 0);
model.addBox (3/16, 0, 11/16, 4/16, 1/16, 12/16,  BlockID.kap, 0);
model.addBox (3/16, 0, 12/16, 4/16, 1/16, 13/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 13/16, 3/16, 1/16, 14/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 12/16, 3/16, 1/16, 13/16,  BlockID.kap, 0);
model.addBox (3/16, 0, 13/16, 4/16, 1/16, 14/16,  BlockID.kb, 0);
model.addBox (1/16, 0, 14/16, 2/16, 1/16, 15/16,  BlockID.kap, 0);
model.addBox (1/16, 0, 13/16, 2/16, 1/16, 14/16,  BlockID.kap, 0);
model.addBox (2/16, 0, 14/16, 3/16, 1/16, 15/16,  BlockID.kb, 0);
model.addBox (5/16, 0, 10/16, 6/16, 1/16, 11/16,  BlockID.kd, 0);
model.addBox (6/16, 0, 9/16, 7/16, 1/16, 10/16,  BlockID.kc, 0);
model.addBox (7/16, 0, 8/16, 8/16, 1/16, 9/16,  BlockID.kd, 0);
model.addBox (8/16, 0, 7/16, 9/16, 1/16, 8/16,  BlockID.kc, 0);
model.addBox (9/16, 0, 6/16, 10/16, 1/16, 7/16,  BlockID.kd, 0);
model.addBox (10/16, 0, 5/16, 11/16, 1/16, 6/16,  BlockID.kc, 0);
model.addBox (11/16, 0, 4/16, 12/16, 1/16, 5/16,  BlockID.kd, 0);
model.addBox (12/16, 0, 3/16, 13/16, 1/16, 4/16,  BlockID.kd, 0);
model.addBox (13/16, 0, 2/16, 14/16, 1/16, 3/16,  BlockID.kap, 0);
model.addBox (13/16, 0, 3/16, 14/16, 1/16, 4/16,  BlockID.kb, 0);
model.addBox (12/16, 0, 4/16, 13/16, 1/16, 5/16,  BlockID.kb, 0);
model.addBox (11/16, 0, 5/16, 12/16, 1/16, 6/16,  BlockID.kb, 0);
model.addBox (10/16, 0, 6/16, 11/16, 1/16, 7/16,  BlockID.kb, 0);
model.addBox (9/16, 0, 7/16, 10/16, 1/16, 8/16,  BlockID.kb, 0);
model.addBox (8/16, 0, 8/16, 9/16, 1/16, 9/16,  BlockID.kb, 0);
model.addBox (7/16, 0, 9/16, 8/16, 1/16, 10/16,  BlockID.kb, 0);
model.addBox (6/16, 0, 10/16, 7/16, 1/16, 11/16,  BlockID.kb, 0);
model.addBox (5/16, 0, 11/16, 6/16, 1/16, 12/16,  BlockID.kb, 0);
model.addBox (12/16, 0, 2/16, 13/16, 1/16, 3/16,  BlockID.kap, 0);
model.addBox (11/16, 0, 3/16, 12/16, 1/16, 4/16,  BlockID.kap, 0);
model.addBox (10/16, 0, 4/16, 11/16, 1/16, 5/16,  BlockID.kap, 0);
model.addBox (9/16, 0, 5/16, 10/16, 1/16, 6/16,  BlockID.kap, 0);
model.addBox (8/16, 0, 6/16, 9/16, 1/16, 7/16,  BlockID.kap, 0);
model.addBox (7/16, 0, 7/16, 8/16, 1/16, 8/16,  BlockID.kap, 0);
model.addBox (6/16, 0, 8/16, 7/16, 1/16, 9/16,  BlockID.kap, 0);
model.addBox (5/16, 0, 9/16, 6/16, 1/16, 10/16,  BlockID.kap, 0);
model.addBox (4/16, 0, 10/16, 5/16, 1/16, 11/16,  BlockID.kap, 0);
render.addEntry(model);
}
function createPaltRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (4/16, 0, 4/16, 5/16, 1/16, 5/16,  BlockID.kc, 0);
model.addBox (4/16, 0, 3/16, 5/16, 1/16, 4/16,  BlockID.kb, 0);
model.addBox (3/16, 0, 4/16, 4/16, 1/16, 5/16,  BlockID.kap, 0);
model.addBox (3/16, 0, 3/16, 4/16, 1/16, 4/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 2/16, 3/16, 1/16, 3/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 3/16, 3/16, 1/16, 4/16,  BlockID.kap, 0);
model.addBox (3/16, 0, 2/16, 4/16, 1/16, 3/16,  BlockID.kb, 0);
model.addBox (1/16, 0, 1/16, 2/16, 1/16, 2/16,  BlockID.kap, 0);
model.addBox (1/16, 0, 2/16, 2/16, 1/16, 3/16,  BlockID.kap, 0);
model.addBox (2/16, 0, 1/16, 3/16, 1/16, 2/16,  BlockID.kb, 0);
model.addBox (5/16, 0, 5/16, 6/16, 1/16, 6/16,  BlockID.kd, 0);
model.addBox (6/16, 0, 6/16, 7/16, 1/16, 7/16,  BlockID.kc, 0);
model.addBox (7/16, 0, 7/16, 8/16, 1/16, 8/16,  BlockID.kd, 0);
model.addBox (8/16, 0, 8/16, 9/16, 1/16, 9/16,  BlockID.kc, 0);
model.addBox (9/16, 0, 9/16, 10/16, 1/16, 10/16,  BlockID.kd, 0);
model.addBox (10/16, 0, 10/16, 11/16, 1/16, 11/16,  BlockID.kc, 0);
model.addBox (11/16, 0, 11/16, 12/16, 1/16, 12/16,  BlockID.kd, 0);
model.addBox (12/16, 0, 12/16, 13/16, 1/16, 13/16,  BlockID.kd, 0);
model.addBox (13/16, 0, 13/16, 14/16, 1/16, 14/16,  BlockID.kap, 0);
model.addBox (13/16, 0, 12/16, 14/16, 1/16, 13/16,  BlockID.kb, 0);
model.addBox (12/16, 0, 11/16, 13/16, 1/16, 12/16,  BlockID.kb, 0);
model.addBox (11/16, 0, 10/16, 12/16, 1/16, 11/16,  BlockID.kb, 0);
model.addBox (10/16, 0, 9/16, 11/16, 1/16, 10/16,  BlockID.kb, 0);
model.addBox (9/16, 0, 8/16, 10/16, 1/16, 9/16,  BlockID.kb, 0);
model.addBox (8/16, 0, 7/16, 9/16, 1/16, 8/16,  BlockID.kb, 0);
model.addBox (7/16, 0, 6/16, 8/16, 1/16, 7/16,  BlockID.kb, 0);
model.addBox (6/16, 0, 5/16, 7/16, 1/16, 6/16,  BlockID.kb, 0);
model.addBox (5/16, 0, 4/16, 6/16, 1/16, 5/16,  BlockID.kb, 0);
model.addBox (12/16, 0, 13/16, 13/16, 1/16, 14/16,  BlockID.kap, 0);
model.addBox (11/16, 0, 12/16, 12/16, 1/16, 13/16,  BlockID.kap, 0);
model.addBox (10/16, 0, 11/16, 11/16, 1/16, 12/16,  BlockID.kap, 0);
model.addBox (9/16, 0, 10/16, 10/16, 1/16, 11/16,  BlockID.kap, 0);
model.addBox (8/16, 0, 9/16, 9/16, 1/16, 10/16,  BlockID.kap, 0);
model.addBox (7/16, 0, 8/16, 8/16, 1/16, 9/16,  BlockID.kap, 0);
model.addBox (6/16, 0, 7/16, 7/16, 1/16, 8/16,  BlockID.kap, 0);
model.addBox (5/16, 0, 6/16, 6/16, 1/16, 7/16,  BlockID.kap, 0);
model.addBox (4/16, 0, 5/16, 5/16, 1/16, 6/16,  BlockID.kap, 0);
render.addEntry(model);
}
createKamen("pal","камень","stick",0, "камень", ItemID.pal, BlockID.pal,0);
createPalRender(BlockID.pal, 4, 0);
Block.setBlockShape(BlockID.pal, {x: 1/16, y: 0, z: 2/16}, {x: 14/16, y: 1/16, z: 15/16})
createKamen("palt","камень","stick",0, "камень", ItemID.palt, BlockID.palt,0);
createPaltRender(BlockID.palt, 4, 0);
Block.setBlockShape(BlockID.palt, {x: 1/16, y: 0, z: 2/16}, {x: 14/16, y: 1/16, z: 15/16})
	var RUBB_SAPLING_GROUND_TILES = {
	2: true,
	3: true,
	243: true,
	60: true
};
TileEntity.registerPrototype(BlockID.pal, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.palt, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	}
}
});
var kapmen = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .2){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kapmen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.pal, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
		}
	}
}
});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.pal) 
{
Game.prevent();
}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .3){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kapmen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.pal, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
		}
	}
}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .2){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kapmen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.palt, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
		}
	}
}
});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.pal) 
{
Game.prevent();
}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .3){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kapmen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.palt, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
		}
	}
}
});




// file: вишня.js

IDRegistry.genBlockID("azhenetc_vishni");
Block.createBlock("azhenetc_vishni", [{name: "листва вишни", texture: [["саженец_вишни", 0], ["саженец_вишни", 0], ["саженец_вишни", 0], ["саженец_вишни", 0], ["саженец_вишни", 0], ["саженец_вишни", 0]], inCreative: false}]);
IDRegistry.genBlockID("veshni");
Block.createBlock("veshni", [{name: "листва вишни", texture: [["вешня", 0], ["вешня", 0], ["вешня", 0], ["вешня", 0], ["вешня", 0], ["вешня", 0]], inCreative: false}]);
function createCherryRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0.5, 14/16, 0.5, 0.55, 15/16, 0.5,  idMaterial, dataMaterial);
model.addBox (0.45, 15/16, 0.5, 0.5, 1, 0.5,  idMaterial, dataMaterial);//1/16=6.25
model.addBox (0.45, 49/64, 0.45, 0.55, 14/16, 0.55,  BlockID.veshni,0);
model.addBox (0.47, 48/64, 0.47, 0.53, 57/64, 0.53,  BlockID.veshni,0);
render.addEntry(model);
}
createCherry("avishnia","сито_из_дубовых_досок","вишня",0, "Вишня", ItemID.avishnia, BlockID.avishnia,0);
createCherryRender(BlockID.avishnia, 35, 12);
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.avishnia) 
{
Game.prevent();
}});
IDRegistry.genBlockID("drevesina_vishni");
Block.createBlock("drevesina_vishni", [{name: "Древесина вишни", texture: [["древесина_вишни_верх", 0], ["древесина_вишни_верх", 0], ["древесина_вишни", 0], ["древесина_вишни", 0], ["древесина_вишни", 0], ["древесина_вишни", 0]], inCreative: true}], BLOCK_TYPE_WOOD);
IDRegistry.genBlockID("drevesina_palmi");
Block.createBlock("drevesina_palmi", [{name: "Древесина пальмы", texture: [["древесина_пальмы_верх", 0], ["древесина_пальмы_верх", 0], ["древесина_пальмы", 0], ["древесина_пальмы", 0], ["древесина_пальмы", 0], ["древесина_пальмы", 0]], inCreative: true}], BLOCK_TYPE_WOOD);
IDRegistry.genBlockID("drevesina_dyriana");
Block.createBlockWithRotation("drevesina_dyriana", [{name: "Древесина дурианового дерева", texture: [["image23", 0], ["image23", 0], ["image19", 0], ["image21", 0], ["image20", 0], ["image22", 0]], inCreative: false}], BLOCK_TYPE_WOOD);
IDRegistry.genBlockID("drevesina_dyrianad");
Block.createBlockWithRotation("drevesina_dyrianad", [{name: "Древесина дурианового дерева", texture: [["image23", 0], ["image23", 0], ["image19", 0], ["image211", 0], ["image20", 0], ["image22", 0]], inCreative: false}], BLOCK_TYPE_WOOD);
IDRegistry.genBlockID("listva_vishni");
Block.createBlock("listva_vishni", [{name: "Листва вишни", texture: [["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0]], inCreative: false}], BLOCK_TYPE_LISTVA);
IDRegistry.genBlockID("listva_palmi");
Block.createBlock("listva_palmi", [{name: "Листва пальмы", texture: [["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0]], inCreative: false}], BLOCK_TYPE_LISTVA);
IDRegistry.genBlockID("listva_dyriana");
Block.createBlock("listva_dyriana", [{name: "Листва дурианового дерева", texture: [["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0]], inCreative: false}], BLOCK_TYPE_LISTVA);
IDRegistry.genBlockID("listva_vishnii");
Block.createBlock("listva_vishnii", [{name: "Листва вишни", texture: [["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0]], inCreative: true}], BLOCK_TYPE_LISTVA);
IDRegistry.genBlockID("listva_palmii");
Block.createBlock("listva_palmii", [{name: "Листва пальмы", texture: [["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0]], inCreative: true}], BLOCK_TYPE_LISTVA);
IDRegistry.genBlockID("listva_dyrianaa");
Block.createBlock("listva_dyrianaa", [{name: "Листва дурианового дерева", texture: [["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0]], inCreative: false}], BLOCK_TYPE_LISTVA);
Block.setBlockShape(BlockID.drevesina_vishni, {x: 3/16, y: 0, z: 3/16}, {x: 13/16, y: 1, z: 13/16})
Block.setBlockShape(BlockID.avishnia, {x: 0.55, y: 48/64, z: 0.45}, {x: 0.45, y: 57/64, z: 0.55})
var CHERRY_SAPLING_GROUND_TILS = {
	2: true,
	3: true,
	243: true,
	60: true
};
IDRegistry.genItemID("sazhenetc_vishni");
Item.createItem("sazhenetc_vishni", "Саженец вишни", {name: "саженец_вишни", data: 0});
Item.registerUseFunction("sazhenetc_vishni", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && CHERRY_SAPLING_GROUND_TILS[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.vis);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
IDRegistry.genBlockID("vis");
Block.createBlock("vis", [
	{name: "Cherry Tree Saplin", texture: [["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}
], BLOCK_TYPE_SAZHENETC);
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.avishnia) 
{
Game.prevent();
}});
Block.setBlockShape(BlockID.vis, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
Block.registerDropFunction("vis", function(){
	return [[ItemID.sazhenetc_vishni, 1, 0]];
});
TileEntity.registerPrototype(BlockID.vis, {
	defaultValues: {
		size: 0,
		growth: 0,
		lastGrowth: 0
	},
	
	created: function(){
		this.data.size = .85 + Math.random() * .25;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation1.describeItem({
			id: ItemID.sazhenetc_vishni,
			count: 1,
			data: 0,
			rotation: "x",
			size: this.data.size
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.sazhenetc_vishni,
			count: 1,
			data: 0,
			rotation: "z",
			size: this.data.size
		});
		this.animation2.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
	
	tick: function(){
		if (World.getThreadTime() % 30 == 0){
			this.data.growth += Math.random() * 2;
			this.checkGrowth();
			}
		if (World.getThreadTime() % 2 == 0){
			if (!CHERRY_SAPLING_GROUND_TILS[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
				this.selfDestroy();
			}
		}
	},
	
	click: function(id, count, data){
		if (id == 351 && data == 15){
			this.data.growth += 128 + Math.random() * 128;
			this.checkGrowth();
			Player.setCarriedItem(id, count - 1, data);
		}
	},
	
	checkGrowth: function(){
		if (this.data.growth - 56 > this.data.lastGrowth){
			this.data.size += (this.data.growth - this.data.lastGrowth) / 500;
			this.data.lastGrowth = this.data.growth;
			this.updateAnimation();
		}
		if (this.data.growth > 512){
			this.selfDestroy();
			World.setBlock(this.x, this.y, this.z, BlockID.drevesina_vishni, 0);//да не нормальный код на генерацию структуры, а че не так?
			World.setBlock(this.x, this.y+1, this.z, BlockID.drevesina_vishni, 0);
			World.setBlock(this.x, this.y+2, this.z, BlockID.drevesina_vishni, 0);
			World.setBlock(this.x, this.y+3, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+3, this.z);
			World.setBlock(this.x, this.y+4, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+4, this.z);
			World.setBlock(this.x, this.y+3, this.z+1, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+3, this.z+1);
			World.setBlock(this.x, this.y+3, this.z-1, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+3, this.z-1);
			World.setBlock(this.x+1, this.y+3, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x+1, this.y+3, this.z);
			World.setBlock(this.x-1, this.y+3, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x-1, this.y+3, this.z);
			World.setBlock(this.x, this.y+2, this.z+1, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+2, this.z+1);
			World.setBlock(this.x, this.y+2, this.z-1, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+2, this.z-1);
			World.setBlock(this.x+1, this.y+2, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x+1, this.y+2, this.z);
			World.setBlock(this.x-1, this.y+2, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x-1, this.y+2, this.z);
	if(Math.random() < .5){
World.setBlock(this.x-1, this.y+1, this.z, BlockID.avishnia, 0);
World.addTileEntity(this.x-1, this.y+1, this.z);
}
	if(Math.random() < .5){
World.setBlock(this.x+1, this.y+1, this.z, BlockID.avishnia, 0);
World.addTileEntity(this.x+1, this.y+1, this.z);
}
	if(Math.random() < .5){
World.setBlock(this.x, this.y+1, this.z+1, BlockID.avishnia, 0);
World.addTileEntity(this.x, this.y+1, this.z+1);
}
	if(Math.random() < .5){
World.setBlock(this.x, this.y+1, this.z-1, BlockID.avishnia, 0);
World.addTileEntity(this.x, this.y+1, this.z-1);
}
	if(Math.random() < .5){
World.setBlock(this.x-1, this.y+2, this.z+1, BlockID.listva_vishni, 0);
World.addTileEntity(this.x-1, this.y+2, this.z+1);
	if(Math.random() < .5){
World.setBlock(this.x-1, this.y+1, this.z+1, BlockID.avishnia, 0);
World.addTileEntity(this.x-1, this.y+1, this.z+1);
}
}
	if(Math.random() < .5){
World.setBlock(this.x+1, this.y+2, this.z+1, BlockID.listva_vishni, 0);
World.addTileEntity(this.x+1, this.y+2, this.z+1);
	if(Math.random() < .5){
World.setBlock(this.x+1, this.y+1, this.z+1, BlockID.avishnia, 0);
World.addTileEntity(this.x+1, this.y+1, this.z+1);
}
}
	if(Math.random() < .5){
World.setBlock(this.x-1, this.y+2, this.z-1, BlockID.listva_vishni, 0);
World.addTileEntity(this.x-1, this.y+2, this.z-1);
	if(Math.random() < .5){
World.setBlock(this.x-1, this.y+1, this.z-1, BlockID.avishnia, 0);
World.addTileEntity(this.x-1, this.y+1, this.z-1);
}
}
	if(Math.random() < .5){
World.setBlock(this.x+1, this.y+2, this.z-1, BlockID.listva_vishni, 0);
World.addTileEntity(this.x+1, this.y+2, this.z-1);
	if(Math.random() < .5){
World.setBlock(this.x+1, this.y+1, this.z-1, BlockID.avishnia, 0);
World.addTileEntity(this.x+1, this.y+1, this.z-1);
}
}
		}
	}
});
TileEntity.registerPrototype(BlockID.avishnia, {//тут проверяет блок над вишенкой каждые 3 тика(это не так часто и нагрузки соответственно тоже не много)
	tick: function(){
    if (Config.realism) {
		if (World.getThreadTime() % 3 == 0){
			if (World.getBlockID(this.x, this.y + 1, this.z)!==BlockID.listva_vishni){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.listva_vishni, {
	tick: function(){
    if (Config.realism) {
if(World.getBlockID(this.x, this.y-1, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y-2, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y-1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y-1, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y-1, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y-1, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y-1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y-1, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y-1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y-1, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y+1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y+1, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y+1, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y+1, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y+1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y+1, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y+1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y+1, this.z-1) !== BlockID.drevesina_vishni)
{
		if (World.getThreadTime() % 30 == 0){
	if(Math.random() < .05){
				World.destroyBlock(this.x, this.y, this.z, true);
}}}}}}}}}}}}}}}}}}}}}}}}}}
}
			}
		}
	}
});




// file: камни.js

//модель камня
function createKamnRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (1/16, 0, 2/16, 6/16, 1/16, 7/16,  idMaterial, dataMaterial);
model.addBox (11/16, 0, 12/16, 15/16, 1/16, 1,  idMaterial, dataMaterial);
render.addEntry(model);
}
function createKamRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (1/16, 0, 2/16, 6/16, 1/16, 7/16,  idMaterial, dataMaterial);
model.addBox (11/16, 0, 12/16, 15/16, 1/16, 1,  idMaterial, dataMaterial);
model.addBox (5/16, 0, 12/16, 9/16, 2/16, 15/16,  idMaterial, dataMaterial);
render.addEntry(model);
}
//сам камень
createKamen("kamni","камень","cobblestone",0, "камень", ItemID.kamni, BlockID.kamni,0);
Block.setBlockShape(BlockID.kamni, {x: 1/16, y: 0, z: 2/16}, {x: 6/16, y: 1/16, z: 7/16})
createKame("kamn","камень","cobblestone",0, "камень", ItemID.kamn, BlockID.kamn,0);
createKamnRender(BlockID.kamn, 4, 0);
Block.setBlockShape(BlockID.kamn, {x: 1/16, y: 0, z: 2/16}, {x: 15/16, y: 1/16, z: 1})
createKam("kam","камень","cobblestone",0, "камень", ItemID.kam, BlockID.kam,0);
createKamRender(BlockID.kam, 4, 0);
Block.setBlockShape(BlockID.kam, {x: 1/16, y: 0, z: 2/16}, {x: 15/16, y: 1/16, z: 1})
createKamen("ka","камень","empty",0, "камень", ItemID.ka, BlockID.ka,0);
Block.setBlockShape(BlockID.ka, {x: 2/16, y: 0, z: 2/16}, {x: 14/16, y: 1/16, z: 14/16})
createKamen("k","камень","empty",0, "камень", ItemID.k, BlockID.k,0);
Block.setBlockShape(BlockID.k, {x: 2/16, y: 0, z: 2/16}, {x: 14/16, y: 1/16, z: 14/16})
createKamen("a","камень","empty",0, "камень", ItemID.a, BlockID.a,0);
Block.setBlockShape(BlockID.a, {x: 2/16, y: 0, z: 2/16}, {x: 14/16, y: 1/16, z: 14/16})
	var RUBB_SAPLING_GROUND_TILES = {
	2: true,
	12: true,
	3: true,
	243: true,
	60: true
};
TileEntity.registerPrototype(BlockID.kamni, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.kamn, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.kam, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.ka, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation2 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation1.describeItem({
			id: ItemID.oscolok_cremnia,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.oscolok_cremnia,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation2.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
								this.selfDestroy();
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.k, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation2 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation1.describeItem({
			id: ItemID.rakyshkaa,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.rakyshkaa,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation2.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
								this.selfDestroy();
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.a, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation2 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation1.describeItem({
			id: ItemID.rakyshkab,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.rakyshkab,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation2.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
								this.selfDestroy();
			}
		}
	}
}
});
//массив
var kamen = [1,2,35,37,4,18,27,28,13,243];
//генерация
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kamen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kamni, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
		}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .5){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kamen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kamn, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
		}
	}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .2){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kamen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kam, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
			}
		}
	}
});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.kamni) 
{
Game.prevent();
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.kamn) 
{
Game.prevent();
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.kam) 
{
Game.prevent();
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.ka) 
{
Game.prevent();
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.a) 
{
Game.prevent();
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.k) 
{
Game.prevent();
}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kamen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kamni, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
		}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .5){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kamen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kamn, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
		}
	}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .2){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kamen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kam, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
			}
		}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .05){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kamen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.ka, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
			}
		}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .05){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kamen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.ka, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
			}
		}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 100);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kamen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){
for(var xx = -10; xx <= 10; xx++)
{
for(var yy = -10; yy <= 10; yy++)
{
for(var zz = -10; zz <= 10; zz++)
{
if(World.getBlockID(coords.x+xx, coords.y+yy, coords.z+zz) == 8)
{
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.k, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
		}
	}
}
}
}
}
}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 100);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in kamen ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){
for(var xx = -10; xx <= 10; xx++)
{
for(var yy = -10; yy <= 10; yy++)
{
for(var zz = -10; zz <= 10; zz++)
{
if(World.getBlockID(coords.x+xx, coords.y+yy, coords.z+zz) == 8)
{
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.a, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
		}
	}
}
}
}
}
}
});




// file: кокосовая_пальма.js

IDRegistry.genBlockID("c");
Block.createBlock("c", [{name: "этот предмет бесполезный(выкинь)", texture: [["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0]], inCreative: false}]);
IDRegistry.genBlockID("azhenetc_palmi");
Block.createBlock("azhenetc_palmi", [{name: "этот предмет бесполезный(выкинь)", texture: [["саженец_пальмы", 0], ["саженец_пальмы", 0], ["саженец_пальмы", 0], ["саженец_пальмы", 0], ["саженец_пальмы", 0], ["саженец_пальмы", 0]], inCreative: false}]);
IDRegistry.genBlockID("palmovie_doski");
Block.createBlock("palmovie_doski", [{name: "Пальмовые доски", texture: [["пальмовые_доски", 0], ["пальмовые_доски", 0], ["пальмовые_доски", 0], ["пальмовые_доски", 0], ["пальмовые_доски", 0], ["пальмовые_доски", 0]], inCreative: false}], BLOCK_TYPE_WOOD);
function createKokosRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (6/16, 10/16, 6/16, 10/16, 15/16, 10/16,  BlockID.c,0);
model.addBox (7/16, 9/16, 7/16, 9/16, 1, 9/16,  BlockID.c,0);
model.addBox (5/16, 11/16, 7/16, 11/16, 14/16, 9/16,  BlockID.c,0);
model.addBox (7/16, 11/16, 5/16, 9/16, 14/16, 11/16,  BlockID.c,0);
model.addBox (13/32, 21/32, 11/32, 19/32, 29/32, 21/32,  BlockID.c,0);
model.addBox (11/32, 21/32, 13/32, 21/32, 29/32, 19/32,  BlockID.c,0);
model.addBox (13/32, 19/32, 13/32, 19/32, 31/32, 19/32,  BlockID.c,0);
render.addEntry(model);
}
IDRegistry.genBlockID("kokos");
Block.createBlock("kokos", [{name: "тест", texture: [["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0]], inCreative: false}], BLOCK_TYPE_KOKOS);
createKokosRender(BlockID.kokos, 35, 12);
Block.setBlockShape(BlockID.kokos, {x: 5/16, y: 9/16, z: 5/16}, {x: 11/16, y: 1, z: 11/16})
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.kokos) 
{
Game.prevent();
}});
var RU_SAPLING_GROUND_TILS = {
	12: true,
	2: true,
	3: true,
	60: true,
	243: true
};
IDRegistry.genItemID("sazhenetc_palmi");
Item.createItem("sazhenetc_palmi", "Саженец пальмы", {name: "саженец_пальмы", data: 0}, {});
Item.registerUseFunction("sazhenetc_palmi", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && RU_SAPLING_GROUND_TILS[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.vi);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
IDRegistry.genBlockID("vi");
Block.createBlock("vi", [
	{name: "Rubber Tree Saplin", texture: [["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}
], BLOCK_TYPE_SAZHENETC);
Block.setBlockShape(BlockID.vi, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
Block.registerDropFunction("vi", function(){
	return [[ItemID.sazhenetc_palmi, 1, 0]];
});
TileEntity.registerPrototype(BlockID.vi, {
	defaultValues: {
		size: 0,
		growth: 0,
		lastGrowth: 0
	},
	
	created: function(){
		this.data.size = .85 + Math.random() * .25;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation1.describeItem({
			id: ItemID.sazhenetc_palmi,
			count: 1,
			data: 0,
			rotation: "x",
			size: this.data.size
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.sazhenetc_palmi,
			count: 1,
			data: 0,
			rotation: "z",
			size: this.data.size
		});
		this.animation2.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
	
	tick: function(){
		if (World.getThreadTime() % 30 == 0){
			this.data.growth += Math.random() * 2;
			this.checkGrowth();
			}
		if (World.getThreadTime() % 2 == 0){
			if (!RU_SAPLING_GROUND_TILS[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
				this.selfDestroy();
			}
		}
	},
	
	click: function(id, count, data){
		if (id == 351 && data == 15){
			this.data.growth += 98 + Math.random() * 128;
			this.checkGrowth();
			Player.setCarriedItem(id, count - 1, data);
		}
	},
	
	checkGrowth: function(){
		if (this.data.growth - 56 > this.data.lastGrowth){
			this.data.size += (this.data.growth - this.data.lastGrowth) / 1000;
			this.data.lastGrowth = this.data.growth;
			this.updateAnimation();
		}
		if (this.data.growth > 1024){
			this.selfDestroy();
			World.setBlock(this.x, this.y, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+6, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+5, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+4, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+3, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+2, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+1, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+7, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+7, this.z);
			World.setBlock(this.x+1, this.y+6, this.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+1, this.y+6, this.z+1);
			World.setBlock(this.x+1, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+1, this.y+6, this.z);
			World.setBlock(this.x+1, this.y+6, this.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+1, this.y+6, this.z-1);
			World.setBlock(this.x-1, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-1, this.y+6, this.z);
			World.setBlock(this.x-1, this.y+6, this.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-1, this.y+6, this.z+1);
			World.setBlock(this.x-1, this.y+6, this.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-1, this.y+6, this.z-1);
			World.setBlock(this.x, this.y+6, this.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z-1);
			World.setBlock(this.x, this.y+6, this.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z+1);
			World.setBlock(this.x+2, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+2, this.y+6, this.z);
			World.setBlock(this.x+3, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+3, this.y+6, this.z);
			World.setBlock(this.x+2, this.y+6, this.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+2, this.y+6, this.z+2);
			World.setBlock(this.x+2, this.y+6, this.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+2, this.y+6, this.z-2);
			World.setBlock(this.x-2, this.y+6, this.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-2, this.y+6, this.z-2);
			World.setBlock(this.x-2, this.y+6, this.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-2, this.y+6, this.z+2);
			World.setBlock(this.x-2, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-2, this.y+6, this.z);
			World.setBlock(this.x-3, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-3, this.y+6, this.z);
			World.setBlock(this.x, this.y+6, this.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z-2);
			World.setBlock(this.x, this.y+6, this.z-3, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z-3);
			World.setBlock(this.x, this.y+6, this.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z+2);
			World.setBlock(this.x, this.y+6, this.z+3, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z+3);
	if(Math.random() < .3){
World.setBlock(this.x+1, this.y+5, this.z+1, BlockID.kokos, 0);
World.addTileEntity(this.x+1, this.y+5, this.z+1);
}
	if(Math.random() < .3){
World.setBlock(this.x+1, this.y+5, this.z-1, BlockID.kokos, 0);
World.addTileEntity(this.x+1, this.y+5, this.z-1);
}
	if(Math.random() < .3){
World.setBlock(this.x+1, this.y+5, this.z, BlockID.kokos, 0);
World.addTileEntity(this.x+1, this.y+5, this.z);
}
	if(Math.random() < .3){
World.setBlock(this.x-1, this.y+5, this.z+1, BlockID.kokos, 0);
World.addTileEntity(this.x-1, this.y+5, this.z+1);
}
	if(Math.random() < .3){
World.setBlock(this.x-1, this.y+5, this.z-1, BlockID.kokos, 0);
World.addTileEntity(this.x-1, this.y+5, this.z-1);
}
	if(Math.random() < .3){
World.setBlock(this.x-1, this.y+5, this.z, BlockID.kokos, 0);
World.addTileEntity(this.x-1, this.y+5, this.z);
}
	if(Math.random() < .3){
World.setBlock(this.x, this.y+5, this.z+1, BlockID.kokos, 0);
World.addTileEntity(this.x, this.y+5, this.z+1);
}
	if(Math.random() < .3){
World.setBlock(this.x, this.y+5, this.z-1, BlockID.kokos, 0);
World.addTileEntity(this.x, this.y+5, this.z-1);
}
	if(Math.random() < .7){
World.setBlock(this.x+4, this.y+5, this.z, BlockID.listva_palmi, 0);
World.addTileEntity(this.x+4, this.y+5, this.z);
}
	if(Math.random() < .7){
World.setBlock(this.x-4, this.y+5, this.z, BlockID.listva_palmi, 0);
World.addTileEntity(this.x-4, this.y+5, this.z);
}
	if(Math.random() < .7){
World.setBlock(this.x, this.y+5, this.z-4, BlockID.listva_palmi, 0);
World.addTileEntity(this.x, this.y+5, this.z-4);
}
	if(Math.random() < .7){
World.setBlock(this.x, this.y+5, this.z+4, BlockID.listva_palmi, 0);
World.addTileEntity(this.x, this.y+5, this.z+4);
}
	if(Math.random() < .7){
World.setBlock(this.x+3, this.y+5, this.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(this.x+3, this.y+5, this.z-3);
}
	if(Math.random() < .7){
World.setBlock(this.x-3, this.y+5, this.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(this.x-3, this.y+5, this.z-3);
}
	if(Math.random() < .7){
World.setBlock(this.x+3, this.y+5, this.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(this.x+3, this.y+5, this.z+3);
}
	if(Math.random() < .7){
World.setBlock(this.x-3, this.y+5, this.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(this.x-3, this.y+5, this.z+3);
}
		}
	}
});
TileEntity.registerPrototype(BlockID.kokos, {
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (World.getBlockID(this.x, this.y + 1, this.z)!==BlockID.listva_palmi){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.listva_palmi, {
	tick: function(){
    if (Config.realism) {
if(World.getBlockID(this.x, this.y-1, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z+1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z-1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+1, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-1, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-1, this.y, this.z+1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+1, this.y, this.z-1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+1, this.y, this.z+1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-1, this.y, this.z-1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z+2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z-2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+2, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-2, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-3, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+3, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z+3) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z-3) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-4, this.y+1, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+4, this.y+1, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y+1, this.z+4) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y+1, this.z-4) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+2, this.y, this.z+2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-2, this.y, this.z-2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+2, this.y, this.z-2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-2, this.y, this.z+2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+3, this.y+1, this.z+3) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-3, this.y+1, this.z-3) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+3, this.y+1, this.z-3) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-3, this.y+1, this.z+3) !== BlockID.drevesina_palmi)
{
		if (World.getThreadTime() % 30 == 0){
	if(Math.random() < .05){
				World.destroyBlock(this.x, this.y, this.z, true);
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
}
			}
		}
	}
});




// file: новая_генерация_в_пустыне.js

var KAKTYS_GROUND_TILS = {
	2: true,
	3: true,
	12: true,
	60: true
};
IDRegistry.genItemID("mini_kaktys");
Item.createItem("mini_kaktys", "Мини кактус", {name: "мини-кактус", data: 0});
Item.registerUseFunction("mini_kaktys", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && KAKTYS_GROUND_TILS[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.kak);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
IDRegistry.genBlockID("kak");
Block.createBlock("kak", [
	{name: "Cherry Tree Saplin", texture: [["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}
], BLOCK_TYPE_SAZHENETC);
IDRegistry.genBlockID("kakty");
Block.createBlock("kakty", [
	{name: "Cherry Tree Saplin", texture: [["мини-кактус", 0], ["мини-кактус", 0], ["мини-кактус", 0], ["мини-кактус", 0], ["мини-кактус", 0], ["мини-кактус", 0]], inCreative: false}
]);
function createKakRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 0, 0.5, 1, 1, 0.5,  BlockID.kakty, 0);
model.addBox (0.5, 0, 0, 0.5, 1, 1,  BlockID.kakty, 0);
render.addEntry(model);
}
createKakRender(BlockID.kak, BlockID.kak, 0);
Block.setBlockShape(BlockID.kak, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
Block.registerDropFunction("kak", function(){
	return [[ItemID.mini_kaktys, 1, 0]];
});
TileEntity.registerPrototype(BlockID.kak, {
	defaultValues: {
	
	},
	
	tick: function(){
		if (World.getThreadTime() % 2 == 0){
			if (!KAKTYS_GROUND_TILS[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	},
	
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.05){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var iu in va ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.kak, 0);
			World.addTileEntity(coords.x, coords.y+1, coords.z);

}
			}
		}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.05){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var iu in va ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){
World.setBlock(coords.x, coords.y+1, coords.z, 32, 0);
			World.addTileEntity(coords.x, coords.y+1, coords.z);

}
			}
		}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.002){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var iu in va ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){
World.setBlock(coords.x, coords.y, coords.z, 8, 0);
World.setBlock(coords.x, coords.y-1, coords.z, 8, 0);
World.setBlock(coords.x, coords.y, coords.z+1, 8, 0);
World.setBlock(coords.x, coords.y, coords.z-1, 8, 0);
World.setBlock(coords.x+1, coords.y, coords.z+1, 8, 0);
World.setBlock(coords.x+1, coords.y, coords.z, 8, 0);
World.setBlock(coords.x, coords.y, coords.z+2, 2, 0);
World.setBlock(coords.x, coords.y, coords.z+3, 2, 0);
World.setBlock(coords.x, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x-2, coords.y, coords.z, 2, 0);
World.setBlock(coords.x+2, coords.y, coords.z, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z+2, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z+2, 2, 0);
World.setBlock(coords.x+2, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x+3, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z-1, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z-1, 2, 0);
World.setBlock(coords.x+2, coords.y, coords.z-1, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x+1, coords.y+1, coords.z-2, 31, 1);
World.setBlock(coords.x+2, coords.y+1, coords.z+1, 31, 1);
World.setBlock(coords.x, coords.y+1, coords.z+2, 31, 1);
World.setBlock(coords.x, coords.y+1, coords.z+3, 31, 1);
World.setBlock(coords.x-1, coords.y+1, coords.z+1, 31, 1);
World.setBlock(coords.x+2, coords.y+1, coords.z-1, BlockID.kak, 0);
World.addTileEntity(coords.x+2, coords.y+1, coords.z-1);
World.setBlock(coords.x-1, coords.y+1, coords.z, BlockID.kak, 0);
World.addTileEntity(coords.x-1, coords.y+1, coords.z);
World.setBlock(coords.x+1, coords.y+1, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+2, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+3, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+4, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+6, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+5, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+7, coords.z+2, BlockID.drevesina_palmi, 0);
			World.setBlock(coords.x+1, coords.y+8, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+8, coords.z+2);
			World.setBlock(coords.x+1+1, coords.y+7, coords.z+2+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+1, coords.y+7, coords.z+2+1);
			World.setBlock(coords.x+1+1, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+1, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1+1, coords.y+7, coords.z+2-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+1, coords.y+7, coords.z+2-1);
			World.setBlock(coords.x+1-1, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-1, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1-1, coords.y+7, coords.z+2+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-1, coords.y+7, coords.z+2+1);
			World.setBlock(coords.x+1-1, coords.y+7, coords.z+2-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-1, coords.y+7, coords.z+2-1);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2-1);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2+1);
			World.setBlock(coords.x+1+2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+2, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1+3, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+3, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1+2, coords.y+7, coords.z+2+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+2, coords.y+7, coords.z+2+2);
			World.setBlock(coords.x+1+2, coords.y+7, coords.z+2-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+2, coords.y+7, coords.z+2-2);
			World.setBlock(coords.x+1-2, coords.y+7, coords.z+2-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-2, coords.y+7, coords.z+2-2);
			World.setBlock(coords.x+1-2, coords.y+7, coords.z+2+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-2, coords.y+7, coords.z+2+2);
			World.setBlock(coords.x+1-2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-2, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1-3, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-3, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2-2);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2-3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2-3);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2+2);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2+3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2+3);
	if(Math.random() < .3){
World.setBlock(coords.x+1+1, coords.y+6, coords.z+2+1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1+1, coords.y+6, coords.z+2+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1+1, coords.y+6, coords.z+2-1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1+1, coords.y+6, coords.z+2-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1+1, coords.y+6, coords.z+2, BlockID.kokos, 0);
World.addTileEntity(coords.x+1+1, coords.y+6, coords.z+2);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1-1, coords.y+6, coords.z+2+1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1-1, coords.y+6, coords.z+2+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1-1, coords.y+6, coords.z+2-1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1-1, coords.y+6, coords.z+2-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1-1, coords.y+6, coords.z+2, BlockID.kokos, 0);
World.addTileEntity(coords.x+1-1, coords.y+6, coords.z+2);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z+2+1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+2+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z+2-1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+2-1);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1+4, coords.y+6, coords.z+2, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1+4, coords.y+6, coords.z+2);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1-4, coords.y+6, coords.z+2, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1-4, coords.y+6, coords.z+2);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+6, coords.z+2-4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+2-4);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+6, coords.z+2+4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+2+4);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1+3, coords.y+6, coords.z+2-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1+3, coords.y+6, coords.z+2-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1-3, coords.y+6, coords.z+2-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1-3, coords.y+6, coords.z+2-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1+3, coords.y+6, coords.z+2+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1+3, coords.y+6, coords.z+2+3);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1-3, coords.y+6, coords.z+2+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1-3, coords.y+6, coords.z+2+3);
}
}
			}
		}
	}
});




// file: другие_языки.js

//перевод я делаю всегда к релизу новой беты
//инструменты
Translation.addTranslation("Шипованная дубина", {en: "Studded cudgel"});
Translation.addTranslation("Ядовитая шипованная дубина", {en: "Poisoned studded cudgel"});
Translation.addTranslation("Нож с шипом древнего стража", {en: "Knife with a thorn of an ancient guard"});
Translation.addTranslation("Нож с шипом стража", {en: "Knife with a thorn of a guard"});
Translation.addTranslation("Стальная лопата", {en: "Steel shovel"});
Translation.addTranslation("Стальная кирка", {en: "Steel pickax"});
Translation.addTranslation("Стальной меч", {en: "Steel sword"});
Translation.addTranslation("Стальной топор", {en: "Steel axe"});
Translation.addTranslation("Стальная мотыга", {en: "Steel hoe"});
Translation.addTranslation("Деревянный метательный нож", {en: "Wooden throwing knife"});
Translation.addTranslation("Каменный метательный нож", {en: "Stone throwing knife"});
Translation.addTranslation("Кремниевый метательный нож", {en: "Silicon throwing knife"});
Translation.addTranslation("Золотой метательный нож", {en: "Golden throwing knife"});
Translation.addTranslation("Алмазный метательный нож", {en: "Diamond throwing knife"});
Translation.addTranslation("Стальной метательный нож", {en: "Steel throwing knife"});
Translation.addTranslation("Железный метательный нож", {en: "Iron throwing knife"});
Translation.addTranslation("Изумрудный метательный нож", {en: "Emerald throwing knife"});
Translation.addTranslation("Обсидиановый метательный нож", {en: "Obsidian throwing knife"});
Translation.addTranslation("Костяной метательный нож", {en: "Bone throwing knife"});
//предметы
Translation.addTranslation("Шип древнего стража", {en: "Thorn of an ancient guard"});
Translation.addTranslation("Кристалл магмы:заряженность-100(мин.)", {en: "Magma crystal:charging-100(min.)"});
Translation.addTranslation("Кристалл магмы:заряженность-400", {en: "Magma crystal:charging-400"});
Translation.addTranslation("Кристалл магмы:заряженность-700", {en: "Magma crystal:charging-700"});
Translation.addTranslation("Кристалл магмы:заряженность-1000", {en: "Magma crystal:charging-1000"});
Translation.addTranslation("Кристалл магмы:заряженность-1300", {en: "Magma crystal:charging-1300"});
Translation.addTranslation("Кристалл магмы:заряженность-1600(сред.)", {en: "Magma crystal:charging-1600(med.)"});
Translation.addTranslation("Кристалл магмы:заряженность-1900", {en: "Magma crystal:charging-1900"});
Translation.addTranslation("Кристалл магмы:заряженность-2200", {en: "Magma crystal:charging-2200"});
Translation.addTranslation("Кристалл магмы:заряженность-2500", {en: "Magma crystal:charging-2500"});
Translation.addTranslation("Кристалл магмы:заряженность-2800", {en: "Magma crystal:charging-2800"});
Translation.addTranslation("Кристалл магмы:заряженность-3100(макс.)", {en: "Magma crystal:charging-3100(max.)"});
Translation.addTranslation("Шип стража", {en: "Thorn of a guard"});
Translation.addTranslation("Камень", {en: "Rock"});
Translation.addTranslation("Алмазный самородок", {en: "Diamond nugget"});
Translation.addTranslation("Адский слиток", {en: "Hellish ingot"});
Translation.addTranslation("Порванная бумага", {en: "Torn paper"});
Translation.addTranslation("Сломанная палка", {en: "Broken stick"});
Translation.addTranslation("Сломанная стрела", {en: "Broken arrow"});
Translation.addTranslation("Железный самородок", {en: "Iron nugget"});
Translation.addTranslation("Сетка от просеивателя", {en: "Mesh of sifter"});
Translation.addTranslation("Создать утку", {en: "Create a duck"});
Translation.addTranslation("Создать кабана", {en: "Create a boar"});
Translation.addTranslation("Изумрудный самородок", {en: "Emerald nugget"});
Translation.addTranslation("Игла", {en: "Needle"});
Translation.addTranslation("Сердце дракона", {en: "Dragon heart"});
Translation.addTranslation("Осколок кремния", {en: "Fragment of silicon"});
Translation.addTranslation("Железная банка", {en: "Iron capacity"});
Translation.addTranslation("Кольчужное кольцо", {en: "Chain ring"});
Translation.addTranslation("Горсть песка", {en: "Handful of sand"});
Translation.addTranslation("Горсть гравия", {en: "Handful of gravel"});
Translation.addTranslation("Горсть земли", {en: "Handful of earth"});
Translation.addTranslation("Гнилая нить", {en: "Rotten thread"});
Translation.addTranslation("Старая ткань", {en: "Old cloth"});
Translation.addTranslation("Водяной фильтр", {en: "Water filter"});
Translation.addTranslation("Трава", {en: "Grass"});
Translation.addTranslation("Алмазный самородок", {en: "Diamond nugget"});
Translation.addTranslation("Катушка с нитями", {en: "Coil with threads"});
Translation.addTranslation("Обыкновенная веревка", {en: "Common rope"});
Translation.addTranslation("Травяная веревка", {en: "Grass rope"});
Translation.addTranslation("Зуб паука", {en: "Spider's teeth"});
Translation.addTranslation("Ядовитый зуб паука", {en: "Poisonous spider's teeth"});
Translation.addTranslation("Прочная ткань", {en: "Durable fabric"});
Translation.addTranslation("Гнилая кость", {en: "Rotten bone"});
Translation.addTranslation("Гнилая нить", {en: "Rotten thread"});
Translation.addTranslation("Травяная нить", {en: "Grass thread"});
Translation.addTranslation("Частица угля", {en: "Coal particle"});
Translation.addTranslation("Лоза", {en: "Vine"});
Translation.addTranslation("Медвежья шкура", {en: "Bear skin"});
Translation.addTranslation("Баллон с воздухом", {en: "Balloon with air"});
Translation.addTranslation("Кнопка ютуб", {en: "Button youtube"});
Translation.addTranslation("Сера", {en: "Sulfur"});
Translation.addTranslation("Зола", {en: "Ash"});
Translation.addTranslation("Просеиватель из дуба", {en: "Oak sifter"});
Translation.addTranslation("Просеиватель из березы", {en: "Birch sifter"});
Translation.addTranslation("Просеиватель из сосны", {en: "Pine sifter"});
Translation.addTranslation("Просеиватель из акации", {en: "Acacia sifter"});
Translation.addTranslation("Просеиватель из темного дуба", {en: "Dark oak sifter"});
Translation.addTranslation("Просеиватель из тропического дерева", {en: "Tropical tree sifter"});
Translation.addTranslation("Решётка для термоустойчивой печи", {en: "Grate for heat-resistant furnace"});
Translation.addTranslation("Стальной самородок", {en: "Steel nugget"});
Translation.addTranslation("Катушка с травяными нитями", {en: "Coil with herbal threads"});
Translation.addTranslation("Калиевая селитра", {en: "Potassium nitre"});
Translation.addTranslation("Антрацитовый уголь", {en: "Anthracite coal"});
Translation.addTranslation("Стальной слиток", {en: "Steel ingot"});
Translation.addTranslation("Rock", {ru: "Камень"});
Translation.addTranslation("Саженец вишни", {en: "Cherry sapling"});
Translation.addTranslation("Рубин", {en: "Ruby"});
Translation.addTranslation("Пепел", {en: "Ash"});
Translation.addTranslation("Метеоритовый слиток", {en: "Meteorite bar"});
Translation.addTranslation("Металлалом", {en: "Scrap metal"});
Translation.addTranslation("Стальной металлалом", {en: "Steel scrap metal"});
Translation.addTranslation("Адский металлалом", {en: "Hellish scrap metal"});
Translation.addTranslation("Цветной металлалом", {en: "Non-ferrous scrap metal"});
Translation.addTranslation("Метеоритовый самородок", {en: "Meteorite nugget"});
Translation.addTranslation("Адский самородок", {en: "Hellish nugget"});
Translation.addTranslation("Осколок рубина", {en: "Ruby shard"});
Translation.addTranslation("Межгалактическая валюта", {en: "Intergalactic currency"});
Translation.addTranslation("Набор для создания микрочипов", {en: "Set for creating microarrays"});
Translation.addTranslation("Микрочип", {en: "Microchip"});
Translation.addTranslation("Микрочип ускорения", {en: "Microchip acceleration"});
Translation.addTranslation("Продвинутый микрочип ускорения", {en: "Advanced acceleration microchip"});
Translation.addTranslation("Ракушка", {en: "Shell"});
Translation.addTranslation("Кокос", {en: "Coconut"});
Translation.addTranslation("Чешуя дракона края", {en: "Scale of dragon of edge"});
Translation.addTranslation("Спальный набор", {en: "Bedroom set"});
Translation.addTranslation("Создать краба", {en: "Create crab"});
Translation.addTranslation("Создать мумию", {en: "Create mummy"});
Translation.addTranslation("Создать зараженного монстра", {en: "Create infected mob"});
Translation.addTranslation("Ткацкий станок из дуба", {en: "Oak loom"});
Translation.addTranslation("Ткацкий станок из березы", {en: "Birch loom"});
Translation.addTranslation("Ткацкий станок из сосны", {en: "Pine loom"});
Translation.addTranslation("Ткацкий станок из акации", {en: "Acacia loom"});
Translation.addTranslation("Ткацкий станок из темного дуба", {en: "Dark oak loom"});
Translation.addTranslation("Ткацкий станок из тропического дерева", {en: "Tropical tree loom"});
Translation.addTranslation("Фабрика чипов", {en: "Factory of chips"});
Translation.addTranslation("Мини пресс", {en: "Mini press"});
Translation.addTranslation("Мини кактус", {en: "Mini cactus"});
Translation.addTranslation("Саженец пальмы", {en: "Palm sapling"});
//еда
Translation.addTranslation("Сыр", {en: "Cheese"});
Translation.addTranslation("Вишенка", {en: "Cherry"});
Translation.addTranslation("Колбаса", {en: "Sausage"});
Translation.addTranslation("Сырой яблочный пирог", {en: "Raw apple pie"});
Translation.addTranslation("Сырой вишневый пирог", {en: "Raw cherry pie"});
Translation.addTranslation("Роллы", {en: "Rolls"});
Translation.addTranslation("Приготовленный яблочный пирог", {en: "Cooked apple pie"});
Translation.addTranslation("Приготовленный вишневый пирог", {en: "Cooked cherry pie"});
Translation.addTranslation("Пузырек с молоком", {en: "Bubble with milk"});
Translation.addTranslation("Мука", {en: "Flour"});
Translation.addTranslation("Семечки", {en: "Sunflower seeds"});
Translation.addTranslation("Тесто", {en: "Dough"});
Translation.addTranslation("Очищенная приготовленная рыба", {en: "Peeled cooked fish"});
Translation.addTranslation("Очищенный приготовленный лосось", {en: "Peeled cooked salmon"});
Translation.addTranslation("Шоколадная плитка", {en: "Chocolate bar"});
Translation.addTranslation("Сырая пицца", {en: "Raw pizza"});
Translation.addTranslation("Приготовленная пицца", {en: "Cooked pizza"});
Translation.addTranslation("Яичница", {en: "Omelette"});
Translation.addTranslation("Мясо рыбы фугу", {en: "Meat fugu fish"});
Translation.addTranslation("Безопасное мясо рыбы фугу", {en: "Safe meat fugu fish"});
Translation.addTranslation("Приготовленное мясо рыбы фугу", {en: "Cooked meat fugu fish"});
Translation.addTranslation("Бутерброд", {en: "Sandwich"});
Translation.addTranslation("Сырое мясо края", {en: "Raw edge meat"});
Translation.addTranslation("Приготовленное мясо края", {en: "Cooked edge meat"});
Translation.addTranslation("Пузырек с расплавленным сыром", {en: "Bubble with melted cheese"});
Translation.addTranslation("Очищенный сырой лосось", {en: "Peeled raw salmon"});
Translation.addTranslation("Очищенная сырая рыба", {en: "Peeled raw fish"});
Translation.addTranslation("Сырое мясо рыбы", {en: "Raw fish meat"});
Translation.addTranslation("Приготовленное мясо рыбы", {en: "Cooked fish meat"});
Translation.addTranslation("Сырое мясо лосося", {en: "Raw salmon meat"});
Translation.addTranslation("Приготовленное мясо лосося", {en: "Cooked salmon meat"});
Translation.addTranslation("Очищенный кокос", {en: "Peeled coconut"});
Translation.addTranslation("Сырое мясо краба", {en: "Raw crab meat"});
Translation.addTranslation("Приготовленное мясо краба", {en: "Cooked crab ceat"});
Translation.addTranslation("Миска с кокосовым молоком", {en: "Bowl of coconut milk"});
Translation.addTranslation("Энергетический напиток", {en: "Energy drink"});
//броня
Translation.addTranslation("Меховой капюшон", {en: "Fur hood"});
Translation.addTranslation("Меховая куртка", {en: "Fur jacket"});
Translation.addTranslation("Меховые поножи", {en: "Fur leggings"});
Translation.addTranslation("Меховые ботинки", {en: "Fur boots"});
Translation.addTranslation("Прочный тканевый шлем", {en: "Durable fabric helmet"});
Translation.addTranslation("Прочная тканевая куртка", {en: "Durable fabric jacket"});
Translation.addTranslation("Прочные тканевые поножи", {en: "Durable fabric leggings"});
Translation.addTranslation("Прочные тканевые ботинки", {en: "Durable fabric boots"});
Translation.addTranslation("Ветхий шлем", {en: "Disrepair helmet"});
Translation.addTranslation("Ветхая куртка", {en: "Disrepair jacket"});
Translation.addTranslation("Ветхие поножи", {en: "Disrepair leggings"});
Translation.addTranslation("Ветхие ботинки", {en: "Disrepair boots"});
Translation.addTranslation("Адский шлем", {en: "Hellish helmet"});
Translation.addTranslation("Адская кираса", {en: "Hellish chestplate"});
Translation.addTranslation("Адские поножи", {en: "Hellish leggings"});
Translation.addTranslation("Адские ботинки", {en: "Hellish boots"});
Translation.addTranslation("Шахтерская каска", {en: "Miner's helmet"});
Translation.addTranslation("Водолазный шлем", {en: "Diving helmet"});
Translation.addTranslation("Баллоны с воздухом", {en: "Balloons with air"});
Translation.addTranslation("Стальной шлем", {en: "Steel helmet"});
Translation.addTranslation("Стальная кираса", {en: "Steel chestplate"});
Translation.addTranslation("Стальные поножи", {en: "Steel leggings"});
Translation.addTranslation("Стальные ботинки", {en: "Steel boots"});
Translation.addTranslation("капюшон дракона края", {en: "Dragon's hood"});
Translation.addTranslation("Кираса дракона края", {en: "Dragon's chestplate"});
Translation.addTranslation("Поножи дракона края", {en: "Dragon's leggings"});
Translation.addTranslation("Ботинки дракона края", {en: "Dragon's boots"});
//блоки
Translation.addTranslation("Сито", {en: "Sieve"});
Translation.addTranslation("Листва пальмы", {en: "Palm leaves"});
Translation.addTranslation("Древесина вишни", {en: "Cherry wood"});
Translation.addTranslation("Антрацитовая руда", {en: "Anthracite ore"});
Translation.addTranslation("Руда кристалла магмы", {en: "Magma crystal ore"});
Translation.addTranslation("Серная руда", {en: "Sulfuric ore"});
Translation.addTranslation("Стальной блок", {en: "Steel block"});
Translation.addTranslation("Древесина пальмы", {en: "Palm wood"});
Translation.addTranslation("Листва вишни", {en: "Cherry leaves"});
Translation.addTranslation("Рубиновая руда", {en: "Ruby ore"});
Translation.addTranslation("Блок пепла", {en: "Ash block"});
Translation.addTranslation("Рубиновый блок", {en: "Ruby block"});
Translation.addTranslation("Метеоритовая руда", {en: "Meteorite ore"});
Translation.addTranslation("Метеоритовый блок", {en: "Meteorite block"});
Translation.addTranslation("Стальной провод", {en: "Steel wire"});
Translation.addTranslation("Водяной генератор", {en: "Water generator"});
Translation.addTranslation("Ветхая накидка", {en: "Disrepair mantle"});
Translation.addTranslation("Ветхий капюшон", {en: "Disrepair hood"});
Translation.addTranslation("Углеродное волокно", {en: "Carbon fiber"});
Translation.addTranslation("Стальные ласты", {en: "Steel flippers"});
Translation.addTranslation("Алмазные ласты", {en: "Diamond flippers"});
Translation.addTranslation("Дайверский шлем", {en: "Diving helmet"});
Translation.addTranslation("Дайверская куртка", {en: "Diving jacket"});
Translation.addTranslation("Дайверские поножи", {en: "Diving leggings"});




// file: версия.js

//сообщение в чате при входе в игру
alert("MTM Items PE by Gojsjs(beta V3.1.2.3)");
//сообщение в чате при входе на мир
Callback.addCallback("LevelLoaded", function(){ 
	Game.message(ChatColor.GREEN + "MTM Items PE by Gojsjs(beta V3.1.2.3)");//не ну а че пусть знают с какими модами играют))))
});




// file: трубы.js

function setupWireRender(id, groupName, width, widthb, idb, preventSelfAdd) {
    let render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    let boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ];
    let bxes = [
        {side: [1, 0, 0], box: [0.5 + widthb / 2, 0.5 - widthb / 2, 0.5 - widthb / 2, 1, 0.5 + widthb / 2, 0.5 + widthb / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - widthb / 2, 0.5 - widthb / 2, 0.5 - widthb / 2, 0.5 + widthb / 2, 0.5 + widthb / 2]},
        {side: [0, 1, 0], box: [0.5 - widthb / 2, 0.5 + widthb / 2, 0.5 - widthb / 2, 0.5 + widthb / 2, 1, 0.5 + widthb / 2]},
        {side: [0, -1, 0], box: [0.5 - widthb / 2, 0, 0.5 - widthb / 2, 0.5 + widthb / 2, 0.5 - widthb / 2, 0.5 + widthb / 2]},
        {side: [0, 0, 1], box: [0.5 - widthb / 2, 0.5 - widthb / 2, 0.5 + widthb / 2, 0.5 + widthb / 2, 0.5 + widthb / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - widthb / 2, 0.5 - widthb / 2, 0, 0.5 + widthb / 2, 0.5 + widthb / 2, 0.5 - widthb / 2]},
    ];
    let group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
    for (let i in boxes) {
        let box = boxes[i];
        let model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], idb, 0);
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
        }
    for (let i in bxes) {
        let bx = bxes[i];
        let mdel = BlockRenderer.createModel();
        mdel.addBox(bx.box[0], bx.box[1], bx.box[2], bx.box[3], bx.box[4], bx.box[5], id, 0);
    render.addEntry(mdel).asCondition(bx.side[0], bx.side[1], bx.side[2], group, 0);
    }
        let modelOwn = BlockRenderer.createModel();
    modelOwn.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, idb, 0);
    modelOwn.addBox(0.5 - widthb / 2, 0.5 - widthb / 2, 0.5 - widthb / 2, 0.5 + widthb / 2, 0.5 + widthb / 2, 0.5 + widthb / 2, id, 0);
    render.addEntry(modelOwn);
}
IDRegistry.genBlockID("stalnaia_tryba");
Block.createBlock("stalnaia_tryba", [{name: "Стальной провод", texture: [["стальной_провод", 0]], inCreative: true}]);
IDRegistry.genBlockID("stalnaia_obolochka");
Block.createBlock("stalnaia_obolochka", [{name: "Стальной провод", texture: [["стальная_оболочка", 0]], inCreative: false}]);
RF.registerWire(BlockID.stalnaia_tryba, 128);
setupWireRender(BlockID.stalnaia_tryba, "rf-wire", 6/16, 4/16, BlockID.stalnaia_obolochka);
Block.setBlockShape(BlockID.stalnaia_tryba, {x: 5/16, y: 5/16, z: 5/16}, {x: 11/16, y: 11/16, z: 11/16});
IDRegistry.genBlockID("rybinovaia_tryba");
Block.createBlock("rybinovaia_tryba", [{name: "Рубиновый провод", texture: [["рубиновый_провод", 0]], inCreative: false}]);
IDRegistry.genBlockID("rybinovaia_obolochka");
Block.createBlock("rybinovaia_obolochka", [{name: "Стальной провод", texture: [["рубиновая_оболочка", 0]], inCreative: false}]);
RF.registerWire(BlockID.rybinovaia_tryba, 512);
setupWireRender(BlockID.rybinovaia_tryba, "rf-wire", 6/16, 5/16, BlockID.rybinovaia_obolochka);
Block.setBlockShape(BlockID.rybinovaia_tryba, {x: 5/16, y: 5/16, z: 5/16}, {x: 11/16, y: 11/16, z: 11/16});




// file: генераторы.js

const MagmaticManager = {
    fuels: {},

    addFuel: function (liquid, energy) {
        this.fuels[liquid] = energy;
    },

    getEnergyFor100mb: function (liquid) {
        return this.fuels[liquid] || 0;
    }

};

MagmaticManager.addFuel("lava", 18000);
const DynamoHelper = {

    MIN_POWER: 1,
    MAX_POWER: 80,

    registerDynamo: function (unique, name, texture, texture2, tile) {

        Block.setPrototype(unique, {
            type: Block.TYPE_BASE,

            getVariations: function () {
                return [
                    {name: name, texture: [[texture2, 0], [texture, 0], [texture, 1]], inCreative: true}
                ];
            }

        });

        tile.energyTick = function(type, src){
            let output = Math.min(this.getMaxEnergyProvide ? this.getMaxEnergyProvide() : 400, this.data.energy);
            this.data.energy += src.add(output) - output;
        };

        tile.isGenerator = function(){
            return true
        };
        MachineRegistry.register(BlockID[unique], tile);
    },

    mapAtCoords: function(x, y, z, id, texture, isActive, rotate){

        let render = new ICRender.Model();
        let model = BlockRenderer.createModel();

        if(rotate === 0){ //UP
            model.addBox(0, 0, 0, 1, 0.61, 1, [["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 0]]);
            model.addBox(0.250, 0.62, 0.250, 0.746, 1, 0.746, [["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 0]]);
        }else if(rotate === 1){ //DOWN
            model.addBox(0, 0.39, 0, 1, 1, 1, [["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 2]]);
            model.addBox(0.250, 0, 0.250, 0.746, 0.62, 0.746, [["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 3]]);
        }else if(rotate === 2){
            model.addBox(0, 0, 0, 0.625, 1, 1, [["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 1]]);
            model.addBox(0.625, 0.250, 0.250, 1, 0.7, 0.746, [["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 1]]);
        }else if(rotate === 3){
            model.addBox(0.38, 0, 0, 1, 1, 1, [["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 1]]);
            model.addBox(0, 0.250, 0.250, 0.38, 0.7, 0.746, [["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 1]]);
        }else if(rotate === 4){
            model.addBox(0, 0, 0.38, 1, 1, 1, [["dynamo_" + texture, 0], ["dynamo_" + texture, 0], ["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 4]]);
            model.addBox(0.250, 0.250, 0, 0.746, 0.7, 0.40, [["dynamo_coil_" + isActive, 0], ["dynamo_coil_" + isActive, 0], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 5]]);
        }else if(rotate === 5){
            model.addBox(0, 0, 0, 1, 1, 0.625, [["dynamo_" + texture, 2], ["dynamo_" + texture, 2], ["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 3]]);
            model.addBox(0.250, 0.250, 0.625, 0.746, 0.7, 1, [["dynamo_coil_" + isActive, 3], ["dynamo_coil_" + isActive, 3], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 4]]);
        }

        render.addEntry(model);
        BlockRenderer.enableCoordMapping(id, -1, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
    },

    calcEnergy: function (tile, basePower) {
        let maxPowerLevel = 9 * tile.getEnergyStorage() / 10;

        return (tile.getEnergyStorage() - tile.data.energy) / (maxPowerLevel / basePower);
    }

};
const vodGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Водяной генератор(water generator)"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2},
        {type: "bitmap", x: 3400, y: 60, bitmap: "fluid_scale_short_b", scale: 3.2}
    ],
    elements: {
        "rfScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "lavaScale": {type: "scale", x: 3430, y: 63, direction: 1, bitmap: "fluid_scale_short", scale: 3.2},

        "slot1": {type: "slot", x: 4200, y: 60},
        "slot2": {type: "slot", x: 4200, y: 199},
        "slotSource2": {type: "slot", x: 930, y: 60, bitmap: "Chip"},
        		"textInfo1": {type: "text", x: 350, y: 252, width: 300, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 350, y: 282, width: 300, height: 30, text: "5000"}
    }
});
IDRegistry.genBlockID("vodge");
Block.createBlock("vodge", [{name: "Пальмовые доски", texture: [["низ", 0], ["cobblestone", 0], ["низ", 0], ["низ", 0], ["низ", 0], ["низ", 0]], inCreative: false}]);
IDRegistry.genBlockID("vodg");
Block.createBlock("vodg", [{name: "Пальмовые доски", texture: [["низ_корпус", 0], ["корпус", 0], ["низ_корпус", 0], ["низ_корпус", 0], ["низ_корпус", 0], ["низ_корпус", 0]], inCreative: false}]);
function createVodRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (1/32, 1/32, 1/32, 31/32, 31/32, 31/32,  BlockID.vodge,0);
model.addBox (0, 0, 0, 1, 1, 1,  BlockID.vodg,0);
render.addEntry(model);
}
createVodRender(BlockID.vodgen, 1, 0);
DynamoHelper.registerDynamo("vodgen", "Водяной генератор", "корпусы", "низ_корпус", {
    defaultValues: {
        energy: 0
    },

    getGuiScreen: function () {
        return vodGUI;
    },
    init: function () {
	this.animationDD = new Animation.Item(this.x+.5, this.y+63/64, this.z+.5);
    },

    tick: function () {
            var slotSource2 = this.container.getSlot("slotSource2");
            			if(slotSource2.id!=0){
				this.animationDD.describeItem({
			id: slotSource2.id,
			count: 1,
			data: slotSource2.data,
			size: .3,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDD.load();
			}else {
				this.animationDD.destroy();
			}
if(this.data.energy >= 5001){
    this.data.energy = 5000;
}
if(this.data.energy <= 4999){
        if((World.getBlockID(this.x, this.y - 1, this.z)==8)||(World.getBlockID(this.x, this.y - 1, this.z)==9)){
        if((World.getBlockID(this.x + 1, this.y, this.z)==8)||(World.getBlockID(this.x + 1, this.y, this.z)==9)){
        if((World.getBlockID(this.x - 1, this.y, this.z)==8)||(World.getBlockID(this.x - 1, this.y, this.z)==9)){
        if((World.getBlockID(this.x, this.y, this.z - 1)==8)||(World.getBlockID(this.x, this.y, this.z - 1)==9)){
        if((World.getBlockID(this.x, this.y, this.z + 1)==8)||(World.getBlockID(this.x, this.y, this.z + 1)==9)){
this.data.energy = (this.data.energy + 10);
            if (slotSource2.id == ItemID.chip_ysk_1)
{
this.data.energy = (this.data.energy + 5);
}
}
}
}
}
}
}
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
		this.container.setText("textInfo1", this.data.energy + "/");
    },

    getEnergyStorage: function () {
        return 5000;
    }
});




// file: метеориты.js

var falling = 0;
Callback.addCallback("tick", function()
{
    if (Config.fallingMeteorites) {
		if (World.getThreadTime() % 2 == 0){
    falling += 1;
			falling += Math.random() * 2;
		if (falling > 80000){
		StopBlockSound();
		falling = 0;
    var pos = Player.getPosition()
    var ran = parseInt(Math.random() * 200);
    var ra = parseInt(Math.random() * 200);
		pos = GenerationUtils.findSurface(pos.x-100+ran, pos.y, pos.z-100+ra);
PlaySoundFile("crash.ogg");
World.explode(pos.x, pos.y, pos.z, 5, true);
World.setBlock(pos.x, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-7, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-8, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x, pos.y-7, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-7, pos.z, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z-1, BlockID.block_zoli, 0);
 mz = Entity.spawn(pos.x+1.5, pos.y-5, pos.z-.5, 32);
Entity.setSkin(mz, "mob/мзомби.png")
Entity.setMaxHealth (mz, 100)
Entity.setHealth (mz, 100)
World.setBlock(pos.x, pos.y-6, pos.z-1, BlockID.block_zoli, 0);
 mc = Entity.spawn(pos.x+.5, pos.y-5, pos.z-.5, 33);
Entity.setSkin(mc, "mob/мкрипер.png")
Entity.setMaxHealth (mc, 100)
Entity.setHealth (mc, 100)
	if(Math.random() < .4){
World.explode(pos.x, pos.y, pos.z, 7, true);
World.setBlock(pos.x, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-9, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x+1, pos.y-9, pos.z, BlockID.block_zoli, 0);
 ms = Entity.spawn(pos.x+1.5, pos.y-8, pos.z+.5, 34);
Entity.setSkin(ms, "mob/мскелет.png")
Entity.setMaxHealth (ms, 100)
Entity.setHealth (ms, 100)
World.setBlock(pos.x+1, pos.y-9, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x, pos.y-9, pos.z+1, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-10, pos.z+1, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-10, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-10, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-10, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-10, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-10, pos.z-1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-10, pos.z-1, BlockID.block_zoli, 0);
	if(Math.random() < .5){
World.setBlock(pos.x+1, pos.y-10, pos.z, BlockID.antratcit, 0);
World.setBlock(pos.x, pos.y-10, pos.z-1, BlockID.antratcit, 0);
}
World.setBlock(pos.x, pos.y-11, pos.z+1, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-11, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x+1, pos.y-11, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x-1, pos.y-11, pos.z-1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-11, pos.z, BlockID.block_zoli, 0);
World.setBlock(pos.x, pos.y-11, pos.z-1, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-11, pos.z+1, BlockID.block_zoli, 0);
}
}
}
}
});




// file: удаление_крафтоф.js

Callback.addCallback("PostLoaded", function () {
Recipes.deleteRecipe({id: 416, count: 1, data: 0})
Recipes.deleteRecipe({id: 298, count: 1, data: 0})
Recipes.deleteRecipe({id: 299, count: 1, data: 0})
Recipes.deleteRecipe({id: 300, count: 1, data: 0})
Recipes.deleteRecipe({id: 301, count: 1, data: 0})
Recipes.deleteRecipe({id: 334, count: 1, data: 0})
Recipes.deleteRecipe({id: 35, count: 1, data: 0})
Recipes.deleteRecipe({id: 340, count: 1, data: 0})
Recipes.deleteRecipe({id: 420, count: 2, data: 0})
Recipes.deleteRecipe({id: 321, count: 1, data: 0})
Recipes.deleteRecipe({id: 355, count: 1, data: 0})
Recipes.deleteRecipe({id: 389, count: 1, data: 0})
Recipes.deleteRecipe({id: 171, count: 3, data: -1})
});




// file: крафты_на_верстаке.js

Callback.addCallback("PostLoaded", function () {
    Recipes.addShapeless({id: ItemID.energetik, data: 0, count: 1}, [{id: 372, data: 0}, {id: 373, data: 0}, {id: 372, data: 0}, {id: 353, data: 0}, {id: 373, data: 0}, {id: 353, data: 0}, {id: 376, data: 0}, {id: ItemID.zheleznaia_banka, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==373){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShapeless({id: ItemID.shocoladnaia_plitka, data: 0, count: 1}, [{id: 351, data: 3}, {id: 351, data: 3}, {id: 351, data: 3}, {id: ItemID.pyzirek_s_molokom, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_molokom){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: ItemID.oscolok_cremnia, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 318, 0]);
    Recipes.addShaped({id: ItemID.gorst_zemli, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 2, 0]);
    Recipes.addShaped({id: ItemID.gorst_zemli, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 110, 0]);
    Recipes.addShaped({id: ItemID.gorst_zemli, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 198, 0]);
    Recipes.addShaped({id: ItemID.gorst_zemli, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 243, 0]);
    Recipes.addShaped({id: ItemID.gorst_zemli, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 3, 0]);
    Recipes.addShaped({id: ItemID.gorst_graviia, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 13, 0]);
    Recipes.addShaped({id: ItemID.gorst_peska, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 12, -1]);
    Recipes.addShaped({id: ItemID.kolchyzhnoe_koltco, count: 1, data: 0}, [
        "aba",
        "b b",
        "aba"
    ], ['a', ItemID.nuggetIron, 0, 'b', ItemID.stalnoi_samorodok, 0]);
    Recipes.addShaped({id: 318, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.oscolok_cremnia, 0]);
    Recipes.addShaped({id: ItemID.adskii_shlem, count: 1, data: 0}, [
        "aba",
        "a a",
        "   "
    ], ['a', ItemID.adskii_slitok, 0, 'b', 369, 0]);
    Recipes.addShaped({id: ItemID.izymrydnii_samorodok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 388, 0]);
    Recipes.addShaped({id: 388, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.izymrydnii_samorodok, 0]);
    Recipes.addShaped({id: 262, count: 1, data: 0}, [
        " a ",
        " b ",
        "   "
    ], ['a', ItemID.slomannaia_strela, 0, 'b', ItemID.loza, 0]);
    Recipes.addShaped({id: 262, count: 1, data: 0}, [
        " a ",
        " b ",
        "   "
    ], ['a', ItemID.slomannaia_strela, 0, 'b', ItemID.obichnaia_verevka, 0]);
    Recipes.addShaped({id: 262, count: 1, data: 0}, [
        " a ",
        " b ",
        "   "
    ], ['a', ItemID.slomannaia_strela, 0, 'b', ItemID.travianaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.siroi_iablochnii_pirog, count: 1, data: 0}, [
        "bbb",
        " a ",
        "   "
    ], ['a', ItemID.testo, 0, 'b', 260, 0]);
    Recipes.addShaped({id: ItemID.siroi_vishnevii_pirog, count: 1, data: 0}, [
        "bbb",
        "bbb",
        " a "
    ], ['a', ItemID.testo, 0, 'b', ItemID.vishnia, 0]);
    Recipes.addShaped({id: ItemID.sito, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 0, 'b', ItemID.setka_dlia_sita, 0]);
    Recipes.addShaped({id: ItemID.adskaia_kirasa, count: 1, data: 0}, [
        "a a",
        "aca",
        "bab"
    ], ['a', ItemID.adskii_slitok, 0, 'b', 369, 0, 'c', ItemID.laa, 0]);
    Recipes.addShaped({id: ItemID.adskie_ponozhi, count: 1, data: 0}, [
        "aaa",
        "b b",
        "a a"
    ], ['a', ItemID.adskii_slitok, 0, 'b', 369, 0]);
    Recipes.addShaped({id: ItemID.adskie_botinki, count: 1, data: 0}, [
        "   ",
        "a a",
        "b b"
    ], ['a', ItemID.adskii_slitok, 0, 'b', 369, 0]);
    Recipes.addShapeless({id: ItemID.adskii_slitok, data: 0, count: 6}, [{id: 325, data: 8}, {id: ItemID.laa, data: 0}, {id: 325, data: 10}, {id: 405, data: 0}, {id: 405, data: 0}, {id: 405, data: 0}, {id: 405, data: 0}, {id: 405, data: 0}, {id: 405, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==325){
		    Player.addItemToInventory(325, 2, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: ItemID.ballon_s_vozdyhom, count: 1, data: 0}, [
        "ede",
        "aba",
        "cbc"
    ], ['a', 422, 0, 'b', ItemID.ingotSteel, 0, 'c', 409, 0, 'd', ItemID.stalnoi_samorodok, 0, 'e', ItemID.yglerodnoe_volokno, 0]);
    Recipes.addShaped({id: ItemID.shipovannaia_dybina, count: 1, data: 0}, [
        "aba",
        "aba",
        "aba"
    ], ['b', 280, 0, 'a', ItemID.zyb_payka, 0]);
    Recipes.addShaped({id: ItemID.otravlennaia_shipovannaia_dybina, count: 1, data: 0}, [
        "aba",
        "aba",
        "aba"
    ], ['b', 280, 0, 'a', ItemID.otravlennii_zyb_payka, 0]);
    Recipes.addShaped({id: ItemID.nozh_s_shipom_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.obichnaia_verevka, 0, 'a', ItemID.ship_strazha, 0, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.loza, 0, 'a', ItemID.ship_strazha, 0, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.travianaia_verevka, 0, 'a', ItemID.ship_strazha, 0, 'c', 280, 0]);
    if(primal_core){
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.plant_twine, 0, 'a', ItemID.ship_strazha, 0, 'c', 280, 0]);
    }
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_drevnego_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.travianaia_verevka, 0, 'a', ItemID.ship_drevnego_strazha, 0, 'c', 280, 0]);
    Recipes.addShaped({id: 351, count: 1, data: 15}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.gnilaia_kost, 0]);
    Recipes.addShaped({id: ItemID.nozh_s_shipom_drevnego_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.obichnaia_verevka, 0, 'a', ItemID.ship_drevnego_strazha, 0, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_drevnego_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.loza, 0, 'a', ItemID.ship_drevnego_strazha, 0, 'c', 280, 0]);
    if(primal_core){
    Recipes.addShaped({id: ItemID.tnozh_s_shipom_drevnego_strazha, count: 1, data: 0}, [
        " a ",
        " b ",
        " c "
    ], ['b', ItemID.plant_twine, 0, 'a', ItemID.ship_drevnego_strazha, 0, 'c', 280, 0]);
    }
Recipes.addShapeless({id: ItemID.testo, data: 0, count: 1}, [{id: 373, data: 0}, {id: 353, data: 0}, {id: ItemID.pyzirek_s_molokom, data: 0}, {id: ItemID.myka, data: 0}, {id: ItemID.myka, data: 0}, {id: ItemID.myka, data: 0}, {id: 344, data: 0}, {id: 344, data: 0}, {id: 344, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==373){
		    Player.addItemToInventory(374, 2, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: ItemID.igla, count: 1, data: 0}, [
        "   ",
        " a ",
        " a "
    ], ['a', ItemID.nuggetIron, 0]);
    Recipes.addShaped({id: ItemID.vodianoi_filtr, count: 1, data: 0}, [
        "d d",
        "bcb",
        "dad"
    ], ['a', ItemID.stalnoi_samorodok, 0, 'b', 422, 0, 'c', 409, 0, 'd', ItemID.yglerodnoe_volokno, 0]);
    Recipes.addShaped({id: 302, count: 1, data: 0}, [
        "aaa",
        "a a",
        "   "
    ], ['a', ItemID.kolchyzhnoe_koltco, 0]);
    Recipes.addShaped({id: 303, count: 1, data: 0}, [
        "a a",
        "aaa",
        "aaa"
    ], ['a', ItemID.kolchyzhnoe_koltco, 0]);
    Recipes.addShaped({id: ItemID.myka, count: 2, data: 0}, [
        "   ",
        "a a",
        "   "
    ], ['a', 296, 0]);
    Recipes.addShaped({id: 304, count: 1, data: 0}, [
        "aaa",
        "a a",
        "a a"
    ], ['a', ItemID.kolchyzhnoe_koltco, 0]);
    Recipes.addShaped({id: 305, count: 1, data: 0}, [
        "   ",
        "a a",
        "a a"
    ], ['a', ItemID.kolchyzhnoe_koltco, 0]);
    if(!primal_core){
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 258);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 267);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 271);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 272);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 275);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 276);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 279);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 283);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], 286);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], ItemID.nozh_s_shipom_drevnego_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], ItemID.nozh_s_shipom_strazha);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 462, data: 0}], 268);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], ItemID.stalnoi_mech);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.stalnoi_topor);
    Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 411, data: 0}], ItemID.stalnoi_topor);
    }
    Recipes.addShapeless({id: ItemID.siraia_pitca, data: 0, count: 1}, [{id: ItemID.trava, data: 0}, {id: ItemID.kolbasa, data: 0}, {id: 39, data: 0}, {id: ItemID.testo, data: 0}, {id: ItemID.pyzirek_s_rasplavlennim_sirom, data: 0}, {id: ItemID.testo, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_rasplavlennim_sirom){
		    Player.addItemToInventory(374, 2, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: 421, count: 1, data: 0}, [
        " ac",
        " b ",
        "   "
    ], ['b', 339, 0, 'a', 351, 0, 'c', 287, 0]);
    Recipes.addShaped({id: 421, count: 1, data: 0}, [
        " ac",
        " b ",
        "   "
    ], ['b', 339, 0, 'a', 351, 0, 'c', ItemID.travianaia_nit, 0]);
    Recipes.addShaped({id: 419, count: 1, data: 0}, [
        "  a",
        "aab",
        "   "
    ], ['b', ItemID.almaznii_samorodok, 0, 'a', 264, 0]);
    Recipes.addShaped({id: 417, count: 1, data: 0}, [
        "  a",
        "aab",
        "   "
    ], ['b', ItemID.nuggetIron, 0, 'a', 265, 0]);
    Recipes.addShaped({id: 418, count: 1, data: 0}, [
        "  a",
        "aab",
        "   "
    ], ['b', 371, 0, 'a', 266, 0]);
    Recipes.addShaped({id: ItemID.semechki, count: 3, data: 0}, [
        "aaa",
        "   ",
        " b "
    ], ['a', 175, 0, 'b', 339, 0]);
        Recipes.addShaped({id: 280, count: 4, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.drevesina_vishni, 0]);
Recipes.addShapeless({id: ItemID.nitrat_kaliia, data: 0, count: 4}, [{id: 373, data: 0}, {id: 373, data: 0}, {id: 373, data: 0}, {id: ItemID.pepel, data: 0}, {id: 3, data: 0}, {id: 367, data: 0}, {id: ItemID.trava, data: 0}, {id: 170, data: 0}, {id: ItemID.trava, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==373){
		    Player.addItemToInventory(374, 3, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: 289, count: 3, data: 0}, [
        "   ",
        "abc",
        "   "
    ], ['a', ItemID.nitrat_kaliia, 0, 'b', ItemID.sera, 0, 'c', 263, -1]);
    Recipes.addShaped({id: 289, count: 5, data: 0}, [
        "   ",
        "abc",
        "   "
    ], ['a', ItemID.nitrat_kaliia, 0, 'b', ItemID.sera, 0, 'c', ItemID.antratcit, 0]);
    Recipes.addShaped({id: ItemID.sit, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 1, 'b', ItemID.setka_dlia_sita, 0]);
    Recipes.addShaped({id: ItemID.si, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 2, 'b', ItemID.setka_dlia_sita, 0]);
    Recipes.addShaped({id: ItemID.s, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 3, 'b', ItemID.setka_dlia_sita, 0]);
    Recipes.addShaped({id: ItemID.i, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 4, 'b', ItemID.setka_dlia_sita, 0]);
    Recipes.addShapeless({id: ItemID.byterbrod, data: 0, count: 1}, [{id: 393, data: 0}, {id: 297, data: 0}, {id: 391, data: 0}, {id: ItemID.pyzirek_s_rasplavlennim_sirom, data: 0}, {id: 320, data: 0}, {id: ItemID.trava, data: 0}, {id: 39, data: 0}, {id: 297, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_rasplavlennim_sirom){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShapeless({id: ItemID.byterbrod, data: 0, count: 1}, [{id: 393, data: 0}, {id: 297, data: 0}, {id: 391, data: 0}, {id: ItemID.pyzirek_s_rasplavlennim_sirom, data: 0}, {id: 424, data: 0}, {id: ItemID.trava, data: 0}, {id: 39, data: 0}, {id: 297, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_rasplavlennim_sirom){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShapeless({id: ItemID.byterbrod, data: 0, count: 1}, [{id: 393, data: 0}, {id: 297, data: 0}, {id: 391, data: 0}, {id: ItemID.pyzirek_s_rasplavlennim_sirom, data: 0}, {id: 364, data: 0}, {id: ItemID.trava, data: 0}, {id: 39, data: 0}, {id: 297, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_rasplavlennim_sirom){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShapeless({id: ItemID.byterbrod, data: 0, count: 1}, [{id: 393, data: 0}, {id: 297, data: 0}, {id: 391, data: 0}, {id: ItemID.pyzirek_s_rasplavlennim_sirom, data: 0}, {id: 366, data: 0}, {id: ItemID.trava, data: 0}, {id: 39, data: 0}, {id: 297, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.pyzirek_s_rasplavlennim_sirom){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
    Recipes.addShaped({id: ItemID.t, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 5, 5, 'b', ItemID.setka_dlia_sita, 0]);
    if(!primal_core){
    Recipes.addShaped({id: 4, count: 1, data: 0}, [
        "aaa",
        "aba",
        "aaa"
    ], ['a', ItemID.rock_stone, 0, 'b', 337, 0]);
    }
    Recipes.addShaped({id: ItemID.rock_stone, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 4, 0]);
    Recipes.addShaped({id: 265, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.nuggetIron, 0]);
    Recipes.addShaped({id: ItemID.nuggetIron, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 265, 0]);
    Recipes.addShaped({id: 264, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.almaznii_samorodok, 0]);
    Recipes.addShaped({id: 2, count: 6, data: 0}, [
        "aaa",
        "bbb",
        "bbb"
    ], ['a', ItemID.trava, 0, 'b', 3, 0]);
    Recipes.addShaped({id: ItemID.miska_s_kokosovim_molokom, count: 1, data: 0}, [
        "   ",
        " a ",
        " b "
    ], ['a', ItemID.ochishennii_kokos, 0, 'b', 281, 0]);
    Recipes.addShaped({id: ItemID.almaznii_samorodok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 264, 0]);
    Recipes.addShaped({id: ItemID.ingotSteel, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.stalnoi_samorodok, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_samorodok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: BlockID.blockSteel, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.ingotSteel, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.blockSteel, 0]);
    if(!primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_shlem, count: 1, data: 0}, [
        "aaa",
        "a a",
        "   "
    ], ['a', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_kirasa, count: 1, data: 0}, [
        "a a",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnie_botinki, count: 1, data: 0}, [
        "   ",
        "a a",
        "a a"
    ], ['a', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnie_ponozhi, count: 1, data: 0}, [
        "aaa",
        "a a",
        "a a"
    ], ['a', ItemID.ingotSteel, 0]);
    }
    Recipes.addShaped({id: 50, count: 10, data: 0}, [
        "a  ",
        "b  ",
        "b  "
    ], ['a', ItemID.antratcit, 0, 'b', 280, 0]);
    Recipes.addShaped({id: ItemID.ochishennii_kokos, count: 1, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.kokos, 0]);
    Recipes.addShaped({id: 5, count: 4, data: 3}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.drevesina_palmi, 0]);
    if(!primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_metatelnii_nozh, count: 6, data: 0}, [
        " c ",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.stalnoi_samorodok, 0, 'c', ItemID.ingotSteel, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.stalnoi_samorodok, 0, 'c', ItemID.ingotSteel, 0, 'd', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kremnievii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.flint_flake, 0, 'b', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.obsidianovii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.obsidian_flake, 0, 'b', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.izymrydnii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " d "
    ], ['a', 280, 0, 'c', ItemID.emerald_flake, 0, 'b', ItemID.travianaia_verevka, 0, 'd', ItemID.izymrydnii_samorodok, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kostianoi_metatelnii_nozh, count: 6, data: 0}, [
        "bcb",
        "ada",
        " b "
    ], ['a', 280, 0, 'b', ItemID.bone_shard, 0, 'c', ItemID.sharp_bone, 0, 'd', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.stalnoi_samorodok, 0, 'c', ItemID.ingotSteel, 0, 'd', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kremnievii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.flint_flake, 0, 'b', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.obsidianovii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.obsidian_flake, 0, 'b', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.izymrydnii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " d "
    ], ['a', 280, 0, 'c', ItemID.emerald_flake, 0, 'b', ItemID.obichnaia_verevka, 0, 'd', ItemID.izymrydnii_samorodok, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kostianoi_metatelnii_nozh, count: 6, data: 0}, [
        "bcb",
        "ada",
        " b "
    ], ['a', 280, 0, 'b', ItemID.bone_shard, 0, 'c', ItemID.sharp_bone, 0, 'd', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.stalnoi_samorodok, 0, 'c', ItemID.ingotSteel, 0, 'd', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kremnievii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.flint_flake, 0, 'b', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.obsidianovii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.obsidian_flake, 0, 'b', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.izymrydnii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " d "
    ], ['a', 280, 0, 'c', ItemID.emerald_flake, 0, 'b', ItemID.plant_twine, 0, 'd', ItemID.izymrydnii_samorodok, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kostianoi_metatelnii_nozh, count: 6, data: 0}, [
        "bcb",
        "ada",
        " b "
    ], ['a', 280, 0, 'b', ItemID.bone_shard, 0, 'c', ItemID.sharp_bone, 0, 'd', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.stalnoi_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.stalnoi_samorodok, 0, 'c', ItemID.ingotSteel, 0, 'd', ItemID.loza, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kremnievii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.flint_flake, 0, 'b', ItemID.loza, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.obsidianovii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " c "
    ], ['a', 280, 0, 'c', ItemID.obsidian_flake, 0, 'b', ItemID.loza, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.izymrydnii_metatelnii_nozh, count: 6, data: 0}, [
        "cbc",
        " a ",
        " d "
    ], ['a', 280, 0, 'c', ItemID.emerald_flake, 0, 'b', ItemID.loza, 0, 'd', ItemID.izymrydnii_samorodok, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.kostianoi_metatelnii_nozh, count: 6, data: 0}, [
        "bcb",
        "ada",
        " b "
    ], ['a', 280, 0, 'b', ItemID.bone_shard, 0, 'c', ItemID.sharp_bone, 0, 'd', ItemID.loza, 0]);
    }
    Recipes.addShaped({id: ItemID.ndsm, count: 1, data: 0}, [
        " c ",
        "bad",
        "   "
    ], ['a', 318, 0, 'b', 371, 0, 'c', 331, 0, 'd', ItemID.nuggetIron, 0]);
    if(!primal_core){
    Recipes.addShaped({id: ItemID.almaznii_metatelnii_nozh, count: 7, data: 0}, [
        " c ",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.almaznii_samorodok, 0, 'c', 264, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.almaznii_metatelnii_nozh, count: 7, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.almaznii_samorodok, 0, 'c', ItemID.diamond_flake, 0, 'd', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.almaznii_metatelnii_nozh, count: 7, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.almaznii_samorodok, 0, 'c', ItemID.diamond_flake, 0, 'd', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.almaznii_metatelnii_nozh, count: 7, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.almaznii_samorodok, 0, 'c', ItemID.diamond_flake, 0, 'd', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.almaznii_metatelnii_nozh, count: 7, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.almaznii_samorodok, 0, 'c', ItemID.diamond_flake, 0, 'd', ItemID.loza, 0]);
    }
    if(!primal_core){
    Recipes.addShaped({id: ItemID.zheleznii_metatelnii_nozh, count: 6, data: 0}, [
        " c ",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.nuggetIron, 0, 'c', 265, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.zheleznii_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.nuggetIron, 0, 'c', ItemID.iron_flake, 0, 'd', ItemID.travianaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.zheleznii_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.nuggetIron, 0, 'c', ItemID.iron_flake, 0, 'd', ItemID.obichnaia_verevka, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.zheleznii_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.nuggetIron, 0, 'c', ItemID.iron_flake, 0, 'd', ItemID.plant_twine, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.zheleznii_metatelnii_nozh, count: 6, data: 0}, [
        "cdc",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.nuggetIron, 0, 'c', ItemID.iron_flake, 0, 'd', ItemID.loza, 0]);
    }
    if(!primal_core){
    Recipes.addShaped({id: ItemID.kamennii_metatelnii_nozh, count: 5, data: 0}, [
        " c ",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', ItemID.rock_stone, 0, 'c', 4, 0]);
    }
    if(!primal_core){
    Recipes.addShaped({id: ItemID.dereviannii_metatelnii_nozh, count: 3, data: 0}, [
        " b ",
        " a ",
        "   "
    ], ['a', 280, 0, 'b', 5, -1]);
    }
    if(!primal_core){
    Recipes.addShaped({id: ItemID.zolotoi_metatelnii_nozh, count: 6, data: 0}, [
        " c ",
        " a ",
        " b "
    ], ['a', 280, 0, 'b', 371, 0, 'c', 266, 0]);
    }
    if(!primal_core){
    Recipes.addShaped({id: ItemID.stalnaia_kircka, count: 1, data: 0}, [
        "bbb",
        " a ",
        " a "
    ], ['a', 280, 0, 'b', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_mech, count: 1, data: 0}, [
        " b ",
        " b ",
        " a "
    ], ['a', 280, 0, 'b', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_topor, count: 1, data: 0}, [
        "bb ",
        "ba ",
        " a "
    ], ['a', 280, 0, 'b', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_motiga, count: 1, data: 0}, [
        "bb ",
        " a ",
        " a "
    ], ['a', 280, 0, 'b', ItemID.ingotSteel, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_lopata, count: 1, data: 0}, [
        " b ",
        " a ",
        " a "
    ], ['a', 280, 0, 'b', ItemID.ingotSteel, 0]);
    }
    if(primal_core){
    Recipes.addShaped({id: ItemID.stalnaia_kircka, count: 1, data: 0}, [
        "ftf", 
        "fsf",
        " s "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_lopata, count: 1, data: 0}, [
        " ff", 
        " tf",
        "s  "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_motiga, count: 1, data: 0}, [
        "fot", 
        " s ",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_topor, count: 1, data: 0}, [
        "fht", 
        "fsf",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_kircka, count: 1, data: 0}, [
        "ftf", 
        "fsf",
        " s "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.loza, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_lopata, count: 1, data: 0}, [
        " ff", 
        " tf",
        "s  "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.loza, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_motiga, count: 1, data: 0}, [
        "fot", 
        " s ",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.loza, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_topor, count: 1, data: 0}, [
        "fht", 
        "fsf",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.loza, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_kircka, count: 1, data: 0}, [
        "ftf", 
        "fsf",
        " s "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_lopata, count: 1, data: 0}, [
        " ff", 
        " tf",
        "s  "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_motiga, count: 1, data: 0}, [
        "fot", 
        " s ",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_topor, count: 1, data: 0}, [
        "fht", 
        "fsf",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_kircka, count: 1, data: 0}, [
        "ftf", 
        "fsf",
        " s "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_lopata, count: 1, data: 0}, [
        " ff", 
        " tf",
        "s  "
    ], ["f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnaia_motiga, count: 1, data: 0}, [
        "fot", 
        " s ",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0]);
    Recipes.addShaped({id: ItemID.stalnoi_topor, count: 1, data: 0}, [
        "fht", 
        "fsf",
        " s "
    ], ["h", ItemID.ingotSteel, 0, "f", ItemID.ingotSteel, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0]);
    }
    Recipes.addShaped({id: 355, count: 1, data: 0}, [
        "   ",
        " b ",
        "aaa"
    ], ['a', 5, -1, 'b', ItemID.spalnii_nabor, 0]);
    Recipes.addShaped({id: ItemID.tk, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 0, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tks, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 1, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tkb, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 2, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tktr, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 3, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tka, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 4, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.tktd, count: 1, data: 0}, [
        "   ",
        "ccc",
        "aaa"
    ], ['a', 5, 5, 'c', 280, 0]);
    Recipes.addShaped({id: ItemID.katyshka_s_nitkami, count: 1, data: 0}, [
        "ba ",
        "ccc",
        "cac"
    ], ['a', 158, -1, 'c', 287, 0, 'b', ItemID.igla, 0]);
    Recipes.addShaped({id: ItemID.katyshka_s_travianimi_nitkami, count: 1, data: 0}, [
        "ba ",
        "ccc",
        "cac"
    ], ['a', 158, -1, 'c', ItemID.travianaia_nit, 0, 'b', ItemID.igla, 0]);
    Recipes.addShaped({id: ItemID.rybin, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.oscolok_rybina, 0]);
    Recipes.addShaped({id: BlockID.rybinovii_block, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.rybin, 0]);
    Recipes.addShaped({id: ItemID.rybin, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.rybinovii_block, 0]);
    Recipes.addShaped({id: ItemID.oscolok_rybina, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.rybin, 0]);
    Recipes.addShaped({id: ItemID.pepel, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.block_zoli, 0]);
    Recipes.addShaped({id: BlockID.block_zoli, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.pepel, 0]);
    Recipes.addShaped({id: BlockID.meteoritovii_block, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.meteoritovii_slitok, 0]);
    Recipes.addShaped({id: ItemID.meteoritovii_slitok, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.meteoritovii_samorodok, 0]);
    Recipes.addShaped({id: ItemID.meteoritovii_slitok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', BlockID.meteoritovii_block, 0]);
    Recipes.addShaped({id: ItemID.meteoritovii_samorodok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.meteoritovii_slitok, 0]);
    Recipes.addShaped({id: ItemID.mini_pres, count: 1, data: 0}, [
        "aba",
        "cac",
        "ede"
    ], ['a', BlockID.blockSteel, 0, 'b', ItemID.ingotSteel , 0, 'c', 265, 0, 'd', 4, 0, 'e', 42, 0]);
    Recipes.addShaped({id: ItemID.adskii_slitok, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.adskii_samorodok, 0]);
    Recipes.addShaped({id: ItemID.adskii_samorodok, count: 9, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.adskii_slitok, 0]);
    Recipes.addShaped({id: ItemID.fabrshem, count: 1, data: 0}, [
        "dbd",
        "aca",
        "aba"
    ], ['a', 265, 0, 'b', BlockID.blockSteel, 0, 'c', 20, 0, 'd', 331, 0]);
    Recipes.addShaped({id: ItemID.zheleznaia_banka, count: 1, data: 0}, [
        "bb ",
        "bb ",
        "bb "
    ], ['b', ItemID.nuggetIron, 0]);
if(primal_core){
    Recipes.addShaped({id: ItemID.plant_fiber, count: 1, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.trava, 0]);
}
    Recipes.addShaped({id: BlockID.stalnaia_tryba, count: 4, data: 0}, [
        "bbb",
        "aca",
        "bbb"
    ], ['b', 331, 0, 'a', ItemID.ingotSteel, 0, 'c', 20, 0]);
    Recipes.addShaped({id: BlockID.vodgen, count: 1, data: 0}, [
        "aba",
        "bcb",
        "aba"
    ], ['b', 331, 0, 'a', 265, 0, 'c', 4, 0]);
    Recipes.addShaped({id: 351, count: 1, data: 15}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.rakyshkaa, 0]);
    Recipes.addShaped({id: 351, count: 1, data: 15}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.rakyshkab, 0]);
});




// file: примал.js

Callback.addCallback("PostLoaded", function(){
if(primal_core){
Recipes.addShaped({id: ItemID.stone_gallagher, count: 1, data: 0}, 
   ["iti", 
    "iri",
    " r "],
  ["s", 42, 0, "r", 280, 0, "t", ItemID.obichnaia_verevka, 0, "i", 1, 0
]);
Recipes.addShaped({id: ItemID.stone_gallagher, count: 1, data: 0}, 
   ["iti", 
    "iri",
    " r "],
  ["s", 42, 0, "r", 280, 0, "t", ItemID.loza, 0, "i", 1, 0
]);
Recipes.addShaped({id: ItemID.stone_gallagher, count: 1, data: 0}, 
   ["iti", 
    "iri",
    " r "],
  ["s", 42, 0, "r", 280, 0, "t", ItemID.travianaia_verevka, 0, "i", 1, 0
]);
Recipes.addShaped({id: ItemID.flint_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_hatchet, count: 1, data: 0}, 
   ["ft", 
    " s"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.bone_pickaxe, count: 1, data: 0}, 
   ["btb", 
    "fsf",
    " s "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.bone_shovel, count: 1, data: 0}, 
   [" fb", 
    " tf",
    "s  "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.bone_workblade, count: 1, data: 0}, 
   [" fb", 
    "ftf",
    "sf "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.bone_axe, count: 1, data: 0}, 
   ["bft", 
    "fsf",
    " s "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.obsidian_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.obsidian_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.obsidian_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.obsidian_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.obsidian_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.flint_hatchet, count: 1, data: 0}, 
   ["ft", 
    " s"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.flint_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.flint_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.flint_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.flint_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.flint_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.bone_pickaxe, count: 1, data: 0}, 
   ["btb", 
    "fsf",
    " s "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.bone_shovel, count: 1, data: 0}, 
   [" fb", 
    " tf",
    "s  "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.bone_workblade, count: 1, data: 0}, 
   [" fb", 
    "ftf",
    "sf "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.bone_axe, count: 1, data: 0}, 
   ["bft", 
    "fsf",
    " s "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaliron_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaliron_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaliron_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaliron_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaliron_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaliron_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.obsidian_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.obsidian_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.obsidian_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.obsidian_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.obsidian_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.emerald_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.emerald_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.emerald_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.emerald_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.emerald_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.emerald_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.flint_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_hatchet, count: 1, data: 0}, 
   ["ft", 
    " s"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.bone_pickaxe, count: 1, data: 0}, 
   ["btb", 
    "fsf",
    " s "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.bone_shovel, count: 1, data: 0}, 
   [" fb", 
    " tf",
    "s  "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.bone_workblade, count: 1, data: 0}, 
   [" fb", 
    "ftf",
    "sf "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.bone_axe, count: 1, data: 0}, 
   ["bft", 
    "fsf",
    " s "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaliron_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.obsidian_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.obsidian_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.obsidian_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.obsidian_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.obsidian_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.emerald_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
  Recipes.addShaped({id: ItemID.stalnoi_shlem, count: 1, data: 0}, 
    ["sss", 
     "shs"],
    ["s", ItemID.plateSteel, 0, "h", 298, 0
  ]);
  Recipes.addShaped({id: ItemID.stalnaia_kirasa, count: 1, data: 0}, 
    ["shs", 
     "sss",
     "sss"],
    ["s", ItemID.plateSteel, 0, "h", 299, 0
  ]);
  Recipes.addShaped({id: ItemID.stalnie_ponozhi, count: 1, data: 0}, 
    ["sss", 
     "shs",
     "s s"],
    ["s", ItemID.plateSteel, 0, "h", 300, 0
  ]);
  Recipes.addShaped({id: ItemID.stalnie_botinki, count: 1, data: 0}, 
    ["shs", 
     "s s"],
    ["s", ItemID.plateSteel, 0, "h", 301, 0
  ]);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.bone_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.bone_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.bone_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.flint_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.flint_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.flint_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.primaliron_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.primaliron_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.primaliron_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.primaldiamond_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.primaldiamond_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.primaldiamond_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.emerald_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.emerald_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.emerald_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 319, data: 0}], ItemID.obsidian_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 363, data: 0}], ItemID.obsidian_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.kolbasa, count: 1, data: 0},[{id: 339, data: 0}, {id: 423, data: 0}], ItemID.obsidian_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.bone_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.bone_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 373, data: 0}, {id: 462, data: 0}], ItemID.bone_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.flint_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.flint_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 373, data: 0}, {id: 462, data: 0}], ItemID.flint_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.primaliron_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.primaliron_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 373, data: 0}, {id: 462, data: 0}], ItemID.primaliron_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.primaldiamond_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.primaldiamond_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 373, data: 0}, {id: 462, data: 0}], ItemID.primaldiamond_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.emerald_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.emerald_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 373, data: 0}, {id: 462, data: 0}], ItemID.emerald_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennaia_siraia_riba, count: 1, data: 0},[{id: 349, data: 0}], ItemID.obsidian_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.ocishennii_siroi_losos, count: 1, data: 0},[{id: 460, data: 0}], ItemID.obsidian_workblade);
  Recipes.addCraftToolRecipeItem({id: ItemID.bezopasnoe_miaso_pibi_fygy, count: 1, data: 0},[{id: 373, data: 0}, {id: 462, data: 0}], ItemID.obsidian_workblade);
Recipes.addShaped({id: ItemID.primaliron_gallagher, count: 1, data: 0}, 
   ["sts", 
    "iri",
    " r "],
  ["s", 42, 0, "r", 280, 0, "t", ItemID.obichnaia_verevka, 0, "i", 265, 0
]);
Recipes.addShaped({id: ItemID.primaliron_gallagher, count: 1, data: 0}, 
   ["sts", 
    "iri",
    " r "],
  ["s", 42, 0, "r", 280, 0, "t", ItemID.travianaia_verevka, 0, "i", 265, 0
]);
Recipes.addShaped({id: ItemID.primaliron_gallagher, count: 1, data: 0}, 
   ["sts", 
    "iri",
    " r "],
  ["s", 42, 0, "r", 280, 0, "t", ItemID.loza, 0, "i", 265, 0
]);
Recipes.addShaped({id: ItemID.flint_shears, count: 1, data: 0}, 
   ["f ", 
    "tf"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.loza, 0
]);
Recipes.addShaped({id: ItemID.flint_shears, count: 1, data: 0}, 
   ["f ", 
    "tf"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.travianaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.flint_shears, count: 1, data: 0}, 
   ["f ", 
    "tf"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.obichnaia_verevka, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_gallagher, count: 1, data: 0}, 
   ["sts", 
    "iri",
    " r "],
  ["s", 49, 0, "r", 280, 0, "t", ItemID.loza, 0, "i", 264, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_gallagher, count: 1, data: 0}, 
   ["sts", 
    "iri",
    " r "],
  ["s", 49, 0, "r", 280, 0, "t", ItemID.travianaia_verevka, 0, "i", 264, 0
]);
Recipes.addShaped({id: ItemID.primaldiamond_gallagher, count: 1, data: 0}, 
   ["sts", 
    "iri",
    " r "],
  ["s", 49, 0, "r", 280, 0, "t", ItemID.obichnaia_verevka, 0, "i", 264, 0
]);
    Recipes.addShaped({id: 262, count: 1, data: 0}, [
        " a ",
        " b ",
        "   "
    ], ['a', ItemID.slomannaia_strela, 0, 'b', ItemID.plant_twine, 0]);
}
});




// file: галактические_торговцы.js

IDRegistry.genBlockID("blet");//кароче этого кода в моде сейчас нет поэтому можешь не смотреть
Block.createBlock("blet", [{name: "Откуда это у тебя????", texture: [["зола", 0], ["зола", 0], ["зола", 0], ["зола", 0], ["зола", 0], ["зола", 0]], inCreative: false}]);
IDRegistry.genBlockID("vo");
Block.createBlock("vo", [{name: "Откуда это у тебя????", texture: [["ш_галактический_торговец_н_н", 0], ["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_в_п", 0], ["ш_галактический_торговец_в_з", 0], ["ш_галактический_торговец_в_б2", 0], ["ш_галактический_торговец_в_б", 0]], inCreative: false}], BLOCK_TYPE_STAL);
IDRegistry.genBlockID("shgtvp");
Block.createBlock("shgtvp", [{name: "Откуда это у тебя????", texture: [["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_в_п2", 0], ["ш_галактический_торговец_в_з", 0], ["ш_галактический_торговец_в_б2", 0], ["ш_галактический_торговец_в_б", 0]], inCreative: false}], BLOCK_TYPE_STAL);
IDRegistry.genBlockID("shgtvvpp");
Block.createBlock("shgtvvpp", [{name: "Откуда это у тебя????", texture: [["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_в_п", 0], ["ш_галактический_торговец_в_з", 0], ["ш_галактический_торговец_в_б2", 0], ["ш_галактический_торговец_в_б", 0]], inCreative: false}], BLOCK_TYPE_STAL);
IDRegistry.genBlockID("shgtvv");
Block.createBlock("shgtvv", [{name: "Откуда это у тебя????", texture: [["ш_галактический_торговец_н_н", 0], ["ш_галактический_торговец_в_в2", 0], ["ш_галактический_торговец_в_п", 0], ["ш_галактический_торговец_в_з", 0], ["ш_галактический_торговец_в_б2", 0], ["ш_галактический_торговец_в_б", 0]], inCreative: false}], BLOCK_TYPE_STAL);
IDRegistry.genBlockID("shgtn");
Block.createBlock("shgtn", [{name: "Этот блок тебе не нужен атвечаю", texture: [["ш_галактический_торговец_н_н", 0], ["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_н_п", 0], ["ш_галактический_торговец_н_з", 0], ["ш_галактический_торговец_н_б2", 0], ["ш_галактический_торговец_н_б", 0]], inCreative: false}], BLOCK_TYPE_RYBU);
function createGTBrownBottomRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (5/16, 0, 6/16, 11/16, 5/16, 10/16,  idMaterial, dataMaterial);
model.addBox (4/16, 5/16, 5/16, 12/16, 1, 11/16,  idMaterial, dataMaterial);
model.addBox (0, 14/16, 4/16, 1, 15/16, 6/16,  idMaterial, dataMaterial);
model.addBox (0, 15/16, 3/16, 1, 1, 7/16,  idMaterial, dataMaterial);
render.addEntry(model);
}
createGTBrownBottomRender(BlockID.shgtn, BlockID.shgtn, 0);
function createGTBrownTopRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (4/16, 0, 5/16, 12/16, 7/16, 11/16,  BlockID.vo, 0);
model.addBox (7/32, 7/16, 4/16, 25/32, 31/32, 25/32,  BlockID.shgtvvpp, 0);
model.addBox (7/32, 8/16, 7/32, 4/16, 15/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (12/16, 8/16, 7/32, 25/32, 15/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (7/32, 7/16, 7/32, 25/32, 8/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (7/32, 15/16, 7/32, 25/32, 31/32, 4/16,  BlockID.shgtvp, 0);
model.addBox (0, 0, 2/16, 1, 1/16, 8/16,  BlockID.shgtvv, 0);
model.addBox (0, 1/16, 2/16, 1, 2/16, 9/16,  BlockID.shgtvv, 0);
model.addBox (0, 2/16, 3/16, 1, 3/16, 10/16,  BlockID.shgtvv, 0);
model.addBox (0, 3/16, 4/16, 1, 4/16, 11/16,  BlockID.shgtvv, 0);
model.addBox (0, 4/16, 5/16, 1, 5/16, 11/16,  BlockID.shgtvv, 0);
model.addBox (0, 5/16, 6/16, 1, 6/16, 11/16,  BlockID.shgtvv, 0);
model.addBox (0, 6/16, 7/16, 1, 7/16, 10/16,  BlockID.shgtvv, 0);
model.addBox (5/16, 10/16, 7/32, 6/16, 11/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (5/16, 11/16, 7/32, 8/16, 12/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (5/16, 12/16, 7/32, 9/16, 13/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (5/16, 13/16, 7/32, 10/16, 14/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (4/16, 14/16, 7/32, 10/16, 15/16, 4/16,  BlockID.shgtvp, 0);
render.addEntry(model);
}
createGTBrownTopRender(BlockID.blet, BlockID.vo, 0);
TileEntity.registerPrototype(BlockID.shgtn, {
	defaultValues: {
		size: 0,
	},
	
	created: function(){
		this.data.size = .85 + Math.random() * .25;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .55, this.y + 1, this.z + .69);
		this.animation2 = new Animation.Item(this.x + .55, this.y + 1, this.z + .69);
		this.animation3 = new Animation.Item(this.x + .37, this.y + 0.7, this.z + .29);
		this.animation1.describeItem({
			id: ItemID.shgt,
			count: 1,
			data: 0,
			rotation: "x",
			size: 0.65
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.shgt,
			count: 1,
			data: 0,
			rotation: "z",
			size: 0.65
		});
		this.animation2.load();
		
		this.animation3.describeItem({
			id: ItemID.shgtt,
			count: 1,
			data: 0,
			rotation: "x",
			size: 0.6
		});
		this.animation3.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
		if (this.animation3){
			this.animation3.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	}
});
var guiSouu = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Галактический торговец рудами()"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 510, y: 150, bitmap: "furnace_bar_backgroun", scale: 3.2},
	],
	
	elements: {
		"progressScale": {type: "scale", x: 510, y: 150, direction: 0, value: 0.5, bitmap: "просеивание", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 146},
	}
});




// file: генерация_вишни.js

//генерация
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.04){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in vishnia ){
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){//поиск биома убран
			World.setBlock(coords.x, coords.y+1, coords.z, BlockID.drevesina_vishni, 0);//да не нормальный код на генерацию структуры, а че не так?
			World.setBlock(coords.x, coords.y+2, coords.z, BlockID.drevesina_vishni, 0);
			World.setBlock(coords.x, coords.y+3, coords.z, BlockID.drevesina_vishni, 0);
			World.setBlock(coords.x, coords.y+4, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+4, coords.z);
			World.setBlock(coords.x, coords.y+5, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+5, coords.z);
			World.setBlock(coords.x, coords.y+4, coords.z+1, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+4, coords.z+1);
			World.setBlock(coords.x, coords.y+4, coords.z-1, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+4, coords.z-1);
			World.setBlock(coords.x+1, coords.y+4, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x+1, coords.y+4, coords.z);
			World.setBlock(coords.x-1, coords.y+4, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x-1, coords.y+4, coords.z);
			World.setBlock(coords.x, coords.y+3, coords.z+1, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+3, coords.z+1);
			World.setBlock(coords.x, coords.y+3, coords.z-1, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+3, coords.z-1);
			World.setBlock(coords.x+1, coords.y+3, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x+1, coords.y+3, coords.z);
			World.setBlock(coords.x-1, coords.y+3, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x-1, coords.y+3, coords.z);
	if(Math.random() < .5){
World.setBlock(coords.x-1, coords.y+2, coords.z, BlockID.avishnia, 0);
World.addTileEntity(coords.x-1, coords.y+2, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+2, coords.z, BlockID.avishnia, 0);
World.addTileEntity(coords.x+1, coords.y+2, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+2, coords.z+1, BlockID.avishnia, 0);
World.addTileEntity(coords.x, coords.y+2, coords.z+1);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+2, coords.z-1, BlockID.avishnia, 0);
World.addTileEntity(coords.x, coords.y+2, coords.z-1);
}
	if(Math.random() < .5){
World.setBlock(coords.x-1, coords.y+3, coords.z+1, BlockID.listva_vishni, 0);
World.addTileEntity(coords.x-1, coords.y+3, coords.z+1);
	if(Math.random() < .5){
World.setBlock(coords.x-1, coords.y+2, coords.z+1, BlockID.avishnia, 0);
World.addTileEntity(coords.x-1, coords.y+2, coords.z+1);
}
}
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+3, coords.z+1, BlockID.listva_vishni, 0);
World.addTileEntity(coords.x+1, coords.y+3, coords.z+1);
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+2, coords.z+1, BlockID.avishnia, 0);
World.addTileEntity(coords.x+1, coords.y+2, coords.z+1);
}
}
	if(Math.random() < .5){
World.setBlock(coords.x-1, coords.y+3, coords.z-1, BlockID.listva_vishni, 0);
World.addTileEntity(coords.x-1, coords.y+3, coords.z-1);
	if(Math.random() < .5){
World.setBlock(coords.x-1, coords.y+2, coords.z-1, BlockID.avishnia, 0);
World.addTileEntity(coords.x-1, coords.y+2, coords.z-1);
}
}
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+3, coords.z-1, BlockID.listva_vishni, 0);
World.addTileEntity(coords.x+1, coords.y+3, coords.z-1);
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+2, coords.z-1, BlockID.avishnia, 0);
World.addTileEntity(coords.x+1, coords.y+2, coords.z-1);
}
}
}
}
}
});




// file: кокосовая_пальма_генерация.js

//массив
var va = [2,17,36,35,16,243];
//генерация
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.5){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 100);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var iu in va ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){
for(var xx = -10; xx <= 10; xx++)
{
for(var yy = -10; yy <= 10; yy++)
{
for(var zz = -10; zz <= 10; zz++)
{
if(World.getBlockID(coords.x+xx, coords.y+yy, coords.z+zz) == 8)
{
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+3, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+4, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+6, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+5, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+7, coords.z, BlockID.drevesina_palmi, 0);
			World.setBlock(coords.x, coords.y+8, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+8, coords.z);
			World.setBlock(coords.x+1, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+1);
			World.setBlock(coords.x+1, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z);
			World.setBlock(coords.x+1, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z-1);
			World.setBlock(coords.x-1, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z);
			World.setBlock(coords.x-1, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z+1);
			World.setBlock(coords.x-1, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z-1);
			World.setBlock(coords.x, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-1);
			World.setBlock(coords.x, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+1);
			World.setBlock(coords.x+2, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z);
			World.setBlock(coords.x+3, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+3, coords.y+7, coords.z);
			World.setBlock(coords.x+2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z+2);
			World.setBlock(coords.x+2, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z-2);
			World.setBlock(coords.x-2, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z-2);
			World.setBlock(coords.x-2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z+2);
			World.setBlock(coords.x-2, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z);
			World.setBlock(coords.x-3, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-3, coords.y+7, coords.z);
			World.setBlock(coords.x, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-2);
			World.setBlock(coords.x, coords.y+7, coords.z-3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-3);
			World.setBlock(coords.x, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+2);
			World.setBlock(coords.x, coords.y+7, coords.z+3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+3);
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z);
}
	if(Math.random() < .3){
World.setBlock(coords.x, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z-1);
}
	if(Math.random() < .5){
World.setBlock(coords.x+4, coords.y+6, coords.z, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+4, coords.y+6, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x-4, coords.y+6, coords.z, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-4, coords.y+6, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+6, coords.z-4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z-4);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+6, coords.z+4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z+4);
}
	if(Math.random() < .5){
World.setBlock(coords.x+3, coords.y+6, coords.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+3, coords.y+6, coords.z-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x-3, coords.y+6, coords.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-3, coords.y+6, coords.z-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x+3, coords.y+6, coords.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+3, coords.y+6, coords.z+3);
}
	if(Math.random() < .5){
World.setBlock(coords.x-3, coords.y+6, coords.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-3, coords.y+6, coords.z+3);
}
}
}
}
}
}
			}
		}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.01){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var iu in va ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+3, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+4, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+6, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+5, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+7, coords.z, BlockID.drevesina_palmi, 0);
			World.setBlock(coords.x, coords.y+8, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+8, coords.z);
			World.setBlock(coords.x+1, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+1);
			World.setBlock(coords.x+1, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z);
			World.setBlock(coords.x+1, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z-1);
			World.setBlock(coords.x-1, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z);
			World.setBlock(coords.x-1, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z+1);
			World.setBlock(coords.x-1, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z-1);
			World.setBlock(coords.x, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-1);
			World.setBlock(coords.x, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+1);
			World.setBlock(coords.x+2, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z);
			World.setBlock(coords.x+3, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+3, coords.y+7, coords.z);
			World.setBlock(coords.x+2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z+2);
			World.setBlock(coords.x+2, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z-2);
			World.setBlock(coords.x-2, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z-2);
			World.setBlock(coords.x-2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z+2);
			World.setBlock(coords.x-2, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z);
			World.setBlock(coords.x-3, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-3, coords.y+7, coords.z);
			World.setBlock(coords.x, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-2);
			World.setBlock(coords.x, coords.y+7, coords.z-3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-3);
			World.setBlock(coords.x, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+2);
			World.setBlock(coords.x, coords.y+7, coords.z+3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+3);
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z);
}
	if(Math.random() < .3){
World.setBlock(coords.x, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z-1);
}
	if(Math.random() < .5){
World.setBlock(coords.x+4, coords.y+6, coords.z, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+4, coords.y+6, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x-4, coords.y+6, coords.z, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-4, coords.y+6, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+6, coords.z-4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z-4);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+6, coords.z+4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z+4);
}
	if(Math.random() < .5){
World.setBlock(coords.x+3, coords.y+6, coords.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+3, coords.y+6, coords.z-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x-3, coords.y+6, coords.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-3, coords.y+6, coords.z-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x+3, coords.y+6, coords.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+3, coords.y+6, coords.z+3);
}
	if(Math.random() < .5){
World.setBlock(coords.x-3, coords.y+6, coords.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-3, coords.y+6, coords.z+3);
}
}
			}
		}
	}
});




// file: дроп_с_блоков.js

Block.registerDropFunction("sernaia_ryda", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.sera, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("stalnaia_tryba", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[BlockID.stalnaia_tryba, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("vodgen", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[BlockID.vodgen, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("rybinovaia_tryba", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[BlockID.rybinovaia_tryba, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("antratcit", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.antratcit, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("rybinovaia_ryda", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.rybin, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("meteoritovaia_ryyda", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[BlockID.meteoritovaia_ryyda, 1, 0]];
		return drop;
	}
	return [];
});
Block.registerDropFunction(BlockID.kamni, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rock_stone, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.kamn, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rock_stone, 2, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.kam, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rock_stone, 3, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.ka, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.oscolok_cremnia, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.k, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rakyshkaa, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.a, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rakyshkab, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.pal, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([280, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.palt, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([280, 1, 0]);
	return drop;
});
var drope = null;
ModAPI.addAPICallback("primal_api", function(api){
  drope = api;
});
Block.registerDropFunction(BlockID.drevesina_palmi, function(coords, blockID, blockData, level){
if(drope)
{
	var drop = [];
		drop.push([5, 1, 3]);
	return drop;
}
});
Block.registerDropFunction(BlockID.kokos, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.kokos, 1, 0]);
	return drop;
});
Callback.addCallback("PostLoaded", function () {
Block.registerDropFunctionForID(31, function(coords, blockID, blockData, level){
	if(Player.getCarriedItem().id!==359)
{
	var drop = [];
	if(Math.random() < .3){
		drop.push([ItemID.trava, 1, 0]);
	return drop;
	}
}
	if(Player.getCarriedItem().id==359)
{
if(blockData == 1)
{
	var drop = [];
		drop.push([31, 1, 1]);
	return drop;
}
if(blockData == 2)
{
	var drop = [];
		drop.push([31, 1, 2]);
	return drop;
}
}
});
Block.registerDropFunctionForID(175, function(coords, blockID, blockData, level){
	if(Player.getCarriedItem().id!==359)
{
if((blockData == 2) || (blockData == 3))
{
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.trava, 1, 0]);
	return drop;
	}
}
}
	if(Player.getCarriedItem().id==359)
{
if(blockData == 3)
{
	var drop = [];
		drop.push([175, 1, 3]);
	return drop;
}
if(blockData == 2)
{
	var drop = [];
		drop.push([175, 1, 2]);
	return drop;
}
}
});
});
Block.registerDropFunctionForID(106, function(coords, blockID, blockData, level){
	if(Player.getCarriedItem().id!==359)
{
	var drop = [];
	if(Math.random() < .8){
		drop.push([ItemID.loza, 1, 0]);
	return drop;
	}
}
	if(Player.getCarriedItem().id==359)
{
	var drop = [];
		drop.push([106, 1, 0]);
	return drop;
}
});
Block.registerDropFunctionForID(30, function(coords, blockID, blockData, level){
	var drop = [];
	var gnil = parseInt(Math.random() * 3);
		drop.push([ItemID.gnilaia_nit, gnil, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.avishnia, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.vishnia, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.listva_vishni, function(coords, blockID, blockData, level){
if(Player.getCarriedItem().id!==359)
{
var lol = parseInt(Math.random() * 20);
if(lol == 0)
{
	var drop = [];
		drop.push([ItemID.vishnia, 1, 0]);
	return drop;
}
if(lol == 9)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 1, 0]);
	return drop;
}
if(lol == 12)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 1, 0]);
	return drop;
}
if(lol == 1)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 2)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 3)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 4)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 5)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 6)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 7)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 8)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 10)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 11)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 14)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 13)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 15)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 16)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 17)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 18)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 19)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
}
if(Player.getCarriedItem().id==359)
{
	var drop = [];
		drop.push([BlockID.listva_vishnii, 1, 0]);
	return drop;
}
});
Block.registerDropFunction("oker", function(coords, blockID, blockData, level){
	if(level > 1){
	var drop = [];
		drop.push([ItemID.oker, 1, 0]);
	return drop;
}
});
Block.registerDropFunctionForID(30, function(coords, blockID, blockData, level){
	var drop = [];
	var gnil = parseInt(Math.random() * 3);
		drop.push([ItemID.gnilaia_nit, gnil, 0]);
	return drop;
});
Block.registerDropFunction("mini_pres", function(coords, blockID, blockData, level){
	if(level > 1){
	var drop = [];
		drop.push([ItemID.mini_pres, 1, 0]);
	return drop;
}
	if(level <= 1){
	var drop = [];
		drop.push([ItemID.mini_pres, 0, 0]);
	return drop;
}
});
Block.registerDropFunction("sito", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.sito, 1, 0]);
	return drop;
});
Block.registerDropFunction("sit", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.sit, 1, 0]);
	return drop;
});
Block.registerDropFunction("si", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.si, 1, 0]);
	return drop;
});
Block.registerDropFunction("s", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.s, 1, 0]);
	return drop;
});
Block.registerDropFunction("i", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.i, 1, 0]);
	return drop;
});
Block.registerDropFunction("t", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.t, 1, 0]);
	return drop;
});
Block.registerDropFunction("tk", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tk, 1, 0]);
	return drop;
});
Block.registerDropFunction("tkb", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tkb, 1, 0]);
	return drop;
});
Block.registerDropFunction("tks", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tks, 1, 0]);
	return drop;
});
Block.registerDropFunction("tka", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tka, 1, 0]);
	return drop;
});
Block.registerDropFunction("tktd", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tktd, 1, 0]);
	return drop;
});
Block.registerDropFunction("tktr", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.tktr, 1, 0]);
	return drop;
});
Block.registerDropFunction("fabrshem", function(coords, blockID, blockData, level){
	if(level > 1){
	var drop = [];
		drop.push([ItemID.fabrshem, 1, 0]);
	return drop;
}
	if(level <= 1){
	var drop = [];
		drop.push([ItemID.fabrshem, 0, 0]);
	return drop;
}
});
Block.registerDropFunction("lavacristall", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.lavaCrysta, 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
});
Block.registerDropFunction("blockSteel", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
			return [[blockID, 1, 0]];
		var drop = [[BlockID.blockSteel, 1, 0]];
		return drop;
	}
	return [];
});
Block.registerDropFunction("rybinovii_block", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
			return [[blockID, 1, 0]];
		var drop = [[BlockID.rybinovii_block, 1, 0]];
		return drop;
	}
	return [];
});
Block.registerDropFunction("meteoritovii_block", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
			return [[blockID, 1, 0]];
		var drop = [[BlockID.meteoritovii_block, 1, 0]];
		return drop;
	}
	return [];
});
Block.registerDropFunction(BlockID.listva_palmi, function(coords, blockID, blockData, level){
if(Player.getCarriedItem().id!==359)
{
var lol = parseInt(Math.random() * 20);
if(lol == 0)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 9)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_palmi, 1, 0]);
	return drop;
}
if(lol == 12)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_palmi, 1, 0]);
	return drop;
}
if(lol == 1)
{
	var drop = [];
if(primal_core){
		drop.push([280, 1, 0]);
}
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 2)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 3)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 4)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 5)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 6)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 7)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 8)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 10)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 11)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 14)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 13)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 15)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 16)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 17)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 18)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 19)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
}
if(Player.getCarriedItem().id==359)
{
	var drop = [];
		drop.push([BlockID.listva_palmii, 1, 0]);
	return drop;
}
});
Block.registerDropFunction(BlockID.listva_palmii, function(coords, blockID, blockData, level){
if(Player.getCarriedItem().id!==359)
{
var lol = parseInt(Math.random() * 20);
if(lol == 0)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 9)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_palmi, 1, 0]);
	return drop;
}
if(lol == 12)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_palmi, 1, 0]);
	return drop;
}
if(lol == 1)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 2)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 3)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 4)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 5)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 6)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 7)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 8)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 10)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 11)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 14)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 13)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 15)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 16)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 17)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 18)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 19)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
}
if(Player.getCarriedItem().id==359)
{
	var drop = [];
		drop.push([BlockID.listva_palmii, 1, 0]);
	return drop;
}
});
Block.registerDropFunction(BlockID.listva_vishnii, function(coords, blockID, blockData, level){
if(Player.getCarriedItem().id!==359)
{
var lol = parseInt(Math.random() * 20);
if(lol == 0)
{
	var drop = [];
		drop.push([ItemID.vishnia, 1, 0]);
	return drop;
}
if(lol == 9)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 1, 0]);
	return drop;
}
if(lol == 12)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 1, 0]);
	return drop;
}
if(lol == 1)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 2)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 3)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 4)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 5)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 6)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
if(primal_core){
		drop.push([280, 1, 0]);
}
	return drop;
}
if(lol == 7)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 8)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 10)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 11)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 14)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 13)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 15)
{
	var drop = [];
		drop.push([ItemID.vishnia, 0, 0]);
	return drop;
}
if(lol == 16)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 17)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 18)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
if(lol == 19)
{
	var drop = [];
		drop.push([ItemID.sazhenetc_vishni, 0, 0]);
	return drop;
}
}
if(Player.getCarriedItem().id==359)
{
	var drop = [];
		drop.push([BlockID.listva_vishnii, 1, 0]);
	return drop;
}
});




// file: дроп_с_мобов.js

Callback.addCallback("EntityDeath", function(entity){//этот код не однотипный и тут разный дроп с разных мобов
if(Entity.getType(entity) == 32){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, soul);
}
else if(Entity.getType(entity) == 44){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, soul);
}
else if(Entity.getType(entity) == 35){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.zyb_payka, soul);
}
else if(Entity.getType(entity) == 40){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
     var sou = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.zyb_payka, soul);
     World.drop(coords.x, coords.y, coords.z, ItemID.otravlennii_zyb_payka, sou);
}
else if(Entity.getType(entity) == 36){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, soul);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_kost, soul);
     World.drop(coords.x, coords.y, coords.z, 352, soul);
}
else if(Entity.getType(entity) == 46){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
     var sou = parseInt(Math.random() * 2);
     var u = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, soul);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_kost, u);
     World.drop(coords.x, coords.y, coords.z, ItemID.gniloi_tkanevii_shlem, sou);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkanevaia_kyrtka, sou);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilie_tkanevie_ponozhi, sou);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilie_tkanevie_botinki, sou);
}
else if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, soul);
}
else if(Entity.getType(entity) == 15){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.prochnaia_tkan, soul);
}
else if(Entity.getType(entity) == 45){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.prochnaia_tkan, soul);
}
else if(Entity.getType(entity) == 14){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
        if(!primal_core){
     World.drop(coords.x, coords.y, coords.z, 334, soul);
}
if(primal_core){
     World.drop(coords.x, coords.y, coords.z, ItemID.pelt_animal, soul);
}
}
else if(Entity.getType(entity) == 13){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
        if(!primal_core){
     World.drop(coords.x, coords.y, coords.z, 334, soul);
}
if(primal_core){
     World.drop(coords.x, coords.y, coords.z, ItemID.pelt_animal, soul);
}
}
else if(Entity.getType(entity) == 38){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.siroe_miaso_kraia, soul);
}
else if(Entity.getType(entity) == 55){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.siroe_miaso_kraia, soul);
}
else if(Entity.getType(entity) == 49){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.ship_strazha, soul);
}
else if(Entity.getType(entity) == 50){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.ship_drevnego_strazha, soul);
}
else if(Entity.getType(entity) == 16){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 4);
        
     World.drop(coords.x, coords.y, coords.z, 40, soul);
}
else if(Entity.getType(entity) == 48){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_kost, soul);
}
else if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_kost, soul);
}
else if(Entity.getType(entity) == 53){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 21);
     var oul = parseInt(Math.random() * 6);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.cheshyia_drakona_kraia, 5+oul);
     World.drop(coords.x, coords.y, coords.z, ItemID.siroe_miaso_kraia, soul);
}
});




// file: новое_топливо_для_печи.js

//ванильные предметы
Recipes.addFurnaceFuel(427, 0, 100);
Recipes.addFurnaceFuel(359, 0, 50);
Recipes.addFurnaceFuel(444, 0, 200);
Recipes.addFurnaceFuel(428, 0, 100);
Recipes.addFurnaceFuel(429, 0, 100);
Recipes.addFurnaceFuel(430, 0, 100);
Recipes.addFurnaceFuel(431, 0, 100);
Recipes.addFurnaceFuel(324, 0, 100);
Recipes.addFurnaceFuel(323, 0, 100);
Recipes.addFurnaceFuel(72, 0, 50);
Recipes.addFurnaceFuel(131, 0, 50);
Recipes.addFurnaceFuel(143, 0, 50);
Recipes.addFurnaceFuel(170, 0, 200);
Recipes.addFurnaceFuel(146, 0, 200);
Recipes.addFurnaceFuel(96, 0, 200);
Recipes.addFurnaceFuel(395, 0, 100);
Recipes.addFurnaceFuel(395, 2, 100);
Recipes.addFurnaceFuel(339, 0, 100);
Recipes.addFurnaceFuel(340, 0, 150);
Recipes.addFurnaceFuel(346, 0, 100);
Recipes.addFurnaceFuel(287, 0, 50);
Recipes.addFurnaceFuel(288, 0, 50);
Recipes.addFurnaceFuel(420, 0, 100);
Recipes.addFurnaceFuel(421, 0, 50);
Recipes.addFurnaceFuel(296, 0, 100);
Recipes.addFurnaceFuel(389, 0, 100);
Recipes.addFurnaceFuel(358, 0, 100);
Recipes.addFurnaceFuel(358, 3, 100);
Recipes.addFurnaceFuel(358, 4, 100);
Recipes.addFurnaceFuel(338, 0, 100);
Recipes.addFurnaceFuel(321, 0, 100);
Recipes.addFurnaceFuel(47, 0, 200);
Recipes.addFurnaceFuel(18, 0, 100);
Recipes.addFurnaceFuel(106, 0, 100);
Recipes.addFurnaceFuel(18, 1, 100);
Recipes.addFurnaceFuel(18, 2, 100);
Recipes.addFurnaceFuel(18, 3, 100);
Recipes.addFurnaceFuel(161, 0, 100);
Recipes.addFurnaceFuel(161, 1, 100);
Recipes.addFurnaceFuel(111, 0, 50);
Recipes.addFurnaceFuel(35, 0, 150);
Recipes.addFurnaceFuel(35, 1, 150);
Recipes.addFurnaceFuel(35, 2, 150);
Recipes.addFurnaceFuel(35, 3, 150);
Recipes.addFurnaceFuel(35, 4, 150);
Recipes.addFurnaceFuel(35, 5, 150);
Recipes.addFurnaceFuel(35, 6, 150);
Recipes.addFurnaceFuel(35, 7, 150);
Recipes.addFurnaceFuel(37, 0, 50);
Recipes.addFurnaceFuel(38, 0, 50);
Recipes.addFurnaceFuel(38, 1, 50);
Recipes.addFurnaceFuel(38, 2, 50);
Recipes.addFurnaceFuel(38, 3, 50);
Recipes.addFurnaceFuel(38, 4, 50);
Recipes.addFurnaceFuel(38, 5, 50);
Recipes.addFurnaceFuel(38, 6, 50);
Recipes.addFurnaceFuel(38, 7, 50);
Recipes.addFurnaceFuel(38, 8, 50);
Recipes.addFurnaceFuel(175, 0, 50);
Recipes.addFurnaceFuel(175, 1, 50);
Recipes.addFurnaceFuel(175, 2, 50);
Recipes.addFurnaceFuel(175, 3, 50);
Recipes.addFurnaceFuel(175, 4, 50);
Recipes.addFurnaceFuel(175, 5, 50);
Recipes.addFurnaceFuel(35, 8, 150);
Recipes.addFurnaceFuel(35, 9, 150);
Recipes.addFurnaceFuel(35, 10, 150);
Recipes.addFurnaceFuel(35, 11, 150);
Recipes.addFurnaceFuel(35, 12, 150);
Recipes.addFurnaceFuel(35, 13, 150);
Recipes.addFurnaceFuel(35, 14, 150);
Recipes.addFurnaceFuel(65, 0, 100);
Recipes.addFurnaceFuel(346, 0, 100);
Recipes.addFurnaceFuel(35, 15, 100);
Recipes.addFurnaceFuel(171, 0, 50);
Recipes.addFurnaceFuel(171, 1, 50);
Recipes.addFurnaceFuel(171, 2, 50);
Recipes.addFurnaceFuel(171, 3, 50);
Recipes.addFurnaceFuel(171, 4, 50);
Recipes.addFurnaceFuel(171, 5, 50);
Recipes.addFurnaceFuel(171, 6, 50);
Recipes.addFurnaceFuel(171, 7, 50);
Recipes.addFurnaceFuel(171, 8, 50);
Recipes.addFurnaceFuel(171, 9, 50);
Recipes.addFurnaceFuel(171, 10, 50);
Recipes.addFurnaceFuel(171, 11, 50);
Recipes.addFurnaceFuel(171, 12, 50);
Recipes.addFurnaceFuel(171, 13, 50);
Recipes.addFurnaceFuel(171, 14, 50);
Recipes.addFurnaceFuel(171, 15, 50);
Recipes.addFurnaceFuel(32, 0, 50);
Recipes.addFurnaceFuel(31, 0, 50);
Recipes.addFurnaceFuel(31, 1, 50);
//новые премдеты
Recipes.addFurnaceFuel(ItemID.slomannaia_palka, 0, 50);
Recipes.addFurnaceFuel(ItemID.kyski_bymagi, 0, 50);
Recipes.addFurnaceFuel(ItemID.mehovoi_kanushon, 0, 100);
Recipes.addFurnaceFuel(ItemID.mehovaia_kyrtka, 0, 150);
Recipes.addFurnaceFuel(ItemID.mehovie_ponozhi, 0, 150);
Recipes.addFurnaceFuel(ItemID.mehovie_botinki, 100);
Recipes.addFurnaceFuel(ItemID.prochnii_tkanevii_shlem, 0, 100);
Recipes.addFurnaceFuel(ItemID.prochnaia_tkanevaia_kyrtka, 0, 150);
Recipes.addFurnaceFuel(ItemID.prochnie_tkanevie_ponozhi, 0, 150);
Recipes.addFurnaceFuel(ItemID.prochnie_tkanevie_botinki, 0, 100);
Recipes.addFurnaceFuel(ItemID.gniloi_tkanevii_shlem, 0, 100);
Recipes.addFurnaceFuel(ItemID.gnilaia_tkanevaia_kyrtka, 0, 150);
Recipes.addFurnaceFuel(ItemID.gnilie_tkanevie_ponozhi, 0, 150);
Recipes.addFurnaceFuel(ItemID.gnilie_tkanevie_botinki, 0, 100);
Recipes.addFurnaceFuel(BlockID.drevesina_vishni, 0, 150);
Recipes.addFurnaceFuel(ItemID.sazhenetc_vishni, 0, 50);
Recipes.addFurnaceFuel(BlockID.listva_vishni, 0, 50);
Recipes.addFurnaceFuel(ItemID.gnilaia_tkan, 0, 50);
Recipes.addFurnaceFuel(ItemID.trava, 0, 50);
Recipes.addFurnaceFuel(ItemID.travianaia_nit, 0, 50);
Recipes.addFurnaceFuel(ItemID.medvezhia_shkyra, 0, 200);
Recipes.addFurnaceFuel(ItemID.prochnaia_tkan, 0, 100);
Recipes.addFurnaceFuel(ItemID.setka_dlia_sita, 0, 100);
Recipes.addFurnaceFuel(ItemID.loza, 0, 100);
Recipes.addFurnaceFuel(ItemID.travianaia_verevka, 0, 100);
Recipes.addFurnaceFuel(ItemID.obichnaia_verevka, 0, 100);
Recipes.addFurnaceFuel(ItemID.katyshka_s_nitkami, 0, 100);
Recipes.addFurnaceFuel(ItemID.sito, 0, 150);
Recipes.addFurnaceFuel(ItemID.sit, 0, 150);
Recipes.addFurnaceFuel(ItemID.si, 0, 150);
Recipes.addFurnaceFuel(ItemID.s, 0, 150);
Recipes.addFurnaceFuel(ItemID.i, 0, 150);
Recipes.addFurnaceFuel(ItemID.t, 0, 150);
Recipes.addFurnaceFuel(ItemID.antratcit, 0, 3700);
Recipes.addFurnaceFuel(ItemID.antratcitch, 0, 3700);
Recipes.addFurnaceFuel(ItemID.lavaCrysta, 0, 100);
Recipes.addFurnaceFuel(ItemID.lavaCryst, 0, 400);
Recipes.addFurnaceFuel(ItemID.lavaCrys, 0, 700);
Recipes.addFurnaceFuel(ItemID.lavaCry, 0, 1000);
Recipes.addFurnaceFuel(ItemID.lavaCr, 0, 1300);
Recipes.addFurnaceFuel(ItemID.lavaC, 0, 1600);
Recipes.addFurnaceFuel(ItemID.lavaa, 0, 1900);
Recipes.addFurnaceFuel(ItemID.lav, 0, 2200);
Recipes.addFurnaceFuel(ItemID.lavv, 0, 2500);
Recipes.addFurnaceFuel(ItemID.la, 0, 2800);
Recipes.addFurnaceFuel(ItemID.laa, 0, 3100);
Recipes.addFurnaceFuel(BlockID.drevesina_palmi, 0, 200);
Recipes.addFurnaceFuel(ItemID.sazhenetc_palmi, 0, 50);
Recipes.addFurnaceFuel(BlockID.listva_palmi, 0, 50);
Recipes.addFurnaceFuel(BlockID.tk, 0, 200);
Recipes.addFurnaceFuel(BlockID.tks, 0, 200);
Recipes.addFurnaceFuel(BlockID.tkb, 0, 200);
Recipes.addFurnaceFuel(BlockID.tka, 0, 200);
Recipes.addFurnaceFuel(BlockID.tktr, 0, 200);
Recipes.addFurnaceFuel(BlockID.tktd, 0, 200);




// file: крафты_в_печке.js

Recipes.addFurnace(ItemID.pyzirek_s_molokom, ItemID.pyzirek_s_rasplavlennim_sirom, 0);
Recipes.addFurnace(ItemID.siroi_iablochnii_pirog, ItemID.prigotovlennii_iablochnii_pirog, 0);
Recipes.addFurnace(ItemID.siroi_vishnevii_pirog, ItemID.prigotovlennii_vishnevii_pirog, 0);
Recipes.addFurnace(ItemID.ocishennaia_siraia_riba, ItemID.ochishennaia_prigotovlennaia_riba, 0);
Recipes.addFurnace(ItemID.ocishennii_siroi_losos, ItemID.ocishennii_prigotovlennii_losos, 0);
Recipes.addFurnace(344, ItemID.iaichnitca, 0);
Recipes.addFurnace(ItemID.prochnaia_tkan, ItemID.yglerodnoe_volokno, 0);
Recipes.addFurnace(ItemID.siroe_miaso_kraia, ItemID.prigotovlennoe_miaso_kraia, 0);
Recipes.addFurnace(ItemID.bezopasnoe_miaso_pibi_fygy, ItemID.prigotovlennoe_miaso_pibi_fygy, 0);
Recipes.addFurnace(ItemID.siraia_pitca, ItemID.prigotovlennaia_pitca, 0);
Recipes.addFurnace(ItemID.gorst_peska, 160, 0);
Recipes.addFurnace(ItemID.igla, ItemID.nuggetIron, 0);
Recipes.addFurnace(ItemID.zheleznaia_banka, ItemID.nuggetIron, 0);
Recipes.addFurnace(ItemID.kolchyzhnoe_koltco, ItemID.nuggetIron, 0);
Recipes.addFurnace(256, ItemID.nuggetIron, 0);
Recipes.addFurnace(257, ItemID.nuggetIron, 0);
Recipes.addFurnace(258, ItemID.nuggetIron, 0);
Recipes.addFurnace(259, ItemID.nuggetIron, 0);
Recipes.addFurnace(267, ItemID.nuggetIron, 0);
Recipes.addFurnace(302, ItemID.nuggetIron, 0);
Recipes.addFurnace(303, ItemID.nuggetIron, 0);
Recipes.addFurnace(304, ItemID.nuggetIron, 0);
Recipes.addFurnace(305, ItemID.nuggetIron, 0);
Recipes.addFurnace(306, ItemID.nuggetIron, 0);
Recipes.addFurnace(307, ItemID.nuggetIron, 0);
Recipes.addFurnace(308, ItemID.nuggetIron, 0);
Recipes.addFurnace(309, ItemID.nuggetIron, 0);
Recipes.addFurnace(359, ItemID.nuggetIron, 0);
Recipes.addFurnace(417, ItemID.nuggetIron, 0);
Recipes.addFurnace(292, ItemID.nuggetIron, 0);
Recipes.addFurnace(410, ItemID.nuggetIron, 0);
Recipes.addFurnace(408, ItemID.nuggetIron, 0);
Recipes.addFurnace(101, ItemID.nuggetIron, 0);
Recipes.addFurnace(342, ItemID.nuggetIron, 0);
Recipes.addFurnace(148, ItemID.nuggetIron, 0);
Recipes.addFurnace(380, ItemID.nuggetIron, 0);
Recipes.addFurnace(167, ItemID.nuggetIron, 0);
Recipes.addFurnace(ItemID.zheleznii_metatelnii_nozh, ItemID.nuggetIron, 0);
Recipes.addFurnace(145, 265, 0);
Recipes.addFurnace(ItemID.zolotoi_metatelnii_nozh, 371, 0);
Recipes.addFurnace(283, 371, 0);
Recipes.addFurnace(284, 371, 0);
Recipes.addFurnace(285, 371, 0);
Recipes.addFurnace(286, 371, 0);
Recipes.addFurnace(294, 371, 0);
Recipes.addFurnace(330, ItemID.nuggetIron, 0);
Recipes.addFurnace(325, ItemID.nuggetIron, 0);
Recipes.addFurnace(328, ItemID.nuggetIron, 0);
Recipes.addFurnace(345, ItemID.nuggetIron, 0);
Recipes.addFurnace(314, 371, 0);
Recipes.addFurnace(315, 371, 0);
Recipes.addFurnace(316, 371, 0);
Recipes.addFurnace(347, 371, 0);
Recipes.addFurnace(317, 371, 0);
Recipes.addFurnace(147, 371, 0);
Recipes.addFurnace(BlockID.drevesina_vishni, 263, 1);
Recipes.addFurnace(BlockID.drevesina_palmi, 263, 1);
Recipes.addFurnace(5, ItemID.pepel, 0);
Recipes.addFurnace(32, ItemID.pepel, 0);
Recipes.addFurnace(47, ItemID.pepel, 0);
Recipes.addFurnace(53, ItemID.pepel, 0);
Recipes.addFurnace(54, ItemID.pepel, 0);
Recipes.addFurnace(58, ItemID.pepel, 0);
Recipes.addFurnace(65, ItemID.pepel, 0);
Recipes.addFurnace(72, ItemID.pepel, 0);
Recipes.addFurnace(85, ItemID.pepel, 0);
Recipes.addFurnace(96, ItemID.pepel, 0);
Recipes.addFurnace(107, ItemID.pepel, 0);
Recipes.addFurnace(131, ItemID.pepel, 0);
Recipes.addFurnace(143, ItemID.pepel, 0);
Recipes.addFurnace(146, ItemID.pepel, 0);
Recipes.addFurnace(158, ItemID.pepel, 0);
Recipes.addFurnace(134, ItemID.pepel, 0);
Recipes.addFurnace(135, ItemID.pepel, 0);
Recipes.addFurnace(136, ItemID.pepel, 0);
Recipes.addFurnace(183, ItemID.pepel, 0);
Recipes.addFurnace(184, ItemID.pepel, 0);
Recipes.addFurnace(185, ItemID.pepel, 0);
Recipes.addFurnace(186, ItemID.pepel, 0);
Recipes.addFurnace(187, ItemID.pepel, 0);
Recipes.addFurnace(163, ItemID.pepel, 0);
Recipes.addFurnace(164, ItemID.pepel, 0);
Recipes.addFurnace(261, ItemID.pepel, 0);
Recipes.addFurnace(268, ItemID.pepel, 0);
Recipes.addFurnace(269, ItemID.pepel, 0);
Recipes.addFurnace(270, ItemID.pepel, 0);
Recipes.addFurnace(271, ItemID.pepel, 0);
Recipes.addFurnace(280, ItemID.pepel, 0);
Recipes.addFurnace(281, ItemID.pepel, 0);
Recipes.addFurnace(290, ItemID.pepel, 0);
Recipes.addFurnace(321, ItemID.pepel, 0);
Recipes.addFurnace(323, ItemID.pepel, 0);
Recipes.addFurnace(324, ItemID.pepel, 0);
Recipes.addFurnace(333, ItemID.pepel, 0);
Recipes.addFurnace(346, ItemID.pepel, 0);
Recipes.addFurnace(359, ItemID.pepel, 0);
Recipes.addFurnace(389, ItemID.pepel, 0);
Recipes.addFurnace(427, ItemID.pepel, 0);
Recipes.addFurnace(428, ItemID.pepel, 0);
Recipes.addFurnace(429, ItemID.pepel, 0);
Recipes.addFurnace(430, ItemID.pepel, 0);
Recipes.addFurnace(420, ItemID.pepel, 0);
Recipes.addFurnace(421, ItemID.pepel, 0);
Recipes.addFurnace(395, ItemID.pepel, 0);
Recipes.addFurnace(338, ItemID.pepel, 0);
Recipes.addFurnace(296, ItemID.pepel, 0);
Recipes.addFurnace(340, ItemID.pepel, 0);
Recipes.addFurnace(111, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.slomannaia_palka, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.kyski_bymagi, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.katyshka_s_travianimi_nitkami, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.katyshka_s_nitkami, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.gnilaia_tkan, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.trava, ItemID.pepel, 0);
Recipes.addFurnace(339, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.spalnii_nabor, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.setka_dlia_sita, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.dereviannii_metatelnii_nozh, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.sazhenetc_palmi, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.sazhenetc_vishni, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.gnilaia_tkanevaia_kyrtka, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.gniloi_tkanevii_shlem, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.gnilie_tkanevie_ponozhi, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.gnilie_tkanevie_botinki, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.mehovie_botinki, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.mehovie_ponozhi, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.mehovaia_kyrtka, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.mehovoi_kapushon, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.prochnie_tkanevie_botinki, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.prochnie_tkanevie_ponozhi, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.prochnii_tkanevii_shlem, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.prochnaia_tkanevaia_kyrtka, ItemID.pepel, 0);
Recipes.addFurnace(106, ItemID.pepel, 0);
Recipes.addFurnace(355, ItemID.pepel, 0);
Recipes.addFurnace(37, ItemID.pepel, 0);
Recipes.addFurnace(38, ItemID.pepel, 0);
Recipes.addFurnace(175, ItemID.pepel, 0);
Recipes.addFurnace(30, ItemID.pepel, 0);
Recipes.addFurnace(31, ItemID.pepel, 0);
Recipes.addFurnace(170, ItemID.pepel, 0);
Recipes.addFurnace(6, ItemID.pepel, 0);
Recipes.addFurnace(18, ItemID.pepel, 0);
Recipes.addFurnace(161, ItemID.pepel, 0);
Recipes.addFurnace(171, ItemID.pepel, 0);
Recipes.addFurnace(35, ItemID.pepel, 0);
Recipes.addFurnace(BlockID.listva_palmii, ItemID.pepel, 0);
Recipes.addFurnace(BlockID.listva_vishnii, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.sito, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.sit, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.si, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.s, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.i, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.t, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.lavaCrysta, ItemID.lavaCryst, 0);
Recipes.addFurnace(ItemID.lavaCryst, ItemID.lavaCrys, 0);
Recipes.addFurnace(ItemID.lavaCrys, ItemID.lavaCry, 0);
Recipes.addFurnace(ItemID.lavaCry, ItemID.lavaCr, 0);
Recipes.addFurnace(ItemID.lavaCr, ItemID.lavaC, 0);
Recipes.addFurnace(ItemID.lavaC, ItemID.lavaa, 0);
Recipes.addFurnace(ItemID.lavaa, ItemID.lav, 0);
Recipes.addFurnace(ItemID.lav, ItemID.lavv, 0);
Recipes.addFurnace(ItemID.lavv, ItemID.la, 0);
Recipes.addFurnace(ItemID.la, ItemID.laa, 0);
Recipes.addFurnace(265, ItemID.ingotSteel, 0);
Recipes.addFurnace(ItemID.stalnaia_kirasa, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(ItemID.stalnoi_shlem, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(ItemID.stalnie_ponozhi, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(ItemID.stalnie_botinki, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(ItemID.stalnaia_kircka, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(ItemID.stalnie_lasti, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(ItemID.stalnoi_metatelnii_nozh, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(ItemID.fabrshem, ItemID.ingotSteel, 0);
Recipes.addFurnace(ItemID.mini_pres, ItemID.ingotSteel, 0);
if(!primal_core){
Recipes.addFurnace(ItemID.stalnoi_mech, ItemID.stalnoi_samorodok, 0);
}
Recipes.addFurnace(ItemID.stalnaia_lopata, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(ItemID.stalnaia_motiga, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(ItemID.stalnoi_topor, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(ItemID.nuggetIron, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(ItemID.ballon_s_vozdyhom, ItemID.stalnoi_samorodok, 0);
Recipes.addFurnace(BlockID.meteoritovaia_ryyda, ItemID.meteoritovii_slitok, 0);
Recipes.addFurnace(ItemID.tk, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.tks, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.tkb, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.tka, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.tktr, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.tktd, ItemID.pepel, 0);
Recipes.addFurnace(ItemID.obichnii_metallalom, 265, 0);
Recipes.addFurnace(ItemID.stalnoi_metallalom, ItemID.ingotSteel, 0);
Recipes.addFurnace(ItemID.cvetnoi_metallalom, 266, 0);
Recipes.addFurnace(ItemID.adskii_metallalom, ItemID.adskii_slitok, 0);
Recipes.addFurnace(ItemID.antratcit, ItemID.antratcitch, 0);




// file: функция_кидания.js

Item.registerThrowableFunction("rock_stone", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 1);
var soul = parseInt(Math.random() * 2);
World.drop(coords.x, coords.y, coords.z, ItemID.kamen, soul);
}
});
Item.registerThrowableFunction("kokos", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 1);
var soul = parseInt(Math.random() * 2);
World.drop(coords.x, coords.y, coords.z, ItemID.kokos, soul);
}
});
Item.registerThrowableFunction("dereviannii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 1);
if(Math.random() < .1){
World.drop(coords.x, coords.y, coords.z, ItemID.dereviannii_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("kamennii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 2);
if(Math.random() < .2){
World.drop(coords.x, coords.y, coords.z, ItemID.kamennii_metatelnii_nozh, 1);
}
}
});
if(primal_core){
Item.registerThrowableFunction("kremnievii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 2);
if(Math.random() < .2){
World.drop(coords.x, coords.y, coords.z, ItemID.kremnievii_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("izymrydnii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 4);
if(Math.random() < .5){
World.drop(coords.x, coords.y, coords.z, ItemID.izymrydnii_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("kostianoi_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 2);
if(Math.random() < .2){
World.drop(coords.x, coords.y, coords.z, ItemID.kostianoi_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("obsidianovii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 4);
if(Math.random() < .5){
World.drop(coords.x, coords.y, coords.z, ItemID.obsidianovii_metatelnii_nozh, 1);
}
}
});
}
Item.registerThrowableFunction("zheleznii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 3);
if(Math.random() < .3){
World.drop(coords.x, coords.y, coords.z, ItemID.zheleznii_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("stalnoi_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 3);
if(Math.random() < .4){
World.drop(coords.x, coords.y, coords.z, ItemID.stalnoi_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("zolotoi_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 3);
if(Math.random() < .2){
World.drop(coords.x, coords.y, coords.z, ItemID.zolotoi_metatelnii_nozh, 1);
}
}
});
Item.registerThrowableFunction("almaznii_metatelnii_nozh", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 4);
if(Math.random() < .5){
World.drop(coords.x, coords.y, coords.z, ItemID.almaznii_metatelnii_nozh, 1);
}
}
});




// file: блок_материал.js

//листва и саженцы
ToolAPI.registerBlockMaterial(BlockID.listva_dyriana, "plant", 0, true);//спасибо Лео, что сказал про plant
ToolAPI.registerBlockMaterial(BlockID.listva_palmi, "plant", 0, true);
ToolAPI.registerBlockMaterial(BlockID.listva_vishni, "plant", 0, true);
ToolAPI.registerBlockMaterial(BlockID.listva_palmii, "plant", 0, true);
ToolAPI.registerBlockMaterial(BlockID.listva_vishnii, "plant", 0, true);
ToolAPI.registerBlockMaterial(BlockID.sazhenetc_vishni, "plant", 0, true);
ToolAPI.registerBlockMaterial(BlockID.sazhenetc_palmi, "plant", 0, true);
ToolAPI.registerBlockMaterial(BlockID.vis, "plant", 0, true);
ToolAPI.registerBlockMaterial(BlockID.vi, "plant", 0, true);
ToolAPI.registerBlockMaterial(BlockID.kak, "plant", 0, true);
//дерево
ToolAPI.registerBlockMaterial(BlockID.drevesina_palmi, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.drevesina_vishni, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.drevesina_dyriana, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.drevesina_dyrianad, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.sito, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.sit, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.si, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.s, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.i, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.t, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.tk, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.tka, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.tkb, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.tks, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.tktr, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.tktd, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.pal, "wood", 0, true);
ToolAPI.registerBlockMaterial(BlockID.palt, "wood", 0, true);
//камень
ToolAPI.registerBlockMaterial(BlockID.lavacristall, "stone", 1, true);
ToolAPI.registerBlockMaterial(BlockID.blockSteel, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.oker, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.sernaia_ryda, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.antratcit, "stone", 1, true);
ToolAPI.registerBlockMaterial(BlockID.rybinovaia_ryda, "stone", 4, true);
ToolAPI.registerBlockMaterial(BlockID.rybinovaia_tryba, "stone", 4, true);
ToolAPI.registerBlockMaterial(BlockID.rybinovii_block, "stone", 4, true);
ToolAPI.registerBlockMaterial(BlockID.meteoritovaia_ryyda, "stone", 3, true);
ToolAPI.registerBlockMaterial(BlockID.meteoritovii_block, "stone", 3, true);
ToolAPI.registerBlockMaterial(BlockID.mini_pres, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.fabrshem, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.kamni, "stone", 0, true);
ToolAPI.registerBlockMaterial(BlockID.kamn, "stone", 0, true);
ToolAPI.registerBlockMaterial(BlockID.kam, "stone", 0, true);
ToolAPI.registerBlockMaterial(BlockID.ka, "stone", 0, true);
ToolAPI.registerBlockMaterial(BlockID.a, "stone", 0, true);
ToolAPI.registerBlockMaterial(BlockID.k, "stone", 0, true);
ToolAPI.registerBlockMaterial(BlockID.stalnaia_tryba, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.vodgen, "stone", 2, true);




// file: комманды.js

Callback.addCallback("NativeCommand", function (str) {
if(str=="/meteor"){
    var pos = Player.getPosition()
		pos = GenerationUtils.findSurface(pos.x, pos.y, pos.z);
		if(World.getBlockID(pos.x, pos.y+1, pos.z) == 0){
World.explode(pos.x, pos.y, pos.z, 5, true);
World.setBlock(pos.x, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-6, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-7, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-8, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x, pos.y-7, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-7, pos.z, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-6, pos.z-1, BlockID.block_zoli, 0);
 mz = Entity.spawn(pos.x+1.5, pos.y-5, pos.z-.5, 32);
Entity.setSkin(mz, "mob/мзомби.png")
Entity.setMaxHealth (mz, 100)
Entity.setHealth (mz, 100)
World.setBlock(pos.x, pos.y-6, pos.z-1, BlockID.block_zoli, 0);
 mc = Entity.spawn(pos.x+.5, pos.y-5, pos.z-.5, 33);
Entity.setSkin(mc, "mob/мкрипер.png")
Entity.setMaxHealth (mc, 100)
Entity.setHealth (mc, 100)
	if(Math.random() < .4){
World.explode(pos.x, pos.y, pos.z, 7, true);
World.setBlock(pos.x, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z+1, 0, 0);
World.setBlock(pos.x-1, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x+1, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-8, pos.z-1, 0, 0);
World.setBlock(pos.x, pos.y-9, pos.z, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z, 0, 0);
World.setBlock(pos.x, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z+1, 0, 0);
World.setBlock(pos.x+1, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x-1, pos.y-9, pos.z-1, 0, 0);
World.setBlock(pos.x+1, pos.y-9, pos.z, BlockID.block_zoli, 0);
 ms = Entity.spawn(pos.x+1.5, pos.y-8, pos.z+.5, 34);
Entity.setSkin(ms, "mob/мскелет.png")
Entity.setMaxHealth (ms, 100)
Entity.setHealth (ms, 100)
World.setBlock(pos.x+1, pos.y-9, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x, pos.y-9, pos.z+1, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-10, pos.z+1, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-10, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-10, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-10, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-10, pos.z+1, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-10, pos.z-1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-10, pos.z-1, BlockID.block_zoli, 0);
	if(Math.random() < .5){
World.setBlock(pos.x+1, pos.y-10, pos.z, BlockID.antratcit, 0);
World.setBlock(pos.x, pos.y-10, pos.z-1, BlockID.antratcit, 0);
}
World.setBlock(pos.x, pos.y-11, pos.z+1, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x, pos.y-11, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x+1, pos.y-11, pos.z, BlockID.meteoritovaia_ryyda, 0);
World.setBlock(pos.x-1, pos.y-11, pos.z-1, BlockID.block_zoli, 0);
World.setBlock(pos.x-1, pos.y-11, pos.z, BlockID.block_zoli, 0);
World.setBlock(pos.x, pos.y-11, pos.z-1, BlockID.block_zoli, 0);
World.setBlock(pos.x+1, pos.y-11, pos.z+1, BlockID.block_zoli, 0);
}
PlaySoundFile("crash.ogg");
	Game.message(ChatColor.GREEN + "Метеорит упал под игроком");
}
}
});
Callback.addCallback("NativeCommand", function (str) {
if(str=="/Dezar"){
	Game.message(ChatColor.BROWN + "Печеньки:)");
Player.addItemToInventory (357, 64, 0);
}
});
Callback.addCallback("NativeCommand", function (str) {
if(str=="/IQ Master"){
	Game.message("О привет-_-");
Player.addItemToInventory (325, 1, 1);
}
});
Callback.addCallback("NativeCommand", function (str) {
if(str=="/miha"){
	Game.message(ChatColor.RED + "Пасхалочка обнаружена(!!!TRIGGERED!!!)");
Player.addItemToInventory (268, 64, 0);
}
});
Callback.addCallback("NativeCommand", function (str) {
if(str=="/Donate"){
	Game.message(ChatColor.GREEN + "Передай привет Turbo Blastiajaj1001001101010101101");
Player.addItemToInventory (ItemID.mezhgalakticheskaia_valuta, 5, 0);
}
});
Callback.addCallback("NativeCommand", function (str) {
if(str=="/Kitron"){
	Game.message(ChatColor.RED + "1001001101010101101");
Player.addItemToInventory (ItemID.otsilka, 1, 0);
}
});




