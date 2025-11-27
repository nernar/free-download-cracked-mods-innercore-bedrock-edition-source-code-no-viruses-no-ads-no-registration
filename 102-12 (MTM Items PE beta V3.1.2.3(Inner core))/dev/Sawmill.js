var BLOCK_TYPE_WOOD = Block.createSpecialType({
	base: 5,
	destroytime: 2,
	opaque: true
});

function createLeso(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
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
World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
});
}

createLeso("lesopa","la","stone",0, "лесопилка из дуба", ItemID.lesopa, BlockID.lesopa,0);
createLeso("lesop","lc","stone",0, "лесопилка из сосны", ItemID.lesop, BlockID.lesop,0);
createLeso("leso","ld","stone",0, "лесопилка из берёзы", ItemID.leso, BlockID.leso,0);
createLeso("les","ltd","stone",0, "лесопилка из тропического дерева", ItemID.les, BlockID.les,0)
createLeso("le","lo","stone",0, "лесопилка из акации", ItemID.le, BlockID.le,0);
createLeso("l","lte","stone",0, "лесопилка из тёмного дуба", ItemID.l, BlockID.l,0);


function createJRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (1/32, 0, 1/32, 31/32, 4/16, 31/32,  idMaterial, dataMaterial);
model.addBox (1/16, 4/16, 15/16, 15/16, 31/32, 31/32,  idMaterial, dataMaterial);
model.addBox (1/16, 4/16, 1/32, 15/16, 31/32, 1/16,  idMaterial, dataMaterial);
model.addBox (15/16, 4/16, 1/32, 31/32, 29/32, 31/32,  idMaterial, dataMaterial);
model.addBox (1/32, 4/16, 1/32, 1/16, 29/32, 31/32,  idMaterial, dataMaterial);
model.addBox (15/16, 29/32, 1/32, 31/32, 15/16, 3/16,  idMaterial, dataMaterial);
model.addBox (1/32, 29/32, 1/32, 1/16, 15/16, 3/16,  idMaterial, dataMaterial);
model.addBox (15/16, 29/32, 13/16, 31/32, 15/16, 31/32,  idMaterial, dataMaterial);
model.addBox (1/32, 29/32, 13/16, 1/16, 15/16, 31/32,  idMaterial, dataMaterial);
model.addBox (1/16, 4/16, 1/16, 15/16, 6/16, 15/16,  4,0);
model.addBox (1/16, 4/16, 12/16, 15/16, 14/16, 15/16,  4,0);
model.addBox (1/16, 4/16, 1/16, 15/16, 14/16, 4/16,  4,0);
model.addBox (1/16, 4/16, 27/32, 15/16, 29/32, 15/16,  4,0);
model.addBox (1/16, 4/16, 1/16, 15/16, 29/32, 5/32,  4,0);
model.addBox (1/16, 11/16, 4/16, 15/16, 13/16, 12/16,  96,0);
model.addBox (1/16, 12/16, 11/16, 15/16, 205/256, 12/16,  4,0);
model.addBox (1/16, 12/16, 4/16, 15/16, 205/256, 5/16,  4,0);
model.addBox (15/16, 0, 0, 1, 27/32, 1/16,  idMaterial, dataMaterial);
model.addBox (0, 0, 0, 1/16, 27/32, 1/16,  idMaterial, dataMaterial);
model.addBox (15/16, 0, 15/16, 1, 27/32, 1,  idMaterial, dataMaterial);
model.addBox (0, 0, 15/16, 1/16, 27/32, 1,  idMaterial, dataMaterial);
model.addBox (0, 0, 1/16, 1/32, 1/16, 15/16,  idMaterial, dataMaterial);
model.addBox (1/64, 4/16, 1/16, 1/32, 5/16, 15/16,  idMaterial, dataMaterial);
model.addBox (1/64, 8/16, 1/16, 1/32, 9/16, 15/16,  idMaterial, dataMaterial);
model.addBox (0, 12/16, 1/16, 1/32, 13/16, 15/16,  idMaterial, dataMaterial);
model.addBox (31/32, 0, 1/16, 1, 1/16, 15/16,  idMaterial, dataMaterial);
model.addBox (31/32, 4/16, 1/16, 63/64, 5/16, 15/16,  idMaterial, dataMaterial);
model.addBox (31/32, 8/16, 1/16, 63/64, 9/16, 15/16,  idMaterial, dataMaterial);
model.addBox (31/32, 12/16, 1/16, 1, 13/16, 15/16,  idMaterial, dataMaterial);
model.addBox (1/16, 0, 31/32, 15/16, 1/16, 1,  idMaterial, dataMaterial);
model.addBox (1/16, 4/16, 31/32, 15/16, 5/16, 63/64,  idMaterial, dataMaterial);
model.addBox (1/16, 8/16, 31/32, 15/16, 9/16, 63/64,  idMaterial, dataMaterial);
model.addBox (1/16, 12/16, 31/32, 15/16, 13/16, 1,  idMaterial, dataMaterial);
model.addBox (1/16, 0, 0, 15/16, 1/16, 1/32,  idMaterial, dataMaterial);
model.addBox (1/16, 4/16, 1/64, 15/16, 5/16, 1/32,  idMaterial, dataMaterial);
model.addBox (1/16, 8/16, 1/64, 15/16, 9/16, 1/32,  idMaterial, dataMaterial);
model.addBox (1/16, 12/16, 0, 15/16, 13/16, 1/32,  idMaterial, dataMaterial);
render.addEntry(model);
}


