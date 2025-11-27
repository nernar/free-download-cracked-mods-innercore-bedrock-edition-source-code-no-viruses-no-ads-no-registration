IDRegistry.genBlockID("part_press");
Block.createBlockWithRotation("part_press", [{
    name: "Part press",
    texture: [
        ["iron_block", 0],
        ["stanze_top", 0],
        ["stanze", 0],
        ["stanze", 0],
        ["stanze", 0],
        ["stanze", 0]
    ],
    inCreative: true
}], iron_block_type);

Recipes.addShaped({id: BlockID.part_press, count: 1, data: 0},
	["ipi", "iki", "ipi"],
	['i', 265, 0, 'k', VanillaBlockID.iron_bars, 0, 'p', VanillaBlockID.piston, -1]
);

var partPressUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Part Press"
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
x: 547, 
y: 160, 
bitmap: "press_scale_0", 
scale: 4
},
		{
type: "bitmap", 
x: 350, 
y: 160,
bitmap: "fire_scale_0",
scale: 4.5
}
],
	
    elements: {
        slot1: {
            type: "slot",
            x: 550,
            y: 90,
            size: 70
        },
        slot2: {
            type: "slot",
            x: 620,
            y: 90,
            size: 70
        },
        slot3: {
            type: "slot",
            x: 550,
            y: 255,
            size: 70
        },
        slot4: {
            type: "slot",
            x: 620,
            y: 255,
            size: 70
        },

        slot5: {
            type: "slot",
            x: 350,
            y: 255,
            size: 70
        },
        scale1: {
            type: "scale",
            bitmap: "press_scale_1",
            direction: 3,
            x: 545,
            y: 160,
            scale: 4
        },
        scale2: {
            type: "scale",
            bitmap: "fire_scale_1",
            direction: 1,
            x: 350,
            y: 160,
            scale: 4.5
        }
    }
});

MachineRecipeRegistry.registerRecipesFor("part_press", {
  265: {id: ItemID.eisenteile, count: 4},
  264: {id: ItemID.diamandteile, count: 4},
  406: {id: ItemID.quarzteile, count: 4},
  266: {id: ItemID.goldteile, count: 4},
  "ItemID.kupferbarren": {id: ItemID.kupferteile, count: 4},
  "ItemID.neon_ingot": {id: ItemID.neonteile, count: 4},
 }, true);


TileEntity.registerPrototype(BlockID.part_press, {
   useNetworkItemContainer: true,
   defaultValues: {
      burn: 0,
      burnMax: 0,
      progress: 0,
      progressMax: 100,
      isActive: false
   },

   tick: function() {
      this.container.sendChanges()
      var slot1 = this.container.getSlot("slot1");
      var slot2 = this.container.getSlot("slot2");
      var slot3 = this.container.getSlot("slot3");
      var slot4 = this.container.getSlot("slot4");
      var slot5 = this.container.getSlot("slot5");
      this.container.setScale("scale2", this.data.burn/1000);
      this.container.setScale("scale1", this.data.progress/200);
      var item1 = slot1.id
      var item2 = slot2.id
      var count1 = slot1.count
      var count2 = slot2.count
      var count3 = slot3.count
      var count4 = slot4.count
      var item3 = slot3.id
      var item4 = slot4.id
      /*let data3 = slot3.data
      let data4 = slot4.data
      let extra3 = slot3.extra
      let extra4 = slot4.extra*/
      var item5 = slot5.id
      var count5 = slot5.count

      if(this.data.burn > 0) {
         this.data.burn --;
      }

      var recipe1 = MachineRecipeRegistry.hasRecipeFor("part_press", item1);
      var recipe2 = MachineRecipeRegistry.hasRecipeFor("part_press", item2);
      if(recipe1) {
         var result1 = MachineRecipeRegistry.getRecipeResult("part_press", item1);
      }
      if(recipe2) {
         var result2 = MachineRecipeRegistry.getRecipeResult("part_press", item2);
      }
      if(recipe1 == true || recipe2 == true) {
         if(item5==263 && this.data.burn <= 0) {
            this.data.burn += 1000;
            this.container.setSlot("slot5", 263, count5 - 1, 0);
      }}
      if(this.data.burn > 0 && count3 <= 60 && count4 <= 60) {
         if(recipe1 == true || recipe2 == true) {
         this.data.progress ++;
      }}
      if(this.data.progress >= 200) {
         this.data.progress = 0;
         if (recipe1 == true) {
            if (item3 == 0 || result1.id == item3) {
               this.container.setSlot("slot1", item1, count1 - 1, 0);

               this.container.setSlot("slot3", result1.id, count3 + result1.count, 0);
         }}
         if (recipe2 == true) {
            if (item4 == 0 || result2.id == item4) {
               this.container.setSlot("slot2", item2, count2 - 1, 0);
               this.container.setSlot("slot4", result2.id, count4 + result2.count, 0);
         }}
      }
      this.container.validateAll()

   },

   getScreenName(){
return "main";
},
   getScreenByName(){
return partPressUI;
},
});







