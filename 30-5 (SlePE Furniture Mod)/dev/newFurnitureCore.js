var FurnitureCore={};
FurnitureCore.addReplacementItem=function(i, b, f, f2){
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
};
FurnitureCore.isReplacementItem=function(id, data){
	data = data||0;
	for(var i in this.replacementItemList){
		if(this.replacementItemList[i].item.id==id&&this.replacementItemList[i].item.data==data)return {id:this.replacementItemList[i].block.id, data:this.replacementItemList[i].block.data};
	}
	return false;
};
FurnitureCore.placeRotatableBlock=function(block, model){
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
		}else if(look.x<-.75){
			World.setBlock(c.x, c.y, c.z,block,1);
		}else if(look.z>.75){
			World.setBlock(c.x, c.y, c.z,block,2);
		}else{
			World.setBlock(c.x, c.y, c.z,block,3);
		}
	};
	return f;
};
FurnitureCore.addEntityRender=function(idEntity, itemId,scenario, models,furnitureObj){
	Block.registerDropFunction(idEntity, function(coords, id, data, diggingLevel, toolLevel){
		var c = coords;
		if(World.getTileEntity(c.x,c.y,c.z).id>0){
			var id=World.getTileEntity(c.x,c.y,c.z).id;
			var fDestroy=furnitureObj.finalDestroy||function(){};
			fDestroy(coords,id,data, diggingLevel, toolLevel);
			return [[id, 1, 0]];
		}else{
			return [];
		}
	});
	Item.registerUseFunction(id, function(coords, item, block){
		var r = coords.relative;
		World.setBlock(r.x,r.y,r.z,idEntity);
		World.addTileEntity(r.x,r.y,r.z);
		var tile = World.getTileEntity(r.x,r.y,r.z);
		tile.id=item.id;
		if(furnitureObj.preload)furnitureObj.preload(tile);
		tile.init(first);
	});
};
