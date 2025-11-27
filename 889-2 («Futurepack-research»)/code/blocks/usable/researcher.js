IDRegistry.genBlockID("researcher");
let mcolors = ["w","g","r","s","b","e","o","y","m","n","c","l","u","p","a","i"];
let researchers = [];
for(i in colors) {
 researchers.push({
  name: "Researcher",
  texture: [
   ["color_iron_"+colors[i], 0],
   ["forschertop_"+mcolors[i], 0],
   ["forscherhinten_"+mcolors[i], 0],
   ["forscherfront_"+mcolors[i], 0],
   ["color_iron_"+colors[i], 0],
   ["color_iron_"+colors[i], 0]
  ],
  inCreative: true
  })
}

Block.createBlockWithRotation("researcher", researchers, iron_block_type);

let xrys = [ItemID.crystal_retium_1, ItemID.crystal_bioterium_1, ItemID.crystal_alutin_1, ItemID.crystal_glowtite_1, ItemID.crystal_neon_1]

for(s in colors) {
 for(m in xrys) {
  Recipes.addShaped({id: BlockID.researcher, count: 1, data: s*4},
	["ckc", "pbi", "zez"],
	['p', VanillaItemID.paper, 0, 'k', 102, 0, 'c', xrys[m], 0, 'b', BlockID[colors[s]+"_iron_block"], 0, 'i', VanillaBlockID.piston, -1, 'z', ItemID.zinkbarren, 0, 'e', ItemID.eisenteile, 0])
}}
var researcherUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Researcher"
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
y: 30, 
bitmap: "researcher_gui", 
scale: 3
}
],
	
    elements: {
        slot1: {
            type: "slot",
            x: 355,
            y: 93,
            size: 66,
            bitmap: "researcher_slot1_0"
        },
        slot2: {
            type: "slot",
            x: 440,
            y: 93,
            size: 66,
            bitmap: "researcher_slot1_0"
        },
        slot3: {
            type: "slot",
            x: 524,
            y: 93,
            size: 66,
            bitmap: "researcher_slot1_0"
        },
        slot4: {
            type: "slot",
            x: 609,
            y: 93,
            size: 66,
            bitmap: "researcher_slot1_0"
        },

        slot5: {
            type: "slot",
            x: 727,
            y: 105,
            size: 55,
            bitmap: "researcher_slot2_0"
        },
        button1: {
            type: "slot",
            x: 689,
            y: 198,
            size: 141,
            bitmap: "researcher_button1_0",
            clicker: {
                onClick: function(pos,container,tile,window,canvas,scale) {
                    container.sendEvent("click", {});
                }
            }
        },
        button2: {
            type: "slot",
            x: 721,
            y: 35,
            size: 56,
            bitmap: "researcher_button2_0",
            clicker: {
                onClick: function(pos,container,tile,window,canvas,scale) {
                    //container.sendEvent("click", {});
                }
            }
        },
        button3: {
            type: "slot",
            x: 777,
            y: 35,
            size: 56,
            bitmap: "researcher_button3_0",
            clicker: {
                onClick: function(pos,container,tile,window,canvas,scale) {
                    //container.sendEvent("click", {});
                }
            }
        },
        scale1: {
            type: "scale",
            bitmap: "researcher_scale1",
            direction: 1,
            x: 376,
            y: 162,
            scale: 3
        },
        scale2: {
            type: "scale",
            bitmap: "researcher_scale2",
            direction: 1,
            x: 460,
            y: 162,
            scale: 3
        },
        scale3: {
            type: "scale",
            bitmap: "researcher_scale3",
            direction: 1,
            x: 544,
            y: 162,
            scale: 3
        },
        scale4: {
            type: "scale",
            bitmap: "researcher_scale4",
            direction: 1,
            x: 629,
            y: 162,
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
content.elements["scale1"].x -= 1; 
alert(JSON.stringify("x: "+content.elements["scale1"].x)); 
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
content.elements["scale1"].x += 1; 
alert(JSON.stringify("x: "+content.elements["scale1"].x)); 
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
content.elements["scale1"].y += 1; 
alert(JSON.stringify("y: "+content.elements["scale1"].y)); 
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
content.elements["scale1"].y -= 1; 
alert(JSON.stringify("y "+content.elements["scale1"].y)); 
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
content.elements["scale1"].size -= 1; 
alert(JSON.stringify("size: "+content.elements["scale1"].size)); 
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
content.elements["scale1"].size += 1; 
alert(JSON.stringify("size: "+content.elements["scale1"].size)); 
}}}*/
   }
});

IDRegistry.genItemID("research_blueprint");
IDRegistry.genItemID("research_blueprint_1");
Item.createItem("research_blueprint", "Reaserch blueprint", {name: "blueprint_research", meta: 0}, {isTech: false, stack: 64});
Item.createItem("research_blueprint_1", "Reaserch blueprint", {name: "crystal_blueprint_research", meta: 1}, {isTech: false, stack: 64});

let blueprints = {
1: ItemID.research_blueprint_1
}

/*for(var a = 1; a < 11; a++) {
 var s = a
 Item.createItem("research_blueprint", "Reaserch blueprint", {name: "crystal_blueprint_research", meta: s}, {isTech: false, stack: 64});
}
*/
MachineRecipeRegistry.registerRecipesFor("researcher", {
  1: {item1: 61, count1: 3, time: 150, ResultFunction: function(){
alert("industrial furnace researched");
}}
 }, true);

