IDRegistry.genBlockID("coal_generator"); 
Block.createBlockWithRotation("coal_generator", [
 {name: "Coal Generator", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Coal Generator", 0],["Machine Output", 0],["Machine Output", 0]], inCreative: true} 
]); 
Translation.addTranslation("Coal Generator",{
ru: "Угольный генератор"
})

TileEntity.registerPrototype(BlockID.coal_generator, {
   defaultValues: {
      burn: 0,
      burnMax: 0,
      active: false,
      energy: 0,
      energyMax: 30000,
      isActive: false
   },

   tick: function() {
      let coalSlot = this.container.getSlot("coalSlot");
      var energyStorage = this.getEnergyStorage();
      if (this.data.burn <= 0 && this.data.energy + 30 < energyStorage && (coalSlot.id == VanillaItemID.coal || coalSlot.id == VanillaItemID.charcoal || coalSlot.id == ItemID.burned_coal && coalSlot.count >= 1 && coalSlot.data == 0)) {
         coalSlot.count -= 1;
         this.container.validateSlot("coalSlot");
         this.data.burn = this.data.burnMax = 1600 / 4
      } 
      if (this.data.burn > 0 && this.data.energy + 30 < energyStorage) {
         this.data.energy += 15;
         this.data.burn--;
      }

      this.data.energy = Math.min(this.data.energy, energyStorage);

      this.container.setScale("progress_scale", this.data.energy / 30000);
      this.container.setScale("spaceJoule", this.data.energy / 30000);
      this.container.setText("EnergiA", "Sj :" + this.data.energy + " / " + this.data.energyMax);
      this.container.setScale("crashing", this.data.energy / 30000);
   },

   getGuiScreen: function() {
      return CoalEnergy;
   },

   getEnergyStorage: function() {
      return this.data.energyMax
   },

   canReceiveEnergy: function() {
      return false;
   },

   canExtractEnergy: function() {
      return true;
   },

   energyTick: function(type, src) {
      let output = Math.min(30, this.data.energy);
      this.data.energy += src.add(output) - output;
   }
});

let CoalEnergy = new UI.StandartWindow({
   standart: {
      header: {
         text: {
            text: Translation.translate("Сжигатель уголя")
         }
      },
      inventory: { standart: true },
      background: { standart: true }
   },
   drawing: [
      {
         type: "bitmap",
         x: 490,
         y: 110,
         bitmap: "arrow_bar_background",
         scale: 4.2
    },
      { type: "bitmap", x: 580, y: 110, bitmap: "generators.Crashed_1", scale: 5.0 }, { type: "bitmap", x: 760, y: 110, bitmap: "energy_small_background", scale: 5.0 }],
   elements: {
      coalSlot: {
         type: "slot",
         x: 400,
         y: 110,
         bitmap: "coalslot",
         size: 70
      },
      progress_scale: {
         type: "scale",
         x: 490,
         y: 110,
         scale: 4.2,
         direction: 0,
         bitmap: "arrow_bar_scale"
      },
      crashing: { type: "scale", x: 580, y: 110, direction: 1, bitmap: "generators.Crashed_2", scale: 5.0 },
      trash: { type: "slot", x: 670, y: 110, bitmap: "trashslot", size: 80 },
      spaceJoule: { type: "scale", x: 760, y: 110, scale: 5.0, direction: 1, bitmap: "energy_small_scale" },
      EnergiA: { type: "text", x: 400, y: 190, width: 100, height: 30, text: "Space Joule" },
   }
});
EnergyTileRegistry.addEnergyTypeForId(BlockID.coal_generator, sj);
EnergyTileRegistry.addEnergyTypeForId(BlockID.coal_generator, EU);
EnergyTileRegistry.addEnergyTypeForId(BlockID.coal_generator, RF);
/*
 #1 - slot1
 cr - crashing scale
 =» - progress scale
 $ - trashslot
 √ - spaceJoule
 -----------------
 #1 =» cr $ √
 
 
 
 ---------------
 */
/* SpacesCraft.addElectroLevel(BlockID.coal_generator)*/

/*TileEntity.registerPrototype(BlockID.coal_generator,{defaultValues: {
		progress: 0, 
   progressMax: 0,
   active: false,  
   energy: 0,
   energyMax: 1000,
	},
	isEnergySource: function() {
        return true; 
    },
    canReceiveEnergy: function(){
        return false;
    }, 
    tick: function(){
    this.data.energy += Math.min(1,this.data.energyMax - this.data.energy);
let slot1 = this.container.getSlot("slot1");
let trash = this.container.getSlot("trash");
this.container.setScale("progress_scale", this.data.energy / 1000);
  this.container.setScale("spaceJoule", this.data.energy / 1000);
       this.container.setText("EnergiA", "Sj :" + this.data.energy + " / " + this.data.energyMax);
       this.container.setScale("crashing", this.data.energy / 1000);
    },

	
	getGuiScreen: function(){
		return CoalEnergy; 
	}, 

energyTick: function(type, src) {
	let output = Math.min(2, this.data.energy)
	this.data.energy += src.add(output) - output;
     src.addAll(1)	
}, 
});*/
