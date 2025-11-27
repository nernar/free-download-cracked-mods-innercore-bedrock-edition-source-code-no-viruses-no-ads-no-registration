IDRegistry.genBlockID("industrial_furnace");
Block.createBlockWithRotation("industrial_furnace", [{
    name: "Industrial furnace",
    texture: [
        ["industrieofen", 0],
        ["industrieofen", 0],
        ["industrieofen", 0],
        ["industrieofen_vorne_aus", 0],
        ["industrieofen_links", 0],
        ["industrieofen_rechts", 0]
    ],
    inCreative: true
},{
    name: "Industrial furnace",
    texture: [
        ["industrieofen", 0],
        ["industrieofen", 0],
        ["industrieofen", 0],
        ["industrieofen_vorne_an", 0],
        ["industrieofen_links", 0],
        ["industrieofen_rechts", 0]
    ],
    inCreative: false
}], iron_block_type);

Recipes.addShaped({id: BlockID.industrial_furnace, count: 1, data: 0},
	["tit", "fff", "iti"],
	['t', ItemID.tank_lack0, 0, 'i', 265, 0, 'f', VanillaBlockID.furnace, 0]
);

var indFurnaceUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Industrial Furnace (WIP)"
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
		{
type: "bitmap", 
x: 350, 
y: 80, 
bitmap: "ind_furnace_drawing", 
scale: 3
}
],
	
    elements: {
        slot1: {
            type: "slot",
            x: 357,
            y: 45,
            size: 52,
            bitmap: "ind_furnace_slot1"
        },
        slot2: {
            type: "slot",
            x: 432,
            y: 169,
            size: 52,
            bitmap: "ind_furnace_slot2"
        },
        slot3: {
            type: "slot",
            x: 519,
            y: 169,
            size: 52,
            bitmap: "ind_furnace_slot2"
        },
        slot4: {
            type: "slot",
            x: 606,
            y: 169,
            size: 52,
            bitmap: "ind_furnace_slot2"
        },
        slot5: {
            type: "slot",
            x: 788,
            y: 150,
            size: 52,
            bitmap: "ind_furnace_slot3"
        },
        slot6: {
            type: "slot",
            x: 788,
            y: 202,
            size: 52,
            bitmap: "ind_furnace_slot3"
        },
        slot7: {
            type: "slot",
            x: 788,
            y: 254,
            size: 52,
            bitmap: "ind_furnace_slot3"
        },
        slot8: {
            type: "slot",
            x: 680,
            y: 261,
            size: 52,
            bitmap: "ind_furnace_slot3"
        },
        scale1: {
            type: "scale",
            bitmap: "ind_furnace_scale1",
            direction: 1,
            x: 355,
            y: 110,
            scale: 3
        },
        scale2: {
            type: "scale",
            bitmap: "ind_furnace_scale2",
            direction: 1,
            x: 446,
            y: 242,
            scale: 3
        },
        scale3: {
            type: "scale",
            bitmap: "ind_furnace_scale2",
            direction: 1,
            x: 533,
            y: 242,
            scale: 3
        },
        scale4: {
            type: "scale",
            bitmap: "ind_furnace_scale2",
            direction: 1,
            x: 620,
            y: 242,
            scale: 3
        },
        scale5: {
            type: "scale",
            bitmap: "ind_furnace_scale3",
            direction: 0,
            x: 674,
            y: 148,
            scale: 3
        },
/*coordsButton1: { 
type: "button", 
x: 300, 
y: 290, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].x -= 1; 
alert(JSON.stringify("x: "+content.elements["slot1"].x)); 
}}},
coordsButton2: { 
type: "button", 
x: 400, 
y: 290, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].x += 1; 
alert(JSON.stringify("x: "+content.elements["slot1"].x)); 
}}},
coordsButton3: { 
type: "button", 
x: 350, 
y: 340, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].y += 1; 
alert(JSON.stringify("y: "+content.elements["slot1"].y)); 
}}},
coordsButton4: { 
type: "button", 
x: 350, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].y -= 1; 
alert(JSON.stringify("y "+content.elements["slot1"].y)); 
}}},
coordsButton5: { 
type: "button", 
x: 550, 
y: 340, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].size -= 1; 
alert(JSON.stringify("size: "+content.elements["slot1"].size)); 
}}},
coordsButton6: { 
type: "button", 
x: 550, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].size += 1; 
alert(JSON.stringify("size: "+content.elements["slot1"].size)); 
}}}*/
   }
});
/*
var recipes = {
items: [ItemID.crystal_retium_1, ItemID.crystal_bioterium_1, ItemID.crystal_alutin_1, ItemID.crystal_glowtite_1, ItemID.crystal_neon_1, ItemID.kupferbarren, BlockID.bauxit_erz, 263, 265],
ingot: [ItemID.zinkbarren, ItemID.zinnbarren],
sand: [BlockID.retium_granulat, BlockID.bioterium_granulat, BlockID.alutin_granulat, BlockID.glowtite_granulat, BlockID.neon_granulat, 12]
}*/

