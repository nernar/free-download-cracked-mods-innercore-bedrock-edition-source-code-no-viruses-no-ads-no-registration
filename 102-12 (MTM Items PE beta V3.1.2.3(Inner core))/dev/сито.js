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