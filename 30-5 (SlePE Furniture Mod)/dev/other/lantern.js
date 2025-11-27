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