var recipes = {
items: [ItemID.crystal_retium_1, ItemID.crystal_bioterium_1, ItemID.crystal_alutin_1, ItemID.crystal_glowtite_1, ItemID.crystal_neon_1, ItemID.kupferbarren, BlockID.bauxit_erz, 263, 265],
ingot: [ItemID.zinkbarren, ItemID.zinnbarren],
sand: [BlockID.retium_granulat, BlockID.bioterium_granulat, BlockID.alutin_granulat, BlockID.glowtite_granulat, BlockID.neon_granulat, 12,
ModAPI.addAPICallback("SpacesAPI", function(api){BlockID.vic_a1_sand, BlockID.vic_tantros_sand})]
}

MachineRecipeRegistry.registerRecipesFor("ind_furnace", {
  "ItemID.crystal_retium_1": {status: "r"},
  "ItemID.crystal_bioterium_1": {status: "b"},
  "ItemID.crystal_alutin_1": {status: "a"},
  "ItemID.crystal_glowtite_1": {status: "g"},
  "ItemID.crystal_neon_1": {status: "n"},
  "ItemID.kupferbarren": {status: "k"},
  "BlockID.bauxit_erz": {status: "e"},
  263: {status: "c"},
  265: {status: "i"},
  12: {status: "s"},
  264: {status: "z"}}, true);
let gear = {
  "scs": {status: "result", result: ItemID.silizium, count: 2},
  "css": {status: "result", result: ItemID.silizium, count: 2},
  "ssc": {status: "result", result: ItemID.silizium, count: 2},
  "rrc": {status: "result", result: ItemID.retium_ingot, count: 1},
  "rcr": {status: "result", result: ItemID.retium_ingot, count: 1},
  "crr": {status: "result", result: ItemID.retium_ingot, count: 1},
  "bbc": {status: "result", result: ItemID.bioterium_ingot, count: 1},
  "bcb": {status: "result", result: ItemID.bioterium_ingot, count: 1},
  "cbb": {status: "result", result: ItemID.bioterium_ingot, count: 1},
  "aac": {status: "result", result: ItemID.aluminiumplatten, count: 1},
  "aca": {status: "result", result: ItemID.aluminiumplatten, count: 1},
  "caa": {status: "result", result: ItemID.aluminiumplatten, count: 1},
  "ggc": {status: "result", result: ItemID.glowtit_ingot, count: 1},
  "gcg": {status: "result", result: ItemID.glowtit_ingot, count: 1},
  "cgg": {status: "result", result: ItemID.glowtit_ingot, count: 1},
  "nnc": {status: "result", result: ItemID.neon_ingot, count: 1},
  "ncn": {status: "result", result: ItemID.neon_ingot, count: 1},
  "cnn": {status: "result", result: ItemID.neon_ingot, count: 1},
  "kiz": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "zki": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "izk": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "kzi": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "ikz": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "zik": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "ee": {status: "result", result: ItemID.aluminiumplatten, count: 1},
}