TileEntity.registerPrototype(BlockID.researcher, {
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
      msp: 0,
      mxp: 0,
      mft: 0,
      mt: 0,
      sp: 0,
      xp: 0,
      ft: 0,
      t: 0,
      click: 0,
      i1: 0,
      i2: 0,
      i3: 0,
      i4: 0,
      res: 0
   },

   tick: function() {
     if(this.data.click == 1) {
       this.data.click == 0;
       var item5 = this.container.getSlot("slot5").id;
       for(var m = 1; m < 10; m++) {
         if(item5 == blueprints[m]) {
           this.container.setSlot("slot5", 0, 0, 0);
           this.data.result = MachineRecipeRegistry.getRecipeResult("researcher", m);
           if(this.data.result.item1 > 0  && this.data.result.count1 > 0) {
             this.container.setSlot("slot1", this.data.result.item1, -1*this.data.result.count1, 0);
             this.data.i1 = true
           } else {
             alert("Error in RegisterRecipesFor. item1 and count1 required");
           }
           if(this.data.result.time > 0) {
             this.container.setScale("scale1", this.data.t/this.data.result.time);
             this.data.mt = this.data.result.time
           } else {
             alert("Error in RegisterRecipesFor. time required");
           }
           if(this.data.result.item2 > 0 && this.data.result.count2 > 0) {
             this.container.setSlot("slot2", this.data.result.item2, -1*this.data.result.count2, 0);
             this.data.i2 = true
           }
           if(this.data.result.energy) {
             this.container.setScale("scale2", this.data.ft/this.data.result.energy);
             this.data.mft = this.data.result.energy
           }
           if(this.data.result.item3 > 0 && this.data.result.count3 > 0) {
             this.container.setSlot("slot3", this.data.result.item3, -1*this.data.result.count3, 0);
             this.data.i3 = true
           }
           if(this.data.result.support) {
             this.container.setScale("scale3", this.data.sp/this.data.result.support);
             this.data.msp = this.data.result.support
           }
           if(this.data.result.item4 > 0 && this.data.result.count4 > 0) {
             this.container.setSlot("slot2", this.data.result.item4, -1*this.data.result.count4, 0);
             this.data.i4 = true
           }
           if(this.data.result.xp) {
             this.container.setScale("scale4", this.data.xp/this.data.result.xp);
             this.data.mxp = this.data.result.xp
           }
         }
       }
     }
     if(this.data.i1 == 1 && this.data.mt > 0 && this.container.getSlot("slot1").count >= 0) {
       this.data.t++;
       this.container.sendEvent("setSlot", {name: "slot1", texture: "researcher_slot1_0"});
       this.container.setScale("scale1", this.data.t/this.data.mt);
     } else {
       if(this.data.i4 == 1) {
         this.container.sendEvent("setSlot", {name: "slot1", texture: "researcher_slot1_1"});
       }
     }
     if(this.data.i2 == 1 && this.data.mft > 0 && this.container.getSlot("slot2").count >= 0) {
       this.data.ft++;
       this.container.sendEvent("setSlot", {name: "slot2", texture: "researcher_slot1_0"});
       this.container.setScale("scale2", this.data.ft/this.data.mft);
     } else {
       if(this.data.i2 == 1) {
         this.container.sendEvent("setSlot", {name: "slot2", texture: "researcher_slot1_1"});
       }
     }
     if(this.data.i3 == 1 && this.data.msp > 0 && this.container.getSlot("slot3").count >= 0) {
       this.data.sp++;
       this.container.sendEvent("setSlot", {name: "slot3", texture: "researcher_slot1_0"});
       this.container.setScale("scale3", this.data.sp/this.data.msp);
     } else {
       if(this.data.i3 == 1) {
         this.container.sendEvent("setSlot", {name: "slot3", texture: "researcher_slot1_1"});
       }
     }
     if(this.data.i4 == 1 && this.data.mxp > 0 && this.container.getSlot("slot4").count >= 0) {
       this.data.xp++;
       this.container.sendEvent("setSlot", {name: "slot4", texture: "researcher_slot1_0"});
       this.container.setScale("scale4", this.data.xp/this.data.mxp);
     } else {
       if(this.data.i4 == 1) {
         this.container.sendEvent("setSlot", {name: "slot4", texture: "researcher_slot1_1"});
       }
     }
     if(this.data.mxp <= this.data.xp && this.data.msp <= this.data.sp && this.data.mft <= this.data.ft && this.data.mt <= this.data.t && this.data.i1 == 1) {
       this.container.setScale("scale1", 0/1);
       this.container.setScale("scale2", 0/1);
       this.container.setScale("scale3", 0/1);
       this.container.setScale("scale4", 0/1);
       this.data.i1 = this.data.i2 = this.data.i3 = this.data.i4 = 0;
       this.data.mt = this.data.mft = this.data.msp = this.data.mxp = 0;
       this.data.t = this.data.ft = this.data.sp = this.data.xp = 0;
       this.data.result.ResultFunction();
       this.data.result = 0;
       this.container.validateAll();
     }
     this.container.sendChanges();
     
/*
 	geoMode(container, window, content, data){
			this.data.geo = (this.data.geo + 1) % 2;
		},
container.sendEvent("bioMode", {});
      this.container.sendChanges()
      var slot1 = this.container.getSlot("slot1");
      this.container.setScale("scale1", this.data.progress/200);
      var recipe1 = MachineRecipeRegistry.hasRecipeFor("part_press", item1);
      if(recipe1) {
         var result2 = MachineRecipeRegistry.getRecipeResult("part_press", 123);
      this.container.setSlot("slot4", 123, 7, 0);
      this.container.validateAll()
*/
   },

   getScreenName(){
return "main";
},
   getScreenByName(){
return researcherUI;
},
});
