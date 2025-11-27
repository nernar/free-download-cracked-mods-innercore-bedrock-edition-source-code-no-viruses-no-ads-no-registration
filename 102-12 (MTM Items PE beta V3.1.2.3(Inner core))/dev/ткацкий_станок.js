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