TileEntity.registerPrototype(BlockID.industrial_furnace, {
	client: {
  containerEvents: {
   setSlot(container, window, content, data){
    if(content)
     content.elements[data.name].bitmap = data.texture;
   }
  }
 },
 containerEvents: {
  click(container, window, content, data) {
    this.data.click = this.data.click + 1;
  }
 },
   useNetworkItemContainer: true,
   defaultValues: {
      lava: 0,
      progress: 0,
      s1: 0,
      s2: 0,
      s3: 0,
      solid: 0,
      res: 0,
      cous: 0,
      sdata: 0
   },

   tick: function() {
    var slot2 = this.container.getSlot("slot2");
    var slot3 = this.container.getSlot("slot3");
    var slot4 = this.container.getSlot("slot4");
    var item2 = slot2.id||0;
    var item3 = slot3.id||0;
    var item4 = slot4.id||0;
    if(this.data.lava >= 10) {
     for(i in recipes.items) {
      if(item2 == recipes.items[i]) {
       this.data.s1++;
       var result1 = MachineRecipeRegistry.getRecipeResult("ind_furnace", item2);
      }
      if(item3 == recipes.items[i]) {
       this.data.s2++;
       var result2 = MachineRecipeRegistry.getRecipeResult("ind_furnace", item3);
      }
      if(item4 == recipes.items[i]) {
       this.data.s3++;
       var result3 = MachineRecipeRegistry.getRecipeResult("ind_furnace", item4);
      }
     }
     for(l in recipes.sand) {
      if(item2 == recipes.sand[l]) {
       this.data.s1++;
       var result1 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 12);
      }
      if(item3 == recipes.sand[l]) {
       this.data.s2++;
       var result2 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 12);
      }
      if(item4 == recipes.sand[l]) {
       this.data.s3++;
       var result3 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 12);
      }
     }
     for(m in recipes.ingot) {
      if(item2 == recipes.ingot[m]) {
       this.data.s1++;
       var result1 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 264);
      }
      if(item3 == recipes.ingot[m]) {
       this.data.s2++;
       var result2 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 264);
      }
      if(item4 == recipes.ingot[m]) {
       this.data.s3++;
       var result3 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 264);
      }
     }
     if((result1 || {}).status || 0) {
      var r1 = result1.status
     } else {
      var r1 = 0;
     }
     if((result2 || {}).status || 0) {
      var r2 = result2.status
     } else {
      var r2 = 0;
     }
     if((result3 || {}).status || 0) {
      var r3 = result3.status
     } else {
      var r3 = 0;
     }
     if(r1==0) {
      var lol = gear[r2+r3]||0;
     }
     if(r2==0) {
      var lol = gear[r1+r3]||0;
     }
     if(r3==0) {
      var lol = gear[r1+r2]||0;
     }
     if(r1 != 0 && r2 != 0 && r3 != 0) {
      var lol = gear[""+r1+r2+r3]||0;
     }
     this.data.cous = (lol || {}).count||0;
     this.data.res = (lol || {}).result||0;
    }
    this.container.setScale("scale5", this.data.progress/400);
    this.container.setScale("scale2", this.data.s1/1);
    this.container.setScale("scale3", this.data.s2/1);
    this.container.setScale("scale4", this.data.s3/1);
    if(slot2.count == 0) {
     this.data.s1 = 0;
    }
    if(slot3.count == 0) {
     this.data.s2 = 0;
    }
    if(slot4.count == 0) {
     this.data.s3 = 0;
    }
    if(this.container.getSlot("slot1").id == 843 && this.data.lava <= 2000) {
     this.container.setSlot("slot1", 325, 1, 0);
     this.data.lava += 1000;
    }
    this.container.setScale("scale1", this.data.lava/3000);
    var slot5 = this.container.getSlot("slot5");
    var slot6 = this.container.getSlot("slot6");
    var slot7 = this.container.getSlot("slot7");
    if(this.data.res != 0 && slot5.count <= 64-this.data.cous && slot6.count <= 64-this.data.cous && slot7.count <= 64-this.data.cous) {
     this.data.progress++;
     if(this.data.progress >= 400) {
      this.data.progress = 0;
      this.data.lava -= 10;
      this.container.setSlot("slot2", slot2.id, slot2.count-1, 0);
      this.container.setSlot("slot3", slot3.id, slot3.count-1, 0);
      this.container.setSlot("slot4", slot4.id, slot4.count-1, 0);
      if((slot5.id == this.data.res || slot5.id == 0) && slot5.count <= 64-this.data.cous) {
       if(slot5.id) {
        this.container.setSlot("slot5", slot5.id, slot5.count+this.data.cous, 0);
       } else {
        this.container.setSlot("slot5", this.data.res, this.data.cous, 0);
       }
      } else if((slot6.id == this.data.res || slot6.id == 0) && slot6.count <= 64-this.data.cous) {
       if(slot6.id) {
        this.container.setSlot("slot6", slot6.id, slot6.count+this.data.cous, 0);
       } else {
        this.container.setSlot("slot6", this.data.res, this.data.cous, 0);
       }
      } else if((slot7.id == this.data.res || slot7.id == 0) && slot7.count <= 64-this.data.cous) {
       if(slot7.id) {
        this.container.setSlot("slot7", slot7.id, slot7.count+this.data.cous, 0);
       } else {
        this.container.setSlot("slot7", this.data.res, this.data.cous, 0);
       }
      }
     }
    }
    if(this.data.progress > 0 && this.data.sdata == 0) {
     this.data.sdata = 1;
     this.blockSource.setBlock(this.x, this.y, this.z, BlockID.industrial_furnace, this.blockSource.getBlockData(this.x, this.y, this.z)+4);
    } else if(this.data.sdata == 1 && this.data.progress == 0) {
     this.data.sdata = 0;
     this.blockSource.setBlock(this.x, this.y, this.z, BlockID.industrial_furnace, this.blockSource.getBlockData(this.x, this.y, this.z)-4);
    }
    if(this.data.lava >= 1000) {
     this.data.solid++
     if(this.data.solid >= 25600) {
      this.data.lava -= 1000
      var slot8 = this.container.getSlot("slot8");
      this.container.setSlot("slot8", 49, (slot8||{count: 0}).count, 0);
     }
    } else {
     this.data.solid = 0;
    }
    this.container.validateAll();
    this.container.sendChanges();
/*
 	geoMode(container, window, content, data){
			this.data.geo = (this.data.geo + 1) % 2;
		},
container.sendEvent("bioMode", {});
      this.container.sendChanges();
      var slot1 = this.container.getSlot("slot1");
      var recipe1 = MachineRecipeRegistry.hasRecipeFor("part_press", item1);
      if(recipe1) {
         var result2 = MachineRecipeRegistry.getRecipeResult("part_press", 123);
      this.container.setSlot("slot4", 123, 7, 0);
      this.container.validateAll();
*/
   },

   getScreenName(){
return "main";
},
   getScreenByName(){
return indFurnaceUI;
},
});
