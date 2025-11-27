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