createJRender(BlockID.lesopa, 5, 0);
createJRender(BlockID.lesop, 5, 1);
createJRender(BlockID.leso, 5, 2);
createJRender(BlockID.les, 5, 3);
createJRender(BlockID.le, 5, 4);
createJRender(BlockID.l, 5, 5);


var guiJ = new UI.StandartWindow({
	standart: {
		header: {text: {text: "лесопилка(sawmill)"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 150, bitmap: "furnace_bar_backgroun", scale: 3.2},
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 150, direction: 0, value: 0.5, bitmap: "распиливание", scale: 3.2},
		"slotSource": {type: "slot", x: 460, y: 146},
		"slotJ0": {type: "slot", x: 610, y: 86},
		"slotJ1": {type: "slot", x: 610, y: 146},
		"slotJ2": {type: "slot", x: 610, y: 206},

	}
});

TileEntity.registerPrototype(BlockID.lesopa, {
	defaultValues: {
		size: 0,
		progress: 0
	},
	
	getGuiScreen: function(){
		return guiJ;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .3, this.y+.86, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .7, this.y+.83, this.z + .5);
		this.animation1.describeItem({
			id: 275,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .5
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: 318,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .3
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
tick:function(){
var JId = this.container.getSlot("slotSource");
var JJ0 = this.container.getSlot("slotJ0");
var JJ1 = this.container.getSlot("slotJ1");
var JJ2 = this.container.getSlot("slotJ2");
		if(JJ2.count >=0)
{
if(JId.id == 158)
{
		if(JJ2.count <=62)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
JJ2.count++;
}
}
		}
		if(JJ2.count >= 64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
		if(JJ2.count == 63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
	}
if(JId.id == 5)
{
		if(JJ1.count <= 62 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ1.count >= 63 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count >= 63 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count <= 62 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
if(JId.id == 17)
{
		if(JJ0.count <= 58 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ0.count >= 59 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count >= 59 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count <= 58 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
}
		else {
			this.data.progress = 0;
		}
		this.container.setScale("progressScale", this.data.progress / 50);
}
});
TileEntity.registerPrototype(BlockID.lesop, {
	defaultValues: {
		size: 0,
		progress: 0
	},
	
	getGuiScreen: function(){
		return guiJ;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .3, this.y+.86, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .7, this.y+.83, this.z + .5);
		this.animation1.describeItem({
			id: 275,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .5
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: 318,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .3
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
tick:function(){
var JId = this.container.getSlot("slotSource");
var JJ0 = this.container.getSlot("slotJ0");
var JJ1 = this.container.getSlot("slotJ1");
var JJ2 = this.container.getSlot("slotJ2");
		if(JJ2.count >=0)
{
if(JId.id == 158)
{
		if(JJ2.count <=62)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
JJ2.count++;
}
}
		}
		if(JJ2.count >= 64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
		if(JJ2.count == 63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
	}
if(JId.id == 5)
{
		if(JJ1.count <= 62 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ1.count >= 63 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count >= 63 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count <= 62 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
if(JId.id == 17)
{
		if(JJ0.count <= 58 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ0.count >= 59 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count >= 59 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count <= 58 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
}
		else {
			this.data.progress = 0;
		}
		this.container.setScale("progressScale", this.data.progress / 50);
}
});

TileEntity.registerPrototype(BlockID.leso, {
	defaultValues: {
		size: 0,
		progress: 0
	},
	
	getGuiScreen: function(){
		return guiJ;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .3, this.y+.86, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .7, this.y+.83, this.z + .5);
		this.animation1.describeItem({
			id: 275,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .5
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: 318,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .3
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
tick:function(){
var JId = this.container.getSlot("slotSource");
var JJ0 = this.container.getSlot("slotJ0");
var JJ1 = this.container.getSlot("slotJ1");
var JJ2 = this.container.getSlot("slotJ2");
		if(JJ2.count >=0)
{
if(JId.id == 158)
{
		if(JJ2.count <=62)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
JJ2.count++;
}
}
		}
		if(JJ2.count >= 64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
		if(JJ2.count == 63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
	}
if(JId.id == 5)
{
		if(JJ1.count <= 62 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ1.count >= 63 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count >= 63 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count <= 62 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
if(JId.id == 17)
{
		if(JJ0.count <= 58 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ0.count >= 59 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count >= 59 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count <= 58 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
}
		else {
			this.data.progress = 0;
		}
		this.container.setScale("progressScale", this.data.progress / 50);
}
});

TileEntity.registerPrototype(BlockID.les, {
	defaultValues: {
		size: 0,
		progress: 0
	},
	
	getGuiScreen: function(){
		return guiJ;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .3, this.y+.86, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .7, this.y+.83, this.z + .5);
		this.animation1.describeItem({
			id: 275,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .5
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: 318,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .3
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
tick:function(){
var JId = this.container.getSlot("slotSource");
var JJ0 = this.container.getSlot("slotJ0");
var JJ1 = this.container.getSlot("slotJ1");
var JJ2 = this.container.getSlot("slotJ2");
		if(JJ2.count >=0)
{
if(JId.id == 158)
{
		if(JJ2.count <=62)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
JJ2.count++;
}
}
		}
		if(JJ2.count >= 64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
		if(JJ2.count == 63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
	}
if(JId.id == 5)
{
		if(JJ1.count <= 62 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ1.count >= 63 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count >= 63 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count <= 62 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
if(JId.id == 17)
{
		if(JJ0.count <= 58 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ0.count >= 59 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count >= 59 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count <= 58 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
}
		else {
			this.data.progress = 0;
		}
		this.container.setScale("progressScale", this.data.progress / 50);
}
});

TileEntity.registerPrototype(BlockID.le, {
	defaultValues: {
		size: 0,
		progress: 0
	},
	
	getGuiScreen: function(){
		return guiJ;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .3, this.y+.86, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .7, this.y+.83, this.z + .5);
		this.animation1.describeItem({
			id: 275,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .5
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: 318,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .3
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
tick:function(){
var JId = this.container.getSlot("slotSource");
var JJ0 = this.container.getSlot("slotJ0");
var JJ1 = this.container.getSlot("slotJ1");
var JJ2 = this.container.getSlot("slotJ2");
		if(JJ2.count >=0)
{
if(JId.id == 158)
{
		if(JJ2.count <=62)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
JJ2.count++;
}
}
		}
		if(JJ2.count >= 64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
		if(JJ2.count == 63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
	}
if(JId.id == 5)
{
		if(JJ1.count <= 62 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ1.count >= 63 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count >= 63 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count <= 62 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
if(JId.id == 17)
{
		if(JJ0.count <= 58 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ0.count >= 59 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count >= 59 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count <= 58 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
}
		else {
			this.data.progress = 0;
		}
		this.container.setScale("progressScale", this.data.progress / 50);
}
});

TileEntity.registerPrototype(BlockID.l, {
	defaultValues: {
		size: 0,
		progress: 0
	},
	
	getGuiScreen: function(){
		return guiJ;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .3, this.y+.86, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .7, this.y+.83, this.z + .5);
		this.animation1.describeItem({
			id: 275,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .5
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: 318,
			count: 1,
			data: 0,
			rotation:[3.14/2, 0, 0],
			size: .3
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
tick:function(){
var JId = this.container.getSlot("slotSource");
var JJ0 = this.container.getSlot("slotJ0");
var JJ1 = this.container.getSlot("slotJ1");
var JJ2 = this.container.getSlot("slotJ2");
		if(JJ2.count >=0)
{
if(JId.id == 158)
{
		if(JJ2.count <=62)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
JJ2.count++;
}
}
		}
		if(JJ2.count >= 64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
		if(JJ2.count == 63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
this.container.validateAll();
this.data.progress = 0;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
}
		}
	}
if(JId.id == 5)
{
		if(JJ1.count <= 62 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ1.count >= 63 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count >= 63 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ1.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ1.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 1, JId.data);
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ1.count <= 62 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ1.data)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JJ1.id == 0)
{
this.container.setSlot("slotJ1", 158, 0+JJ1.count, JId.data)
JJ1.count++;
JJ1.count++;
}
if(JId.data !== JJ1.data && JJ1.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 158, 2, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
if(JId.id == 17)
{
		if(JJ0.count <= 58 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
			}		
		}
		if(JJ0.count >= 59 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count >= 59 && JJ2.count <=63)
		{
if(this.data.progress++ >= 50)
{
		if(JJ0.count >= 64)
{
			
JId.count--;
if(Math.random() < .33){
this.container.setSlot("slotJ2", 280, 0+JJ2.count, 0)
JJ2.count++;
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 63)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 4, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 62)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 3, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 61)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 2, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 60)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
		if(JJ0.count == 59)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
		if(JJ0.count <= 58 && JJ2.count >=64)
		{
if(this.data.progress++ >= 50)
{
			
JId.count--;
if(Math.random() < .33){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 280, 1, 0);
}
if(JId.data == JJ0.data)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JJ0.id == 0)
{
this.container.setSlot("slotJ0", 5, 0+JJ0.count, JId.data)
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
JJ0.count++;
if(Math.random() < .5){
JJ0.count++;
}
}
if(JId.data !== JJ0.data && JJ0.id !== 0)
{
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 5, JId.data);
if(Math.random() < .5){
World.drop(this.x+0.5, this.y+0.5+0.5, this.z+0.5, 5, 1, JId.data);
}
}
this.container.validateAll();
this.data.progress = 0;
}
}
}
}
		else {
			this.data.progress = 0;
		}
		this.container.setScale("progressScale", this.data.progress / 50);
}
});



Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.lesopa, count: 1, data: 0}, [
        "eaf",
        "dcd",
        "aba"
    ], ['a', 280, 0, 'b', 5, 0, 'c', 96, 0, 'd', 4, 0, 'e', 275, 0, 'f', 318, 0]);
    Recipes.addShaped({id: ItemID.lesop, count: 1, data: 0}, [
        "eaf",
        "dcd",
        "aba"
    ], ['a', 280, 0, 'b', 5, 1, 'c', 96, 0, 'd', 4, 0, 'e', 275, 0, 'f', 318, 0]);
    Recipes.addShaped({id: ItemID.leso, count: 1, data: 0}, [
        "eaf",
        "dcd",
        "aba"
    ], ['a', 280, 0, 'b', 5, 2, 'c', 96, 0, 'd', 4, 0, 'e', 275, 0, 'f', 318, 0]);
    Recipes.addShaped({id: ItemID.les, count: 1, data: 0}, [
        "eaf",
        "dcd",
        "aba"
    ], ['a', 280, 0, 'b', 5, 3, 'c', 96, 0, 'd', 4, 0, 'e', 275, 0, 'f', 318, 0]);
    Recipes.addShaped({id: ItemID.le, count: 1, data: 0}, [
        "eaf",
        "dcd",
        "aba"
    ], ['a', 280, 0, 'b', 5, 4, 'c', 96, 0, 'd', 4, 0, 'e', 275, 0, 'f', 318, 0]);
    Recipes.addShaped({id: ItemID.l, count: 1, data: 0}, [
        "eaf",
        "dcd",
        "aba"
    ], ['a', 280, 0, 'b', 5, 5, 'c', 96, 0, 'd', 4, 0, 'e', 275, 0, 'f', 318, 0]);
});


Block.setBlockShape(BlockID.lesopa, {x: 0, y: 0, z: 0}, {x: 1, y: 15/16, z: 1})
Block.setBlockShape(BlockID.lesop, {x: 0, y: 0, z: 0}, {x: 1, y: 15/16, z: 1})
Block.setBlockShape(BlockID.leso, {x: 0, y: 0, z: 0}, {x: 1, y: 15/16, z: 1})
Block.setBlockShape(BlockID.les, {x: 0, y: 0, z: 0}, {x: 1, y: 15/16, z: 1})
Block.setBlockShape(BlockID.le, {x: 0, y: 0, z: 0}, {x: 1, y: 15/16, z: 1})
Block.setBlockShape(BlockID.l, {x: 0, y: 0, z: 0}, {x: 1, y: 15/16, z: 1})


Translation.addTranslation("лесопилка из дуба", {en: "sawmill from oak"});
Translation.addTranslation("лесопилка из сосны", {en: "sawmill from pine"});
Translation.addTranslation("лесопилка из берёзы", {en: "sawmill from birch"});
Translation.addTranslation("лесопилка из акации", {en: "sawmill from acacia"});
Translation.addTranslation("лесопилка из тропического дерева", {en: "sawmill from tropical wood"});
Translation.addTranslation("лесопилка из тёмного дуба", {en: "sawmill from dark oak"});


Item.registerUseFunction(ItemID.lesopa, function(coords, item, block){
World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.lesopa);
Player.decreaseCarriedItem (1)
});

Item.registerUseFunction(ItemID.lesop, function(coords, item, block){
World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.lesop);
Player.decreaseCarriedItem (1)
});

Item.registerUseFunction(ItemID.leso, function(coords, item, block){
World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.leso);
Player.decreaseCarriedItem (1)
});

Item.registerUseFunction(ItemID.les, function(coords, item, block){
World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.les);
Player.decreaseCarriedItem (1)
});

Item.registerUseFunction(ItemID.le, function(coords, item, block){
World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.le);
Player.decreaseCarriedItem (1)
});

Item.registerUseFunction(ItemID.l, function(coords, item, block){
World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.l);
Player.decreaseCarriedItem (1)
});

Recipes.addFurnaceFuel(ItemID.lesopa, 0, 200);
Recipes.addFurnaceFuel(ItemID.lesop, 0, 200);
Recipes.addFurnaceFuel(ItemID.leso, 0, 200);
Recipes.addFurnaceFuel(ItemID.les, 0, 200);
Recipes.addFurnaceFuel(ItemID.le, 0, 200);
Recipes.addFurnaceFuel(ItemID.l, 0, 200);

ToolAPI.registerBlockMaterial(BlockID.lesopa, "wood");
ToolAPI.registerBlockMaterial(BlockID.lesop, "wood");
ToolAPI.registerBlockMaterial(BlockID.leso, "wood");
ToolAPI.registerBlockMaterial(BlockID.les, "wood");
ToolAPI.registerBlockMaterial(BlockID.le, "wood");
ToolAPI.registerBlockMaterial(BlockID.l, "wood");